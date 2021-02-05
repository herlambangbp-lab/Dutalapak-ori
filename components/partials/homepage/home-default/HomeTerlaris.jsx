import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductBestSeller from '../../../elements/products/ProductBestSeller';
// import ProductBestSeller from '../../../elements/products/ProductBestSellersStatis';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import ProductBestSellersStatis from '../../../elements/products/ProductBestSellersStatis';

class HomeTerlaris extends Component {
    constructor(props) {
    super(props);
    }
    render() {
        const { collections, collectionSlug } = this.props;

        const products = getColletionBySlug(collections, collectionSlug);
        // console.log(products.length);

        return (
            <div className="ps-deal-of-day">
                <div className="container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Terlaris</h3>
                            </div>

                        </div>
                        <Link href="/shop/[list]" as={`/shop/ProductBestSeller`}>
                            <a>Lihat Semua </a>
                        </Link>
                    </div>
                    <div className="ps-section__content">
                        {products.length>1?
                            <Slider
                            {...carouselStandard}
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
        );
    }
}
const mapStateToProps = (state) => {
    return state.collectionDL;
};
export default connect(mapStateToProps)(HomeTerlaris);
