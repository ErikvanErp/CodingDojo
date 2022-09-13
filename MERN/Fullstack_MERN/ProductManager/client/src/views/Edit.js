import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDesc(res.data.Description);
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/" + id, 
        {
            Title: title, Price: price, Description: desc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return(
        <>
            <h2>Edit a Product</h2>
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
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default Edit;