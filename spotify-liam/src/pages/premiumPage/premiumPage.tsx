import './premiumPage.scss'
import React from "react";
import {LimitedOfferSection, DifferenceSection, AffordablePlansSection, QuestionsSection} from "./components";
import {Footer} from "../../components/footer";


export const PremiumPage: React.FC = () => {
    return (
        <div className='premiumPage'>
            <LimitedOfferSection/>
            <DifferenceSection />
            <AffordablePlansSection />
            <QuestionsSection />
            <Footer />
        </div>
    )
}