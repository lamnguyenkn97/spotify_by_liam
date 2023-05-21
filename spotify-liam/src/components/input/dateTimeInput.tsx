import './input.scss'
import moment from 'moment'
import {SelectionInput} from "./selectionInput";

export const DateTimeInput= ({label}: {label: string})  => {
    const monthOptions = moment.months().map(m => {
        return {
            label: m,
            value: m
        }
    })

    return(
        <div className='datetimeInput'>
            <div className={'label'}>{label}</div>
            <div className='datetimeInputGroup'>
                <div className='monthInput'>
                    <SelectionInput label={'Month'} options={monthOptions}/>
                </div>
                <div className='dateInput'>
                    <label className={'label'} htmlFor={label}>Date</label>
                    <input id='date' inputMode='numeric' aria-invalid={true} maxLength={2} name='date' type='text'
                    pattern={"((0?[1-9])|([12][0-9])|(3[01]))"} placeholder='DD'/>

                </div>
                <div className='yearInput'>
                    <label className={'label'} htmlFor={label}>Year</label>
                    <input id='year' inputMode='numeric' aria-invalid={true} maxLength={2} name='year' type='text'
                           pattern={"(19[0-9]{2})|([200][0-9])|(201[0-0])"} placeholder='YYYY'/>
                </div>
            </div>

        </div>
    )
}