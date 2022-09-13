import React from 'react';
import axios from 'axios';

const DeleteProductButton = (props) => {

    const {productId, successAction} = props;

    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => successAction())
            .catch(err => console.log(err));
    }

    return (
        <button onClick={ deleteProduct }>Delete</button>
    )
}

export default DeleteProductButton;