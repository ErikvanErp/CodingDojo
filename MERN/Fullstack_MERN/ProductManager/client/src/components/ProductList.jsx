import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteProductButton from "./DeleteProductButton";

const ProductList = (props) => {
    const { removeFromDOM, products } = props;

    const productList = products.map( (product, idx) =>
        <p key= {idx}>
            <Link to={ "/product/" + product._id } >
                { product.Title }
            </Link>  
            <DeleteProductButton productId={ product._id } successAction={ () => removeFromDOM(product._id) }/>
        </p>
    );

    return(
        <div> 
            { productList } 
        </div>
    )
}

export default ProductList;