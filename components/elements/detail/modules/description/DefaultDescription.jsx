import React, { Component } from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

// import PartialDescription from './PartialDescription';
// import PartialSpecification from './PartialSpecification';
// import PartialVendor from './PartialVendor';
import PartialReview from './PartialReview';
// import PartialOffer from './PartialOffer';

class DefaultDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props);
        const { product  } = this.props;
        // console.log();
        
        // console.log(product);
        // const Merek = product.ProductBrand;

        
        // console.log(Merek);
// console.log(product.ProductDescription);
        return (
            <div>
                <div className="ps-product__content ps-tab-root">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Specification" key="1">

                                <div className="table-responsive">

                                <table className="table table-bordered ps-table ps-table--specification">
                                    <tbody>
                                        <tr>
                                            <td>Merek</td>
                                            <td>{product.ProductBrand}</td>
                                        </tr>
                                        <tr>
                                            <td>Asal Produk</td>
                                            <td>{product.ProductSource}</td>
                                        </tr>
                                        <tr>
                                            <td>kondisi barang</td>
                                            <td>{product.ProductCondition}</td>
                                        </tr>
                                        <tr>
                                            <td>Product Keyword</td>
                                            <td>{product.ProductKeyword}</td>
                                        </tr>
                                        <tr>
                                            <td>Garansi</td>
                                            <td>Tidak</td>
                                        </tr>
                                        <tr>
                                            <td>Berat</td>
                                            <td>{product.ProductWeight}{product.ProductUnitWeight}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPane>
                        <TabPane tab="Informasi" key="2">
                        <div dangerouslySetInnerHTML={{__html:product.ProductDescription}}></div>
                  

                        </TabPane>
                        <TabPane tab="Reviews (1)" key="4">
                            <PartialReview />
                        </TabPane>

                        {/* <TabPane tab="Reviews (1)" key="4">
                            <PartialReview />
                        </TabPane> */}

                    </Tabs>
                </div>
                {product.BreadCrumb.length>1? 
                    <div className="keyword-product">
                            <p className="title-key">Kata Kunci</p>
                            {product.BreadCrumb.map(list => (
                                <ul className="ul" >
                                    <li className="li ">
                                        {list}
                                    </li>
                                </ul>

                            ))}
                        </div> : <h1>not fon</h1>
                }

            </div>
        );
    }
}


export default DefaultDescription;
