
import './promoteBanner.scss'

export const PromoteBanner = ()=> {
    return(
        <div className='promoteBanner'>
            <div className='promoteText'>
                <p className={'title'}>Preview of Spotify</p>
                <p className={'content'}>Sign up to get Unlimited songs and podcasts with occasional ads. No credit card needed</p>
            </div>
            <button className='signup'>Sign up free</button>
        </div>
    )
}