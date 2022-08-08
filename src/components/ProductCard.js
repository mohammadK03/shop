const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img 
                src={product.image} 
                alt="" />
            </div>
            <div className="des-container">
                <p className="product-description"> {product.title} </p>
            </div>
            <p className="price"> ${ product.price } </p>
        </div>
    );
}
 
export default ProductCard;