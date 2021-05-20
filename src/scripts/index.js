(function(){

    var showClock = function() {
        //declaracion de variables a usar
        var clock = new Date(),
        hours = clock.getHours(),
        minutes = clock.getMinutes(),
        ampm,
        seconds = clock.getSeconds();

        var sHours = document.getElementById('hour'),
            sMinutes = document.getElementById('minute'),
            sSeconds = document.getElementById('second');
            sAmPm = document.getElementById('ampm');

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