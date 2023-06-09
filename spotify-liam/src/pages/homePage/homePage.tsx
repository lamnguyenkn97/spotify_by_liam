import {VerticalNav} from "../../components/verticleNav";
import React from "react";
import {Playlists, PromoteBanner} from "./components";


export const HomePage = () => {
    return (
        <>
            <VerticalNav/>
            <Playlists/>
            <PromoteBanner />
        </>
    )
}