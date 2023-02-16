import React, {Component} from 'react';
import {DateComponentDay, WeekDayCard, getStartDay} from "./date"


export const Body = () => {

    const weekDayStyle = {
        display: 'flex',
        fontSize: '14px',
        justifyContent: 'center',
        width: '35.7vw'
    }

    return (
        <div style={weekDayStyle}>
            <div>
                <WeekDayCard />
            </div>
        </div>
    )
}







