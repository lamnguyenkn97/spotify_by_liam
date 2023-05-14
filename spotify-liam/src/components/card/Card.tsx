import React from "react";
import './Card.scss';
import {PLANS} from '../../data'

type CardProps = {
    planName: string,
}
type Plan = {
    freeFor: string,
    name: string,
    features: string[],
    color: string,
    term: string
}

export const Card: React.FC<CardProps> = ({planName}: CardProps) => {
    // @ts-ignore
    const plan = PLANS[planName]
    const cardStyle = {
        borderColor: plan.color
    }
    const buttonStyle = {
        background: plan.color
    }
    return (
        <div className='card' style={cardStyle}>
            <span className={'cardLabel'}>Free for {plan.freeFor}</span>
            <div className={'cardName'}>
                <div>
                    <h2 className={'cardNameLeft'}>Premium <br/> {plan.name}</h2>
                </div>
                <div className='cardNameRight'>
                    <h2>FREE</h2>
                    <p className=''>For {plan.freeFor}</p>
                </div>
            </div>
            <div className='cardFeatures'>
                {plan.features.map((f: string) => {
                    return <li>{f}</li>
                })}
            </div>
            <div className='button'>
                <button style={buttonStyle}>Try Free for {plan.freeFor}</button>
            </div>
            <p className='termCondition'>
                {plan.term}
            </p>

        </div>
    )
}