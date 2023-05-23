

import './socialLogin.scss'
export const SocialLogin = ()=> {
    const platforms = [
        {name: 'Google', iconName: 'fa fa-google'},
        {name: 'Facebook', iconName: 'fa fa-facebook'},
        {name: 'Apple', iconName: 'fa fa-apple'},
        {name: 'Phone Number', iconName: undefined},
    ]
    return(
        <div className='loginSocialDiv'>
            {platforms.map(p => {
                return(
                    <button> <i className={p.iconName}/> Login with {p.name}</button>
                )
            })}
        </div>
    )
}