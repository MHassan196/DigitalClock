let timeDiv = document.getElementById("time");
let dayDiv = document.getElementById("day");
let dateDiv = document.getElementById("date");

const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayArray = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(function clockFunc(){
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth();
    let date = newDate.getDate();
    let day = newDate.getDay();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    timeDiv.innerHTML = `${hour} : ${minute} : ${second}`
    dayDiv.innerHTML = `${dayArray[day]}`;
    dateDiv.innerHTML = `${date} ${monthArray[month]} ${year}`;
}, 1000)