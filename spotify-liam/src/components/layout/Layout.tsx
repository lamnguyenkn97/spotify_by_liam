import {Link, Outlet} from "react-router-dom";
import React from "react";


export const Layout: React.FC = () => {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/premium">Premium</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                    <li>
                        <Link to="/download">Download</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>

    )
}