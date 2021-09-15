import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UserCommands extends Component {
    constructor(){
        super();
        this.state = {
            commands: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getCommands(window.location.pathname);
    }
    getCommand(path){
        axios.get(window.location.origin + `${path}`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                commands: response.data,
                loading: false
            })
        })
    }
    
    getCommands(path) {
        var path = path.split('/');
        axios.get(window.location.origin + `/api/${path[1]}s/${path[2]}`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                commands: response.data,
                loading: false
            })
        })
    }


    render() {
        var {commands, loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'container row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Content</th>
                                <th>Status</th>
                                <th>StatusSend</th>
                                <th>DateCreation</th>
                                <th>DateSend</th>
                                <th>DateReception</th>
                                <th>DeliveryAddress</th>
                                <th>DeliveryCity</th>
                                <th>ZipCode</th>
                            </tr>
                        </thead>
                        <tbody>
                        {commands.map(command => 
                            <tr>
                                <td>{ command.id }</td>
                                
                                {command.content.map(item => 
                                    <td>{ item.product.name } { item.quantity }</td>
                                    )}

                                <td>{ command.status }</td>
                                <td>{ command.statusSend }</td>
                                <td>{ command.dateCreation ?  command.dateCreation|date('Y-m-d H:i:s') : '' }</td>
                                <td>{ command.dateSend ? command.dateSend|date('Y-m-d H:i:s') : '' }</td>
                                <td>{ command.dateReception ? command.dateReception|date('Y-m-d H:i:s') : '' }</td>
                                <td>{ command.deliveryAddress }</td>
                                <td>{ command.deliveryCity }</td>
                                <td>{ command.zipCode }</td>
                                <td>
                                    <a href={window.location.origin + `/commands/${command.id}`}>show</a>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                )}
            </Fragment>
        )
    }
}

ReactDOM.render(<UserCommands/>,document.getElementById('user_commands'));
export default UserCommands;