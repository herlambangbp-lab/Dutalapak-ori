import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/cart/action';
import { removeWishlistItem } from '../../../store/wishlist/action';
import Link from 'next/link';
import { Rate } from 'antd';
import ProductCart from '../../elements/products/WishProductCart';
// import { removeWishlistItem } from '../../../store/wishlist/action';
class Wishlist extends Component {
    constructor(props) {
        super(props);
    }

    // handleAddItemToCart = (e, product) => {
    //     console.log(product);
    //     // console.log(e);
    //     // this.props.dispatch(addItem(product));
    // };

    handleRemoveWishListItem = (e, product) => {
        e.preventDefault();
        this.props.dispatch(removeWishlistItem(product));
    };

    render() {
        const { wishlistItems } = this.props;
        return (
            <div className="ps-section--shopping ps-whishlist">
                <div className="container">
                    <div className="ps-section__header">
                        <h1>Wishlist</h1>
                    </div>
                    <div className="ps-section__content">
                        {wishlistItems && wishlistItems.length === 0 ? (
                            <div className="alert alert-danger" role="alert">
                                Wishlist is empty!
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table ps-table--whishlist">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Product name</th>
                                            <th>Unit Price</th>
                                            {/* <th>Vendor</th> */}
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlistItems.map(product => (
                                            <tr key={product.id}>
                                                <td>
                                                    <a
                                                        href="#"
                                                        onClick={e =>
                                                            this.handleRemoveWishListItem(
                                                                e,
                                                                product
                                                            )
                                                        }>
                                                        <i className="icon-cross"></i>
                                                    </a>
                                                </td>
                                                <td>
                                                    <ProductCart
                                                        product={product}
                                                    />
                                                </td>
                                                <td className="price">
                                                    Rp. {product.LowPrice}
                                                </td>
                                                {/* <td>{product.vendor}</td> */}
                                                <td>
                                                    <Link
                                                       
                                                        href=""
                                                        href="/product/[pid]"
                                                        as={`/product/${product.ProductCode}`}
                                                        // onClick={e =>
                                                        //     this.handleAddItemToCart(
                                                        //         e,
                                                        //         product
                                                        //     )
                                                        // }
                                                        >
                                                        <a  className="ps-btn text-white">
                                                        Detail Product</a>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.wishlist;
};
export default connect(mapStateToProps)(Wishlist);
