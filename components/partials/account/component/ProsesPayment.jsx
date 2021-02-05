import React from 'react';

//*shoppingcart-checkout-payment-sucess
const ProsesPayment = ({ tagproses }) => (
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
);

export default ProsesPayment;
