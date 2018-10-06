import React, { Component } from 'react'
import './index.css'
import * as classNames from 'classnames'
import { declOfNum } from "../../utils"

class ProductCard extends Component {
    constructor(props) {
        super(props);

        const { inStock } = this.props;
        this.state = {
            selected: false,
            selectedHoverPrevent: false,
            inStock
        };
    }
    render() {
        const cardClass = classNames({
            'product-card': true,
            'product-card--selected': this.state.selected,
            'hover-prevent': this.state.selectedHoverPrevent,
            'product-card--disabled': !this.state.inStock
        });
        const portionsTitle = this.props.portions && declOfNum(this.props.portions, ['порция', 'порции', 'порций']);
        const mousesTitle = this.props.mouses && declOfNum(this.props.mouses, ['мышь', 'мыши', 'мышей']);
        const weightFormatted = this.props.weight.toString().replace('.', ',');
        const img = require('../../images/kotik.png');
        const fromHoverText = 'Котэ не одобряет?';

        return (
            <div className={cardClass} onMouseLeave={()=> this.handleLeave()}>
                <div className="product-card__wrap" onClick={() => this.handleClick()}>
                    <svg className="product-card__back product-card__back--bg" preserveAspectRatio="none"  viewBox="-4 -4 328 488">
                        <path d="M308,480H12A12,12,0,0,1,0,468V43L43,0H308a12,12,0,0,1,12,12V468A12,12,0,0,1,308,480Z"/>
                    </svg>
                    <svg className="product-card__back product-card__back--border" preserveAspectRatio="none"  viewBox="-4 -4 328 488">
                        <path d="M308,480H12A12,12,0,0,1,0,468V43L43,0H308a12,12,0,0,1,12,12V468A12,12,0,0,1,308,480Z"/>
                    </svg>
                    <div className="product-card__info">
                        <div className="product-card__from">
                            <div className="product-card__from-default">{this.props.from}</div>
                            <div className="product-card__from-hovered">{fromHoverText}</div>
                        </div>
                        <div className="product-card__title">
                            {this.props.name}
                        </div>
                        <div className="product-card__subtitle">
                            {this.props.type}
                        </div>
                        <div className="product-card__params">
                            {this.props.portions && (
                                <div className="product-card__param">
                                    <span className="product-card__param-val">{this.props.portions} </span>
                                    <span className="product-card__param-label">{portionsTitle}</span>
                                </div>
                            )}
                            {this.props.mouses && (
                                <div className="product-card__param">
                                    <span className="product-card__param-val">{this.props.mouses > 1 ? this.props.mouses : ''} </span>
                                    <span className="product-card__param-label">{mousesTitle} в подарок</span>
                                </div>
                            )}
                            {this.props.isClientHappy && (
                                <div className="product-card__param">
                                    <span className="product-card__param-label">заказчик доволен</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="product-card__image-wrap">

                        <img src={img} className="product-card__image"/>

                        <div className="product-card__weight">
                            <div className="product-card__weight-val">{weightFormatted}</div>
                            <div className="product-card__weight-title">кг</div>
                        </div>
                    </div>
                </div>
                <div className="product-card__bottom">
                    {!this.state.selected && this.state.inStock && (
                        <span>Чего сидишь? Порадуй котэ, <a className="product-card__buy-link" onClick={() => this.handleClick()}>купи</a>.</span>
                    )}
                    {this.state.selected && this.state.inStock && (
                        <span>{this.props.selectedText}</span>
                    )}
                    {!this.state.inStock && (
                        <span>Печалька, {this.props.type} закончился</span>
                    )}
                </div>
            </div>
        );
    }
    handleClick() {
        this.setState({
            selected: !this.state.selected,
            selectedHoverPrevent: !this.state.selected
        })
    }
    handleLeave() {
        this.setState({
            selectedHoverPrevent: false
        })
    }
}

export default ProductCard;
