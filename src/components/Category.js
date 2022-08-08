import { useParams, Link } from 'react-router-dom'; 
import Loader from '../utils/Loader';
import useFetch from '../utils/useFetch';
import ProductCard from './ProductCard';

const Category = () => {
    const { id } = useParams();
    const { data: products, loading } = useFetch(`https://fakestoreapi.com/products/category/${id}`);
    console.log(loading)

    return (
        <div className='mt-5'>
            {
                loading ?
                <Loader></Loader> :
                (
                    <div className="container">
                        <div className="row justify-space-between">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">{id}</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="row mt-10">
                                {
                                    products.map((product, i) => {
                                        return (
                                            <div className="col-3" key={i}>
                                                <Link to={`/shop/${product.id}`}>
                                                    <ProductCard
                                                    product={product}></ProductCard>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default Category;