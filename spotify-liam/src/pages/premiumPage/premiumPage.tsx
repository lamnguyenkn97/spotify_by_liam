import './premiumPage.scss'
import React from "react";
import {LimitedOfferSection} from "./components/limitedOfferSection";
import {DifferenceSection} from "./components/differenceSection";

export const PremiumPage: React.FC = () => {
    return (
        <div className='premiumPage'>
            <LimitedOfferSection/>
            <DifferenceSection />
        </div>
    )
}