import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const deleteThisProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => navigate("/products"))
            .catch(err => console.log(err));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h3>{ product.Title }</h3>
            <p>Price: ${ product.Price }</p>
            <p>Description: { product.Description }</p>
            <button onClick={ deleteThisProduct }>Delete</button>
        </div>
    )
}

export default Details;