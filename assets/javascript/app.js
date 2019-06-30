// $(document).ready(function() {
// 60 second countdown timer


$('#score').hide();

    var timeLimit = 10;
    var timer = setInterval(countdown, 1000);
    
    function countdown() {
        document.getElementById("timer").innerHTML = timeLimit--;
    
        if(timeLimit <= 0){
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Time's Up!"
            $('#score').show();
            $('#correctAnswers').text(correctAnswers);
        }
      };


      var correctAnswers;
      correctAnswers = 0;


      $("#submit").click(function(){
        console.log("clicky");
        console.log(correctAnswers);
        $('#time').hide();
        $('#score').show();
        if ($('input[value="correct"]:checked'), function (){
            correctAnswers++; 
            $('#correctAnswers').text(correctAnswers);
      });
    

timeLimit.countdown;

});
    //   function test() {
    //      if ($('input[value="correct"]:checked'), function (){
    //         correctAnswers++; 
            // $('#correctAnswers').text(correctAnswers);
     


    // function NewQuiz() {
    // //     //     // select ids of elements I want hidden
    //         $('#score').hide();


// var questions = [{
//     question: "Farmer’s pick this fruit before it is ready, then use technology to trick it into ripening before hitting the shelves",
//     choices: ["Banana", "Tomato", "Peach"],
//     correctAnswer: "Banana",
// },
// {
//     question: "In 45 A.D., this fruit was originally called “ida” after the mountain it was grown on.",
//     choices: ["Blueberry", "Raspberry", "Blackberry"],
//     correctAnswer: "Raspberry",
// },
// {
//     question: "What fruit has more protein than any other?",
//     choices: ["Melon", "Cherries", "Avacado"],
//     correctAnswer: "Avacado",
// }];




