import React, {Component} from 'react';
import {Header} from "./calendar-header";
import {Body} from "./calendar-body";



export class Calendar extends Component{
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        )
    }
}
