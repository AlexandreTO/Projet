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
        axios.get(window.location.origin + `/api/users`, {
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

    handleOnClick(e, id) {
        e.preventDefault();
        var confirm = window.confirm("Are you sure you want to delete this user?")
        if (confirm){
            axios.delete(window.location.origin + `/back/delete-user/${id}`);
        }
    }


    render() {
        var {users, loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'container row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container">
                        <h1>Gestion des utilisateurs </h1>
                        <a href={window.location.origin + `/back/users/add`} className="btn btn-dark">Ajouter un utilisateur</a>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Email</th>
                                    <th>Rôle</th>
                                    <th>Téléphone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => 
                                    <tr key={user.id}>
                                        <td>{user.lastName}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roles}</td>
                                        <td>{user.phone}</td>
                                        <td><a href={window.location.origin + `/back/update-user/${user.id}`} className=" btn btn-primary">Modifier</a></td>
                                        <td>  
                                            {user.roles == 'ROLE_USER' &&
                                                 <a href={window.location.origin + `/back/up-to-admin/${user.id}`} className=" btn btn-primary">Passer en admin</a>
                                            }
                                            {user.roles != 'ROLE_USER' &&
                                                 <a href={window.location.origin + `/back/pass-to-user/${user.id}`} className=" btn btn-primary">Passer en user</a>
                                            }
                                        </td>
                                        <td>
                                            <a className="btn btn-danger" onClick={e => this.handleOnClick(e, user.id)}>Supprimer</a>
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