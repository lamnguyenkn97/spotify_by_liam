import React from "react";
import './limitedOfferSection.scss';


export const LimitedOfferSection = () => {
    return(
        <section className='limitedOffer'>
            <article className='offer'>
                <div className='offerTexts'>
                    <p className='title'>Limited Time Offer</p>
                    <h1>$0 for 3 months of Premium</h1>
                    <h3>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h3>
                    <div className='offerEnd'>Offer ends: 14 days</div>
                    <div className={'buttonGroup'}>
                        <button className='threeMonths'>Get 3 months for 0$</button>
                        <button className='allPlans'>View all Premium Plans</button>
                    </div>
                    <p className='termCondition'>Individual plan only. $9.99/month after. Terms and conditions
                        apply. Open only to users who
                        haven't already tried Premium. Offer ends May 16, 2023.</p>
                </div>
            </article>
        </section>
    )
}