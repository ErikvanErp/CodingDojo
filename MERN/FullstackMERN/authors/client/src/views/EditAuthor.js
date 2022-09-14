import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

const EditAuthor = props => {
    const { id } = useParams();
    const [author, setAuthor] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/" + id)
            .then(res => {
                setAuthor(res.data);
                setIsLoaded(true);
            })
            .catch(err => setErrors(err.response.data.errors));
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res => setErrors({}))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <>
            <h1>Favorite authors</h1>
            <Link to="/" >
                Home
            </Link>
            <h3>Edit this author</h3>
            {
                isLoaded ? 
                <AuthorForm initialValues={ author } onSubmitAction={ updateAuthor } errors={ errors }/>
                :
                <p></p> 
            }
        </>
    )
}

export default EditAuthor;