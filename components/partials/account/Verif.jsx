import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailTransaksi } from '../../../store/auth/action';
import { getClear } from '../../../store/cart/action';

import { Form, Input, Switch, Checkbox, notification, Modal,

} from 'antd';

import Link from 'next/link';
// import { cSharpDateCovert, statusTransaksi } from '../../../utilities/product-helper';
class Verif extends Component {
    constructor(props) {
        super(props);
        this.state= {
            copySuccess: false,

        };
        // this.handleSubmitCheckAll = this.handleSubmitCheckAll.bind(this);
        // // this.handleSubmitAll = this.handleSubmitAll.bind(this);
        
    }

    static getDerivedStateFromProps(props) {
        // console.log(props);
        // const {idData} = props;
        // // console.log(props);
        
        // if (props.StatusCode == 200) {
        //     props.dispatch(getClear());
        //     props.dispatch(detailTransaksi(idData));
        // }
        // return false;

    }
    componentDidMount(){
        // const {idData} = this.props;
        // // console.log(props);
        
        // if (this.props.StatusCode == 200) {
        //     this.props.dispatch(detailTransaksi(idData));
        // }
        // this.props.dispatch(detailTransaksi(idData));
        // this.props.dispatch(getClear());

    }
//   copyCodeToClipboard1 = () => {
//     const el = this.textArea1
//     el.select()
//     document.execCommand("copy")
//     this.setState({copySuccess: true})
//   }
//   copyCodeToClipboard2 = () => {
//     const el = this.textArea2
//     el.select()
//     document.execCommand("copy")
//     this.setState({copySuccess: true})
//   }
//   copyCodeToClipboard3 = () => {
//     const el = this.textArea3
//     el.select()
//     document.execCommand("copy")
//     this.setState({copySuccess: true})
//   }
    


