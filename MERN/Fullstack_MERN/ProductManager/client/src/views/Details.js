import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = (props) => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data);})
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
        {
        product ? 
            <div>
                <h3>{ product.Title }</h3>
                <p>Price: ${ product.Price }</p>
                <p>Description: { product.Description }</p>
            </div>
            :
            <div>loading</div>
        } 

        </div>
    )
}

export default Details;