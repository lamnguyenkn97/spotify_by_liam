import React from "react";

type BarProps = {
    width: number,
    height: number,
    background: string
}
export const Bar: React.FC<BarProps> = ({width, height, background}: BarProps) => {
    const barStyle = {
        width,
        height,
        background
    }
    return(
        <div style={barStyle}></div>
    )
}