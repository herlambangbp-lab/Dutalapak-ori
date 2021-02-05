import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterFullwidth';
import HeaderDefault from '../../components/shared/headers/Header';
import Newletters from '../../components/partials/commons/NewlettersDL';
import LayoutShop from '../../components/partials/shop/LayoutShop';

import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import {
    getProductsByKategori,
} from '../../store/productDL/action';
// import { getCollections } from '../../store/collection/action';

class ShopDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { list, code } = this.props.query;
        // const { query } = this.props;
        // console.log(getProductsByKategori(list));
        this.props.dispatch(getProductsByKategori(list));
        console.log(list);
    }

    render() {
        const { productByKategori, allKategory } = this.props
        // console.log(productByKategori);
       
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    {/* <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" /> */}
                    <div className="ps-container">
                        {/* <ShopBanner /> */}
                        {/* <ShopBrands /> */}
                        {/* <ShopCategories /> */}
                        <div className="ps-layout--shop">
                            
                            <ShopWidget category={allKategory} />
                            <div className="ps-layout__right">
                                <LayoutShop product={productByKategori}/>
                            </div>
                        </div>
                    </div>

                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}
// note terahir sampai list sudah connect
const mapStateToProps = (state) => {
    return state.productDL;
};

export default connect(mapStateToProps)(ShopDefaultPage);

// export default connect(state => state)(ShopDefaultPage);
