import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        setIsLoaded(false);
        axios.get('http://localhost:8000/api/products')
            .then( res => {
                setProducts(res.data);
                setIsLoaded(true);
            })
            .catch( err => console.log("Error fetching products: ", err));
    }, []);

    return (
        <div>
            <ProductForm />
            <hr/>
            {
                isLoaded ? 
                <ProductList products={ products }/> : 
                <p></p>
            }
        </div>
    )
}

export default Main;