const hourToShow = document.getElementById('hour');
const minuteToShow = document.getElementById('minute');
const secondsToShow = document.getElementById('second');
const meridianIndicatorToShow = document.getElementById('meridianIndicator');

const clock = () =>{

    const showClock = () => {

        const clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let seconds = clock.getSeconds();

       
        hourToShow.textContent = (hours > 12)? hours - 12 : hours;
        minuteToShow.textContent = (minutes < 10)? `0${minutes}`: minutes;
        secondsToShow.textContent = (seconds <10)? `0${seconds}`: seconds;
        meridianIndicatorToShow.textContent = (hours > 12)? 'PM': 'AM';
    };

  showClock();
  const intervalId = setInterval(showClock,1000);
  
}
clock();