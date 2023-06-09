import {Link} from "react-router-dom";
import instagramLogo from "../../../statics/logo/instagram.png";
import twitterLogo from "../../../statics/logo/twitter.png";
import facebookLogo from "../../../statics/logo/facebook-32.png";
import React from "react";
import './footerSocialMedia.scss'
export const FooterSocialMedia = ()=> {
    return(
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
    )
}