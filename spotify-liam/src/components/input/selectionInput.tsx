import './input.scss'

type SelectionInputProps = {
    label: string,
    options: {label: string, value: string}[]
}
export const SelectionInput = ({label, options}: SelectionInputProps)=> {
    return(
        <div className='selectionInput'>
            <label htmlFor={'selectData'}>{label}</label>
            <select id={'selectData'} placeholder='MM' value={undefined}>
                {options.map(o => {
                    return(
                        <option value={o.value}>{o.label}</option>
                    )
                })}
            </select>
        </div>
    )

}