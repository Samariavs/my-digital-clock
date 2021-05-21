const hourToShow = document.getElementById('hour');
const minuteToShow = document.getElementById('minute');
const secondsToShow = document.getElementById('second');
const meridianIndicatorToShow = document.getElementById('meridianIndicator');

const clock = () =>{

    const showClock = () => {

        const clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let period;
        let seconds = clock.getSeconds();

        period = (hours > 12)? 'PM' : 'AM';
        hours = (hours > 12)? hours - 12 : hours;

        if(minutes < 10){
           '0 ${minutes';
        }

        if(seconds < 10){
           '0 ${seconds}'
        }
        hourToShow.textContent = hours;
        minuteToShow.textContent = minutes;
        secondsToShow.textContent = seconds;
        meridianIndicatorToShow.textContent = period;
    };

  showClock();
  const intervalId = setInterval(showClock,1000);
  
}
clock();