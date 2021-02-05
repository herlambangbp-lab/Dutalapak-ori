import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbnailDefault from './modules/thumbnail/ThumbnailExtended';
import InformationDefault from './modules/information/InformationDefault';
import DefaultDescription from './modules/description/DefaultDescription';

class ProductDescFullwidth extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { Detail, code } = this.props;
        // console.log(this.props);
        
        if ( Detail !== null && typeof Detail !== 'Array') {
            return (
                <div className="ps-product--detail ">
                    {/* <h1>ini detail</h1> */}
                    <div className="ps-product__header">
                    <DefaultDescription product={Detail}/> 
                        {/* <ThumbnailDefault product={Detail} /> */}
                        {/* <ThumbnailDefault product={Detail} /> */}
                        {/* <InformationDefault product={Detail} codes={code}/> */}
                        
                    </div>
                     
                </div>
            );
        } else {
            return (
                <div className="ps-product--detail ">

                   <a className="text-white">.</a>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return state.product;
};

// export default ProductDetailFullwidth;

export default connect(mapStateToProps)(ProductDescFullwidth);
