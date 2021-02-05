import React from 'react';
import { connect } from 'react-redux';
// import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterFullwidth';
import Newletters from '../../components/partials/commons/NewlettersDL';
// import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
// import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getProductsByName } from '../../store/productDL/action';
import HeaderProduct from '../../components/shared/headers/Header';
import ProductDetailBottom from '../../components/elements/products/ProductDetailBottom';
import { carouselDetailFull } from '../../utilities/carousel-helpers';
import Slider from 'react-slick';
// import { useRouter } from 'next/router'



class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            kode:'',
        }
    }

    static async getInitialProps(ctx) {
        // location.reload();
        // window.location.reload();

        // console.log(ctx);
        return { query: ctx.query };
    }
    componentDidMount() {
        const { pid } = this.props.query;
        const { query } = this.props;
        console.log(this.props);
        const { kode } = this.state;
        // console.log(this.props);

        if (query) {
            const codes = pid;
            this.setState({ kode: codes});
            // console.log(codes);
            // console.log(kode);
            this.props.dispatch(getProductsByName(codes));
            // console.log(this.props.dispatch(getProductsByName(codes)));

            
        }

    }

    render() {
        const { singleProduct, query, searchResultsForDetail } = this.props;
        const { pid, code } = this.props.query;
        // const codes = pid.split('&code=')[1];
        const { kode } = this.state;
        // console.log(kode);
        // console.log(this.props);
            // console.log(this.props.dispatch(getProductsByName(codes)));

            

        // const { query } = this.props;
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop',
                url: '/shop',
            },
            // {
            //     text: singleProduct ? singleProduct.ProductName : '',
            // },
        ];

        return (
            // <h1>aku ahahaha</h1>
            <div className="layout--product">
                {singleProduct ? (
                    <HeaderProduct productData={singleProduct} />
                ) : (
                    ''
                )}
                <HeaderMobileProduct />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="default" />

                <div className="ps-page--product">
                    <div className="container">

                                <ProductDetailFullwidth Detail={singleProduct} code={kode}/>
                        
                        <div className="ps-page__container ">
                        
                            
                            {searchResultsForDetail!=null?
                            <Slider
                            {...carouselDetailFull}
                            className="ps-carousel outside">
                            {searchResultsForDetail.map(product => (

                                <ProductDetailBottom
                                    product={product}
                                    key={product.Title}
                                                            
                                    />
                            ))}
                            </Slider>    
                       
                        :         
            ''
                        }
                        </div>
                        
                    </div>
                    
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.productDL;
};

export default connect(mapStateToProps)(ProductDefaultPage);

