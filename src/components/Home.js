import React from "react";
import useFetch from "../utils/useFetch";

import Loader from '../utils/Loader';

const HomeSwiper = React.lazy(() => import("../components/HomeSwiper"));

const Home = () => {
    const { data: products, loading } = useFetch('https://fakestoreapi.com/products');
    const { data: user, loading: userLoading } = useFetch('https://fakestoreapi.com/users/1');
    console.log(user)

    return (
        <div className="container my-5">
            <React.Suspense fallback={<Loader></Loader>}>
                {
                    products && <HomeSwiper
                                products={products.slice(10)}
                                title='Best Sellers'></HomeSwiper>
                }
                {
                    products && <div className="my-5">
                                    <HomeSwiper
                                    products={products}
                                    title='Shop Suggestions'></HomeSwiper>
                                </div>
                }
                {
                    products && <HomeSwiper
                                products={products}
                                title='Most Discount'></HomeSwiper>
                }
            </React.Suspense>
        </div>
    );
}
 
export default Home;