import React from 'react';
import Link from 'next/link';

const HomeTopCategories = () => (
    <div className="ps-top-categories">
        <div className="container">
            
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-prodpil.svg" alt="martfury" />
                        <p>Product Pilihan</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-cartmall.svg" alt="martfury" />
                        <p>Belanja Grosir</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-givebox.svg" alt="martfury" />
                        <p>Bayar Ditempat</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-ongkir.svg" alt="martfury" />
                        <p>Gratis Ongkir</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-goldentix.svg" alt="martfury" />
                        <p>Cashback & Voucher</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="#">
                            <a className="ps-block__overlay"></a>
                        </Link>
                        <img src="/static/img/icons/icon-totebag.svg" alt="martfury" />
                        <p>Semua Promo</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
);

export default HomeTopCategories;
