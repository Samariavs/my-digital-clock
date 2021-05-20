(function(){

    const showClock = function() {
        //declaracion de variables a usar
        const clock = new Date();
        const hours = clock.getHours();
        const minutes = clock.getMinutes();
        const ampm;
        const seconds = clock.getSeconds();

        const sHours = document.getElementById('hour');
        const sMinutes = document.getElementById('minute');
        const sSeconds = document.getElementById('second');
        const sAmPm = document.getElementById('ampm');

        if(hours >= 12){
            hours = hours - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }

        sHours.innerHTML = hours;
        sMinutes.textContent = minutes;
        sSeconds.textContent = seconds;
        sAmPm.textContent = ampm;
    };

  showClock();
  var interval = setInterval(showClock,1000);
}())