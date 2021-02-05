import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import Repository, { imageUrl, appid, baseUrl, serializeQuery } from '../../../repositories/RepositoryIndex';

import { addItemToWishlist } from '../../../store/wishlist/action';
import Link from 'next/link';

import { formatCurrency } from '../../../utilities/product-helper';

import LazyLoad from 'react-lazyload';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isQuickView: false,
        };
    }

    handleAddItemToCart = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItem(product));
    };



    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
        // console.log(product);
        // console.log(e);
        this.props.dispatch(addItemToWishlist(product));
    };

    handleShowQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: true });
    };

    handleHideQuickView = e => {
        e.preventDefault();
        this.setState({ isQuickView: false });
    };

    render() {
        const { product, currency } = this.props;
        let thumbnail = imageUrl+product.Image;
        // let thumbnail = baseUrl+product.Image;
        // let thumbnail = 'http://182.23.68.188:7542/ml3bu'+product.Image;
        // if (isStaticData === false) {
        //     thumbnail = `${baseUrl}${product.thumbnail.url}`;
        // } else {
        //     thumbnail = product.thumbnail.url;
        // }
        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">

                    {/* <Link href="/product/[pid]" as={`/product/name=""&code=${product.ProductCode}`}> */}
                    <Link href="/product/[pid]" as={`/product/${product.ProductCode}`}>
                        <a>
                            <LazyLoad>
                                <img className="img" src={thumbnail} alt="martfury" />
                            </LazyLoad>
                        </a>
                    </Link>
                    {product.badge ? productBadge : ''}
                    <ul className="ps-product__actions">
                        {/* <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Read More"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                <i className="icon-bag2"></i>
                            </a>
                        </li> */}

                        <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to wishlist"
                                onClick={this.handleAddItemToWishlist.bind(
                                    this
                                )}>
                                <i className="icon-heart"></i>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="ps-product__container">
                    <Link href="#">
                        <a className="ps-product__vendor">{product.Brand}</a>
                    </Link>
                    <div className="ps-product__content">
                            {product.SellPrice === 0 ? (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.LowPrice)}&nbsp; - &nbsp;
                                <a className="ml-1">
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.HighPrice)}
                                </a>
                            </p>
                            ) : (
                            <p className="ps-product__price">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.SellPrice)}
                            </p>
                            )}
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.ProductCode}`}>
                            {/* as={`/product/name=${product.Title}&code=${product.ProductCode}`}> */}
                            <a className="ps-product__title">{product.Title}</a>
                        </Link>

                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(Product);
