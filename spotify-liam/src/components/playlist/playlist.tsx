import {VerticalNav} from "../verticleNav";
import {PlaylistBanner} from "../playlistBanner/playlistBanner";
import playlistData from '../../data/processedPlaylist.json'
import './playlist.scss'
import {PlayListTable} from "../playListTable";
export const Playlist = ()=> {
    const mockData = playlistData[0].sectionList[0]
    return(
        <>
            <VerticalNav />
            <div className='playlist'>
                <PlaylistBanner {...mockData}/>
                <div className='playlistBody'>
                    <div className={'actionButton'}>
                        <div><i className={'fa fa-play'}></i></div>
                        <div><i className="fa-regular fa-heart"></i></div>
                        <div><i className="fa-solid fa-ellipsis"></i></div>
                    </div>
                </div>
                <PlayListTable />

            </div>
        </>


    )
}