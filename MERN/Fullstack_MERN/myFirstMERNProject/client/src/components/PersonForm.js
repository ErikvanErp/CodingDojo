import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/person", { firstName, lastName })
            .then(res => {
                console.log("Response data: ", res.data);
                setFirstName("");
                setLastName("");
                })
            .catch(err => console.log("Error: ", err));
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
            </p>
            <p>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </p>
            <button type="submit">Add</button>
        </form>
    )
} 

export default PersonForm;