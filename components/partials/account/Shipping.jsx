import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../../store/cart/action';

import Link from 'next/link';

class Shipping extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    render() {
        const { amount, cartItems } = this.props;
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
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>Contact</small>
                                            <p>test@gmail.com</p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>Ship to</small>
                                            <p>
                                                2015 South Street, Midland,
                                                Texas
                                            </p>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                    </div>
                                    <h4>Shipping Method</h4>
                                    <div className="ps-block__panel">
                                        <figure>
                                            <small>
                                                International Shipping
                                            </small>
                                            <strong>$20.00</strong>
                                        </figure>
                                    </div>
                                    <div className="ps-block__footer">
                                        <Link href="/account/checkout">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                Return to information
                                            </a>
                                        </Link>
                                        <Link href="/account/payment">
                                            <a className="ps-btn">
                                                Continue to payment
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                <div className="ps-form__orders">
                                    <div className="ps-block--checkout-order">
                                        <div className="ps-block__content">
                                            <figure>
                                                <figcaption>
                                                    <strong>Product</strong>
                                                    <strong>total</strong>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__items">
                                                {cartItems &&
                                                    cartItems.map(product => (
                                                        <Link
                                                            href="/"
                                                            key={product.id}>
                                                            <a>
                                                                <strong>
                                                                    {
                                                                        product.title
                                                                    }
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
                                                    ))}
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Subtotal</strong>
                                                    <small>${amount}</small>
                                                </figcaption>
                                            </figure>
                                            <figure>
                                                <figcaption>
                                                    <strong>Shipping</strong>
                                                    <small>$20.00</small>
                                                </figcaption>
                                            </figure>
                                            <figure className="ps-block__total">
                                                <h3>
                                                    Total
                                                    <strong>
                                                        ${parseInt(amount) + 20}
                                                        .00
                                                    </strong>
                                                </h3>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Shipping);
