import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';
import Link from 'next/link';
import { Modal } from 'antd';
import ProductDetailQuickView from '../detail/ProductDetailQuickView';
// import Rating from '../Rating';
import { imageUrl } from '../../../repositories/RepositoryIndex';
import { formatCurrency } from '../../../utilities/product-helper';
import PlaceholderComponent from '../../Placeholder';
// import { isStaticData } from '../../../utilities/app-settings';
// import { getProductsByName } from '../../../store/productDL/action';
import LazyLoad from 'react-lazyload';
class ProductDetailBottom extends Component {
    constructor(props) {
        super(props);
        const { product } = this.props;
        this.state = {
            // isQuickView: false,
            isQuickView: {[product.ProductCode]:false}
        };
    }

    handleAddItemToCart = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItem(product));
    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
        // console.log(e);
        // console.log(product);
        this.props.dispatch(addItemToWishlist(product));
    };

    handleShowQuickView = e => {
        e.preventDefault();
        const { product } = this.props;
        this.setState({ isQuickView: {[product.ProductCode]:true} });
        console.log(JSON.stringify(this.state.isQuickView));
        console.log(this.state.isQuickView[product.ProductCode]);
    };

    handleHideQuickView = e => {
        e.preventDefault();
        const { product } = this.props;
        this.setState({ isQuickView: {[product.ProductCode]:false} });
        // console.log(JSON.stringify(this.state.isQuickView));
        // console.log(this.state.isQuickView[product.ProductCode]);

    };

    render() {
        const { product, currency } = this.props;
        let thumbnail = imageUrl+product.Image;
        const url = 'name=""&code='+product.ProductCode;
        // console.log(url);
        return (
            <div className="ps-product-mini-detail ps-product--inner">
                <div className="ps-product__thumbnail">
                    {/* <Link href="/product/[pid]" as={`/product/${product.ProductId}&${product.Title}&${product.ProductCode}`}> */}
                    {/* <Link   
                                  href={{
                                    pathname: '/product/',
                                    query: { 
                                        name: "",
                                        code: product.ProductCode },
                                  }}
                    
                    > */}
                    <Link href="/product/[pid]" as={`/product/${product.ProductCode}`}>
                    {/*  */}
                                        {/* <Link href="/product/[pid]" as={`/product/name=""&code=${product.ProductCode}`}> */}
                        <a target="_blank">

                            <LazyLoad placeholder={<PlaceholderComponent />}>
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
                        {/* <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                                onClick={this.handleShowQuickView.bind(this)}>
                                <i className="icon-eye"></i>
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
                        {/* <li>
                            <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                                onClick={this.handleAddItemToCompare.bind(
                                    this
                                )}>
                                <i className="icon-chart-bars"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div className="ps-product__container">
                    <Link href="#">
                        <a className="ps-product__vendor">{product.Brand}</a>
                    </Link>
                    <div className="ps-product__content">
                        {product.LowPrice == product.HighPrice ? (

                                                        <p className="ps-product__price">
                                                        {currency ? currency.symbol : '$'}
                                                        {formatCurrency(product.HighPrice)}
                                                    </p>
                        ) : (
                            <p className="ps-product__price sale">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.LowPrice)}&nbsp; - &nbsp;
                                {/* <a className="ml-1"> */}
                                    {currency ? currency.symbol : '$'}
                                    {formatCurrency(product.HighPrice)}
                                {/* </a> */}
                            </p>
                        )}
                        {/* <Link href="/product/[pid]" as={`/product/${product.ProductCode}`}></Link> */}
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.ProductCode}`}>
                            <a className="ps-product__title" target="_blank">{product.Title}</a>
                        </Link>

                        {/* <div className="ps-product__rating">
                            <Rating />
                            <span>{product.ratingCount}</span>
                        </div> */}
                        <div
                            className="ps-product__progress-bar ps-progress"
                            data-value={product.TotalStock}>
                            {/* <div className="ps-progress__value">
                                {( product.TotalStock) <
                                100 ? (
                                    <span
                                        style={{
                                            width:
                                                (
                                                    product.TotalStock) 
                                                     +
                                                '%',
                                        }}></span>
                                ) : (
                                    <span style={{ width: '100%' }}></span>
                                )}
                            </div> */}
                            { product.TotalStock >= 0 ? (
                                <p>Stoct: { product.TotalStock}</p>
                            ) : (
                                <p>Stoct: {product.TotalStock}</p>
                            )}
                        </div>
                    </div>
                </div>
                <Modal
                    title={product.ProductCode}
                    centered
                    footer={null}
                    width={1024}
                    onCancel={this.handleHideQuickView}
                    visible={this.state.isQuickView[product.ProductCode]}>
                    <ProductDetailQuickView product={product} />
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductDetailBottom);
