
type RadioOption = {
    name: string,
    value: string
}
export const RadioInput= ({radioOptions}: {radioOptions: RadioOption[]})  => {
    return(
        <div className='radioInput'>
            {
                radioOptions.map(option => {
                    return(
                        <>
                            <input type='radio' value={option.value} name={option.name} id={option.value}/>
                            <label htmlFor={option.value}>{option.name}</label>
                        </>
                    )
                })
            }

        </div>
    )
}