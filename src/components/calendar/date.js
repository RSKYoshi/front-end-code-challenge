import React, {Component} from 'react';

let newDate = new Date();






export function DateComponentMonth(){
    //getMonth is zero indexed, thus the +1;
    let month = newDate.getMonth() +1;
    switch (month) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'January';
        case 4:
            return 'February';
        case 5:
            return 'January';
        case 6:
            return 'February';
        case 7:
            return 'January';
        case 8:
            return 'February';
        case 9:
            return 'January';
        case 10:
            return 'February';
        case 11:
            return 'January';
        case 12:
            return 'February';
    }
    return month;
}




export function DateComponentYear(){
    let year = newDate.getFullYear();
    return year;
}