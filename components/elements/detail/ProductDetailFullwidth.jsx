import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailExtended';
import InformationDefault from './modules/information/InformationDefault';
// import DefaultDescription from './modules/description/DefaultDescription';
import ProductDescFullwidth from '../../../components/elements/detail/ProductDescFullwidth';
import Slider from 'react-slick';
import { carouselStandard } from '../../../utilities/carousel-helpers';
import { getProductsByDetail } from '../../../store/productDL/action';

import  ProductMini  from '../../elements/products/ProductMini';
import ProductBestSeller from '../../elements/products/ProductBestSeller';

class ProductDetailFullwidth extends Component {
    constructor(props) {
        super(props);
    }
    
    // static getDerivedStateFromProps(props) {
    //     // console.log(props);
    //     if (props.Detail != null) {
    //         // console.log(props.Detail);
    //         props.dispatch(getProductsByKeyword(props.Detail.BreadCrumb[0].substring(3)));
    //         // props.dispatch()

    //     }
    //     return false;
    // }
    componentDidMount(){
        if (this.props.Detail != null) {
            // console.log(props.Detail);
            this.props.dispatch(getProductsByDetail(this.props.Detail.BreadCrumb[0].substring(0, 1)));
            // props.dispatch()

        } else {
            this.props.dispatch(getProductsByDetail('h'));
        }
        // return false;
    }
    
    render() {
        const { Detail, code, searchResultsForDetail } = this.props;
        console.log(this.props);
        
        
        if ( Detail !== null && typeof Detail !== 'Array') {
            // console.log();
            // if (searchResultsForDetail == null ) {
            //     const dataKanan = searchResultsForDetail.slice(0, 3);
            // }
            // const dataKanan = searchResults.slice(0, 3);
            // console.log(dataKanan);
            return (
                <div className="ps-page__container ">

                    <div className="ps-page__left">
                        <div className="ps-product--detail ">
                                {/* <h1>ini detail</h1> */}
                                <div className="ps-product__header">
                                    <ThumbnailDefault product={Detail} />
                                    {/* <ThumbnailDefault product={Detail} /> */}
                                    <InformationDefault product={Detail} codes={code}/>
                                
                                </div>
                                
                        </div>
                        <ProductDescFullwidth Detail={Detail} code={code}/>

                        <h3 className="">Terakhir Dilihat</h3>
                    </div>    
                    
                    <div className="ps-page__right">
                        
                            <div className="ps-product-for-detail">
                            <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                            <p className="title">
                                                                    Produk Terkait
                                                                </p>
                                    {searchResultsForDetail!=null?
                                                                    
                                    searchResultsForDetail.slice(10, 13).map(item => (
                                        <ProductMini
                                        product={item}
                                        key={item.Title}
                                                                
                                        />
                                        // <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                                    )) 

                                        
                                    :
                                        
                                    <img className="img-loading" src="/static/img/loading-dl.svg" />
                                    
                                    }
                                    {/* <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                                    <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                                    <img className="img-banner" src="/static/img/ongkir.svg" alt=""/> */}
                            
                                {/* <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                                <img className="img-banner" src="/static/img/ongkir.svg" alt=""/>
                                <img className="img-banner" src="/static/img/ongkir.svg" alt=""/> */}
                            </div>
                                    {/* <img src="/static/img/ongkir.svg" alt=""/>
                                    <img src="/static/img/ongkir.svg" alt=""/>
                                    <img src="/static/img/ongkir.svg" alt=""/> */}

                    </div>
                    
                </div>
            );
        } else {
            return (
                <div className="ps-product--detail ">

                    <img className="img-loading" src="/static/img/loading-dl.svg" />
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return state.productDL;
};

// export default ProductDetailFullwidth;

export default connect(mapStateToProps)(ProductDetailFullwidth);
