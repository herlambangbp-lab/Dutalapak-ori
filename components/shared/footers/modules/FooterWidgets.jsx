import React from 'react';
import Link from 'next/link';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">

                <div className="row card-footer">
                    <img className="col-sm-3 icon-footer" src="/static/img/footer/box.svg">
                    </img>
                    <a className="col-sm-9 card-footer">JAMINAN PENGIRIMAN
                        <p className="text-footer">Kami akan mengembalikan uang kamu secara penuh jika barang tidak terkirim</p>
                    </a>
                </div>
                <div className="row card-footer">
                    <img className="col-sm-3 icon-footer" src="/static/img/footer/shield.svg">
                    </img>
                    <a className="col-sm-9 card-footer">PERLINDUNGAN KONSUMEN
                        <p className="text-footer">Produk dijamin asli 100% sesuai dengan deskripsi dan keterangan</p>
                    </a>
                </div>
                <div className="row card-footer">
                    <img className="col-sm-3 icon-footer" src="/static/img/footer/question.svg">
                    </img>
                    <a className="col-sm-9 card-footer">RESPON CEPAT
                        <p className="text-footer">Semua pertanyaan kamu akan direspon selama 24 jam penuh oleh tim kami</p>
                    </a>
                </div>


            </div>
        </aside>
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">

                <div className="row card-footer">

                    <a className="card-footer">PENGGUNA
                        <p className="text-footer">Cara Pembelian</p>
                        <p className="text-footer">Info Pengiriman</p>
                        <p className="text-footer">Pengembalian Produk</p>
                        <p className="text-footer">Lihat Promo</p>
                    </a>
                </div>



            </div>
        </aside>
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">

                <div className="row card-footer">

                    <a className="card-footer">TENTANG KAMI
                        <p className="text-footer">Tentang Duta Sparepart</p>
                        <p className="text-footer">Karir di Duta Sparepart</p>
                        <p className="text-footer">Blog Duta Sparepart</p>
                        <p className="text-footer">Hubungi Duta Sparepart</p>
                    </a>
                </div>



            </div>
        </aside>
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Contact us</h4>
            <div className="widget_content">
                <p className="card-footer">IKUTI KAMI</p>
                <ul className="ps-list--social">
                    <li>
                        <a className="facebook" href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="row card-footer">
                    <img className="col-sm-3 icon-footer" src="/static/img/footer/phone.svg">
                    </img>
                    <div className="col-sm-9"><a className="text-footer">Telpon Kami Sekarang</a> 
                        <p className="text-footer2">+62 811-3307-272</p>
                    </div>
                    
                </div>
                <div className="row card-footer">
                    <img className="col-sm-3 icon-footer" src="/static/img/footer/messages.svg">
                    </img>
                    <div className="col-sm-9"><a className="text-footer">Hubungi lewat email</a> 
                        <p className="text-footer2">hi@dutasparepart.com</p>
                    </div>
                    
                </div>


            </div>
        </aside>
    </div>
);

export default FooterWidgets;
