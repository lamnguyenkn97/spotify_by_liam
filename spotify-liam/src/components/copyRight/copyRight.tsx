import {FooterInfo, FooterSocialMedia} from "../footer/components";
import {Bar} from "../bar";
import React from "react";
import './copyRight.scss';
type Props = {
    width: number | string,
    height: number | string,
    background: string,
    text: string
}
export const CopyRight = ({width, height, background, text}: Props)=> {
    return(
        <div className='copyRight'>
            <div className='copyRight'>
                <Bar width={width} height={height} background={background}/>
                <p className='copyRight'>{text}</p>
            </div>
        </div>
    )
}