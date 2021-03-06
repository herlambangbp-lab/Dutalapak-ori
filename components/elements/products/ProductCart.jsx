import React from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl, imageUrl } from '../../../repositories/RepositoryIndex';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="#">
                                    {/* <Link href="/product/[pid]" as={`/product/${product.codes}`}> */}
                    <a>
                        <LazyLoad>
                            <img
                                src={
                                    isStaticData === false
                                        // ? `http://182.23.68.188:7542/ml3bu${product.Image}`
                                        ? `${imageUrl}${product.product.ImageList[0].ImageProductPath}`
                                        
                                        : product.Image
                                }
                                alt="martfury"
                            />
                        </LazyLoad>
                    </a>
                </Link>
            </div>
            <div className="ps-product__content">
                <Link href="#" >
                                {/* <Link href="/product/[pid]" as={`/product/${product.codes}`}> */}
                    <a className="ps-product__title">{product.pilihanVarian.stockAvailable.ProductName}+{product.pilihanVarian.stockAvailable.ProductVarianName}</a>
                </Link>
            </div>
        </div>
    );
};

export default ProductCart;
