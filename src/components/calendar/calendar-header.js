import React, {Component} from 'react';
import {DateComponentMonth} from "./date";
import {DateComponentYear} from "./date";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const Header = () => {
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
                    <ArrowBackIosIcon />
                    <ArrowForwardIosIcon />
                </div>


            </div>
        </header>

    )
}