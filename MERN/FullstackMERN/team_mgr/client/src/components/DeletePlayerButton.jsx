import React from 'react';
import axios from 'axios';

const DeletePlayerButton = (props) => {
    const { player, successAction } = props;

    const deletePlayer = () => {
        if (window.confirm("Are you sure you want to remove "+ player.name + "?")) {
            axios.delete("http://localhost:8000/api/players/" + player._id)
                .then(res => successAction())
                .catch(err => console.log(err));
        }
    }

    return (
        <button onClick={ deletePlayer }>
            Delete
        </button>
    )
}

export default DeletePlayerButton;