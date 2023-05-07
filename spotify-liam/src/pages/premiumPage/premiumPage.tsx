import './premiumPage.scss'
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core";

export const PremiumPage: React.FC = () => {
    return (
        <div className='premiumPage'>
            <section className='limitedOffer'>
                <article className='offer'>
                    <div className='offerTexts'>
                        <p className='title'>Limited Time Offer</p>
                        <h1>$0 for 3 months of Premium</h1>
                        <h3>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</h3>
                        <span>Offer ends: 14 days</span>
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
            <section className='difference'>
                <article className='differenceFeature'>
                    <h2>Experience the difference</h2>
                    <h3>Go Premium and enjoy full control of your listening. Cancel anytime.</h3>
                    <table>
                        <tr>
                            <th><div>What you get</div></th>
                            <th>
                                <div>
                                    Spotify's
                                    <br/>
                                    Free
                                    <br/>
                                    Plan
                                </div>
                            </th>
                            <th>
                                <div>
                                    Spotify's
                                    <br/>
                                    Premium
                                    <br/>
                                    Plan
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <td><p>Ad-free music</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>

                        <tr>
                            <td><p>Download to listen offline</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>
                        <tr>
                            <td><p>Turn off shuffle</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>

                        <tr>
                            <td><p>High audio quality</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>
                        <tr>
                            <td><p>Listen with friends in real time</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>

                        <tr>
                            <td><p>Personalized recommendations for playlists</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>

                        <tr>
                            <td><p>Organize listening queue</p></td>
                            <td><div></div></td>
                            <td><i className="fa-solid fa-circle-check"></i></td>
                        </tr>

                    </table>
                </article>
            </section>
        </div>
    )
}