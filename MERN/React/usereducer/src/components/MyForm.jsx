import React, { useReducer } from "react";

const initialState = {
    firstName:  { value: '', error: null },
    lastName:   { value: '', error: null },
    email:      { value: '', error: null }
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const MyForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = validators[name](value);
        dispatch({
            type: name,
            payload: {value, error}
        })
    }
        
    const nameValidator = (value) => {
        if ( value.length < 2){
            return "Must have at least 2 characters";
        } else {
            return null;
        }
    }
    const emailValidator = (value) => {
        if ( value.length < 5){
            return "Must have at least 5 characters";
        } else {
            return null;
        }
    }
    const validators = {
        firstName: nameValidator,
        lastName: nameValidator,
        email: emailValidator 
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" value={ state.firstName.value } onChange = { handleChange } className="form-control"/>
                { state.firstName.error ? <p style={{color:"red"}}>{ state.firstName.error }</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" value={ state.lastName.value } onChange={ handleChange } className="form-control"/>
                { state.lastName.error ? <p style={{color:"red"}}>{ state.lastName.error }</p> : ""}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name="email" value= {state.email.value } onChange={ handleChange } className="form-control"/>
                { state.email.error ? <p style={{color:"red"}}>{ state.email.error }</p> : ""}
            </div>
        </form>
    )
}
export default MyForm;