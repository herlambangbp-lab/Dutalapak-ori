import React, { Component, useState  } from 'react';
import { connect } from 'react-redux';
import  Router  from 'next/router';
import { getClear, getCart, paymentValue, increasePayMethod, decreasePayMethod } from '../../../store/cart/action';
import { Form, Input, Switch, Checkbox, notification, Modal, Radio

} from 'antd';
import Link from 'next/link';

class Shipping extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            
            paymentChoice: null,
            paymentOngkir: 10000,
            submitOrder:'',
            value: null,

        };
        this.handleSubmitCheckAll = this.handleSubmitCheckAll.bind(this);

    }
    onChangePay = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
    static getDerivedStateFromProps(props) {
        // console.log(props);
        const {data} = props;
        console.log(data);
        if (data == null) {

            // console.log(this.props);
            console.log('belom terisi');
        } else {
            if (data.ResponseMessage == null) {
                // this.props.dispatch(getClear());
                // console.log(data.data.Data.id);
                    Router.push({
                    pathname: '/account/[completePay]',
                    query: { completePay: data.data.Data.id },
                    })
                // Router.push('/account/DokuStaging');
                
            } else {
                console.log('error');
            }
            
        }
        // return false;
    }

    componentDidMount() {

        const pay = {
            
                fee: 0,
            
        };
        this.props.dispatch(decreasePayMethod(pay));
        this.props.dispatch(getCart());
    }

    handlePaymentMethod(payment){

        this.props.dispatch(increasePayMethod(payment));
        console.log(payment);
        this.setState({paymentChoice: payment,})

    }
    handleSubmitAll(){

        
    }
    
    handleSubmitCheckAll(){
        // console.log(`yey`);
        const modalSuccess = type => {
            notification[type]({
                message: 'Oops ! ',
                description: 'Periksa Kembali data dan pilih metode pembayaran',
                duration: 100,
            });
        };
        const modalSuccessDL = type => {
            notification[type]({
                message: 'Success ! ',
                description: 'Apakah anda yakin data anda benar, Klik lanjutkan',
                duration: 100,
            });
        };
        const modalwaitingDL = type => {
            notification[type]({
                message: 'Success ! ',
                description: 'Waiting request order ...',
                duration: 10000,
            });
        };
        // console.log(data);
        
        const { paymentChoice, paymentOngkir, submitOrder } = this.state;
        const { cartItems, amount, cartTotal, setAddressForm, totalTransaksi } = this.props;
        if (paymentChoice == null) {
            console.log('tidak bisa melanjutkan transaksi');
            modalSuccess('warning');
        } else {
            console.log('bisa melanjutkan transaksi');
            
            // console.log(this.props);
            // console.log(this.state);
            this.setState({
                submitOrder: {
                    cartItems: cartItems,
                    itemPayTotal: totalTransaksi,
                    setAddress: setAddressForm,
                    paymentMethode: paymentChoice,
                    paymentOngkir: paymentOngkir,
                    
                },
                
            })
            // console.log(submitOrder);
            // handleSubmitAll()
            // console.log(submitOrder);
            if (submitOrder=='') {
                // console.log('nono');
                modalSuccessDL('success');
            } else {
                // console.log('yey');
                // console.log(submitOrder);
                this.props.dispatch(paymentValue(submitOrder));
                if (this.props.data == null) {
                    this.props.dispatch(getClear());
                    modalSuccessDL('success');
                } else {
                    this.props.dispatch(getClear());
                    modalwaitingDL('success');
                }
            }
        }
    }

    componentwillUpdate(prevProps, prevState) {
        const ps = JSON.parse(prevState);
        const pp = JSON.parse(prevProps);
        console.log(ps);
        console.log(pp);
        // console.log(this.props);
        // const data = this.props;
        // if (data != undefined) {
        //     console.log('aku');
        // } else {
        //     console.log('heheh non');
        // }

    }

    render() {
        const { amount, cartItems, paymentMetod, totalTransaksi, data } = this.props;
        const { paymentChoice, paymentOngkir, submitOrder} = this.state;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
          const { value } = this.state;
        // console.log(this.props);
        // console.log(this.props);
        return (
            <div className="ps-checkout ps-section--shopping">
                <div className="container">
                <div className="ps-section__header row">
                    
                    <div class="wizard col-sm-12">
                        <div class="wizard-inner">
                            <div class="active-line"></div>
                            <ul class="nav nav-tabs" role="tablist">
                                <li role="presentation" class="active stepactive1">
                    
                                    <a>
                                        <span class="round-tab">
                                            1
                                        </span>
                                        <p>	Keranjang</p>
                                    </a>
                                </li>
                                <li role="presentation" class="active stepactive2">
                              
                                    <a>
                                        <span class="round-tab">
                                            2
                                        </span>
                                        <p>	Pesan</p>
                                    </a>
                                </li>
                                <li role="presentation" class="active stepactive3">
                   
                                    <a>
                                        <span class="round-tab">
                                            3
                                        </span>
                                        <p>Bayar</p>
                                    </a>
                                </li>
                                <li role="presentation" class="stepactive4">
                                    {/* <div class="connecting-line"></div> */}
                                    <a>
                                        <span class="round-tab">
                                            4
                                        </span>
                                        <p>Selesai</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
            

                    </div>
                </div>
                    <div className="ps-section__content">
                        <div className="row">
                        
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <div className="ps-block--shipping">
                                    <h3><strong>Metode Pembayaran</strong></h3>
                                    {paymentMetod!=null?
                                    <div className="card">
                                    {paymentMetod.map(item => (
                                        <div className="container-card ">
                                            <div class="col-sm-8"><strong></strong></div>
                                            <div className="card-list" ><h4><strong>{item.PaymentMethod}</strong></h4></div>
                                            {item.PaymentInfo.map(list => (
                                                <Radio.Group onChange={this.handlePaymentMethod.bind(this, list)} value={value}>
                                                    <Radio style={radioStyle} value={list}>
                                                    {list.description}
                                                    </Radio>
                                                </Radio.Group>
                                                // <div className="card-list" ><a onClick={this.handlePaymentMethod.bind(this, list)}>{list.description}</a></div>
                                            ))}
                                            
                                            
                                        </div>
                                    ))}
                                    </div>
                                    :(
                                        <h1>asdasd</h1>
                                    )}
                                </div>
                            {/* <Radio.Group onChange={this.onChangePay} value={value}>
                                <Radio style={radioStyle} value={1}>
                                {list.description}
                                </Radio>


                            </Radio.Group> */}
                                {/* <div className="ps-block--shipping">
                                    <h3><strong>Metode Pembayaran</strong></h3>
                                    {paymentMetod!=null?
                                    <div className="card">
                                    {paymentMetod.map(item => (
                                        <div className="container-card ">
                                            <div class="col-sm-8"><strong></strong></div>
                                            <div className="card-list" ><h4><strong>{item.PaymentMethod}</strong></h4></div>
                                            {item.PaymentInfo.map(list => (
                                                <div className="card-list" ><a onClick={this.handlePaymentMethod.bind(this, list)}>{list.description}</a></div>
                                            ))}
                                            
                                            
                                        </div>
                                    ))}
                                    </div>
                                    :(
                                        <h1>asdasd</h1>
                                    )}

                                </div> */}
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <h3>Punya kode vocher ?</h3>
                                    <div className="form-group--nest">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Masukkan kode vocher"
                                        />
                                        <button className="ps-btn">Gunakan</button>
                                    </div>
                                    <p></p>
                            <div className="ps-form__orders">
                                
                                
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <figure>
                                            <figcaption>
                                                <strong>RINGKASAN BELANJA</strong>
                                                {/* <strong>total</strong> */}
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__items">
                                                <a>Total Belanja
                                                    <small>
                                                    Rp. {amount}
                                                    </small>
                                                </a>
                                                <a>
                                                    Ongkos Kirim
                                                    <small>
                                                        Rp. {paymentOngkir}
                                                    </small>
                                                </a>
                                                {/* <a>
                                                    Voucher
                                                    <small>
                                                        Rp. 0
                                                    </small>
                                                </a>
                                                <a>
                                                    Promo
                                                    <small>
                                                        Rp. 0
                                                    </small>
                                                </a> */}
                                                <a>
                                                    Convenience Fee
                                                    
                                                        {paymentChoice == null ?(
                                                            <small>
                                                            Rp. 0
                                                            </small>
                                                        ):(
                                                            <small>
                                                            {paymentChoice.description} Rp. {paymentChoice.fee}
                                                            </small>
                                                        )}
                                                        
                                                    
                                                </a>
                                                {/* <a>
                                                    Pilih Kurir
                                                    <small>
                                                        <p>JNE Reguler Rp 10.000</p>
                                                            <div class="dropdown">
                                                                <span>Kurir</span>
                                                                <div class="dropdown-content">
                                                                <p>JNE Reguler Rp 10.000</p>
                                                                <p>JNE Reguler Rp 10.000</p>
                                                                </div>
                                                            </div>
                                                        </small>
                                                </a> */}
                                                {/* {cartItems &&
                                                cartItems.map(product => (
                                                    <Link
                                                        href="/"
                                                        key={product.id}>
                                                        <a>
                                                            <strong>
                                                                {product.title}
                                                                <span>
                                                                        x
                                                                    {
                                                                        product.quantity
                                                                    }
                                                                    </span>
                                                            </strong>
                                                            <small>
                                                                $
                                                                {product.quantity *
                                                                product.price}
                                                            </small>
                                                        </a>
                                                    </Link>
                                                ))} */}
                                            
                                        </figure>
                                        <figure>
                                            <figcaption>
                                                <strong>Total Tagihan</strong>
                                                <small>Rp. {totalTransaksi}</small>
                                            </figcaption>
                                        </figure>
                                        <div className="ps-block__footer">
                                            
                                            <button onClick={this.handleSubmitCheckAll} className="ps-btn text-white">
                                                Lanjutkan
                                            </button>
                                            
                                            <p className="ps-text">Dengan menekan tombol "Lanjutkan", Anda telah menyetujui</p>
                                            <p className="ps-text"><a className="linked">Syarat</a> & <a className="linked">Ketentuan</a> serta <a className="linked">Kebijakan Privasi</a> kami</p>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            
            {/* <form action="https://staging.doku.com/Suite/Receive"  hidden={true} method="post" id="DokuForm">
                {
                data!==null?
                data.map((item,index)=>(
                    <input key={index} type="text" name={item.id} value={item.value}/>
                )):('')
                }
            </form> */}
            
        
        </div>




        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Shipping);
