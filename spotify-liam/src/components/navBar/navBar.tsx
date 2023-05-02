import {Link} from "react-router-dom";
import React from "react";
import './navBar.scss';

export const NavBar: React.FC = () => {
    return (
        <nav className='navBar'>
            <ul className='navBarList'>
                <li>
                    <Link to="/premium">Premium</Link>
                </li>
                <li>
                    <Link to="/support">Support</Link>
                </li>
                <li>
                    <Link to="/download">Download</Link>
                </li>
                <div className='separator'></div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <button className='loginButton'>
                        <Link to="/login" className='loginText'>Login</Link>
                    </button>
                </li>
            </ul>
        </nav>
    )
}