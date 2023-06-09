import './footer.scss'
import React from "react";
import spotifyLogo from '../../statics/logo/spotify-logo-white.png'
import {FooterInfo, FooterSocialMedia} from "./components";
export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <nav className='footerNav'>
                <div className='logoColumn'>
                    <img src={spotifyLogo} alt='spotifyLogo'/>
                </div>
                <FooterInfo />
                <FooterSocialMedia />
            </nav>
        </footer>
    )
}