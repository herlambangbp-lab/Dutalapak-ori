import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { profilReq, logOut} from '../../../../store/auth/action';
import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class ElectronicHeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const { auth } = this.props;
        // console.log(`ini header guys`);
        
        // console.log(this.props);

        // this.props.dispatch(profilReq(auth));
        // if (auth.AccessToken == null) {
        //     this.props.dispatch(logOut());
        // }

    }

    render() {
        const { wishlist, auth } = this.props;

        // console.log(auth);
        return (
            <div className="header__actions">
                <Link href="/account/wishlist">
                    <a className="header__extra text-white">
                        <i className="icon-heart text-white"></i>
                        <span>
                            <i>{wishlist.wishlistTotal}</i>
                        </span>
                    </a>
                </Link>
                <MiniCart />
                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinks isLoggedIn={true} />
                ) : (
                    <AccountQuickLinks isLoggedIn={false} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(ElectronicHeaderActions);
