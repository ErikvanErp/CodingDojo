import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteProductButton from '../components/DeleteProductButton';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

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
            <DeleteProductButton productId={ id } successAction={() => navigate("/products")}/>
        </div>
    )
}

export default Details;