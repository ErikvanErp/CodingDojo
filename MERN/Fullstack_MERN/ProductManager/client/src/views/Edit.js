import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const Edit = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    const updateProduct = product => {
        axios.put("http://localhost:8000/api/product/" + id, product)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return(
        isLoaded ?
        <>
            <h2>Edit a Product</h2>
            <ProductForm initialValues={ product } onSubmitAction={ updateProduct }/>
        </> :
        <p></p>
    )
}

export default Edit;