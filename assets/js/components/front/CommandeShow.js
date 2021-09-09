import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class CommandeShow extends Component {
    constructor(){
        super();
        this.state = {
            commande:  {
                id: null,
                user_id: "",
                content: "",
                status: "",
                status_send: "",
                date_creation: "",
                date_send: "",
                date_reception: "",
                delivery_adress: "",
                delivery_city: "",
                zip_code: "",
            },
            loading: true
        }
    }

    componentDidMount() {
        console.log('fuck');
        this.getCommande(window.location.pathname);
    }

    getCommande(path) {
        var path = path.split('/');
        path[1] = path[1].slice(0, -1);
        axios.get(`http://localhost:8000/api/${path[1]}es/${path[2]}`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            console.log(response.data);
            this.setState({
                commande: response.data,
                loading: false
            })
        })
    }

    render() {
        var {commande} = this.state;
        console.log(commande);
        return (
            <table className="table">
                <tbody>
                    <tr>
                        <th>Id</th>
                        <td>{commande.id}</td>
                    </tr>
                    <tr>
                        <th>Content</th>
                       
                    </tr>
                    
                    <tr>
                        <th>Status</th>
                        <td>{commande.status}</td>
                    </tr>
                    <tr>
                        <th>StatusSend</th>
                        <td>{commande.statusSend}</td>
                    </tr>
                    <tr>
                        <th>DateCreation</th>
                        <td>{commande.dateCreation ? commande.dateCreation|date('Y-m-d H:i:s') : ''}</td>
                    </tr>
                    <tr>
                        <th>DateSend</th>
                        <td>{commande.dateSend ? commande.dateSend|date('Y-m-d H:i:s') : ''}</td>
                    </tr>
                    <tr>
                        <th>DateReception</th>
                        <td>{commande.dateReception ? commande.dateReception|date('Y-m-d H:i:s') : ''}</td>
                    </tr>
                    <tr>
                        <th>DeliveryAddress</th>
                        <td>{commande.deliveryAddress}</td>
                    </tr>
                    <tr>
                        <th>DeliveryCity</th>
                        <td>{commande.deliveryCity}</td>
                    </tr>
                    <tr>
                        <th>ZipCode</th>
                        <td>{commande.zipCode}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(<CommandeShow/>, document.getElementById('commande_show'))
export default CommandeShow;