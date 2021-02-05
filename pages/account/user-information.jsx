import React from 'react';

import Newsletters from '../../components/partials/commons/NewlettersDL';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/Header';
import BreadCrumb from '../../components/elements/BreadCrumb';
import UserInformation from '../../components/partials/account/UserInformation';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const UserInformationPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'User Information',
        },
    ];

    // static getDerivedStateFromProps(props) {
    //     if (props.isLoggedIn === true) {
    //         Router.push('/');
    //     }
    //     return false;
    // }

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">

                <BreadCrumb breacrumb={breadCrumb} />
                <UserInformation />


                f
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
};

export default UserInformationPage;
