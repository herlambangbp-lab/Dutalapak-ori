import React from 'react';
import { connect } from 'react-redux';
import Newsletters from '../../components/partials/commons/Newletters';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import InvoiceDetail from '../../components/partials/account/InvoiceDetail';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

class InvoiceDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            // kode:'',
        }
    }
    static async getInitialProps(ctx) {
        // console.log(ctx);
        return { query: ctx.query };
    }
render(){
    // console.log(this.props.query);
    const { invoicedetail } = this.props.query;
    
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invoice Detail',
        },
    ];
    return (

        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <InvoiceDetail idData={this.props.query}/>
            </div>
            <Newsletters layout="container" />
            <FooterDefault />
        </div>
    );
}
    
};
const mapStateToProps = (state) => {
    return state.auth;
};

export default connect(mapStateToProps)(InvoiceDetailPage);
// export default InvoiceDetailPage;
