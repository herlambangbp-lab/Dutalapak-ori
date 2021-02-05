import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailQuickView from './modules/thumbnail/ThumbnailQuickView';
import InformationQuickView from './modules/information/InformationQuickView';
import { getProductsByName } from '../../../store/productDL/action';

class ProductDetailQuickView extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // console.log(this.props);
        const products = this.props.product;
        this.props.dispatch(getProductsByName(products.ProductCode));
        // const products = this.props.product;
        
        // console.log(this.props);
        // const { pid, code } = this.props.query;
        // const { query } = this.props;
        // console.log(this.props);

        // if (query) {
        //     const codes = pid.split('&code=')[1];
        //     this.props.dispatch(getProductsByName(codes));
        //     console.log(this.props.dispatch(getProductsByName(codes)));

            
        // }

    }
    render(){
        const products = this.props.singleProduct;
        return products!==null? (
            <div className="ps-product--detail ps-product--quickview">
                <div className="ps-product__header">
                    <h1>{products.ProductName}</h1>
                    {/* <ThumbnailQuickView product={product} />
                    <InformationQuickView product={product} /> */}
                </div>
            </div>
        ):(
            <div className="ps-product--detail ps-product--quickview">
                <div className="ps-product__header">
                    <h1>loading</h1>
                    {/* <ThumbnailQuickView product={product} />
                    <InformationQuickView product={product} /> */}
                </div>
            </div>
        )
    }
}
// const ProductDetailQuickView = ({ product }) => (
//     // console.log(product);
//     <div className="ps-product--detail ps-product--quickview">
//         <div className="ps-product__header">
//             <ThumbnailQuickView product={product} />
//             <InformationQuickView product={product} />
//         </div>
//     </div>
// );

// export default ProductDetailQuickView;
const mapStateToProps = (state) => {
    return state.productDL;
};

export default connect(mapStateToProps)(ProductDetailQuickView);