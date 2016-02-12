
$('document').ready(function(){



var setTime = 25;
var breakTime =5;
var time=setTime*60;
var workTimer = true;
timerRunning = false;
var audio = new Audio('http://www.oringz.com/oringz-uploads/sounds-917-communication-channel.mp3');


// Show defaults
$("document").ready(function(){
  $('#set_time').text(setTime);
  $('#break_time').text(breakTime);
  $('#act_time').text(setTime);
  $("#start_stop").css("background-color", "green");
});

// detect start
$('#start_stop').click(function(){
   if (!timerRunning && setTime !=0){
     varTimer= setInterval(myTimer, 1000);
     timerRunning =true;
   }
   else {
     clearInterval(varTimer);
     timerRunning =false;
   }
});

// add work timer
$("#add_time").click(function(){
  if(setTime<60 && !timerRunning){
    setTime +=1;
    time = setTime*60;
    $("#start_stop").css("background-color", "green");
    $('#set_time').text(setTime);
    $('#act_time').text(setTime);

  }
});

// sub work timer
$("#sub_time").click(function(){
  if (setTime>0 && !timerRunning) {
    setTime -=1;
    time = setTime*60;
    $("#start_stop").css("background-color", "green");
    $('#set_time').text(setTime);
    $('#act_time').text(setTime);
  }
});

// add break timer
$("#add_break").click(function(){
  if(breakTime<60 && !timerRunning){
    breakTime +=1;
    $("#start_stop").css("background-color", "red");
    $('#break_time').text(breakTime);
    $('#act_time').text(breakTime);
  }
});

// sub break timer
$("#sub_break").click(function(){
  if (breakTime>0 && !timerRunning) {
    breakTime -=1;
    $("#start_stop").css("background-color", "red");
    $('#break_time').text(breakTime);
    $('#act_time').text(breakTime);
  }
});



// timer function
function myTimer(){
   min = Math.floor(time/60);
   sec = time-min*60;
   if (sec<10){
     sec = '0'+sec;
   }
  if (time!=0){
   $('#act_time').text( min +":" + sec );
    time -= 1;
    if (workTimer)
      $("#start_stop").css("background-color", "green");
    else $("#start_stop").css("background-color", "red");
  }
  else if(breakTime>0 && setTime>0){
    audio.play();
    time = breakTime*60;
    workTimer = !workTimer;
    myTimer();
  }

  else {
     $("#start_stop").css("background-color", "green");
     audio.play();
     workTimer=true;


  }

 }

});
