import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/shared/headers/Header';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';

import Clothings from '../components/partials/homepage/home-default/Clothings';

import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import Newletters from '../components/partials/commons/NewlettersDL';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDealOfDay from '../components/partials/homepage/home-default/HomeDealOfDay';
import HomeTerlaris from '../components/partials/homepage/home-default/HomeTerlaris';
import HomeTerakhirDilihat from '../components/partials/homepage/home-default/HomeTerakhirDilihat';
import HomeTopCategories from '../components/partials/homepage/home-default/HomeTopCategories';

import '../scss/home-index.scss';
import { getCollectionsDL } from '../store/collectionDL/action';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }

    componentDidMount() {

            const collectionsDL = [
                'ProductList',
                'ProductBestSeller',
                'ProductRecomended',

            ];
            this.props.dispatch(getCollectionsDL(collectionsDL));
            // console.log(getCollectionsDL(collectionsDL));

            
            

        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 1000);
    }

    render() {
        console.log(this.props);
        return (
            <div className="site-content">
                <Header setHeader = "default"/>
                <HeaderMobile />
                <NavigationList />

                <main id="homepage-1">
                    <HomeBanner />
                    <HomeTopCategories />
                    <HomeDealOfDay collectionSlug="ProductList" />
                    <HomeAdsColumns />
                    <HomeTerlaris collectionSlug="ProductBestSeller" />
                    <Clothings collectionSlug="ProductList" />
                    <HomeAds />
                    <HomeTerakhirDilihat collectionSlug="ProductList" />
                    <Newletters />
                  
                </main>
                <FooterFullwidth />
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    return state.collectionDL;
};

export default connect(mapStateToProps)(Index);