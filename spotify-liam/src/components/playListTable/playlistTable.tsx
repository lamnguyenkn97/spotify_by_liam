import playlistData from '../../data/songs.json'
import './playlistTable.scss'
import {Bar} from "../bar";

export const PlayListTable = () => {
    const data = playlistData.map((d) => {
        return {
            title: d.itemV2.data.name,
            album: d.itemV2.data.albumOfTrack.name,
            artists: d.itemV2.data.artists.items.map(i => i.profile.name),
            dateAdded: d.addedAt.isoString,
            duration: d.itemV2.data.trackDuration.totalMilliseconds,
            coverImg: d.itemV2.data.albumOfTrack.coverArt.sources[0].url,
        }
    })
    return (
        <table className='playlistTable'>
            <thead>
                <tr>
                    <th># Title</th>
                    <th>Album</th>
                    <th>Date added</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <Bar width={'100%'} height={0.5} background={'grey'}/>
            <tbody>
            {data.map((datum,idx) => {
                return (<tr>
                    <td className='songTitles'>
                        <p className='number'>{idx+1}</p>
                        <img src={datum.coverImg} width={50} height={50} alt={datum.title}/>
                        <div>
                            <p>{datum.title}</p>
                            <p>{datum.artists.join(',')}</p>
                        </div>
                    </td>
                    <td>{datum.album}</td>
                    <td>{datum.dateAdded}</td>
                    <td>{datum.duration}</td>
                </tr>)
            })}
            </tbody>
        </table>
    )

}