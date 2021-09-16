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
        var confirm = window.confirm("Etes-vous sûr de vouloir supprimer cet utilisateur?")
        if (confirm){
            axios.delete(window.location.origin + `/back/delete-user/${id}`)
            .then(response => {
                window.location.reload();
            });
        }
    }


    render() {
        var {users, loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'d-flex justify-content-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <Fragment>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Rôle</th>
                                <th>Téléphone</th>
                                <th>Adresse</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => 
                                <tr key={user.id}>
                                    <td>{user.lastName}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roles[0]}</td> 
                                    <td>{user.phone}</td>
                                    <td>{user.address}, {user.city}, {user.zipcode}</td> 
                                    <td>
                                        <a href={window.location.origin + `/back/update-user/${user.id}`} className=" btn btn-primary">
                                            <i className="fas fa-pen"></i>
                                        </a>
                                        {user.roles == 'ROLE_USER' &&
                                            <a href={window.location.origin + `/back/up-to-admin/${user.id}`} className=" btn btn-primary">Passer en admin</a>
                                        }
                                        {user.roles != 'ROLE_USER' &&
                                            <a href={window.location.origin + `/back/pass-to-user/${user.id}`} className=" btn btn-primary">Passer en user</a>
                                        }
                                        <a className="btn btn-danger" onClick={e => this.handleOnClick(e, user.id)}><i className="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Fragment>
                )}
            </Fragment>
        )
    }
}

ReactDOM.render(<Users/>, document.getElementById('back_users'));
export default Users;