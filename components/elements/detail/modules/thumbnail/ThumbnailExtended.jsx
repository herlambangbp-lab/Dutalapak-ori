import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import Lightbox from 'react-image-lightbox';
import { baseUrl, imageUrl } from '../../../../../repositories/RepositoryIndex';
import { isStaticData } from '../../../../../utilities/app-settings';
import ThumbnailImage from '../elements/ThumbnailImage';
import StaticThumbnailImage from '../elements/StaticThumbnailImage';

class ThumbnailExtended extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
            photoIndex: 0,
            isOpen: false,
        };
    }

    handleOpenLightbox = (e, imageIndex) => {
        e.preventDefault();
        this.setState({ photoIndex: imageIndex, isOpen: true });
    };

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const variantSetting = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
            ],
        };
        const { product } = this.props;
        const { photoIndex, isOpen } = this.state;
        // console.log(productImages);
        
        const productImages = [];
        product.ImageList.map(variant => {
            if (isStaticData === false) {
                productImages.push(`${imageUrl}${variant.ImageProductPath}`);
            } else {
                productImages.push(variant.url);
            }
        });
        // console.log(productImages);

        return (
            // <h1>gambar</h1>
            <div className="ps-product__thumbnail" data-vertical="false">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={slider => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            {product.ImageList.map((variant, index) => (
                                <div className="item" key={variant.id}>
                                    <a
                                        href="#"
                                        onClick={e =>
                                            this.handleOpenLightbox(e, index)
                                        }>
                                        <ThumbnailImage url={variant.ImageProductPath}/>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={slider => (this.slider2 = slider)}
                    swipeToSlide={true}
                    arrows={false}
                    slidesToShow={6}
                    vertical={false}
                    infinite={false}
                    focusOnSelect={true}
                    className="ps-product__variants">
                    {product.ImageList.map(variant => (
                        <div className="item" key={variant.id}>
                            <ThumbnailImage url={variant.ImageProductPath}/>
                        </div>
                    ))}
                </Slider>
                {isOpen && (
                    <Lightbox
                        mainSrc={productImages[photoIndex]}
                        nextSrc={
                            productImages[
                                (photoIndex + 1) % productImages.length
                            ]
                        }
                        prevSrc={
                            productImages[
                                (photoIndex + productImages.length - 1) %
                                    productImages.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + productImages.length - 1) %
                                    productImages.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + 1) % productImages.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default ThumbnailExtended;
