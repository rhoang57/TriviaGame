$(document).ready(function(){

    // start the game when user clicks on Start button which begins the 120 second countdown
    $("#start-button").on("click", gameState.startTimer);
  
  });

   /* Created a variable called 'questionBank' to hold an array of objects with the questions, 
   choices, and the correct answer */

   var questionBank =
   [
     {
       question: "Which musician had the most #1 singles on the Billboard's Hot 100 in the 1980s?",
       choices: ["Madonna", "Michael Jackson", "Mariah Carey"],
       correct: "Michael Jackson"
     },
   
     {
       question: "Of the artists below, which one topped the Billboard's Hot 100 for the highest total number of weeks during the 80s?",
       choices: ["Lionel Richie", "George Michael", "Stevie Wonder"],
       correct: "Lionel Richie"
     },
     {
       question: "Which of the following songs topped the Hot 100 for the highest total number of weeks in the 80s?",
       choices: ["Endless Love by Diana Ross and Lionel Richie", "Physical by Olivia Newton John", "Every Breath You Take by The Police"],
       correct: "Physical by Olivia Newton John"
     },
     {
       question: "In 1983, which musical group topped the Hot 100 with the hit song Africa?",
       choices: ["Weezer", "Earth, Wind, and Fire", "Toto"],
       correct: "Toto"
     },
     {
       question: "Which 80s pop star made history by becoming the youngest person to write, produce, and sing a #1 song?",
       choices: ["Tiffany", "Debbie Gibson", "Roxanne"],
       correct: "Debbie Gibson"
     },
     {
       question: "OMD is an acronym for which popular 80s band?",
       choices: ["Orchestral Manoeuvres in the Dark", "Orange Marmalade Diet", "Other Meaningful Definitions"],
       correct: "Orchestral Manoeuvres in the Dark"
     },
     {
       question: "Which of the following songs with 'Midnight' in the title was not released in the 80s?",
       choices: ["Midnight Train to Georgia by Gladys Knight & The Pips", "Midnight Blue by Lou Gramm", "Midnight Lady by Marvin Gaye"],
       correct: "Midnight Train to Georgia by Gladys Knight & The Pips"
     },
     {
       question: "Which 'I Think We're Alone Now' singer gained recognition by performing at shopping malls?",
       choices: ["Debbie Gibson", "Sinead O'Connor", "Tiffany"],
       correct: "Tiffany"
     },
     {
       question: "Which group is often recognized as being a one-hit wonder for the song 'Take on Me'?",
       choices: ["Haha", "A-Ha", "LoL"],
       correct: "A-Ha"
     },
     {
       question: "Which of the following songs is NOT a monster ballad released in the 80s?",
       choices: ["Heaven by Warrant", "Is This Love by Whitesnake","November Rain by Guns N' Roses"],
       correct: "November Rain by Guns N' Roses"
     }
   ]
  
  // information about the state of game play
  var gameState = {
  
    // set the time at 2 minutes, and count down by 1 second
    timeRemaining : 120,
  
    // start the timer, hide the start-page div, show the questions
    startTimer: function() {
      $("#time-left").text("Time left: " + gameState.timeRemaining);
      setInterval(gameState.countdown, 1000);
      $("#start-page").hide();
      triviaPage.displayQuestions();
    },
  
    // decrement the timer and update the UI; stop the timer at 0
    countdown: function() {
      gameState.timeRemaining--;
      $("#time-left").text("Time left: " + gameState.timeRemaining);
      if (gameState.timeRemaining === 0) {
        gameState.stopTimer();
        $("#time-left").empty();
      }
    },
  
    // stop the timer and check the answers
    stopTimer: function() {
      clearInterval();
      triviaPage.checkAnswers();
    },
  
    // hide the questions and display the end page with results
    showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
      $("#end-page").show();
      $("#questions-div").hide();
      $("#time-left").hide();
      $("#correct-answers").text("Correct answers: " + numCorrect);
      $("#incorrect-answers").text("Incorrect answers: " + numIncorrect);
      $("#unanswered").text("Questions unanswered: " + numUnanswered);

    
      //if player gets 0-7 correct answers, then show Ferris Bueller Giphy
      
      if (numCorrect < 8) {
        $("#report-image").html('<div style="width:100%;height:0;margin-top:32px;padding-bottom:43%;position:relative;"><iframe src="https://giphy.com/embed/SvkeZDlGZm1Xi" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/1986-matthew-broderick-ferris-bueller-SvkeZDlGZm1Xi"></a></p>'),
        $("#report-text").text("Go back to 80s school BUELLER!")
      }

      //if player gets 8-10 correct answers, then show Axel Rose Giphy
      else {
        $("#report-image").html('<div style="width:100%;height:0;margin-top:32px;padding-bottom:66%;position:relative;"><iframe src="https://giphy.com/embed/C8bxSGK76yffO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/80s-guns-n-roses-axl-rose-C8bxSGK76yffO"></a></p>'),
        $("#report-text").text("You TOTALLY ROCKED the 80s!")
      }
    }
    
  }
  
  // functions to handle the building questions page and scoring
  var triviaPage = {
  
    /* pull questions from the array of questions, for loop through them, and add 
    them to the page*/
    displayQuestions: function() {
      var divContainer = $("#questions-div");
      var answerGroup = $(".form-check");
      divContainer.append('<h2>Answer as many questions as you can in 2 minutes:</h2>');
              
      for (var i = 0; i < questionBank.length; i++) {
  
        divContainer.append('<div id="question">' + questionBank[i].question + '</div>');
  
        var choice1 = questionBank[i].choices[0];
        var choice2 = questionBank[i].choices[1];
        var choice3 = questionBank[i].choices[2];
  
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice1 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice2 + '</label></div>');
        divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + choice3 + '</label></div>');
      }
  
      // add a submit button to the end of the questions and stop the timer
      var submitButton = '<button class="btn btn-primary" id="submit-button" type="submit">Submit</button>';
      divContainer.append(submitButton);
      $("#submit-button").on("click", gameState.stopTimer);
    },
  
    // test if the user answers are correct, incorrect, or if there are unanswered questions
    checkAnswers: function() {
      var correctAnswer;
      var userAnswer;
      var numCorrect = 0;
      var numIncorrect = 0;
      var numUnanswered = 0;
  
      // loop through to compare the text of the label with the user answers
      // update scores to correct, incorrect, or unanswered divs
      for (var i = 0; i < questionBank.length; i++) {
        correctAnswer = questionBank[i].correct;
        userAnswer = $('input[id=radio'+i+']:checked + label').text();
  
        if (userAnswer === correctAnswer) {
          numCorrect++;
        } else if (userAnswer === "") {
          numUnanswered++;
        } else if (userAnswer !== correctAnswer) {
          {
            numIncorrect++;
          }
        }
      }
  
      // show the end page with the number of correct, incorrect and unanswered questions
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
    },
  }