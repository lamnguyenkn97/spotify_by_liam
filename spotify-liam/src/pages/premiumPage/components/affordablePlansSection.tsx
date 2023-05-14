import React from "react";
import {Link} from "react-router-dom";
import './affordablePlansSection.scss'
import {Card} from "../../../components/card";

export const AffordablePlansSection = () => {
    return (
        <section className='affordablePlansSection'>
            <article className='plans'>
                <div className='affordablePlans'>
                    <h1 className='title'>Affordable plans for any situation</h1>
                    <h3>Choose a plan and listen without limits on your phone, speaker, and other devices. Pay in
                        various ways. Cancel anytime.</h3>
                    <div className='paymentMethods'>
                        <div className='visa'><Link to='/'></Link></div>
                        <div className='mastercard'><Link to='/' ></Link></div>
                        <div className='americanExpress'><Link to='/' ></Link></div>
                    </div>
                    <div className='morePaymentMethods'>
                        <p>+2 more</p>
                    </div>
                    <div className={'plansList'}>
                        <Card planName='individual' />
                        <Card planName='duo' />
                        <Card planName='family' />
                        <Card planName='student' />
                    </div>
                </div>
            </article>
        </section>
    )
}