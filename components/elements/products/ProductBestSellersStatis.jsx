import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';
import Link from 'next/link';
// import { Modal } from 'antd';
import ProductDetailQuickView from '../detail/ProductDetailQuickView';
// import Rating from '../Rating';
import { baseUrl, imageUrl, staticUrl } from '../../../repositories/RepositoryIndex';
import { formatCurrency } from '../../../utilities/product-helper';
import PlaceholderComponent from '../../Placeholder';
// import { isStaticData } from '../../../utilities/app-settings';
import LazyLoad from 'react-lazyload';
class ProductBestSellersStatis extends Component {
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

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
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
        // console.log(this.props);
        console.log('bsp');
        // let productBadge = null;
        // if (product.badge && product.badge !== null) {
        //     product.badge.map(badge => {
        //         if (badge.type === 'sale') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge">{badge.value}</div>
        //             ));
        //         } else if (badge.type === 'outStock') {
        //             return (productBadge = (
        //                 <div className="ps-product__badge out-stock">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         } else {
        //             return (productBadge = (
        //                 <div className="ps-product__badge hot">
        //                     {badge.value}
        //                 </div>
        //             ));
        //         }
        //     });
        // }
        // let thumbnail = baseUrl+product.Image;
        // if (product.) {
            
        // }
        // console.log(product);
        let thumbnail = staticUrl+product.Image;
        // if (isStaticData === false) {
        //     thumbnail = `${baseUrl}${product.thumbnail.url}`;
        // } else {
        //     thumbnail = product.thumbnail.url;
        // }
        return (
            <div className="ps-product ps-product--inner">
                <div className="ps-product__thumbnail">
                    {/* <Link href="/product/[pid]" as={`/product/${product.ProductId}&${product.Title}&${product.ProductCode}`}> */}
                    <Link href="#" >
                        <a>
                        {/* <LazyLoad once={el.once} key={index} height={200} offset={[-200, 0]}
                                placeholder={<PlaceholderComponent />} debounce={500}>
                                <Widget once={el.once} id={el.uniqueId} count={index + 1} />
                        </LazyLoad> */}
                            <LazyLoad placeholder={<PlaceholderComponent />}>
                                <img src={thumbnail} alt="martfury" />
                            </LazyLoad>
                        </a>
                    </Link>

                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductBestSellersStatis);
