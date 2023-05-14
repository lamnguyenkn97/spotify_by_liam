import './premiumPage.scss'
import React from "react";
import {LimitedOfferSection, DifferenceSection, AffordablePlansSection} from "./components";


export const PremiumPage: React.FC = () => {
    return (
        <div className='premiumPage'>
            <LimitedOfferSection/>
            <DifferenceSection />
            <AffordablePlansSection />
        </div>
    )
}