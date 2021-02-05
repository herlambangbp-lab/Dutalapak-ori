import React, { Component } from 'react';
import { connect } from 'react-redux';

import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductBestSeller';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class HomeTerakhirDilihat extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-deal-of-day">
                <div className="container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Terakhir Dilihat</h3>
                            </div>

                        </div>

                    </div>
                    <div className="ps-section__content">
                    {products.length>1?
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {products.map(product => (

                                <ProductDealOfDay
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
        );
    }
}
const mapStateToProps = (state) => {
    return state.collectionDL;
};

export default connect(mapStateToProps)(HomeTerakhirDilihat);
// export default connect(state => state.collection)(HomeTerakhirDilihat);
