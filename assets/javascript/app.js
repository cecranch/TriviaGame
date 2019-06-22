// $(document).ready(function() {



    // function NewQuiz() {
    // //     //     // select ids of elements I want hidden
    //         $('#score').hide();

var correctAnswers;

 correctAnswers = 0;

answer1 = "correct"
function test(question) {
    for (i=0; i<3; i++); {
        // error on this line
    if (question.elements[i].checked) {
    if (question.elements[i].value === answer1) {
        correctAnswers++; 
        $('#correctAnswers').text(correctAnswers);
        console.log("correct");
    }
    }
    }
    }
   
// // Option 2 (could not get functionality to work) create variables
//     var choice;
//     var choices;
//     var questions;
//     var number;
//     var correctAnswers = 0;

// // Create an array of questions and answers to loop through at a later point
// var questions = [
//     ["Farmer’s pick this fruit before it is ready, then use technology to trick it into ripening before hitting the shelves", "a", "b", "c", "a"],
//     ["In 45 A.D., this fruit was originally called “ida” after the mountain it was grown on.", "a", "b", "c", "b"],
//     ["What fruit has more protein than any other?", "a", "b", "c", "c"],
//     // ];

    // function get(x){
    //     return document.getElementById(x);
    //   }

    //   function checkAnswer(){
    //     // using getElementsByName to loop through array 
    //     choices = document.getElementsByName("choices");
    //     for(var i=0; i<choices.length; i++){
    //       if(choices[i].checked){
    //         choice = choices[i].value;
    //       }
    //     }

// function NewQuiz() {
//     // select ids of elements I want hidden
//     $('#score').hide();
//     // set correct answers to 0

// };


//60 Second Countdown Timer --- code here is successful
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

// if value = correct, correctAnswers + 1 -- code below not working

// for(var i = 1; i <= 3; i++) {

//     if(question.value === "correct" && radio.checked) {
//       correctAnswers++;
//     }
//   };
// click submit to display score and stop time
    $('#submit').on('click', test);
        console.log(countdown);
        $('#score').show();


   

//   NewQuiz();




//   
