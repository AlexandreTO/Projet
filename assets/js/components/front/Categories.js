import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        axios.get('http://localhost:8000/api/categories', {
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then( response => {
            this.setState({
                categories: response.data,
                loading: false
            })
        })
    }

    render() {
        var {categories,loading} = this.state;
        return (
            <Fragment>
                {loading ? (
                    <div className={'d-flex justify-content-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container bg-light">
                        <h1 className="d-flex justify-content-center pb-4 pt-4">Toutes nos catégories de produits</h1>
                        <div className="row">
                            {categories.map(categorie =>
                                <div className="col-md-4">
                                    <div className="card mb-4">
                                        <img src="https://via.placeholder.com/200x150" alt={categorie.title} className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{categorie.title}</h5>
                                            <p className="card-text overflow-auto" style={{height: 120 + 'px'}}>{categorie.description}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <a href={window.location.origin + `/categories/${categorie.id}/products`} className="btn btn-dark">Voir les produits de cette catégorie</a>
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

ReactDOM.render(<Categories/>,document.getElementById('categories'))

export default Categories;