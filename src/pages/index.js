import React, { Component } from 'react';
import ProductCardList from '../components/productCardList'
import { products, indexPageTitle } from "../resources/mock";

class IndexPage extends Component {
    render() {
        return (
            <div className="container">
                <section className="page-section page-section--index">
                    <div className="page-section__wrap">
                        <div className="page-section__title-wrap">
                            <h1 className="page-section__title">{indexPageTitle}</h1>
                        </div>
                        <div className="page-section__body">
                            <ProductCardList products={products} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default IndexPage;