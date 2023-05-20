import React from "react";
import {Accordion} from "../../../components/accordion";
import './quickHelp.scss'
export const QuickHelp = () => {
    const problems = [
        {
            summary: 'Can\'t reset password',
        },
        {
            summary: 'Can\'t remember login details',
        },
        {
            summary: 'Facebook login help',
        },
        {
            summary: 'Payment methods',
        },
        {
            summary: 'Start or join Premium Family',
        }
    ]
    return (
        <section className='quickHelpSection'>
            <article className='quickHelpArticle'>
                <div className='title'>
                    <h1 className='title'>Quick help</h1>
                </div>
                <div className='problemsList'>
                    {problems.map((q) => {
                        return(
                            <>
                                <Accordion summary={q.summary} detail={q.summary}/>
                            </>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}