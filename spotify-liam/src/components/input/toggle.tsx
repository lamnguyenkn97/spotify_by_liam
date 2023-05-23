import './toggle.scss'


export const Toggle = ({label}: {label: string})=> {
    return(
        <label className="switch">
            <input id='checkBox' type="checkbox"/>
            <span className="slider round"></span>
        </label>
    )
}