import React from "react";
import {ClockViewPropsType} from "./Clock";

const get2digitalString = (num: number) => num < 10 ? "0" + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <>
        <span>{get2digitalString(date.getHours())}</span>
        :
        <span>{get2digitalString(date.getMinutes())}</span>
        :
        <span>{get2digitalString(date.getSeconds())}</span>
    </>
}