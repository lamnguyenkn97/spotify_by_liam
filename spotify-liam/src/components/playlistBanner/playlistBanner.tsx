
import './playlistBanner.scss';
import spotifyLogo from "../../statics/logo/spotify-green.png";
import {Link} from "react-router-dom";
import React from "react";

export const PlaylistBanner = ({name, description, imgSrc}: {name: string, description: string, imgSrc: string})=> {

    return(
        <section className='playlistBanner'>
            <img className='playlistPhoto' src={imgSrc} alt={name} />
            <div className='playlistTitle'>
                <p>Playlist</p>
                <h1>{name}</h1>
                <h5>{description}</h5>
                <div className='statSection'>
                    <div>
                        <img src={spotifyLogo} alt='Spotify Log'/>
                    </div>
                    <p>7,048,423 likes</p>
                    <p>{305} songs, <span>about 11hr</span></p>
                </div>
            </div>

        </section>
    )
}