import React, { Component } from 'react';
import ProsesPayment from './component/ProsesPayment';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';

class Cartshopping extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }
        return (
            <div className="ps-section--shopping ps-shopping-cart">
                <div className="container">




                    <div className="ps-section__content">
                    <div class="row">
                        <div className="col-sm-8">
                            <h2>Keranjang Belanja</h2>
                            <div className="table-responsive">
                            <table className="table ps-table--shopping-cart">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Harga</th>
                                        <th>Banyak</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCartItems.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <ProductCart product={product}/>
                                               
                                            </td>
                                            <td className="price">
                                                Rp. {product.price}
                                            </td>
                                            <td>
                                                <div className="form-group--number">
                                                    <button
                                                        className="up"
                                                        onClick={this.handleIncreaseItemQty.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        +
                                                    </button>
                                                    <button
                                                        className="down"
                                                        onClick={this.handleDecreaseItemQty.bind(
                                                            this,
                                                            product
                                                        )}>
                                                        -
                                                    </button>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="1"
                                                        value={product.quantity}
                                                        readOnly={true}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                Rp. 
                                                 {product.quantity *
                                                    product.price}
                                            </td>
                                            <td>
                                                <a
                                                    href="#"
                                                    onClick={this.handleRemoveCartItem.bind(
                                                        this,
                                                        product
                                                    )}>
                                                    <i className="icon-cross"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="ps-section__cart-actions">
                            <Link href="/shop">
                                <a>
                                    <i className="icon-arrow-left mr-2"></i>
                                    Back to Shop
                                </a>
                            </Link>
                        </div> */}
                        </div>
                        
                        <div className="ps-section__footer col-sm-4">
                        <div className="row justify-content-end">
                            <div>
                                <div className="ps-block--shopping-total">
                                    <div className="ps-block__header">
                                        <p ><strong>
                                            Ringkasan Belanja</strong>
                                        </p>
                                    </div>
                                    {/* <div className="ps-block__header">
                                        <p>
                                            Subtotal <span> ${amount}</span>
                                        </p>
                                    </div> */}
                                    <div className="ps-block__content">
                                        <ul className="ps-block__product">
                                            {cartItems.length > 0
                                                ? cartItems.map(
                                                      (product, index) => {
                                                          if (index < 3) {
                                                              return (
                                                                  <li
                                                                      key={
                                                                          product.id
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                          <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product.id}`}>
                                                                              <a className="ps-product__title">
                                                                                  {
                                                                                      product.title
                                                                                  }
                                                                                  <br />{' '}
                                                                                  x{' '}
                                                                                  {
                                                                                      product.quantity
                                                                                  }
                                                                              </a>
                                                                          </Link>
                                                                      </span>
                                                                  </li>
                                                              );
                                                          }
                                                      }
                                                  )
                                                : ''}
                                        </ul>
                                        <h3>
                                            Total Tagihan <span>Rp. {amount}</span>
                                        </h3>
                                    </div>
                                </div>
                                <Link href="/account/checkout">
                                    <a className="ps-btn--cart ps-btn--fullwidth text-white">
                                        Lanjutkan
                                    </a>
                                </Link>
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
export default connect(mapStateToProps)(Cartshopping);
