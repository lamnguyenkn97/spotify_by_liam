import {Link} from "react-router-dom";
import React from "react";
import './navBar.scss';
import spotifyLogo from '../../statics/logo/spotify-logo-white.png'
export const NavBar: React.FC = () => {
    return (
        <header className='header'>
            <div className='nav'>
                <Link className='branding' to='/'><img src={spotifyLogo} alt='Spotify Log' width={132} height={40}/></Link>
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
            </div>
        </header>
    )
}