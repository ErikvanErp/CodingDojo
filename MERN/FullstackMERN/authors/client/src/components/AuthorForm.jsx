import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorForm = (props) => {
    const { initialValues, onSubmitAction, errors } = props;
    const [ name, setName ] = useState(initialValues.name);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitAction({ name });
    }
        
    return (
        <div>
           
            { 
                "name" in errors ?
                <p style={{color:"red"}}>{ errors.name.message} </p> :
                <p></p>
            }
            <form onSubmit={ handleSubmit }>
                <label>Name</label>
                <input type="text" onChange={e => setName(e.target.value)} value={ name }/>
                <input type="submit"></input>
            </form>

            <button onClick={ () =>  navigate("/") }>
                Cancel
            </button>
        </div>
    )
}

export default AuthorForm;