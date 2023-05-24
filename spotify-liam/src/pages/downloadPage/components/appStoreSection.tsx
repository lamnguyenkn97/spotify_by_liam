import './appStoreSection.scss'
import {Link} from "react-router-dom";

export const AppStoreSection = () => {
    return(
        <section className={'appStoreSection'}>
            <h1>Bring your music to mobile and tablet, too.</h1>
            <p>Listening on your phone or tablet is free, easy, and fun.</p>
            <div className='storeList'>
                <Link to={'/'}>
                    <img src="https://www-growth.scdn.co/static/badges/svgs/apple/badge-en.svg" alt="Download on the App Store" loading="lazy"/>
                </Link>
                <Link to={'/'}>
                    <img src="https://www-growth.scdn.co/static/badges/svgs/google/badge-en.svg" alt="Get it on Google Play"/>
                </Link>
                <Link to={'/'}>
                    <img src="https://www-growth.scdn.co/static/badges/microsoft-windows/en.png" alt="Get it from Microsoft" loading="lazy"/>
                </Link>
                <Link to={'/'}>
                    <img src="https://www-growth.scdn.co/static/badges/amazon/us.png" alt="Available at Amazon Appstore" loading="lazy"/>
                </Link>
            </div>


        </section>
    )
}