import { useParams } from 'react-router-dom';
import axios from 'axios';
import useFetch from '../utils/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../utils/AddToCart';

const Shop = () => {
    const { id } = useParams();
    const { data: product, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);

    const notify = (text) => toast(text, {
        position: toast.POSITION.BOTTOM_RIGHT,
    });

    const cart = {
        userId: 1,
        data: new Date().toLocaleDateString('en-US', {
            year : 'numeric',
            month : 'numeric',
            day : 'numeric',
        }).split(' ').join('-'),
        products: [
            { productId: 1, quantity: 1 }
        ]
    };

    const handleAddToCart = () => {
        if (addToCart(cart)) {
            notify('Product added to cart');
        } else {
            notify('Something went wrong');
        }
    }

    return (
        <div className="shop container">
            <ToastContainer />
            {
                product && (
                    <div className="row">
                        <div className="col-4">
                            <div className="s-image-container">
                                <img 
                                className='sp-image'
                                src={product.image} 
                                alt="" />
                            </div>
                            <div className="image-row">
                                <div className="image">
                                    <img 
                                    src={product.image} 
                                    alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="row mb-5">
                                <h3> { product.title } </h3>
                            </div>
                            <p className='mb-5'> {product.description} </p>
                            <p className='mb-5'> ${ product.price } </p>
                            <button type="button" className="btn btn-outline-primary"
                            onClick={() => handleAddToCart()}>Add to cart</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default Shop;