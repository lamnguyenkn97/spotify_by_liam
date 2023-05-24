import {DownloadAppSection} from "./components/downloadAppSection";
import React from "react";
import {AppStoreSection} from "./components/appStoreSection";
import {PlatformsSection} from "./components/platformsSection";
import {Footer} from "../../components/footer";


export const DownloadPage = ()=> {
    return(
        <div>
            <DownloadAppSection />
            <AppStoreSection />
            <PlatformsSection />
            <Footer />
        </div>
    )
}