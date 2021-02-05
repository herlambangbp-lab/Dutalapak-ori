import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableNotifications from './modules/TableNotifications';
import Link from 'next/link';
import { connect } from 'react-redux';
import ProductCart from '../../elements/products/ProductCart';
import { detailTransaksi } from '../../../store/auth/action';
import { cSharpDateCovert, statusTransaksi } from '../../../utilities/product-helper';

class InvoiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(props) {
        // console.log(props);
        const {idData} = props;
        // console.log(props);
        // console.log(idData.invoicedetail);
        const data = {
            completePay: idData.invoicedetail,
        
        }
        if (props.StatusCode == 200) {
            props.dispatch(detailTransaksi(data));
        }
        return false;

    }
    componentDidMount(){
        const {idData} = this.props;
        // console.log(props);
        // console.log(idData.invoicedetail);
        const data = {
            completePay: idData.invoicedetail,
        
        }
        if (this.props.StatusCode == 200) {
            this.props.dispatch(detailTransaksi(data));
        }
        this.props.dispatch(detailTransaksi(data));

    }
    render() {
        // console.log(this.props.query);
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
                
            },
            // {
            //     text: 'Notifications',
            //     url: '/account/notifications',
            //     icon: 'icon-alarm-ringing',
            // },
            {
                text: 'Transaksi',
                url: '/account/invoices',
                icon: 'icon-papers',
                active: true,
            },
            // {
            //     text: 'Address',
            //     url: '/account/addresses',
            //     icon: 'icon-map-marker',
            // },
            // {
            //     text: 'Recent Viewed Product',
            //     url: '/account/recent-viewed-product',
            //     icon: 'icon-store',
            // },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        const invoiceProducts = [
            {
                id: '6',
                thumbnail: '/static/img/products/shop/5.jpg',
                title: 'Grand Slam Indoor Of Show Jumping Novel',
                vendor: "Robert's Store",
                sale: true,
                price: '32.99',
                salePrice: '41.00',
                rating: true,
                ratingCount: '4',
                badge: [
                    {
                        type: 'sale',
                        value: '-37%',
                    },
                ],
            },
            {
                id: '7',
                thumbnail: '/static/img/products/shop/6.jpg',
                title: 'Sound Intone I65 Earphone White Version',
                vendor: 'Youngshop',
                sale: true,
                price: '100.99',
                salePrice: '106.00',
                rating: true,
                ratingCount: '5',
                badge: [
                    {
                        type: 'sale',
                        value: '-5%',
                    },
                ],
            },
        ];
        console.log(this.props);
        console.log(this.state);
        const {accountInfo, detailTransaksi} = this.props;
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4">
                            <div className="ps-page__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src="/static/img/users/3.jpg" />
                                        <figure>
                                            <figcaption>Hello,</figcaption>
                                            {accountInfo ? (
                                                 <p>{accountInfo.Email}</p> 
                                            ) : (
                                                ''
                                            )}
                                            
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            {/* <li>
                                                <Link href="/account/">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar data={accountLinks} />
                            </div>
                        </div> */}
                        <div className="col-lg-8">
                            {detailTransaksi.Data ? ( 
                                    <div className="ps-page__content">
                                    <div className="ps-section--account-setting">
                                        <div className="ps-section__header">
                                            {detailTransaksi ? (
                                                <h3>
                                                    Invoice #{detailTransaksi.Data.CommerceSalesInvoiceNumber} -
                                            <strong> {statusTransaksi(detailTransaksi.Data.CommerceSalesOrderStatus)}</strong>
                                                </h3>
                                            ): (
                                                ''
                                            )}
                                            {/* <h3>
                                                Invoice #500884010 -
                                                <strong>Successful delivery</strong>
                                            </h3> */}
                                        </div>
                                        <div className="ps-section__content">
                                            <div className="row">
                                                <div className="col-md-4 col-12">
                                                    <figure className="ps-block--invoice">
                                                        <figcaption>
                                                            Address
                                                        </figcaption>
                                                        {detailTransaksi ? (
                                                            <div className="ps-block__content">
                                                            {/* <strong>
                                                                John Walker
                                                            </strong> */}
                                                            <p>
                                                                {detailTransaksi.Data.CommerceSalesOrderReceiverAddress}&nbsp;{detailTransaksi.Data.CommerceSalesOrderReceiverDistrict}&nbsp;{detailTransaksi.Data.CommerceSalesOrderReceiverPostalCode}
                                                            </p>
                                                            <p>
                                                                Phone: {detailTransaksi.Data.CommerceSalesOrderReceiverPhone }
                                                            </p>
                                                        </div>
                                                        ) : ('') }

                                                    </figure>
                                                </div>
                                                <div className="col-md-4 col-12">
                                                    <figure className="ps-block--invoice">
                                                        <figcaption>
                                                            Shipping 
                                                        </figcaption>
                                                        <div className="ps-block__content">
                                                            <p>
                                                                Shipping Duta cargo : Rp. 10.000
                                                            </p>
                                                        </div>
                                                    </figure>
                                                </div>
                                                <div className="col-md-4 col-12">
                                                    <figure className="ps-block--invoice">
                                                        <figcaption>
                                                            Payment
                                                        </figcaption>
                                                        <div className="ps-block__content">
                                                            <p>
                                                            {detailTransaksi.Data.CommerceSalesOrderSelectedBank }
                                                            
                                                            </p>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                            {/* <div className="table-responsive">
                                                <table className="table ps-table--shopping-cart">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th>Quantity</th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>

                                                </table>
                                            </div> */}
                                            <Link href="/account/invoices">
                                                <a className="ps-btn ps-btn--sm text-white">
                                                    Back to invoices
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : ('') }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return state.auth;
};
export default connect(mapStateToProps)(InvoiceDetail);
// export default InvoiceDetail;
