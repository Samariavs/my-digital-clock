(function(){

    const showClock = function() {
        //declaracion de variables a usar
        let clock = new Date();
        let hours = clock.getHours();
        let minutes = clock.getMinutes();
        let ampm;
        let seconds = clock.getSeconds();

        let hourToShow = document.getElementById('hour');
        let minuteToShow = document.getElementById('minute');
        let secondsToShow = document.getElementById('second');
        let amPmToShow = document.getElementById('ampm');

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
  var interval = setInterval(showClock,1000);
}())