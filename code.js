//start button
function start(){
   console.log("start button pushed");
   document.getElementById("startButton").disabled = true;
   // Start button for timer
   document.getElementById("stopButton").disabled = false;
   // Stop button for timer
}

function stop(){
   console.log("stop button pushed");
   document.getElementById("stopButton").disabled = true;
   document.getElementById("startButton").disabled = false;
 
}  
function playStation(){
   console.log("playStation() started");
   mySound = new sound("us-lab-background.mp3");
   mySound.play();
}

function playWeeknd(){
   console.log("playWeeknd() started");
   mySound = new sound("Weeknd.mp3");
   mySound.play();
}
function sound(src){
   this.sound = document.createElement("audio");
   this.sound.src = src;
   this.sound.setAttribute("preload", "audio");
   this.sound.setAttribute("controls", "none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);

   this.play = function(){
      this.sound.play()
   }

   this.stop = function(){
      this.sound.pause()
   }
}
//better countdown timer with loops
function betterCountdownTimer() {
   var count = 10;

   for (var i = 0; i < 10; i++) {

      setTimeout(function () {
         document.getElementById('countdownTimer').innerHTML = count;
         count--;
      }, 1000 * i);
   }
   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = "Blast off!!!";
   }, 10000);
}

/*as requested by the fleetadmiral, we will go to Warning Less than 5 seconds before Launch, 
Time left =at 5 seconds*/
function evenBetterCountdownTimer() {
   var count = 10;

   for (var i = 0; i < 11; i++) {
      if (i == 10) {
         setTimeout(function () {
            document.getElementById('countdownTimer').innerHTML = "Blast off!!!";
         }, i * 1000);
         // Countdown Timer Blastoff!!!
      } else if (i > 4) {
         setTimeout(function () {
            document.getElementById('countdownTimer').innerHTML = "Warning Less than 1/2 way to Launch, time left = " + count;
            count--;
         }, i * 1000);
// Warning Countdown Timer has 5 seconds til Launch!!! 
      } else {
         setTimeout(function () {
            document.getElementById('countdownTimer').innerHTML = count;
            count--;
         }, i * 1000);
         // Countdown Timer
         ;
      }
   }
   // setTimeout(function(){
   //    document.getElementById('countdownTimer').innerHTML = "Blast off!!!";
   // }, 10000);
}

//wk1-2 countdowntimer should run 10.........1 then blastoff
function startCountdown() {
   var count = 10;

   document.getElementById('countdownTimer').innerHTML = count;
   count = count - 1;

   setTimeout(function () {
      // after 1 sec, will run code in here
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 1000)

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 2000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 3000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 4000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 5000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 6000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 7000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 8000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = count;
      count = count - 1;
   }, 9000);

   setTimeout(function () {
      document.getElementById('countdownTimer').innerHTML = 'Blast off!!!';
   }, 10000);
}

//function to play craps
function playCraps() {
   console.log("playCraps has started");
   var die1;
   die1 = Math.ceil(Math.random() * 6);
   document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1
   var die2;
   die2 = Math.ceil(Math.random() * 6);
   document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2
   var dieSum = die1 + die2
   document.getElementById("sumResults").innerHTML = "The sum of die1 plus die2 is: " + dieSum;
   if (dieSum == 7 || dieSum == 11) {
      //  If die1 & die2 == 7 or 11 You Lose Try Again...
      document.getElementById("crapsResults").innerHTML = "Craps! You lose!!!";
      //if die1 == die2 == 11 or 7 You Lose Try Again...
   }
   if (dieSum == 11) {
      document.getElementById("crapsResults").innerHTML = "Craps! You lose";
      //die1 == die2 is a test for doubles, die2 % 2 == 0 is a test for evens
   } else if (die1 == die2 && die2 % 2 == 0) {
      document.getElementById("crapsResults").innerHTML = "Hurray!!! Doubles! You Win!!";
      // if die1 == die2 Congratulations You Win Huurraay!!!!
   } else {
      document.getElementById("crapsResults").innerHTML = "Please try again.";
      //If die1 == die2 == 1 Please try again.....
   }

}

function sandboxTest() {
   console.log("Sandbox test started");
   var i = 0;
   while (i > 10) {
      setTimeout(function () {
         document.getElementById("sandRes").innerHTML = i;
         i++;
      }, 1000 * i)

   }
}