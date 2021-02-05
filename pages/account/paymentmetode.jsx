import React from 'react';
import Newsletters from '../../components/partials/commons/NewlettersDL';
import FooterDefault from '../../components/shared/footers/FooterFullwidth';
import HeaderDefault from '../../components/shared/headers/Header';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Payment from '../../components/partials/account/PaymentDL';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const paymentmetode = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
            url: '/account/checkout',
        },
        {
            text: 'Shipping',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                {/* <BreadCrumb breacrumb={breadCrumb} />w */}
                <Payment />
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default paymentmetode;
