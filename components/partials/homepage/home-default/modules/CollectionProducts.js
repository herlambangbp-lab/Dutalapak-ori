import React from 'react';
import { carouselStandard } from '../../../../../utilities/carousel-helpers';
import Product from '../../../../elements/products/Product';
import Slider from 'react-slick';

const CollectionProducts = ({ products }) => (
    <div>
        {products.length>1?
        <Slider
        {...carouselStandard}
            infinite={products.length > 7 ? true: false} 
            className="ps-carousel outside">
            {products.map(product => (
                <div  key={product.ProductId}>
                    <Product product={product} />
                </div>
            ))}
            </Slider>    
            :         
            <img className="img-loading" src="/static/img/loading-dl.svg" />
        }
        {/* <Slider 
            {...carouselStandard} 
            infinite={products.length > 7 ? true: false} 
            className="ps-carousel outside">
            {products.map(product => (
                <div className="item" key={product.ProductId}>
                    <Product product={product} />
                </div>
            ))}
        </Slider> */}
    </div>
);

export default CollectionProducts;
