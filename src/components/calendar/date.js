import React, {Component, useState} from 'react';


let newDate = new Date();
let today = new Date();
// let todayInt = getStartDay(today);

// function showTodayInt(){
//     return todayInt;
// }

const highlightDay = {
    // backgroundColor: 'blue'

}


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
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
    }
}

//below I need to loop through days like cards (each one will have the static letter of the day, and also the corresponding integer);
export function WeekDays(){

    let weekInt = getWeekInt();
    console.log('current week is '+ weekInt);

//getDate is the integer representation of todays date (15, etc). getDay is integer representation of how far into a week today is (0-6)
    let firstDay = today.getDate()-today.getDay();
    let secondDay = firstDay + 1;
    let thirdDay = firstDay + 2;
    let fourthDay = firstDay + 3;
    let fifthDay = firstDay + 4;
    let sixthDay = firstDay + 5;
    let seventhDay = firstDay +6;

    console.log(today.getDay());

    const week = [firstDay, secondDay, thirdDay, fourthDay, fifthDay, sixthDay, seventhDay]
    console.log(week);

    [fifthDay, highlightCurrentDay] = useState(fifthDay)


    let currentDayInt = today.getDate();

    if(currentDayInt===firstDay){

    }
    console.log(currentDayInt);

    function highlightCurrentDay() {
        switch (week){
            case currentDayInt===firstDay:
                console.log('Sunday')
                break;
            // return document.querySelector('#firstDay').style('color','blue')
//        need to add a style to #fDay
//    need to highlight firstDay here
            case currentDayInt===secondDay:
                break;
            case currentDayInt===thirdDay:
                console.log('Tuesday')
                break;
            case currentDayInt===fourthDay:
                // return document.querySelector('#fourthDay').style('color','blue')
                console.log('Wednesday')
                break;
            case currentDayInt===fifthDay:
                // [fifthDay, highlightDay] = useState(fifthDay)
                break;
            case currentDayInt===sixthDay:
                console.log('Friday')
                break;
            case currentDayInt===seventhDay:
                console.log('Saturday')
                break;
        }
    }

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
                            <div style={currentDayInt===firstDay ? {color: 'red'} : {firstDay} }>{firstDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>M</div>
                            <div style={currentDayInt===secondDay ? {color: 'red'} : {secondDay} }>{secondDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>T</div>
                            <div style={currentDayInt===thirdDay ? {color: 'red'} : {thirdDay} }>{thirdDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div id='fourthDay'>W</div>
                            <div style={currentDayInt===fourthDay ? {color:'red'} : {fourthDay} }>{fourthDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>T</div>
                            <div style={currentDayInt===fifthDay ? {color:'red'} : {fifthDay} }>{fifthDay}</div>
                        </div>
                    </li>
                    <li style={dayCardStyle}>
                        <div>
                            <div>F</div>
                            <div style={currentDayInt===sixthDay ? {color:'red'} : {sixthDay} }>{sixthDay}</div>
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









function getCurrentDate(){
    // Date.now()
    let time = new Date().getTime(); // get your number
    let date = new Date(time); // create Date object
    console.log(date.toString());
}

getCurrentDate();

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