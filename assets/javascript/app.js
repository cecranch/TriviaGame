// $(document).ready(function() {




function startNewQuiz() {
    // select ids of elements I want hidden
    $('#score').hide();
    // set correct answers to 0
    var correctAnswers = 0;

    $('#correctAnswers').text(correctAnswers);
}



//60 Second Countdown Timer --- code here
var timeLimit = 5;
var timer = setInterval(countdown, 1000);

function countdown() {
    document.getElementById("timer").innerHTML = timeLimit--;

    if(timeLimit <= 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's Up!"
    }
  };

// if value = correct, correctAnswers + 1
var correctAnswers = 0;
for(var i = 1; i <= 3; i++) {

    if(radio.value === "correct" && radio.checked) {
      correctAnswers++;
    }
  }
// click submit to display score and stop timer
  submitButton.onclick = function(){
        console.log(mary);
    $('#score').show();
  }

  startNewQuiz();
// });
//   
