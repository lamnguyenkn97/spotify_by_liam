

import './imageCard.scss';

export const ImageCard = ({name, description, imageSource}: {name: string, description: string, imageSource: string})=> {
    const style = {
        backgroundImage: `url(${imageSource})`,
        backgroundPosition: 'top'
    }
    return(
        <div className='imageCard'>
            <img className={'cardImage'} src={imageSource} alt={name}/>
            <h3 className={'cardName'}>{name}</h3>
            <p className={'cardDescription'}>{description.slice(0, 30) + '...'}</p>
        </div>
    )
}