    render() {
        const { detailTransaksi } = this.props;
        // const virtualBank = str.substring(17, 25);    
        if (detailTransaksi == null) {
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
                                    <li role="presentation" class="active stepactive4">
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
                            {/* <div className="row"> */}
                            
                                <div className="">
                                    <div className="ps-block--shipping">
                                        <div className="ps-complite-order">
                                            
                                            {/* <h3><strong>Metode Pembayaran</strong></h3> */}
                                            <div className="card">
                                                <p className="header">
                                                    <p className="text-default"> Terima Kasih</p>
                                                    <p className="field">
                                                    Terima kasih sudah melakukan pembelian di Duta Store. Kami berharap kamu dapat merasakan pengalaman terbaik. Apabila ada yang ingin ditanyakan silahkan hubungi call center.
                                                    </p>
                                                </p>
                                            </div>
                                            <div className="card">
                                                <p className="header">
                                                    <div className="row">
                                                        <p className="col-sm-8 ">Kode Pesanan</p>
                                                        <p className="col-sm-2 ">Salin Code</p>
                                                        <p className="col-sm-2 text-code">412412</p>
                                                    </div>
                                                    
                                                    
                                                </p>
                                            </div>
                                            <div className="card">
                                                <p className="header">
                                                    <div className="row">
                                                        <p className="col-sm-6 ">
                                                            <Link href="/account/invoices">
                                                            <button  className="ps-btn text-white">
                                                                Lihat Pesanan
                                                            </button>
                                                            </Link>
                                                            </p>
                                                        <p className="col-sm-6 ">
                                                            <Link href="/">
                                                        <button type="submit" className="ps-btn text-white">
                                                                Kembali Belanja
                                                            </button>
                                                            </Link>
                                                            </p>
                                                        
                                                        
                                                    </div>
                                                    
                                                    
                                                </p>
                                            </div>
                                            
                                        
                                    
    
                                        
                        
    
                                        </div>
                                    </div>
                                </div>
                                
                            
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            );
        } else {
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
                                    <li role="presentation" class="active stepactive4">
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
                            {/* <div className="row"> */}
                            
                                <div className="">
                                    <div className="ps-block--shipping">
                                        <div className="ps-complite-order">
                                            

                                            <div className="card">
                                                <p className="header">
                                                    <p className="text-default"> Terima Kasih - {detailTransaksi.Data.CommerceSalesInvoiceNumber}</p>
                                                    <p className="field">
                                                    Terima kasih sudah melakukan pembelian di Duta Store. Kami berharap kamu dapat merasakan pengalaman terbaik. Apabila ada yang ingin ditanyakan silahkan hubungi call center.
                                                    </p>
                                                </p>
                                            </div>
                                            <div className="card">
                                                
                                                    <div className="row">
                                                        <p className="col-sm-7 text-text">Kode Pesanan</p>
                                                        <p className="col-sm-2 text-salin"><a onClick={() => this.copyCodeToClipboard1()}>Salin Code</a></p>
                                                                  <textarea className="col-sm-3 text-code"
                                                                        ref={(textarea) => this.textArea1 = textarea}
                                                                        value={detailTransaksi.Data.CommerceSalesOrderNumber}
                                                                    />
                                                    {/* <p className="col-sm-3 text-code">{detailTransaksi.Data.CommerceSalesOrderNumber}</p> */}
                                                    </div>
                                                    
                                                    
                                                
                                            </div>
                                            <div className="card">
                                                
                                                <div className="row">
                                                    <p className="col-sm-5 text-text">Metode Pembayaran</p>
                                                    <p className="col-sm-2 text-salin"><a onClick={() => this.copyCodeToClipboard2()}>Salin Code Va</a></p>
                                                <p className="col-sm-5 text-code">{detailTransaksi.Data.CommerceSalesOrderSelectedBank.substring(0,-16)}
                                                <textarea className="text-code"
                                                                ref={(textarea) => this.textArea2 = textarea}
                                                                value={detailTransaksi.Data.CommerceSalesOrderSelectedBank.substring(-16)}
                                                        /></p>
                                                </div>
                                                
                                                
                                
                                            </div>
                                            <div className="card">
                                                
                                                <div className="row">
                                                    <p className="col-sm-5 text-text">Status Transaksi</p>
                                                    <p className="col-sm-2 text-salin"></p>
                                                <p className="col-sm-5 text-code">{statusTransaksi(detailTransaksi.Data.CommerceSalesOrderStatus)}
                                                </p>
                                                </div>
                                                
                                                
                                
                                            </div>
                                            
                                            {/* <div className="card">
                                                
                                                <div className="row">
                                                    <p className="col-sm-7 text-text">[logo]</p>
                                                    <p className="col-sm-2 text-salin"></p> */}
                                                {/* <p className="col-sm-3 text-code">{detailTransaksi.Data.CommerceSalesOrderNumber}</p> */}
                                                {/* </div>
                                                
                                                
                                            
                                            </div> */}
                                            <div className="card">
                                                
                                                <div className="row">
                                                    <p className="col-sm-7 text-text">Jumlah Yang Dibayar</p>
                                                    <p className="col-sm-2 text-salin"><a onClick={() => this.copyCodeToClipboard3()}>Salin Jumlah</a></p>
                                                        <textarea className="col-sm-3 text-code"
                                                                ref={(textarea) => this.textArea3 = textarea}
                                                                value={detailTransaksi.Data.CommerceSalesOrderTotal}
                                                        />
                                                {/* <p className="col-sm-3 text-code">Rp.{detailTransaksi.Data.CommerceSalesOrderTotal}</p> */}
                                                </div>
                                                
                                                
                                            
                                            </div>
                                            <div className="card">
                                                <p className="header">
                                                    <div className="row">
                                                        <p className="col-sm-6 ">
                                                            <Link href="/account/invoices">
                                                            <button  className="ps-btn text-white">
                                                                Lihat Pesanan
                                                            </button>
                                                            </Link>
                                                            </p>
                                                        <p className="col-sm-6 ">
                                                            <Link href="/">
                                                        <button type="submit" className="ps-btn text-white">
                                                                Kembali Belanja
                                                            </button>
                                                            </Link>
                                                            </p>
                                                        
                                                        
                                                    </div>
                                                    
                                                    
                                                </p>
                                            </div>
                                            
                                        
                                    
    
                                        
                        
    
                                        </div>
                                    </div>
                                </div>
                                
                            
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            );
        }
        // console.log(this.props);
        // console.log(this.state);
        // const { completePay } = this.props.query;
        // console.log(completePay);

        // return (
        //     <div className="ps-checkout ps-section--shopping">
        //         <div className="container">
        //         <div className="ps-section__header row">
                    
        //             <div class="wizard col-sm-12">
        //                 <div class="wizard-inner">
        //                     <div class="active-line"></div>
        //                     <ul class="nav nav-tabs" role="tablist">
        //                         <li role="presentation" class="active stepactive1">
                    
        //                             <a>
        //                                 <span class="round-tab">
        //                                     1
        //                                 </span>
        //                                 <p>	Keranjang</p>
        //                             </a>
        //                         </li>
        //                         <li role="presentation" class="active stepactive2">
                              
        //                             <a>
        //                                 <span class="round-tab">
        //                                     2
        //                                 </span>
        //                                 <p>	Pesan</p>
        //                             </a>
        //                         </li>
        //                         <li role="presentation" class="active stepactive3">
                   
        //                             <a>
        //                                 <span class="round-tab">
        //                                     3
        //                                 </span>
        //                                 <p>Bayar</p>
        //                             </a>
        //                         </li>
        //                         <li role="presentation" class="active stepactive4">
        //                             {/* <div class="connecting-line"></div> */}
        //                             <a>
        //                                 <span class="round-tab">
        //                                     4
        //                                 </span>
        //                                 <p>Selesai</p>
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 </div>
                        
            

        //             </div>
        //         </div>
        //             <div className="ps-section__content">
        //                 {/* <div className="row"> */}
                        
        //                     <div className="">
        //                         <div className="ps-block--shipping">
        //                             <div className="ps-complite-order">
                                        
        //                                 {/* <h3><strong>Metode Pembayaran</strong></h3> */}
        //                                 <div className="card">
        //                                     <p className="header">
        //                                         <p className="text-default"> Terima Kasih</p>
        //                                         <p className="field">
        //                                         Terima kasih sudah melakukan pembelian di Duta Store. Kami berharap kamu dapat merasakan pengalaman terbaik. Apabila ada yang ingin ditanyakan silahkan hubungi call center.
        //                                         </p>
        //                                     </p>
        //                                 </div>
        //                                 <div className="card">
        //                                     <p className="header">
        //                                         <div className="row">
        //                                             <p className="col-sm-8 ">Kode Pesanan</p>
        //                                             <p className="col-sm-2 ">Salin Code</p>
        //                                             <p className="col-sm-2 text-code">412412</p>
        //                                         </div>
                                                
                                                
        //                                     </p>
        //                                 </div>
        //                                 <div className="card">
        //                                     <p className="header">
        //                                         <div className="row">
        //                                             <p className="col-sm-6 ">
        //                                                 <button type="submit" className="ps-btn text-white">
        //                                                     Lihat Pesanan
        //                                                 </button></p>
        //                                             <p className="col-sm-6 ">
        //                                             <button type="submit" className="ps-btn text-white">
        //                                                     Kembali Belanja
        //                                                 </button></p>
                                                    
                                                    
        //                                         </div>
                                                
                                                
        //                                     </p>
        //                                 </div>
                                        
                                    
                                

                                    
                    

        //                             </div>
        //                         </div>
        //                     </div>
                            
                        
        //                 {/* </div> */}
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Verif);
