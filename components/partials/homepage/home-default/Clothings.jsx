import React, { Component } from 'react';
import Link from 'next/link';
// import Slider from 'react-slick';
// import Product from '../../../elements/products/Product';
// import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';
import CollectionProducts from './modules/CollectionProducts';

class Clothings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            currentCollection: 'newArrivals',
        };
    }

    handleChangeProduct(e, currentItem, slug) {
        e.preventDefault();
        const { collections } = this.props;
        const items = getColletionBySlug(collections, slug);
        this.setState({
            currentCollection: currentItem,
            items: items,
        });
    }

    render() {
        // console.log(this.props);
        const { collections, collectionSlug } = this.props;
        const { currentCollection, items } = this.state;
        const products = getColletionBySlug(collections, collectionSlug);
        const sectionLinks = [
            {
                title: 'Terbaru',
                name: 'newArrivals',
                slug: 'ProductList',
            },
            {
                title: 'Rekomendasi',
                name: 'bestSeller',
                slug: 'ProductRecomended',
            },
            {
                title: 'Favorit',
                name: 'mostPopular',
                slug: 'ProductBestSeller',
            },
        ];
        let sectionItems;
        if (currentCollection !== 'newArrivals') {
            sectionItems = <CollectionProducts products={items} />;
        } else {
            if (products && products.length > 0) {
                sectionItems = <CollectionProducts products={products} />;
            } else {
                sectionItems = <p>No Record(s)</p>;
            }
        }
        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="container">
                    <div className="ps-section__header">
                     
                        <ul className="ps-section__links">
                            {sectionLinks.map(link => (
                                <li
                                    className={
                                        currentCollection === link.name
                                            ? 'active'
                                            : ''
                                    }
                                    key={link.name}>
                                    <a
                                        onClick={e =>
                                            this.handleChangeProduct(
                                                e,
                                                link.name,
                                                link.slug
                                            )
                                        }>
                                        {link.title}
                                    </a>
                                </li>
                            ))}

                        </ul>
                        <Link href="/shop/[list]" as={`/shop/ProductBestSeller`}>
                            <a>Lihat Semua </a>
                        </Link>
                    </div>
                    <div className="ps-section__content">{sectionItems}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.collectionDL;
};

export default connect(mapStateToProps)(Clothings);
// export default connect(state => state.collection)(Clothings);
