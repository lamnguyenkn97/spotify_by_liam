import React from "react";
import './differenceSection.scss';
import {Bar} from "../../../components/bar";

export const DifferenceSection = () => {
    return(
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
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>

                    <tr>
                        <td><p>Download to listen offline</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>
                    <tr>
                        <td><p>Turn off shuffle</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>

                    <tr>
                        <td><p>High audio quality</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>
                    <tr>
                        <td><p>Listen with friends in real time</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>

                    <tr>
                        <td><p>Personalized recommendations for playlists</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>

                    <tr>
                        <td><p>Organize listening queue</p></td>
                        <td><Bar width={25} height={3} background={'#737373'} /></td>
                        <td><i className="fa-solid fa-circle-check"></i></td>
                    </tr>

                </table>
            </article>
        </section>
    )
}