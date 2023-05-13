import React from "react";


export type SectionProps = {
    title: string,
    children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({title, children}: SectionProps) => {
    return(
        <section>


        </section>
    )
}