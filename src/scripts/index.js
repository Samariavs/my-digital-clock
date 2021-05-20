'use strict';

const hourToShow = document.getElementById('hour');
const minuteToShow = document.getElementById('minute');
const secondsToShow = document.getElementById('second');
const amPmToShow = document.getElementById('ampm');

(function(){

    const showClock = () => {

        let clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let ampm;
        let seconds = clock.getSeconds();

        if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }

        hourToShow.textContent = hours;
        minuteToShow.textContent = minutes;
        secondsToShow.textContent = seconds;
        amPmToShow.textContent = ampm;
    };

  showClock();
  var intervalId = setInterval(showClock,1000);
}())