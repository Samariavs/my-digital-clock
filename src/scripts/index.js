const hoursElement= document.getElementById('hour');
const minutesElement = document.getElementById('minute');
const secondsElement = document.getElementById('second');
const meridianIndicatorElement = document.getElementById('meridianIndicator');

const clock = () =>{

    const showClock = () => {

        const clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();

       
        hoursElement.textContent = (hours > 12)? hours - 12 : hours;
        minutesElement.textContent = (minutes < 10)? `0${minutes}`: minutes;
        secondsElement.textContent = (seconds <10)? `0${seconds}`: seconds;
        meridianIndicatorElement.textContent = (hours > 12)? 'PM': 'AM';
    };

  showClock();
  const intervalId = setInterval(showClock,1000);
  
}
clock();