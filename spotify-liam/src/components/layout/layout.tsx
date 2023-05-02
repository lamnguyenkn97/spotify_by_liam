import {Outlet} from "react-router-dom";
import React from "react";
import {NavBar} from "../navBar";
import {Footer} from "../footer/footer";


export const Layout: React.FC = () => {
    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>

    )
}