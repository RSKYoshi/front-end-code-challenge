import React, {Component, useState} from 'react';
import {DateComponentMonth} from './date';
import {DateComponentYear} from './date';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export const Header = () => {

    // [currentWeek, incrementWeek ] = useState(currentWeek);
    // [currentWeek, decrementWeek ] = useState(currentWeek);



    // alert('test')
    const headerStyle = {
        color: '#4b85cd',
        display: 'flex'
    }

    const monthStyle = {
        justifyContent: 'start',
        marginRight: '1vw'
    }

    const buttonStyle = {
        marginLeft: 'auto',
        // display: 'inline-block'
    }

    function test() {
           alert('test')
    //    increment dates here?
    }

    return (
        <header>
            <div style={headerStyle}>
                <div style={monthStyle}>
                    <DateComponentMonth />
                </div>
                <div>
                    <DateComponentYear />
                </div>
                <div style={buttonStyle}>
                    {/*<span onClick={this.decrementWeek}>*/}
                        <ArrowBackIosIcon />
                    {/*</span>*/}
                    {/*<span onClick={this.incrementWeek}>*/}
                        <ArrowForwardIosIcon />
                    {/*</span>*/}
                </div>
            </div>
        </header>
    )
}