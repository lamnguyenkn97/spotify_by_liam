import {VerticalNav} from "../../components/verticleNav";
import React from "react";
import {Playlists, PromoteBanner} from "./components";
import {Footer} from "../../components/footer";


export const HomePage = () => {
    return (
        <>
            <VerticalNav/>
            <Playlists/>
            <PromoteBanner />
        </>
    )
}