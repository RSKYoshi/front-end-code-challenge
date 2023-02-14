import React, {useState} from 'react';
// import {types} from "mobx-state-tree";


// method of making just 2 models for each row in calendar
// declaring the shape of a node with the type `Calendar`
// the types appear to just be for development
// const calendarHeadModel = types.model({
//     //make currentDate reflect current date from internet
//     month: types.optional(types.string, "Calendar"),
//     year: types.optional(types.integer, "2023"),
//     forwardButton: types.optional(types.string, "backupImg"),
//     backButton: types.optional(types.string, "backupImg"),
// })
//
// const calendarGridModel = types.model({
//     weekDay: types.optional(types.string, "currentDay"),
//     weekInt: types.optional(types.integer, "currentInt")
// })
//
// creating a tree based on the "Calendar" type, with initial data:
// const calendarHead = calendarHead.create({
//     month: types.array(calendarHeadModel),
//     year: types.array(calendarHeadModel),
//     buttons: types.string
// })
// const calendarGrid = calendarGrid.create({
//     dayNames: types.a      rray()
// })





//models for each part of the calendar
//optional=default values?
// const calendarMonth = types.model("CalendarMonth",{
//         month: types.optional(types.string, "Month")
//     })
// const calendarYear = types.model({
//     year: types.optional(types.integer, "2023")
// })
//
// const calendarButtons = types.model({
//     forwardButton: types.optional(types.string, "backupImg"),
//     backButton: types.optional(types.string, "backupImg")
// })
//
// const calendarDayNames = types.model({
//     weekDay: types.optional(types.string, "currentDay")
// })
//
// const calendarDayInt = types.model({
//     weekInt: types.optional(types.integer, "currentInt")
// })
//
// //this is the data stored in calendar
// const CalendarStore = types.model("calendarStore",{
//     month: types.array(calendarMonth),
//     year: types.array(calendarYear),
//     buttons: types.array(calendarButtons),
//     dayName: types.array(calendarDayNames),
//     dayInt: types.array(calendarDayInt)
// })

//this is where the calendar instance is created
// export const calendarStore = CalendarStore.create({
//         //is this where I loop over json data for the array?
//         calendar: [
//             {
//                 month: "Jan",
//                 year: 2023,
//                 buttons: "img",
//                 dayName: "Thursday",
//                 dayInt: 9
//             }
//         ]
//     })


//instance of the calendar created here
// let _calendarStore;
// export const calendar = () => {
//     //if there is no instance of the calendar, create one using this data
//     //TODO: change default calendar dates to current date according to computer
//     if (!_calendarStore) {
//         _calendarStore = CalendarStore.create({
//             calendar: [
//                 {
//                 month: "Jan",
//                 year: 2023,
//                 buttons: "img",
//                 dayName: "Thursday",
//                 dayInt: 9
//             }
//             ]
//         })
//     }

    // return (
    //     <div>
    //         <header>
    //             <header></header>
    //             <icon name="Forward button"></icon>
    //             <icon name="Forward button"></icon>
    //
    //         </header>
    //         <body>
    //         {/*    calendar dayName*/}
            // {/*    calendar dayInt*/}
            // </body>
        // </div>
    // )
// }


//where do I iterate over arrays?




