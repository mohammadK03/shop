import axios from 'axios';

const addToCart = async (item) => {
    const resp = axios.post('https://fakestoreapi.com/carts', {
        userId:5,
        date:'2020-02-03',
        products:[{productId:5,quantity:1},{productId:1,quantity:5}]
    })

    return resp;
}

export default addToCart;