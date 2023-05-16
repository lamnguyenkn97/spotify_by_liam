import {useState} from "react";
import './accordian.scss';


type AccordionProps = {
    summary: string,
    detail: string
}
export const Accordion = ({summary, detail}: AccordionProps) =>{
    const [open, setOpen] = useState(false)
    const style = !open ?{
        backgroundColor: '#121212'
    }: {}
    const toggleOpen = ()=> {
        setOpen(!open)
    }
    const iconClassName = open ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'
    return(
        <div className='accordion'>
            <div className='summary' style={style}>
                <h3>{summary}</h3>
                <span><i className={iconClassName} onClick={toggleOpen}></i></span>
            </div>
            {open && <div className='detail'>
                <p>{detail}</p>
            </div>}
        </div>
    )
}