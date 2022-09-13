import React, { useState } from 'react';

const ProductForm = (props) => {
    const { initialValues, onSubmitAction } = props;
    const [title, setTitle] = useState(initialValues.Title);
    const [price, setPrice] = useState(initialValues.Price);
    const [desc, setDesc] = useState(initialValues.Description);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitAction({
            Title: title, 
            Price: price, 
            Description: desc
        });
        setTitle("");
        setPrice(0);
        setDesc("");
    }

    return(
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm;