import React from "react";
import './questionsSection.scss';
import {Accordion} from "../../../components/accordion";
import {questions} from "../../../data";

export const QuestionsSection = () => {
    return (
        <section className='questionsSection'>
            <article className='questionsArticle'>
                <div className='questions'>
                    <h1 className='title'>Questions?</h1>
                    <p>We’ve got answers.</p>
                    <p>Get even more questions answered here.</p>
                </div>
                <div className='questionList'>
                    {questions.map((q, i) => {
                        return(
                            <>
                                <Accordion summary={q.summary} detail={q.detail}/>
                                {i !== questions.length -1 && <hr/>}
                            </>
                        )
                    })}
                </div>
            </article>
        </section>
    )
}