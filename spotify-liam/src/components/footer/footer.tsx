import './footer.scss'
import React from "react";
import spotifyLogo from '../../statics/logo/spotify-logo-white.png'
import instagramLogo from '../../statics/logo/instagram.png'
import facebookLogo from '../../statics/logo/facebook-32.png'
import twitterLogo from '../../statics/logo/twitter.png'
import {Link} from "react-router-dom";

export const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <nav className='footerNav'>
                <div className='logoColumn'>
                    <img src={spotifyLogo}/>
                </div>
                <div className='infoColumn'>
                    <nav className='infoNav'>
                        <div className='company'>
                            <dl>
                                <dt>Company</dt>
                                <dd>
                                    <Link to='/'>About</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Jobs</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>For the Record</Link>
                                </dd>
                            </dl>
                        </div>
                        <div className='communities'>
                            <dl>
                                <dt>Communities</dt>
                                <dd>
                                    <Link to='/'>For Artists</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Developers</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Advertising</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Investors</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Vendors</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Spotify for Work</Link>
                                </dd>
                            </dl>
                        </div>
                        <div className='usefulLinks'>
                            <dl>
                                <dt>Communities</dt>
                                <dd>
                                    <Link to='/'>Support</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Web Player</Link>
                                </dd>
                                <dd>
                                    <Link to='/'>Free Mobile App</Link>
                                </dd>
                            </dl>
                        </div>
                    </nav>
                </div>
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