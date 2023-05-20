import './input.scss';


export const TextInput= ({name, label, placeholder, password=false}: {name: string, label: string, placeholder: string, password?: boolean})  => {
    return(
        <div className='textInput'>
            <label className={'label'} htmlFor={label}>{label}</label>
            <input className={'input'} type={password?'password':'text'} placeholder={placeholder} id={name} name={name}/>
        </div>
    )
}