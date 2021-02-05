import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
// import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import ProductBestSeller from '../../../elements/products/ProductBestSeller';
import { carouselStandard, carouselBestSell } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class HomeDealOfDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        // console.log(this.props);

        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        // console.log(products.length);

        return (
            <div className="ps-terlaris">
                <div className="container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Promo Super Deals</h3>
                            </div>
                            <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2020, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure>
                            </div>
                        </div>
                        <Link href="/shop/[list]" as={`/shop/ProductList`}>
                            <a>Lihat Semua Super Deals</a>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="img-banner col-sm-2 d-none d-md-block"><img src="/static/img/bgpromsvg.svg" ></img></div>
                        
                        <div className="col-sm-10 ">
                        <div className="ps-section__content">
                        {products.length>1?
                        <Slider
                            {...carouselBestSell}
                            className="ps-carousel outside">
                            {products.map(product => (

                                <ProductBestSeller
                                    product={product}
                                    key={product.Title}
                                    
                                />
                            ))}
                        </Slider>
                        :                        
                            <img className="img-loading" src="/static/img/loading-dl.svg" />
                        }

                    </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.collectionDL;
};

export default connect(mapStateToProps)(HomeDealOfDay);
// export default connect(state => state.collection)(HomeDealOfDay);
