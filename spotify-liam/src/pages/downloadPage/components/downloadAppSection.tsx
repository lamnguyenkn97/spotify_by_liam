import './downloadAppSection.scss'

export const DownloadAppSection = () => {
    return(
        <section className={'downloadAppSection'}>
            <div className='imageDown'>
                <img src='https://www-growth.scdn.co/static/download/laptop.svg' alt={'app download'} />
                <img className='circle' src='https://www-growth.scdn.co/static/download/green-circle.svg' alt={'circle'}/>
                <img className='check' src='https://www-growth.scdn.co/static/download/green-success-check.svg' alt={'check'} />
            </div>

            <h1>Download Spotify</h1>
            <p>Play millions of songs and podcasts on your device.</p>
            <button>Download</button>
        </section>
    )
}