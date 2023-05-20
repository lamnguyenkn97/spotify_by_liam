import React from "react";

type BarProps = {
    width: number,
    height: number,
    background: string,
    margin?: number
}
export const Bar: React.FC<BarProps> = ({width, height, background, margin=10}: BarProps) => {
    const barStyle = {
        width,
        height,
        background,
        margin
    }
    return(
        <div style={barStyle}></div>
    )
}