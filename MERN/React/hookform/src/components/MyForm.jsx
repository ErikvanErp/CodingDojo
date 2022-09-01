import { useState } from "react";

const MyForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

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
                    <input type="text" id="fname" onChange={(e) => setFirstName(e.target.value)} value={ firstName } className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" onChange={(e) => setLastName(e.target.value)} value = { lastName } className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={ email } className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password</label>
                    <input type="password" id="pwd" onChange={(e) => setPassword(e.target.value)} value = { password} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd2">Confirm Password</label>
                    <input type="password" id="pwd2" onChange={(e) => setConfirmPwd(e.target.value)} value = { confirmPwd } className="form-control"/>
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