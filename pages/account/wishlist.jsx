import React from 'react';
import Newletters from '../../components/partials/commons/NewlettersDL';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Header from '../../components/shared/headers/Header';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Wishlist from '../../components/partials/account/Wishlist';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const WishlistPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Wishlist',
        },
    ];
    return (
        <div className="site-content">
                <Header setHeader = "default"/>
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Wishlist />
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default WishlistPage;
