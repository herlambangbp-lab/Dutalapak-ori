import React, { Component } from 'react';
import { connect } from 'react-redux';
import Newsletters from '../../components/partials/commons/NewlettersDL';
import FooterDefault from '../../components/shared/footers/FooterFullwidth';
import HeaderDefault from '../../components/shared/headers/Header';
import Payment from '../../components/partials/account/completePay';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BlogGrid from '../../components/partials/blog/BlogGrid';
import BreadCrumb2 from '../../components/elements/BreadCrumb2';
import { Button } from 'antd';

class verifUser extends React.Component  {
    constructor(props) {
        super(props);
        // this.state= {
            
        //     paymentChoice: null,
        //     paymentOngkir: 10000,
        //     submitOrder:'',
        // };
        // this.handleSubmitCheckAll = this.handleSubmitCheckAll.bind(this);
        // // this.handleSubmitAll = this.handleSubmitAll.bind(this);
        
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    


    render() {
        // console.log(this.props.query);

        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--blog">
                <div className="container">
                    <div className="ps-page__header">
                        <h1>VERIFIKASI BERHASIL</h1>
                        <Button href="/" type="primary" className="text-white" >kembali belanja</Button>
                        {/* <BreadCrumb2 breacrumb={breadCrumb} /> */}
                    </div>
                    {/* <BlogGrid /> */}
                </div>
            </div>
                <Newsletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
    
};


const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(verifUser);
