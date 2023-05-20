import {QuickHelp, SearchSupport, VisitCommunity} from "./components";
import {Footer} from "../../components/footer";
import React from "react";


export const SupportPage = ()=>{
    return(
        <div>
            <SearchSupport />
            <QuickHelp />
            <VisitCommunity />
            <Footer />
        </div>
    )
}