import React from 'react'
import './playlists.scss'
import playlistsData from '../../../data/processedPlaylist.json'

import {ImageCard} from "../../../components/imageCard";


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
                                <ImageCard name={section.name} description={section.description} imageSource={section.imgSrc}/>
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}