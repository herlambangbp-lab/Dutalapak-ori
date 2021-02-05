import React, { Component } from 'react';
import { Select } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import LazyLoad from 'react-lazyload';
import PlaceholderComponent from '../../../layouts/Placeholder';
import ProductResult from '../../../elements/products/ProductSearchResult';
import { connect } from 'react-redux';
import { getProductsByKeyword } from '../../../../store/productDL/action';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPanel: false,
            keyword: '',
        };
    }

    searchByProductName = (keyword, object) => {
        let matches = [];
        let regexp = new RegExp(keyword.toLowerCase(), 'g');

        object.forEach(product => {
            if (product.title.toLowerCase().match(regexp))
                matches.push(product);
        });
        // console.log(regexp);
        return matches;
    };

    handleSearch(e) {
        if (e.target.value !== '') {
            const keyword = e.target.value;
            // console.log(keyword);
            this.props.dispatch(getProductsByKeyword(keyword));
            // console.log(this.props.dispatch(getProductsByKeyword(keyword)));
            this.setState({
                searchPanel: true,
                keyword: e.target.value
            });
        } else {
            // console.log(e.target.value);
            this.setState({ searchPanel: false, searchProducts: [] });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const keyword = this.state.keyword;
        Router.push(`/search?keyword=${keyword}`);
    }

    render() {
        const { searchPanel, keyword } = this.state;
        const {searchResults} = this.props;
        // const searchList = searchResults.ProductList;
        // console.log(searchResults);

        return (
            <form
                className="ps-form--quick-search"
                method="get"
                action="/"
                onSubmit={this.handleSubmit.bind(this)}>
                
                <input
                    className="form-control"
                    type="text"
                    placeholder="I'm shopping for..."
                    onChange={this.handleSearch.bind(this)}
                />
                <button className="text-white" onClick={this.handleSubmit.bind(this)}><img src="/static/img/icon-Search.svg" alt="martfury"/>
                               </button>
                <div
                    className={`ps-panel--search-result${
                        searchPanel && searchPanel === true ? ' active ' : ''
                    }`}>
                    <div className="ps-panel__content">
                        {searchResults && searchResults.length > 0 ? (
                            searchResults.map(product => (
                                <LazyLoad placeholder={<PlaceholderComponent />}>
                                <ProductResult
                                    product={product}
                                    key={product.id}
                                />
                                </LazyLoad>
                            ))
                        ) : (
                            <span>Mohon Tunggu Sedang mencari "{keyword}" ...</span>
                        )}
                    </div>
                    <div className="ps-panel__footer text-center">
                        <Link href="/search">
                        <a>Lihat Semua Product  item</a>
                        </Link>
                    </div>
                </div>
            </form>
        );
    }
}

export default connect(state=> state.product)(SearchHeader);
