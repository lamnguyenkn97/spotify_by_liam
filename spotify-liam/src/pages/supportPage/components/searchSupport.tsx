import React from "react";
import {Link} from "react-router-dom";
import './searchSupport.scss'

export const SearchSupport = () => {
    const helpCategories = [
        {
            name: 'Payment',
            color: '#af2896',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/a1f5c90620915aba2fc363330ecd1dbff17b7736-128x128.png?w=64&fit=max&auto=format'
        },
        {
            name: 'Plan',
            color: '#8c1932',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/10bb309130cdd8dfe85a0e0e130ecdedc0ca22c6-128x128.png?w=64&fit=max&auto=format'
        },
        {
            name: 'App',
            color: '#b06239',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/59459c592409b198e88b2b4cd6e4da99306a04fa-128x128.png?w=64&fit=max&auto=format'
        },
        {
            name: 'Device',
            color: '#006450',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/3e2fdd408d9175cbf6dc77fbd24fa0667aec5867-128x128.png?w=64&fit=max&auto=format'
        },
        {
            name: 'Safety & Privacy',
            color: '#757575',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/c39439e03b41892767854a2dafae387d68e397c5-128x128.png?w=64&fit=max&auto=format'
        },
        {
            name: 'Account',
            color: '#537aa1',
            src: 'https://cdn.sanity.io/images/tsbk0zvv/production/972abc9b7961e17d356b069c8be9dbaaf3ea51f3-128x128.png?w=64&fit=max&auto=format'
        },
    ]
    return (
        <section className='searchSupport'>
            <article className='searchSupportArticle'>
                <div className='searchSupportDiv'>
                    <h3 className={'topTitle'}>Spotify Support</h3>
                    <h1 className='title'>How can we help you?</h1>
                    <h4><Link to={'/'}>Log in </Link> for faster help</h4>
                    <div className='helpCards'>
                        {helpCategories.map(cat => {
                            return (
                                <div style={{backgroundColor: cat.color}}>
                                    <p>{cat.name} Help</p>
                                    <img src={cat.src} width={60} height={60} alt={cat.name}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </section>
    )
}