import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Users extends Component {
    constructor(){
        super();
        this.handleOnClick = this.handleOnClick.bind(this);
        this.state = {
            users: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getUsers();
    }
    
    getUsers() {
        axios.get(`http://localhost:8000/api/users`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                users: response.data,
                loading: false
            })
        })
    }

    handleOnClick(id) {
        if(confirm("Are you sure you want to delete this user?")){
            axios.delete(`http://localhost:8000/back/delete-user/${id}`);
        }
    }


    render() {
        var {users, loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div>
                        <a href={`http://localhost:8000/back/users/add`} className="btn btn-dark">Ajouter un utilisateur</a>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Téléphone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => 
                                    <tr key={user.id}>
                                        <td>{user.lastName}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td><a href={`http://localhost:8000/back/update-user/${user.id}`} className=" btn btn-primary">Modifier</a></td>
                                        <td>
                                            <button className="btn btn-danger" onClick={this.handleOnClick(user.id)}>Supprimer</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </Fragment>
        )
    }
}

ReactDOM.render(<Users/>, document.getElementById('back_users'));
export default Users;