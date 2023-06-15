// Bad
// Use explanatory variables

complete = true
elapsedTime = 5
date = moment().format('YYYY/MM/DD');
n =  'Raphael'

function addToDate(date, days) {
    console.log(date.getDate() + days)
}
const date = new Date();
addToDate(date, 1);

// Good

isComplete = true
elapsedTimeinDays = 5
currentDate = moment().format('YYYY/MM/DD');
userName =  'Raphael'

function addDaysToDate(todayDate, days) {
    console.log(todayDate.getDate() + days)
}
const todayDate = new Date();
addToDate(todayDate, 1);