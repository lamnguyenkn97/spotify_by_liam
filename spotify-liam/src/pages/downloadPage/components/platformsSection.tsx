import './platformSection.scss'


export const PlatformsSection = () => {
    const platforms = ['mobile', 'computer', 'tablet', 'car', 'playstation', 'xbox', 'tv', 'speaker', 'web player']
    return(
        <div className='platformSection'>
            <img src="https://www-growth.scdn.co/static/download/all-devices.svg" alt="devices" loading="lazy"/>
            <h1>One account, listen everywhere.</h1>
            <ul className='platformList'>
                {platforms.map(p => {
                    return(
                        <li>{p.toUpperCase()}</li>
                    )
                })}
            </ul>


        </div>
    )
}