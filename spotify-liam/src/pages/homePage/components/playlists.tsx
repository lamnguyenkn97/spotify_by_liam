import React from 'react'
import './playlists.scss'
import playlistsData from '../../../data/processedPlaylist.json'
import {ImageCard} from "../../../components/imageCard";
import {Link} from "react-router-dom";
import {FooterInfo, FooterSocialMedia} from "../../../components/footer/components";
import {CopyRight} from "../../../components/copyRight";


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
                <FooterInfo width={'100px'}/>
                <FooterSocialMedia />
            </div>
            <CopyRight width={'100%'} height={0.5} background={'#a7a7a7'} text={'© 2023 Spotify AB'}/>
        </div>
    )
}