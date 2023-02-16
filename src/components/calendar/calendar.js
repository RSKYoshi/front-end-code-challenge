import React from 'react';
import {Header} from "./calendar-header";
import {Body} from "./calendar-body";



export function Calendar() {
    return(
        <>
            {
                (
                    <div>
                        <Header />
                        <Body />
                    </div>
                )
            }
        </>
)
}

