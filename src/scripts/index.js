const hourToShow = document.getElementById('hour');
const minuteToShow = document.getElementById('minute');
const secondsToShow = document.getElementById('second');
const meridianIndicatorToShow = document.getElementById('meridianIndicator');

(function(){

    const showClock = () => {

        let clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let period;
        let seconds = clock.getSeconds();

        if(hours > 12){
            hours = hours - 12;
            period = 'PM';
        }else{
            period = 'AM';
        }

        if(minutes < 10){
            minutes = '{0}$minutes';
        }

        if(seconds < 10){
            seconds = '{0}$seconds';
        }
        hourToShow.textContent = hours;
        minuteToShow.textContent = minutes;
        secondsToShow.textContent = seconds;
        meridianIndicatorToShow.textContent = period;
    };

  showClock();
  const intervalId = setInterval(showClock,1000);
  
}())