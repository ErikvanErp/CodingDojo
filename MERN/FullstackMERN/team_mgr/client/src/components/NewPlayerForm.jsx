import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPlayerForm = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/players", { 
            "name": name, 
            "position": position, 
            "games": [0,0,0]
        })
            .then(res => navigate("/players/list"))
            .catch(err => console.log(err.response.data.errors));
    }

    return (
        <div>
            <h3>Add Player</h3>
            <form onSubmit={ handleSubmit }>
                <p>
                    <label>Player Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} value={ name } />
                </p>
                <p>
                    <label>Position:</label>
                    <input type="text" onChange={e => setPosition(e.target.value)} value={ position } />
                </p>
                {
                    name.length > 1 ?
                    <input type="submit" value="Add"/> :
                    <p></p>
                }
            </form>
        </div>
    )
}

export default NewPlayerForm;
