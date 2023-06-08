import {Link} from "react-router-dom";
import React from "react";
import './footerInfo.scss'

export const FooterInfo = () => {
    return(
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
    )
}