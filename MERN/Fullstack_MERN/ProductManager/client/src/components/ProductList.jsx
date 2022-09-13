import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDOM, products } = props;

    const deleteProduct = id => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => removeFromDOM(id))
            .catch(err => console.log(err));
    }

    const productList = products.map( (product, idx) =>
        <p key= {idx}>
            <Link to={ "/product/" + product._id } >
                { product.Title }
            </Link>  
            <button onClick={ e => {deleteProduct(product._id)}}>Delete</button>
        </p>
    );

    return(
        <div> 
            { productList } 
        </div>
    )
}

export default ProductList;