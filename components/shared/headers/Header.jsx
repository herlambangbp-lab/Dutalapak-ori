import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import MenuDL from '../../elements/menu/MenuDL';
// import { baseUrl } from '../../../repositories/RepositoryIndex';
// import { getKategori } from '../../../store/productDL/action';
// import { isStaticData } from '../../../utilities/app-settings';
// import menuData from '../../../public/static/data/menu';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';
import { stickyHeader } from '../../../utilities/common-helpers';


class Header extends Component {
    constructor({ props }) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // e.preventDefault();
        window.open("https://wa.wizard.id/a83c3b");

      }

    componentDidMount(){


        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }

      }

    

    render() {
        // const {items } = this.state;
        return (
            
            <header
                className="header header--standard "
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p><strong>Ada pertanyaan?</strong> Hubungi kami di live chat 24 jam</p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="#">
                                        <a>Mulai Berjualan</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Download</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <a>Lihat Promo</a>
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/">
                                <a className="ps-logo">
                                <img src="/static/img/logo-sparepart.png" alt="martfury"/>
                               
                                </a>
                            </Link>

                        <MenuDL/>


                
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
                <a className="ps-btn btn-wa text " href="#" onClick={this.handleClick} ><i className="fa fa-whatsapp"></i>&nbsp; Contact us</a>
                
            </header>
        );
    }
}


export default Header;
