import {Link} from "react-router-dom";
import './verticalNav.scss'
import spotifyLogo from "../../statics/logo/spotify-logo-white.png";
import React from "react";

export const VerticalNav = ()=> {
    return(
        <nav className={'verticalNav'}>
            <div>
                <Link className='branding' to='/'><img src={spotifyLogo} alt='Spotify Log' width={132} height={40}/></Link>
                <div className='mainNav'>
                    <Link className='active' to='/'><span><i className='fa fa-home'/></span>Home</Link>
                    <Link to='/'><span><i className='fa fa-search'/></span>Search</Link>
                    <Link to='/'><span><i className='fa fa-book'/></span>Your Library</Link>
                </div>
                <div className={'secondaryNav'}>
                    <Link to='/'><span><i className='fa fa-plus'/></span>Create Playlist</Link>
                    <Link to='/'><span><i className='fa fa-heart'/></span>Liked Songs</Link>
                </div>
            </div>
            <div className='subLinks'>
                <Link to='/'>Legal</Link>
                <Link to='/'>Privacy Center</Link>
                <Link to='/'>Privacy Policy</Link>
                <Link to='/'>About Ads</Link>
                <Link to='/'>Accessibility</Link>
                <Link to='/'>Cookies</Link>

                <button><span><i className='fa fa-globe'></i></span>English</button>
            </div>
        </nav>
    )
}