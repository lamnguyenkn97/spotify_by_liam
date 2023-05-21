import React from "react";
import {Bar} from "../../../components/bar";
import './separator.scss'

export const Separator = ({text}: {text: string}) => {
    return(
        <div className='separatorDiv'>
            <div className={'separator'}>
                <Bar width={200} height={1} background={'#737373'} />
                <span>{text}</span>
                <Bar width={200} height={1} background={'#737373'} />
            </div>
        </div>

    )
}