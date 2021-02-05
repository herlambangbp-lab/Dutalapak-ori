import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';
import { isStaticData } from '../../../../utilities/app-settings';
import { baseUrl, imageUrl } from '../../../../repositories/RepositoryIndex';
import { testConnect } from '../../../../store/auth/action';
class MiniCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // let currentAuth = JSON.parse(localAuth);
        // console.log(currentAuth);
        // if (currentAuth.AccessToken != null) {
        //     location.href='/account/checkout';
        //     // useRouter().push('/')
        // } else {
        //     location.href='/account/login';
        // }
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    handleSubmit = e =>{
        e.preventDefault();
        // const router = useRouter();
        const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
            .auth;
        let currentAuth = JSON.parse(localAuth);
        // location.href='/account/checkout';
        if (currentAuth.AccessToken != null) {

            this.props.dispatch(testConnect());

        } else {
            location.href='/account/login';
        }

    }

    render() {
        const { amount, cartTotal, cartItems, codes } = this.props;
        console.log(this.props);
        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <i className="icon-bag2 text-white"></i>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
                {cartItems && cartItems.length > 0 ? (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            {cartItems && cartItems.length > 0
                                ? cartItems.map((product) => (
                                      <div
                                          className="ps-product--cart-mobile"
                                          key={product.pilihanVarian.VariantDetailId}>
                                          <div className="ps-product__thumbnail">
                                          <Link href="/product/[pid]" as={`/product/${product.codes}`}>
                                          
                                                  <a>
                                                      <img
                                                          src={
                                                              isStaticData ===
                                                              false
                                                                  ? `${imageUrl}${product.product.ImageList[0].ImageProductPath}`
                                                                  : product
                                                                    .thumbnail
                                                                    // .url    
                                                          }
                                                          alt="martfury"
                                                      />
                                                  </a>
                                              </Link>
                                          </div>
                                          <div className="ps-product__content">
                                              <a
                                                  className="ps-product__remove"
                                                  onClick={this.handleRemoveCartItem.bind(
                                                      this,
                                                      product
                                                  )}>
                                                  <i className="icon-cross"></i>
                                              </a>
                                              <Link href="/product/[pid]" as={`/product/${product.codes}`}>
                                                  <a className="ps-product__title">
                                                      {product.pilihanVarian.stockAvailable.ProductName}+{product.pilihanVarian.stockAvailable.ProductVarianName}
                                                  </a>
                                              </Link>
                                              <p>
                                                  <strong>Sold by:</strong>{' '}
                                                  {product.vendor}
                                              </p>
                                              <small>
                                                  {product.quantity} x Rp
                                                  {product.pilihanVarian.VariantDetailSellPrice}
                                              </small>
                                          </div>
                                      </div>
                                  ))
                                : ''}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                Sub Total:
                                <strong>Rp {amount ? amount : 0}</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart-DL">
                                    <a className="ps-btn text-white">View Cart</a>
                                </Link>
                                
                                    <a className="ps-btn text-white"
                                    onClick={this.handleSubmit.bind(this)}
                                    >
                                    Checkout</a>
                                
                            </figure>
                        </div>
                    </div>
                ) : (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                        <img className="img-loading" src="/static/img/keranjang-kosong.svg" /> 
                            {/* <span>No products in cart</span> */}
                                                            <p><strong>Keranjang belanjamu kosong</strong></p>
                                    {/* <p>Ayo mulai belanja dan dapatkan keuntungannya</p> */}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(MiniCart);

                        // <li>
                        //     <a
                        //         href="#"
                        //         data-toggle="tooltip"
                        //         data-placement="top"
                        //         title="Read More"
                        //         onClick={this.handleAddItemToCart.bind(this)}>
                        //         <i className="icon-bag2"></i>
                        //     </a>
                        // </li>