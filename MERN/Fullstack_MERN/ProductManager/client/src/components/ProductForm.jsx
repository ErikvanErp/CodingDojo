import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product", 
        {
            Title: title, Price: price, Description: desc
        })
            .then(res => {
                console.log(res);
                setTitle("");
                setPrice(0);
                setDesc("");
            })
            .catch(err => console.lof(err));
    }

    return(
        <>
            <h2>Add a New Product</h2>
            <form onSubmit={ handleSubmit }>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange={ e => setTitle(e.target.value) } value={ title }/> 
                </p>
                <p>
                    <label>Price: </label>
                    <input type="number" onChange={ e => setPrice(e.target.value )} value={ price }/> 
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={ e => setDesc(e.target.value)} value={ desc }/> 
                </p>
                <button type="submit">Add</button>
            </form>

        </>
    )
}

export default ProductForm;