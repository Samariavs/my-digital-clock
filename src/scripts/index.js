const hoursElement= document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const meridianIndicatorElement = document.getElementById('meridianIndicator');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const SECONDS = 1000;

    const showClock = () => {

        const clock = new Date();
        const hours = clock.getHours();
        const minutes = clock.getMinutes();
        const seconds = clock.getSeconds();
        const day = clock.getDate();
        const month = clock.getMonth();
        const year = clock.getFullYear();

        hoursElement.textContent = (hours > 12)? hours - 12 : hours;
        minutesElement.textContent = (minutes < 10)? `0${minutes}`: minutes;
        secondsElement.textContent = (seconds <10)? `0${seconds}`: seconds;
        meridianIndicatorElement.textContent = (hours > 12)? 'PM': 'AM';
        
        const monthArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        dayElement.textContent = day;
        monthElement.textContent = monthArray[month];
        yearElement.textContent = year;
    };

  showClock();
  const intervalId = setInterval(showClock,SECONDS);