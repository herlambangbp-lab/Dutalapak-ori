import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormCheckoutInformation from './modules/FormCheckoutInformation';

class Checkout extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // formUser:'',
        // };
    }
    


    render() {
        const { amount, cartTotal, cartItems } = this.props;
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
                        <FormCheckoutInformation
                            amount={amount}
                            cartTotal={cartTotal}
                            cartItems={cartItems}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Checkout);
