import './input.scss'


export const DateTimeInput= ({label}: {label: string})  => {
    return(
        <div className='datetimeInput'>
            <label>{label}</label>
            <div className='datetimeInputGroup'>
                <div className='monthInput'>
                    <label className={'label'} htmlFor={label}>Month</label>
                    <input width={30} id={label} type='month'/>
                </div>
                <div className='dateInput'>
                    <label className={'label'} htmlFor={label}>Date</label>
                    <input width={30} id={label} type='number' min={1} max={31}/>
                </div>
                <div className='yearInput'>
                    <label className={'label'} htmlFor={label}>Year</label>
                    <input width={30} id={label} type='year'/>
                </div>

            </div>

        </div>
    )
}