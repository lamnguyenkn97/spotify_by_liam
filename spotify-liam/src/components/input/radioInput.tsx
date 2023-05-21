import './input.scss';
type RadioOption = {
    name: string,
    value: string
}
export const RadioInput= ({radioOptions, label}: {radioOptions: RadioOption[], label: string})  => {
    return(
        <div className='radioInput'>
            <div className='label'>{label}</div>
            <div className='radioInputGroup'>
                {
                    radioOptions.map(option => {
                        return(
                            <div className='radioItem'>
                                <label htmlFor={option.value}>{option.name}</label>
                                <input type='radio' value={option.value} name={option.name} id={option.value}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}