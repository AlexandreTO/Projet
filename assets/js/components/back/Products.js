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
                    <div className={'d-flex justify-content-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container bg-light">
                        <h1 className="text-center pt-2 pb-2">Gestion des produits</h1>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <a href={window.location.origin + `/back/add-product`} className="btn btn-primary">Ajouter un produit</a>
                            <a href={window.location.origin + `/back/add_promotions`} className="btn btn-primary">Ajouter une promotion</a>
                        </div>
                        
                        <div className="row mt-2">
                            {products.map(product =>
                                <div className="col-md-4" key={product.id}>
                                    <div className="card mb-4">
                                        <img src="https://via.placeholder.com/200x150" alt="{{ product.name }}" className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text overflow-auto" style={{height: 120 + 'px'}}>{product.description}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <a href={window.location.origin + `/back/products/${product.id}`} className="btn btn-dark">Plus d'infos</a>
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