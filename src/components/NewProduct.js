import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    title: yup.string().required(),
    price: yup.string().required(),
    description: yup.string().required(),
    image: yup.string().required(),
    category: yup.string().required(),
}).required();

const NewProduct = () => {
    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const notify = () => toast('Product added successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
    });

    const Navigate = useNavigate();

    const onSubmit = (data) => {

        axios.post('https://fakestoreapi.com/products', data)
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
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-3">
                    <label className="form-label">Title:</label>
                    <input className="form-control" type="text" {...register('title', {required: true})} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Price:</label>
                    <input className="form-control" type="text" {...register('price', {required: true})} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Description:</label>
                    <input className="form-control" type="text" {...register('description', {required: true})} />
                </div>
                <div className="mt-3">
                    <label className="form-label">Image:</label>
                    <input className="form-control" type="text" {...register('image', {required: true})} />
                </div>
                <div className="my-3">
                    <label className="form-label">Category:</label>
                    <input className="form-control" type="text" {...register('category', {required: true})} />
                </div>

                <p className="error">{errors.title && 'فیلد نام اجباری است.'}</p>
                <p className="error">{errors.price && 'فیلد قیمت اجباری است.'}</p>
                <p className="error">{errors.description && 'فیلد توضیحات اجباری است.'}</p>
                <p className="error">{errors.image && 'فیلد تصویر اجباری است.'}</p>
                <p className="error">{errors.category && 'فیلد دسته بندی اجباری است.'}</p>

                <button className="btn btn-outline-primary"
                type="submit">Add</button>
            </form>
        </div>
    );
}
 
export default NewProduct;