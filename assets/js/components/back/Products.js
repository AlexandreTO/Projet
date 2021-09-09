import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Products extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    getProducts() {
        axios.get(window.location.origin +'/api/products', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                products: response.data,
                loading: false
            })
        })
    }

    render() {
        var {products,loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'container row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container">
                        <h1 className="mt-3 mb-4">Gestion des produits</h1>
                        <a href={window.location.origin + `/back/add-product`} className="btn btn-dark">Ajouter un produit</a>
                        <div className="row">
                            {products.map(product =>
                                <div className="col-md-4" key={product.id}>
                                    <div className="card mb-4">
                                        <img src="https://via.placeholder.com/200x150" alt="{{ product.name }}" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <a href={window.location.origin + `/back/products/${product.id}`} className="btn btn-dark">View details</a>
                                                <span className="h5 mt-auto">{product.prix}
                                                    €</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

ReactDOM.render(<Products/>,document.getElementById('back_products'))

export default Products;