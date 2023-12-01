// Set the date we're counting down to
let countDownDate = new Date("Dec 25, 2023 24:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  

  let displayDays = `<div class="time">
                        <h1 class="first">${days}</h1>
                        <h6>Days</h6>
                    </div>`
 
  let displayHours = `<div class="time">
                        <h1>${+hours}</h1>
                        <h6>Hours</h6>
                      </div>`
    
  let displayMinutes = `<div class="time">
                            <h1>${minutes}</h1>
                            <h6>Minutes</h6>
                        </div>`

  let displaySeconds = `<div class="time">
                            <h1 class="last">${seconds}</h1>
                            <h6>Seconds</h6>
                        </div>`

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = displayDays + "" + displayHours + ""
  + displayMinutes + "" + displaySeconds + "";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000); 