import {Outlet} from "react-router-dom";
import React from "react";
import {NavBar} from "../navBar";


export const Layout: React.FC = () => {
    return(
        <>
            <NavBar />
            <Outlet />
        </>

    )
}