// $(document).ready(function() {
// 60 second countdown timer


$('#score').hide();

    var correctAnswers;
    correctAnswers = 0;
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


      $("#submit").click(function(){
        console.log("clicky");
        $('#time').hide();
        $('#score').show();
     
        
        var input = document.getElementsByTagName("input")
        for (var i=0;i<input.length;i++) {
            if (input[i].value=="correct") {
                if (input[i].checked==true){
                    correctAnswers++
                }
            }
            };

            timeLimit.countdown;
        });


        // for (var i = 0; i < radio; i++) {
        //     if ($('input[value="correct"]:checked').val()); {
        //         correctAnswers++;
        //         console.log("right");
        //         $('#correctAnswers').text(correctAnswers);
        //     }
        
  


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




