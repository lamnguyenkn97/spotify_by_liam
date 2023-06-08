import './footer.scss'
import React from "react";
import spotifyLogo from '../../statics/logo/spotify-logo-white.png'
import instagramLogo from '../../statics/logo/instagram.png'
import facebookLogo from '../../statics/logo/facebook-32.png'
import twitterLogo from '../../statics/logo/twitter.png'
import {Link} from "react-router-dom";
import {FooterInfo} from "./components/footerInfo";

export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <nav className='footerNav'>
                <div className='logoColumn'>
                    <img src={spotifyLogo} alt='spotifyLogo'/>
                </div>
                <FooterInfo />
                <div className='mediaColumn'>
                    <Link to={'https://www.instagram.com/spotify/'}>
                        <img src={instagramLogo} width={24} alt='Instagram Logo'/>
                    </Link>
                    <Link to={'https://www.instagram.com/spotify/'}>
                        <img src={twitterLogo} width={24} alt='Instagram Logo'/>
                    </Link>
                    <Link to={'https://www.instagram.com/spotify/'}>
                        <img src={facebookLogo} width={24} alt='Instagram Logo'/>
                    </Link>
                </div>
            </nav>
        </footer>
    )
}