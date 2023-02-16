import React, {Component} from 'react';

let newDate = new Date();
let today = new Date();
// let todayInt = getStartDay(today);

// function showTodayInt(){
//     return todayInt;
// }

export function DateComponentDay(){
    let day = newDate.getDay();
    switch (day) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}

export function DateComponentDayInt(){
    let dayInt = newDate.getDate();
    return dayInt;
}



export function DateComponentMonth(){
    let month = newDate.getMonth();
    switch (month) {
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'January';
        case 3:
            return 'February';
        case 4:
            return 'January';
        case 5:
            return 'February';
        case 6:
            return 'January';
        case 7:
            return 'February';
        case 8:
            return 'January';
        case 9:
            return 'February';
        case 10:
            return 'January';
        case 11:
            return 'February';
    }
}

//below I need to loop through days like cards (each one will have the static letter of the day, and also the corresponding integer);
export function WeekDayCard(){
    const cardStyle = {
        listStyle: 'none',
        display: 'flex',
    }
    const dayCardStyle = {
        display: 'flex',
        marginRight: '3vw'
    }
    // let dayCard;
    // let startDay;
    // let daysArray = [];
    // for (let i = 0; i <=6; i++) {
            // daysArray+= days[i].dayLetter;
        let dayCard =
        // .innerHTML =
            <div id="dayCardContainerStyle">
                <ul style={cardStyle}>
                    <li style={dayCardStyle}>
                        <div>
                            <div>S</div>
                            <div>{firstDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>M</div>
                            <div>{secondDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>T</div>
                            <div>{thirdDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>W</div>
                            <div>{fourthDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>T</div>
                            <div>{fifthDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>F</div>
                            <div>{sixthDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>S</div>
                            <div>{seventhDay}</div>
                        </div>
                    </li>
                </ul>
            </div>
        return dayCard;
    }


    //    'S', 'M', 'T', 'W', 'T', 'F', 'S'];
    // // for (let i = 0; i < days.length; i++) {
    // // }
    // return daysArray;

export function getWeekInt(){

    //define a date object variable that will take the current system date

//find the year of the current date
    const oneJan = new Date(today.getFullYear(), 0, 1);

// calculating number of days in given year before a given date
    const numberOfDays = Math.floor((today - oneJan) / (24 * 60 * 60 * 1000));

// adding 1 since to current date and returns value starting from 0
    const result = Math.ceil((today.getDay() + 1 + numberOfDays) / 7);

//display the calculated result
//     console.log("Week Numbers of current date (" + today +
//         ") is: <br>" + result)
    return result;
}

let weekInt = getWeekInt();
console.log(weekInt);

let firstDay = today.getDate()-today.getDay();
let secondDay = firstDay + 1;
let thirdDay = firstDay + 2;
let fourthDay = firstDay + 3;
let fifthDay = firstDay + 4;
let sixthDay = firstDay + 5;
let seventhDay = firstDay +6;




// function getSundayFromWeekNum(weekNum, year) {
//     let sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
//     while (sunday.getDay() !== 0) {
//         sunday.setDate(sunday.getDate() - 1);
//     }
//     return sunday;
// }
//
// console.log(getSundayFromWeekNum());


// Date.prototype.addDays = function(days) {
//     let date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// }

// export function getStartDay(date) {
//     let startDay;
//     let day = date.getDay()
//     if(day === 0) {
//         startDay = date.addDays(
//             -6);
//     }
//     if(day === 1) {
//         startDay = date;
//     }
//     if(day >= 2) {
//         startDay = date.addDays(1 - day);
//     }
//     return startDay
// }
//
// console.log(getStartDay());


// function generateCalendarWeek(start) {
//     let end = start.addDays(6);
//     return `${start.toDateString()} - ${end.toDateString()}`;
// }



export function DateComponentYear(){
    let year = newDate.getFullYear();
    return year;
}