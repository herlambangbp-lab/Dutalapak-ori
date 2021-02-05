import React, { Component } from 'react';
import ProsesPayment from '../account/component/ProsesPayment';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';
import { testConnect } from '../../../store/auth/action';
import Link,{ useRouter }  from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import { Table, Input, Button, Popconfirm, Form 
    } from 'antd';
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        // this.state: {

        // };
    }

    componentDidMount() {
        // const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
        //     .auth;
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

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
        // console.log(product);
    };
    
    handleSubmit = e =>{
        e.preventDefault();
        // const router = useRouter();
        const localAuth = JSON.parse(localStorage.getItem('persist:martfury'))
            .auth;
        let currentAuth = JSON.parse(localAuth);
        // console.log(currentAuth);
        if (currentAuth.AccessToken != null) {

            this.props.dispatch(testConnect());
            // location.href='/account/checkout';
            // useRouter().push('/')
        } else {
            location.href='/account/login';
        }
        // console.log(this.props.dispatch(checkAuth()));
        // this.props.dispatch(checkAuth());
        // console.log(this.props.dispatch(checkAuth()));
    }

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        console.log(this.props);
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
        }

        const tableData = [];
        const columns = [
        {
            title: "Product",
            dataIndex: "pilihanStoct",
            // render: (text) => <a>{text}</a>
        },
        {
            title: "Harga",
            dataIndex: "harga"
        },
        {
            title: "Banyak",
            dataIndex: "quantity"
        },
        {
            title: "Total",
            dataIndex: "Total"
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) =>
              cartItems.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleRemoveCartItem(record.Detail)}>
                  <a>DELETE</a>
                </Popconfirm>
              ) : null,
          }
        
        ];

        if (cartItems.length >0) {

            for (let i = 0; i < cartItems.length; i++) {
                tableData[i] = {
                    key:[i],
                    pilihanStoct: cartItems[i].pilihanStoct.ProductName+cartItems[i].pilihanStoct.ProductVarianName,
                    harga: cartItems[i].harga,
                    quantity: cartItems[i].quantity+ " item",
                    Total: cartItems[i].quantity*cartItems[i].harga,
                    Detail:  cartItems[i],
                    // Action:
                };
                    
            }
            // console.log(this.props);
        } else {
            tableData[0] = 
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park"
              };

            
        }
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
                );
        },
            getCheckboxProps: (record) => ({
                disabled: record.name === "Disabled User",
                // Column configuration not to be checked
                name: record.name
            })
        };

        return (
            <div className="ps-section--shopping ps-shopping-cart">
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
                                    <li role="presentation" class="stepactive2">
                                  
                                        <a>
                                            <span class="round-tab">
                                                2
                                            </span>
                                            <p>	Pesan</p>
                                        </a>
                                    </li>
                                    <li role="presentation" class="stepactive3">
                       
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
                    <div class="row">
                        <div className="col-sm-8">
                            {/* <div className="ps-section__user">
                                <img src="/static/img/icon-person.svg" className="icon" alt=""/>
                                <strong>Masuk Sebagai Zainal Amri</strong>
                            </div> */}
                            <h2>Keranjang Belanja</h2>
                            <div className="table-responsive">
                            <Table
                                    rowSelection={{
                                    // type: checkbox,
                                    ...rowSelection
                                    }}
                                    columns={columns}
                                    dataSource={tableData}
                                />
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
                                                                          product.ProductId
                                                                      }>
                                                                      <span className="ps-block__estimate">
                                                                      {/* <Link
                                                                              href="/product/[pid]"
                                                                              as={`/product/${product.ProductId}`}> */}
                                                                          <Link
                                                                              href="#"
                                                                              >
                                                                              
                                                                              <a className="ps-product__title">
{product.pilihanVarian.stockAvailable.ProductName}+{product.pilihanVarian.stockAvailable.ProductVarianName}
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
                                {/* <Link href="#"> */}
                                    <a className="ps-btn--cart ps-btn--fullwidth text-white"
                                        onClick={this.handleSubmit.bind(this)}
                                    >
                                        Lanjutkan
                                    </a>
                                {/* </Link> */}
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
export default connect(mapStateToProps)(ShoppingCart);
