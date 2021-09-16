import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ProductsView extends Component {
    constructor(){
        super();
        this.state = {
            product: {
                id: null,
                name: "",
                description: "",
                categorie_id: "",
                code_promo_id: "",
                prix: "",
                image: "",
                promo: "",
                status: "",
                quantite: "",
                slug: "",
                date_creation: "",
                date_modification: "",
            },
            loading: true
        }
    }

    componentDidMount() {
        this.getProduct(window.location.pathname);
    }

    getProduct(path) {
        console.log(path);

        axios.get(window.location.origin + `/api${path}`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                product: response.data,
                loading: false
            })
        })
    }
    
    render() {
        var {product,loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'d-flex justify-content-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container bg-light">
                        <div className="row mt-3 mb-4">
                            <div className="col-md-4">
                                <img src="https://via.placeholder.com/600x400" alt={product.name} className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <h1 className="mt-4 mt-md-0">{product.name}</h1>
                                <h2>{product.prix}€</h2>
                                <hr/>
                                <b>Description:</b> <p>{product.description}</p>
                                <b>Quantité restante :</b><p>{product.quantite}</p>
                                {product.quantite !== 0 &&
                                  <form className="mt-4 p-4 bg-light" method="post">
                                    <a className="btn btn-info" href={window.location.origin + `/cart/add/${product.id}`}>Ajouter ce produit au panier</a>
                                  </form>
                                }
                                {product.quantite == 0 &&   
                                    <h1>Produit indisponible</h1>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

ReactDOM.render(<ProductsView/>, document.getElementById('product_view'));

export default ProductsView;