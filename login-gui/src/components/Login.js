import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (<div className="login-div">
        <h1>Login Here</h1>
        <input type="text" className="inputbox" placeholder="Enter Email" />
        <input type="text" className="inputbox" placeholder="Enter Password" />
        <button type="button">Login</button>
        <li className="backLink"><Link to="/">Back</Link></li>
    </div>
    )
}

export default Login;