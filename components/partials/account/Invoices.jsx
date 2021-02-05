import React, { Component } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import TableInvoices from './modules/TableInvoices';
import { connect } from 'react-redux';
import Link from 'next/link';

class Invoices extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props);
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
        const auth = this.props;
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
                                            <p>{auth.profilEdit.email}</p>
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
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>Riwayat Transaksi</h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <TableInvoices />
                                    </div>
                                </div>
                            </div>
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
export default connect(mapStateToProps)(Invoices);

// export default Invoices;
