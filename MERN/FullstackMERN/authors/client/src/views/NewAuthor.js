import React, { useState } from 'react';
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const NewAuthor = props => {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const postNewAuthor = author => {
        axios.post('http://localhost:8000/api/authors', author)
            .then(res => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    const emptyAuthor = { name: "" };

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/" >
                Home
            </Link>
            <h3>Add this author</h3>
            <AuthorForm initialValues={ emptyAuthor } onSubmitAction={ postNewAuthor } errors={ errors }/>
        </div>
    )
}

export default NewAuthor;