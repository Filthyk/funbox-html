import React, { Component } from 'react'
import './index.css'
import ProductCard from '../productCard'

class ProductCardList extends Component {
    render() {
        const { products } = this.props;

        return (
            <div className="products-list">
                <div className="products-list__wrap">
                    {products.map((product, index) =>
                        (
                            <div className="products-list__item"  key={index}>
                                <ProductCard {...product} />
                            </div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default ProductCardList;