import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';
import DeleteAuthorButton from '../components/DeleteAuthorButton';

const Main = props => {
    const [authors, setAuthors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect((()=> {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }), []);

    const removeFromDOM = (authorId) => {
        const newAuthors = authors.filter(author => author._id !== authorId);
        setAuthors(newAuthors);
    }

    const authorList = authors.map( (author, idx) => 
        <tr key={ idx }>
            <td>{ author.name }</td>
            <td>
                <button onClick={() => navigate("/edit/" + author._id)}>
                    Edit
                </button>
                <DeleteAuthorButton authorId={ author._id } successAction={ () => removeFromDOM(author._id) }/>
            </td>
        </tr>
    );

    return (
        <div>
            <h1>Favorite authors</h1>
            <Link to="/new">Add an Author</Link>
            <h3>We have quotes by:</h3>
            {
                isLoaded ?
                <table>
                    <thead>
                        <tr>
                            <td>Author</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        { authorList }
                    </tbody>
                </table> 
                :
                <p></p>
            }
        </div>
    )
}

export default Main;