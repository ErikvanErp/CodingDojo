import { useState } from "react";

const MyForm = props => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value && e.target.value.length < 2 ){
            setFirstNameError("First Name must have at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value && e.target.value.length < 2 ){
            setLastNameError("Last Name must have at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value && e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long");
        } else {
            setEmailError("");
        }
    }
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value && e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    }
    const [confirmPwd, setConfirmPwd] = useState("");
    const [confirmPwdError, setConfirmPwdError] = useState("");
    const handleconfirmPwd = (e) => {
        setConfirmPwd(e.target.value);
        if(e.target.value && e.target.value != password){
            setConfirmPwdError("Confirm Password is not equal to password");
        } else {
            setConfirmPwdError("");
        }
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPwd("");
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" onChange={ handleFirstName } value={ firstName } className="form-control"/>
                    { firstNameError ? <p style={{color:"red"}}>{ firstNameError }</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" onChange={ handleLastName } value = { lastName } className="form-control"/>
                    { lastNameError ? <p style={{color:"red"}}>{ lastNameError }</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={ handleEmail } value={ email } className="form-control"/>
                    { emailError ? <p style={{color:"red"}}>{ emailError }</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" onChange={ handlePassword } value = { password} className="form-control"/>
                    { passwordError ? <p style={{color:"red"}}>{ passwordError }</p> : "" }
                </div>
                <div className="form-group">
                    <label htmlFor="pwd2">Confirm Password</label>
                    <input type="password" id="pwd2" onChange={ handleconfirmPwd} value = { confirmPwd } className="form-control"/>
                    { confirmPwdError ? <p style={{color:"red"}}>{ confirmPwdError }</p> : "" }
                </div>
                <button onClick={ clearForm } className="btn btn-primary mt-3">Clear</button>
            </form>
            <table className="table table-striped mt-3">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{ firstName }</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{ lastName }</td>
                    </tr> 
                    <tr>
                        <td>Email</td>
                        <td>{ email }</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{ password }</td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td>{ confirmPwd }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyForm;