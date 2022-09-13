import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const removeFromDOM = (id) => {
        setProducts(products.filter(product => product._id != id));
    }

    useEffect(()=>{
        setIsLoaded(false);
        axios.get('http://localhost:8000/api/products')
            .then( res => {
                setProducts(res.data);
                setIsLoaded(true);
            })
            .catch( err => console.log("Error fetching products: ", err));
    }, []);

    const initialValues = {
        Title : "",
        Price: 0,
        Description: ""
    };

    const postNewProduct = product => {
        axios.post("http://localhost:8000/api/product", product)
            .then(res => setProducts([...products, res.data]))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2>Add a New Product</h2>
            <ProductForm initialValues = { initialValues } onSubmitAction = { postNewProduct }/>
            <hr/>
            {
                isLoaded ? 
                <ProductList products={ products } removeFromDOM={ removeFromDOM }/> : 
                <p></p>
            }
        </div>
    )
}

export default Main;