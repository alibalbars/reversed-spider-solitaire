import React, { useState, useEffect, useContext } from "react";
import { InitialDataContext } from "../../contexts/initialDataContext";
import { TimerContext } from "../../contexts/timerContext";
import * as Style from "./clockStyle";
import * as SharedStyle from "../../styles/_shared";
import { secsToTimeString } from "../../utils/timeUtils";

export default function Clock() {
    const { timer, setTimer } = useContext(TimerContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [timer]);

    return (
        <Style.Clock>
            <SharedStyle.NumberBox>{secsToTimeString(timer)}</SharedStyle.NumberBox>
        </Style.Clock>
    );
}
