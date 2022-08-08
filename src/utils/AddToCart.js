import axios from 'axios';

export function addToCart(item) {
    axios.post('https://fakestoreapi.com/carts', {
        userId:5,
        date:'2020-02-03',
        products:[{productId:5,quantity:1},{productId:1,quantity:5}]
    })
        .then(data => {
            console.log(data)
            return true;
        })
        .catch(error => {
            console.log(error)
            return false
        })
}   