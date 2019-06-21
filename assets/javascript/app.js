// $(document).ready(function() {

    var correctAnswers = 0;
    // $('#correctAnswers').text(correctAnswers);

function NewQuiz() {
    // select ids of elements I want hidden
    $('#score').hide();
    // set correct answers to 0

};


//60 Second Countdown Timer --- code here
var timeLimit = 60;
var timer = setInterval(countdown, 1000);

function countdown() {
    document.getElementById("timer").innerHTML = timeLimit--;

    if(timeLimit <= 0){
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Time's Up!"
        $('#score').show();
    }
  };

// if value = correct, correctAnswers + 1

// for(var i = 1; i <= 3; i++) {

//     if(question.value === "correct" && radio.checked) {
//       correctAnswers++;
//     }
//   };
// click submit to display score and stop time
    $('#submit').on('click', countdown);
        console.log(countdown);
        $('#score').show();


    var userChoice = this.value;
    if (userChoice === "correct") {
        correctAnswers++;
        $('#correctAnswers').text(correctAnswers);
      } 
   

  NewQuiz();
// });


//   
