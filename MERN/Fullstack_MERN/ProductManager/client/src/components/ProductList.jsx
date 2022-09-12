import React from "react";
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const products = props.products.map( (product, idx) =>
        <p><Link to={"/product/" + product._id } key= {idx}>{ product.Title }</Link></p>
    );

    return(
        <div> 
            { products } 
        </div>
    )
}

export default ProductList;