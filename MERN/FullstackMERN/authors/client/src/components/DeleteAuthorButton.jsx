import React from 'react';
import axios from 'axios';

const DeleteAuthorButton = (props) => {
    const { authorId, successAction } = props;

    const deleteAuthor = () => {
        axios.delete("http://localhost:8000/api/authors/" + authorId)
            .then(res => successAction())
            .catch(err => console.timeLog(err));
    }

    return (
        <button onClick={ deleteAuthor }>
            Delete
        </button>
    )
}

export default DeleteAuthorButton;