import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    const notify = () => toast('Product added successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
    });

    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const product = {
            title,
            price,
            description,
            image,
            category
        }

        axios.post('https://fakestoreapi.com/products', product)
            .then(res => {
                notify();
                setTimeout(() => {
                    Navigate('/');
                }, 1000);
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div className="new-product container mt-5">
            <ToastContainer />

            <h3 className="text-center mb-5"> Add your new product </h3>
            <form className="form" onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label className="form-label">Title:</label>
                    <input className="form-control" type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label className="form-label">Price:</label>
                    <input className="form-control" type="text" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label className="form-label">Description:</label>
                    <input className="form-control" type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className="mt-3">
                    <label className="form-label">Image:</label>
                    <input className="form-control" type="text" onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className="my-3">
                    <label className="form-label">Category:</label>
                    <input className="form-control" type="text" onChange={(e) => setCategory(e.target.value)}/>
                </div>
                <button className="btn btn-outline-primary"
                type="submit">Add</button>
            </form>
        </div>
    );
}
 
export default NewProduct;