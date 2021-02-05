import React, { Component } from 'react';
import { connect } from 'react-redux';
import Newsletters from '../../components/partials/commons/NewlettersDL';
import FooterDefault from '../../components/shared/footers/FooterFullwidth';
import HeaderDefault from '../../components/shared/headers/Header';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Payment from '../../components/partials/account/completePay';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';


class completePay extends React.Component  {
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
                <div className="ps-page--simple">
                    {/* <BreadCrumb breacrumb={breadCrumb} />w */}
                    <Payment idData={this.props.query}/>
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
export default connect(mapStateToProps)(completePay);
