const hoursElement= document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const meridianIndicatorElement = document.getElementById('meridianIndicator');
const SECONDS = 1000;


    const showClock = () => {

        const clock = new Date();
        const hours = clock.getHours();
        const minutes = clock.getMinutes();
        const seconds = clock.getSeconds();

        hoursElement.textContent = (hours > 12)? hours - 12 : hours;
        minutesElement.textContent = (minutes < 10)? `0${minutes}`: minutes;
        secondsElement.textContent = (seconds <10)? `0${seconds}`: seconds;
        meridianIndicatorElement.textContent = (hours > 12)? 'PM': 'AM';
    };

  showClock();
  const intervalId = setInterval(showClock,SECONDS);