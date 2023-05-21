import './input.scss'


export const CheckBok = ({label, value}: {label: string, value: string})=> {
    return(
        <div className={'checkBoxInput'}>
            <div className='checkbox'>
                <input type='checkbox' id='checkboxData' name={value} value={value}/>
                <label>{label}</label>
            </div>

        </div>
    )

}