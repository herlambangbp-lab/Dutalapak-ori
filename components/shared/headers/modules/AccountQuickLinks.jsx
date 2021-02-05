import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { logOut } from '../../../../store/auth/action';

class AccountQuickLinks extends Component {
    constructor(props) {
        super(props);
    }



    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    componentDidMount(){
        // console.log(this.props);


    }

    render() {
        // console.log(this.props);
        const accountLinks = [
            {
                text: 'Informasi Akun',
                url: '/account/user-information',
                icon: 'icon-user',
            },

            {
                text: 'Transaksi',
                url: '/account/invoices',
                icon: 'icon-papers',
            },

            {
                text: 'Product Favorit',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        const { isLoggedIn, auth } = this.props;
        // console.log(this.props);
        if (isLoggedIn === true) {
            return (
                <div className="ps-block--user-account">
                    <i className="icon-user text-white"></i>
                    <div className="ps-block__content">

                        <ul className="ps-list--arrow">
                            <li className="ps-block__top text-white">
                                <div
                                    href="#"
                                    onClick={this.handleLogout.bind(this)} className="row">
                                    
                                    {/* <div className="col-sm-12"><h5 >Saldo Rp. 0 </h5>  </div> */}
                                    <div className="col-sm-6"><h5 >Saldo </h5>  </div>
                                    <div className="col-sm-6"><h5 >Rp. {auth.accountInfo.SaldoNumber}</h5>  </div>
                                    {/* < className="col-sm-3"> Rp. 0</> */}
                                </div>
                            </li>
                            {accountLinks.map(link => (
                                <li key={link.text}>
                                    <Link href={link.url}>
                                        <a>{link.text}</a>
                                    </Link>
                                </li>
                            ))}
                            <li className="ps-block__footer text-white">
                                <a
                                    href="#"
                                    onClick={this.handleLogout.bind(this)}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="ps-block--user-header">
                    <div className="ps-block__left">
                        <i className="icon-user text-white"></i>
                    </div>
                    <div className="ps-block__right text-white">
                        <Link href="/account/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/account/register">
                            <a>Register</a>
                        </Link>
                    </div>
                </div>
            );
        }
    }
}
const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps)(AccountQuickLinks);
