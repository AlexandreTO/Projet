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
            category: {
                id: null,
                title: "",
                description: "",
                status: "",
                date_creation: "",
                date_modification: "",
                name_image: "",
            },
            loading: true
        }
    }

    componentDidMount() {
        this.getProduct(window.location.pathname);
    }

    getProduct(path) {
        var path = path.split('/');
        axios.get(window.location.origin + `/api/${path[2]}/${path[3]}`, {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(
             response => {
                this.setState({
                    product: response.data,
                })
                axios.get(window.location.origin + `${response.data.categorie}`, {
                    headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then( response => {
                    this.setState({
                        category: response.data,
                        loading: false
                    })
                })
            },
        )
    }
   

    render() {
        var {product,category,loading} = this.state;
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
                                <b>Catégorie : {category.title}</b>
                                <hr/>
                                <b>Quantité: </b>
                                {product.quantite}
                                <hr/>
                                <b>Description:</b>
                                {product.description}
                                <hr/>
                                <div class="row">
                                    <form method="post" action={window.location.origin + `/back/delete-product/${product.id}`} onClick={() => window.confirm('Etes-vous sûr de vouloir supprimer ce produit?')}>
                                        <button className="btn btn-danger">Supprimer</button>
                                    </form>
                                    <a href={window.location.origin + `/back/update-product/${product.id}`} className="btn btn-primary">Modifier</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

ReactDOM.render(<ProductsView/>, document.getElementById('back_product_view'));

export default ProductsView;