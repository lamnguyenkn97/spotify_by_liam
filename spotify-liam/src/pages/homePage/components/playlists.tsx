import React from 'react'
import './playlists.scss'
import playlistsData from '../../../data/processedPlaylist.json'

import {ImageCard} from "../../../components/imageCard";
import {Link, Route} from "react-router-dom";
import {Playlist} from "../../../components/playlist";
import {Footer} from "../../../components/footer";
import {FooterInfo} from "../../../components/footer/components/footerInfo";


export const Playlists = () => {
    return (
        <div className='playlists'>
            {playlistsData.map(playlist => {
                const playlistData = playlist.sectionList.slice(0,7)
                return (
                    <div className='playlistItem'>
                        <h1>{playlist.title}</h1>
                        <div className='playlist'>
                            {playlistData.map(section => (
                                <Link to='/playlist'>
                                    <ImageCard name={section.name} description={section.description} imageSource={section.imgSrc}/>
                                </Link>
                            ))}
                        </div>
                    </div>
                )
            })}
            <div className='footerHomepage'>
                <FooterInfo />
                
            </div>

        </div>
    )
}