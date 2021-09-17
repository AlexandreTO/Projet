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
        this.getProducts(window.location.pathname);
    }

    getProducts(path) {
        var path = path.split('/');
        path[1] = path[1].slice(0, -1);
        axios.get('http://localhost:8000/api/products', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            const filteredProducts = response.data.filter(product => product.categorie == '/api/categories/' + path[2] )
            this.setState({
                products: filteredProducts,
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
                        <h1 className="d-flex justify-content-center pb-4 pt-4">Les produits de cette catégorie</h1>
                        <div className="row">
                            {products.map(product =>
                                <div className="col-md-4">
                                    < div className="card mb-4">
                                        {/* Show image */}
                                        <img src={`/images/products/${product.image}`} alt="card-img-top"/> 
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text overflow-auto" style={{height: 120 + 'px'}}>{product.description}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <a href={window.location.origin + `/products/${product.id}`} className="btn btn-dark">Plus d'infos</a>
                                                <span className="h5 mt-auto">{product.prix}€</span>
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

ReactDOM.render(<Products/>,document.getElementById('products'))

export default Products;