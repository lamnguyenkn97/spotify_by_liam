import './signUpWithSocial.scss'
import spotifyLogo from "../../../statics/logo/spotify-black1673.jpg";
import {Link} from "react-router-dom";
import React from "react";
export const SignUpWithSocial = ()=> {
    return(
        <div className='socialSignUp'>
            <Link className='branding' to='/'><img src={spotifyLogo} alt='Spotify Log'/></Link>
            <h1>Sign up for free to start listening</h1>
            <button className='faceSignup'><i className={'fa fa-facebook'} />Sign up with Facebook</button>
            <button className='googleSignup'><i className={'fa fa-google'}/>Sign up with Google</button>
        </div>
    )
}