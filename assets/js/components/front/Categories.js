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
        console.log(categories);
        return (
            <Fragment>
                {loading ? (
                    <div className={'container row text-center'}>
                        <span className="fa fa-spin fa-spinner fa-4x"></span>
                    </div>
                ) : (
                    <div className="container">
                        <h1 className="mt-3 mb-4">Catégories de produits</h1>
                        <div className="row">
                            {categories.map(categorie =>
                                <div className="col-md-4" key={categorie.id}>
                                    <div className="card mb-4">
                                    <img src={`/images/products/${categorie.nameImage}`} alt="card-img-top"/> 
                                        <div className="card-body">
                                            <h5 className="card-title">{categorie.title}</h5>
                                            <p className="card-text">{categorie.description}</p>
                                            <div className="d-flex justify-content-between align-item-center">
                                                <a href={window.location.origin + `/categories/${categorie.id}/products`} className="btn btn-dark">View details</a>
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