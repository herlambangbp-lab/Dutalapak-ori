import React, { Component } from 'react';
import Link from 'next/link';
// import { Rate } from 'antd';
import { connect } from 'react-redux';
// import Rating from '../Rating';
import { formatCurrency } from '../../../utilities/product-helper';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl, imageUrl } from '../../../repositories/RepositoryIndex';
// import Repository, { imageUrl, appid, baseUrl, serializeQuery } from '../../../repositories/RepositoryIndex';


class ProductResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;
        let thumbnail = imageUrl+product.Image;
        return (
            <div className="ps-product-search-show ps-product--wide ps-product--search-result">
                  {/* <LazyLoad> */}
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.ProductCode}`}>
                        <a target="_blank">
                          
                                <img className="img-list" src={isStaticData === true ? thumbnail : `${thumbnail}`} alt="martfury" />
                            {/* </LazyLoad> */}
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link
                            href="/product/[pid]"
                            as={`/product/${product.ProductCode}`}>
                        <a className="ps-product__title" target="_blank">{product.Title}</a>
                    </Link>
                    {/* <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div> */}
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
                </div>
                {/* </LazyLoad> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductResult);
