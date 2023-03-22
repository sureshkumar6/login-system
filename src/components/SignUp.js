import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div className="login-div">
            <h1>Register Here</h1>
            <input type="text" className="inputbox" placeholder="Enter Your Name" />
            <input type="text" className="inputbox" placeholder="Enter Email" />
            <input type="text" className="inputbox" placeholder="Enter Password" />
            <button type="button">Register</button>
            <li><Link to="/">Back</Link></li>
        </div>
    )
}

export default SignUp