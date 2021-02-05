import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Router  from 'next/router';
import Link from 'next/link';
import { Form, Input, Radio, DatePicker } from 'antd';
import { updateProfil } from '../../../store/auth/action';

// import { logOut } from '../../../store/auth/action';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    componentDidMount() {
        console.log(this.props);
        const { isLoggedIn, AccessToken, RequestVerificationToken } = this.props;
        // console.log(auth);
        // const auth = this.props;
        // const accToken = auth.AccessToken;
        // const reqVerif = auth.RequestVerificationToken;
        // console.log(auth);
        if (isLoggedIn == false) {
            Router.push('/account/login');
        }

        // this.props.dispatch(editprofilReq(auth));


    }

    handleFormSubmit = e => {
        const {AccessToken, RequestVerificationToken} = this.props;
        const data= {
            diUpdate: e,
            AccessTokenUser: AccessToken,
            RequestVerificationTokenUser: RequestVerificationToken,
        }
        // console.log(data);
        // console.log(e);
        this.props.dispatch(updateProfil(data));
        // e.preventDefault();
        // const productVarian = value;
        // const Dproducts = this.props.product.VariantList[0].VariantDetailList[value];
        // const Dstoct = Dproducts.stockAvailable;

        // this.setState({pilihVarian: 1})
        // this.setState({productVariat: Dproducts})
        // this.setState({productVariantStoct: Dstoct})
    };

    render() {
        // console.log(this.props);
        
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
                active: true,
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
        // console.log(this.state);
        // console.log(this.props);
// console.log(this.props);
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
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <Form
                                    className="ps-form--account-setting"
                                    onFinish={this.handleFormSubmit}>
                                    <div className="ps-form__header">
                                        <h3>Account Information</h3>
                                    </div>
                                    <div className="ps-form__content">

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="username"
                                                        name="username"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue={auth.profilEdit.memberNickName}
                                                            placeholder="masukkan username anda ..."
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Email"
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your email!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="email"
                                                            defaultValue={auth.profilEdit.email}
                                                            placeholder="masukkan email address ..."
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="Nama Lengkap"
                                                        name="full_name"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'tolong masukkan nama lengkap!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            defaultValue={auth.profilEdit.memberFullName}
                                                            placeholder="masukkan nama lengkap ..."
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                label="Alamat"
                                                name="address"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Tolong masukkan alamat lengkap anda !',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    defaultValue={auth.profilEdit.memberAddress}
                                                    placeholder="Alamat lengkap anda ..."
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                label="kota"
                                                name="kota"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Tolong masukkan alamat lengkap anda !',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    defaultValue={auth.profilEdit.memberAddressCity}
                                                    placeholder="masukkan kota anda tinggal ..."
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                label="kecamatan"
                                                name="kecamatan"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Tolong masukkan alamat lengkap anda !',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    defaultValue={auth.profilEdit.memberAddressDistrict}
                                                    placeholder="masukkan kecamatan anda tinggal ..."
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="form-group">
                                            <Form.Item
                                                label="kelurahan"
                                                name="kelurahan"
                                                rules={[
                                                    {
                                                        required: false,
                                                        message:
                                                            'Tolong masukkan alamat lengkap anda !',
                                                    },
                                                ]}>
                                                <Input
                                                    className="form-control"
                                                    type="text"
                                                    defaultValue={auth.profilEdit.memberAddressSubDistrict}
                                                    placeholder="masukka kelurahan anda tinggal ..."
                                                />
                                            </Form.Item>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="kode pos"
                                                        name="code_pos"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your username!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="number"
                                                            defaultValue={auth.profilEdit.memberAddressPostalCode}
                                                            placeholder="masukkan kode pos ..."
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <Form.Item
                                                        label="No. hp"
                                                        name="phone_number"
                                                        rules={[
                                                            {
                                                                required: false,
                                                                message:
                                                                    'Please input your email!',
                                                            },
                                                        ]}>
                                                        <Input
                                                            className="form-control"
                                                            type="number"
                                                            defaultValue={auth.profilEdit.phone}
                                                            placeholder="masukkan nomer telpon ..."
                                                        />
                                                    </Form.Item>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group submit">
                                            <button className="ps-btn" type="submit"> 
                                                Update
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(UserInformation);