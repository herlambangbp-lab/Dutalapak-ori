import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Link from 'next/link';
import Rating from '../../../Rating';
import { Select, Tag, Button } from 'antd';
import { addItem } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';
import { ShareAltOutlined  } from '@ant-design/icons';
// import { , Tooltip } from 'antd';
import DefaultDescription from '../description/DefaultDescription';
const { Option } = Select;

class InformationDefault extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
            quantity: 1,
            productall:'',
            productVariat: '',
            productVariantStoct: '',
            pilihVarian:0,
            harga: '',
            code:'',
            // pesanan: { product: '', variant: ''},
        };
    }

    handleAddItemToCart = e => {
        e.preventDefault();
	    const { productall, productVariat, productVariantStoct, code } = this.state;
        const pesanan = {
            product: productall,
            pilihanVarian: productVariat,
            pilihanStoct: productVariantStoct,
            harga: productVariat.VariantDetailSellPrice,
            codes: code,
        };
        // console.log(pesanan);
        let tempProduct = pesanan;
        tempProduct.quantity = this.state.quantity;
        console.log(pesanan);
        this.props.dispatch(addItem(pesanan));
    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product, codes } = this.props;
        console.log(this.props);
        const data = {
            Title: product.ProductName,
            LowPrice: product.ProductLowPrice,
            Image: product.ImageList[0].ImageProductPath,
            HighPrice: product.ProductHighPrice,
            SellPrice: product.ProductSellPrice,
            ProductCode:  codes,
            ProductId: product.ProductId,
        }
        this.props.dispatch(addItemToWishlist(data));
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    handleChange(value) {
        const { product, currency } = this.props;
        const { productVariantStoct, productVariat, pilihVarian, productall} = this.state;
        // e.preventDefault();
        const productVarian = value;
        const Dproducts = this.props.product.VariantList[0].VariantDetailList[value];
        const Dstoct = Dproducts.stockAvailable;

        this.setState({pilihVarian: 1})
        this.setState({productVariat: Dproducts})
        this.setState({productVariantStoct: Dstoct})
        this.setState({productall: product})
        // this.setState({pesanan: {product: product,variant: productVariat} })
    };
    componentDidMount() {
        const { product, currency, codes } = this.props;
        const { productVariantStoct, productVariat, pilihVarian, productall, code} = this.state;

        const Dproducts = this.props.product.VariantList[0].VariantDetailList[0];
        const Dstoct = Dproducts.stockAvailable;
        this.setState({productVariat: Dproducts})
        this.setState({productVariantStoct: Dstoct})
        this.setState({productall: product})
        this.setState({code: codes})

        // this.setState({pesanan: {} })
        // this.setState({pesanan: {product: product,variant: productVariat} })
        // this.state.productVariatId = 
      }


    render() {
        const { product, currency, code } = this.props;
        const { productVariantStoct, productVariat, pilihVarian, pesanan} = this.state;
        // this.handleChange(0);
        // console.log(this.state);
        // console.log(this.state);
        const products = product;
        // console.log(products);
        
        if (pilihVarian == 0) {
            // const products = productVariat;
            return (
                <div className="ps-product__info">
                  
                    <div className="row">
                            <div className="col-sm-9">
                                <strong><h1>{products.ProductName}</h1></strong>
                            </div>
                            <div className="col-sm-3">
                            <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/">
                                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdutasparepart.co.id%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                                <Button type="primary" className="posRight" icon={<ShareAltOutlined />}>
                                    Bagikan
                                </Button>
                                </a>
                                </div>    
                            </div>
                    </div>
                    

                    <div className="ps-product__meta">

                        <div className="ps-product__rating">
                            <Rating />
                            <span>(1 review) </span>
                            - Terjual 77 Product - 3446x Dilihat
                        </div>
                    </div>
            
                        {products.ProductPreOrder === true ? (
                            <h4 className="ps-product__price sale">
                        
                                <del className="mr-2">
                                    {currency ? currency.symbol : '$'}
                                    {products.sale_price}
                                </del>
                                {currency ? currency.symbol : '$'}
                                {products.price}
                            </h4>
                        
                        ) : (
                        
                            <div className="ps-product__price row">
                            <div className="col-sm-2">
                                <h4>Harga    </h4>
                            </div>
                            <h4>
                                {currency ? currency.symbol : '$'}
                                . 
                                {products.ProductSellPrice}
                                {/* {productVariat.VariantDetailSellPrice} */}
                            </h4>
                            </div>
                        )}

            
                    <div className="ps-product__desc">
                    </div>
                    <div className="ps-product__desc row">
                        <div className="col-sm-2">
                            Varians
                        </div> 

                                <Select
                                    defaultValue={products.VariantList[0].VariantDetailList[0].VariantDetailName}
                                    onChange={this.handleChange}
                                    >
                                    {products.VariantList[0].VariantDetailList.map((item,index) => (
                                        // console.log(item.VariantDetailList);
                                    <Option
                                        value={index}
                                        // key={item.VariantDetailId}
                                        >
                                            {item.VariantDetailName}
                                    </Option>
                                    ))}

                                </Select>
                    
                    </div>
                    <div className="ps-product__shopping row">
                        <figure className="col-sm-5 row">
                            <figcaption className="col-sm-4">Jumlah</figcaption>
                            <p className="text-white">asd</p>
                            <div className=" form-group--number ">
                                <button
                                    className="up"
                                    onClick={this.handleIncreaseItemQty.bind(this)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="down"
                                    onClick={this.handleDecreaseItemQty.bind(this)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    min
                                    className="form-control"
                                    type="text"
                                    min={productVariantStoct.MinimumOrder}
                                    max={productVariantStoct.Amount}
                                    placeholder={this.state.quantity}
                                    disabled
                                />
                                
                            </div>
                        
                        </figure>
                        <div className="col-sm-5">
                            <h5>{products.VariantList[0].VariantDetailList[0].stockAvailable.Amount} barang tersisa minimal pembelian {products.VariantList[0].VariantDetailList[0].stockAvailable.MinimumOrder} barang</h5>
                        </div>
                    </div>

                    <div className="ps-product__shopping row">
                        <a
                            className="ps-btn col-sm-10"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Beli Sekarang
                        </a>
                        {/* <br/> */}
                
                        <a
                            className="icon-bag2 ps-btn ps-btn--black col-sm-5"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            &nbsp; Masukkan Keranjang
                        </a>
                        <a
                                className="icon-heart ps-btn ps-btn--black col-sm-5"
                                href="#"
                                onClick={this.handleAddItemToWishlist.bind(this)}>
                                &nbsp; Favoritkan
                                {/* <i className="icon-heart"></i> */}
                            </a>
                    </div>

                    <div className="ps-product__actions-mobile">
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Keranjang
                        </a>
                        <a
                            className="ps-btn text-white"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Beli Sekarang
                        </a>
                    </div>
                    {/* <DefaultDescription product={product}/>  */}
                </div>
            );
        } else {
            const products = productVariat;
            return (
                <div className="ps-product__info">
                    <strong><h1>{product.ProductName}</h1></strong>
                    <div className="ps-product__meta">

                        <div className="ps-product__rating">
                            <Rating />
                            <span>(1 review) </span>
                            - Terjual 77 Product - 3446x Dilihat
                        </div>
                    </div>
            
                        {products.ProductPreOrder === true ? (
                            <h4 className="ps-product__price sale">
                        
                                <del className="mr-2">
                                    {currency ? currency.symbol : '$'}
                                    {products.sale_price}
                                </del>
                                {currency ? currency.symbol : '$'}
                                {products.VariantDetailSellPrice}
                            </h4>
                        
                        ) : (
                        
                            <div className="ps-product__price row">
                            <div className="col-sm-2">
                                <h4>Harga    </h4>
                            </div>
                            <h4>
                                {currency ? currency.symbol : '$'}
                                . 
                                {products.VariantDetailSellPrice}
                                {/* {productVariat.VariantDetailSellPrice} */}
                            </h4>
                            </div>
                        )}

            
                    <div className="ps-product__desc">
                    </div>
                    <div className="ps-product__desc row">
                        <div className="col-sm-2">
                            Varians
                        </div>
                            {/* className="col-6" */}
                                <Select
                                    
                                    // placeholder={'Pilih varian'}
                                    defaultValue={product.VariantList[0].VariantDetailList[0].VariantDetailName}
                                    onChange={this.handleChange}
                                    // onChange={()=>{console.log('tes');}}
                                    >
                                    {product.VariantList[0].VariantDetailList.map((item,index) => (
                                        // console.log(item.VariantDetailList);
                                    <Option
                                        value={index}
                                        // key={item.VariantDetailId}
                                        >
                                            {item.VariantDetailName}
                                    </Option>
                                    ))}

                                </Select>
                    
                    </div>
                    <div className="ps-product__shopping row">
                        <figure className="col-sm-5 row">
                            <figcaption className="col-sm-4">Jumlah</figcaption>
                            <p className="text-white">asd</p>
                            <div className=" form-group--number ">
                                <button
                                    className="up"
                                    onClick={this.handleIncreaseItemQty.bind(this)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="down"
                                    onClick={this.handleDecreaseItemQty.bind(this)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                                <input
                                    min
                                    className="form-control"
                                    type="text"
                                    min={productVariantStoct.MinimumOrder}
                                    max={productVariantStoct.Amount}
                                    placeholder={this.state.quantity}
                                    disabled
                                />
                                
                            </div>
                        
                        </figure>
                        <div className="col-sm-5">
                            <h5>{products.stockAvailable.Amount} barang tersisa minimal pembelian {products.stockAvailable.MinimumOrder} barang</h5>
                        </div>
                    </div>

                    <div className="ps-product__shopping row">
                        <a
                            className="ps-btn col-sm-10"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Beli Sekarang
                        </a>
                        {/* <br/> */}
                
                        <a
                            className="ps-btn ps-btn--black col-sm-5"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Masukkan Keranjang
                        </a>
                        <a
                                className="ps-btn ps-btn--black col-sm-5"
                                href="#"
                                onClick={this.handleAddItemToWishlist.bind(this)}>
                                Favorit
                                {/* <i className="icon-heart"></i> */}
                            </a>
                    </div>

                    <div className="ps-product__actions-mobile">
                        <a
                            className="ps-btn ps-btn--black"
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Masukkan Keranjang
                        </a>
                        <a
                            className="ps-btn "
                            href="#"
                            onClick={this.handleAddItemToCart.bind(this)}>
                            Beli Sekarang
                        </a>
                    </div>
                    <DefaultDescription product={product}/> 

                </div>
            );
        }

    }
}

const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(InformationDefault);




