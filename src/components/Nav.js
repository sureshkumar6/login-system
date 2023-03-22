import React from "react";
import { Link } from "react-router-dom";
import { MdLogin } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { HiTable } from 'react-icons/hi';

const Nav = () => {
    return (
        <div className="navBar">
            <ul>
                <li><Link to="/"> <AiOutlineHome /> Home</Link></li>
                <li><Link to="/Login">Login <MdLogin /></Link></li>
                <li><Link to="/register">Sign Up <HiTable /></Link></li>
            </ul>
        </div>
    )
}

export default Nav