import React from 'react';
import Link from 'next/link';

const HomeAds = () => (
    <div className="ps-home-ads">
        <div className="container">
            {/* <div className="row"> */}
                {/* <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12 "> */}
                    <Link href="#">
                        <a className="ps-collection">
                            <img
                                src="/static/img/DL/bannerlong.png"
                                alt="martfury"
                            />
                        </a>
                    </Link>
                {/* </div> */}

            {/* </div> */}
        </div>
    </div>
);

export default HomeAds;
