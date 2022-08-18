import { Link } from "react-router-dom";
import Loader from "../utils/Loader";
import useFetch from "../utils/useFetch";
import ProductCard from "./ProductCard";
import React, { useState } from 'react';
import Pagination from 'rc-pagination';
import '../assets/index.less';
import '../rc-pagination/assets/index.css';
import { useEffect } from "react";

const AllCategories = () => {
    const { data: products, loading } = useFetch('https://fakestoreapi.com/products');
    const [current, setCurrent] = useState(1);
    const [pagedItems, setPageItems] = useState(null);

    const onChange = page => {
        setCurrent(page);
        setPageItems(products.slice((page - 1) * 10, page * 10), 'wei')
    };

    useEffect(() => {
        products && setPageItems(products.slice(0, 10));
    }, [products])


    return (
        <div>
            {
                loading && <Loader />
            }
            <div className="my-5">
                {
                    pagedItems && 
                        <div>
                            <div className="row">
                                {
                                    pagedItems.map((product, i) => {
                                        return (
                                            <div className="col-3" key={i}>
                                                <Link to={`/shop/${i}`}>
                                                    <ProductCard product={product}></ProductCard>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="row mt-5">
                                <Pagination
                                className="pagination"
                                onChange={onChange}
                                current={current}
                                total={20}
                                />
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}
 
export default AllCategories;