// Set Global Variables like score, words, sounds, videos

var points = 0;
$("#score").html("Corret: " + points);
var username = "";
$(".restart").animate({ opacity: "0" });

var audio = new Audio(src= "assets/images/Seinfeld.mp3")
audio.play();
// $("#gif").html("<img src= 'https://media.giphy.com/media/bznNJlqAi4pBC/giphy.gif'/>")
// var winGif = (src= "https://media.giphy.com/media/bznNJlqAi4pBC/giphy.gif")
var intervalId;

var clockRunning = false;

var stopwatch = {
	time: 120,

	reset: function() {
		stopwatch.time = 120;

    //  TODO: Change the "display" div to "00:00."
    $("#timer").html("01:20");
},
start: function() {
      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) { 
      	intervalId = setInterval(stopwatch.count, 1000);
      	clockRunning = true;
      }
      
  },
  
  
  count: function() {
    //  TODO: increment time by 1, remember we cant use "this" here.
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.

   //  TODO: Use the variable you just created to show the converted time in the "display" div.
   stopwatch.time--;
   $("#timer").html(stopwatch.time);
   var x = stopwatch.timeConverter(stopwatch.time);
   $("#timer").html(x);

   



},
  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.
  timeConverter: function(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
    	seconds = "0" + seconds;
    }
    if (minutes === 0) {
    	minutes = "00";
    }
    else if (minutes < 10) {
    	minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}
};



var question1 = {

	clue: "Jerry always found a reason to break up with his girlfriend. Jillian was no different. What problem did Jerry have with her?",

	current: false,

	answer1: "Funny voice",
	answer2: "The way she ate her peas",
	answer3: "She had man-hands",
	answer4: "She was always naked",

	correct: "She had man-hands",


	ask: function () {
		$(".question").html(question1.clue);
		$("#answer1").html(question1.answer1);
		$("#answer2").html(question1.answer2);
		$("#answer3").html(question1.answer3);
		$("#answer3").attr({ "data-letter": "correct" });
		$("#answer4").html(question1.answer4);

		question1.current= true;

	}
}

var question2 = {

	clue: "Who was the first person to go out of 'The Contest'?",
	current: false,

	answer1: "Kramer",
	answer2: "Jerry",
	answer3: "Elaine",
	answer4: "George",

	correct: "Kramer",


	ask: function () {
		$(".question").html(question2.clue);
		$("#answer1").html(question2.answer1);
		$("#answer1").attr({ "data-letter": "correct" });
		$("#answer2").html(question2.answer2);
		$("#answer3").html(question2.answer3);
		$("#answer4").html(question2.answer4);
		question2.current= true;


	}
}

var question3 = {

	clue: " What superhero appears in every episode whether mentioned or displayed?",
	current: false,
	answer1: "Spiderman",
	answer2: "Batman",
	answer3: "Iron Man",
	answer4: "Superman",

	correct: "Superman",


	ask: function () {
		$(".question").html(question3.clue);
		$("#answer1").html(question3.answer1);
		$("#answer2").html(question3.answer2);
		$("#answer3").html(question3.answer3);
		$("#answer4").html(question3.answer4);
		$("#answer4").attr({ "data-letter": "correct" });

		question3.current= true;
	}
}

var question4 = {

	clue: " George walks up to an attractive women at Monks, annouces that his name is George, he's unemployed and he?",
	current: false,
	answer1: "is bald",
	answer2: "is fat",
	answer3: "lives with his parents",
	answer4: "is single",

	correct: "lives with his parents",


	ask: function () {
		$(".question").html(question4.clue);
		$("#answer1").html(question4.answer1);
		$("#answer2").html(question4.answer2);
		$("#answer3").html(question4.answer3);
		$("#answer3").attr({ "data-letter": "correct" });
		$("#answer4").html(question4.answer4);

		question4.current= true;

	}
}

var question5 = {

	clue: "What does George eat with his index fingers that disgusts Jerry?",
	current: false,
	answer1: "penut butter",
	answer2: "jelly",
	answer3: "mayonaise",
	answer4: "sour cream",

	correct: "penut butter",


	ask: function () {
		$(".question").html(question5.clue);
		$("#answer1").html(question5.answer1);
		$("#answer1").attr({ "data-letter": "correct" });
		$("#answer2").html(question5.answer2);
		$("#answer3").html(question5.answer3);
		$("#answer4").html(question5.answer4);

		question5.current= true;

	}
}

var question6 = {

	clue: " In one episode, Kramer looks for an alternative to shaving cream. What does he use?",
	current: false,
	answer1: "whiskey",
	answer2: "garlic",
	answer3: "mayonaise",
	answer4: "butter",

	correct: "butter",


	ask: function () {
		$(".question").html(question6.clue);
		$("#answer1").html(question6.answer1);
		$("#answer2").html(question6.answer2);
		$("#answer3").html(question6.answer3);
		$("#answer4").html(question6.answer4);
		$("#answer4").attr({ "data-letter": "correct" });
		question6.current= true;

	}
}

var question7 = {

	clue: "What company does Steinbrenner trade George to?",
	current: false,
	answer1: "The Mets",
	answer2: "Tyler Chicken",
	answer3: "The Soup Nazi",
	answer4: "NBC",

	correct: "Tyler Chicken",


	ask: function () {
		$(".question").html(question7.clue);
		$("#answer1").html(question7.answer1);
		$("#answer2").html(question7.answer2);
		$("#answer2").attr({ "data-letter": "correct" });
		$("#answer3").html(question7.answer3);
		$("#answer4").html(question7.answer4);
		question7.current= true;


	}
}

var question8 = {

	clue: "In the 'Yada Yada', who claims to have yada yada'd sex?",
	current: false,
	answer1: "Elaine",
	answer2: "Jerry",
	answer3: "Newman",
	answer4: "Kramer",

	correct: "Elaine",


	ask: function () {
		$(".question").html(question8.clue);
		$("#answer1").html(question8.answer1);
		$("#answer1").attr({ "data-letter": "correct" });
		$("#answer2").html(question8.answer2);
		$("#answer3").html(question8.answer3);
		$("#answer4").html(question8.answer4);
		question8.current= true;


	}
}


var question9 = {

	clue: "Who said this: You know my friend Bob Sacamano? Well, he called last night about 3 a.m. we got to talking; he sells Russian hats down at Battery Park, forty bucks?",
	current: false,
	answer1: "Elaine",
	answer2: "Jerry",
	answer3: "Newman",
	answer4: "George",

	correct: "Jerry",


	ask: function () {
		$(".question").html(question9.clue);
		$("#answer1").html(question9.answer1);
		$("#answer2").html(question9.answer2);
		$("#answer2").attr({ "data-letter": "correct" });
		$("#answer3").html(question9.answer3);
		$("#answer4").html(question9.answer4);
		question9.current= true;


	}
}

var question10 = {

	clue: "What is the name of Cosmo Kramer's corporation?",
	current: false,
	answer1: "Delicious by Kramer",
	answer2: "Kramerica Industries",
	answer3: "Bio-Kramer Inc",
	answer4: "Kramer",

	correct: "Kramerica Industries",


	ask: function () {
		$(".question").html(question10.clue);
		$("#answer1").html(question10.answer1);
		$("#answer2").html(question10.answer2);
		$("#answer2").attr({ "data-letter": "correct" });
		$("#answer3").html(question10.answer3);
		$("#answer4").html(question10.answer4);
		question10.current= true;



	}
}

// Create function to generate next question

var questionPuller = {

	pull: function () {

		$(".correct").html(points);
		if (question1.current === true) 
		{
			question2.ask();
			console.log("on question 1, loading 2");
			question1.current= false;
			
		}


		else if (question2.current === true) {
			
			question3.ask();
			question2.current= false;
			console.log("on question 2, loading 3");
		}

		else if (question3.current === true) {

			question4.ask();
			question3.current= false;
			console.log("on question 3, loading 4");
		} 

		else if (question4.current === true) {

			question5.ask();
			question4.current= false;
			console.log("on question 4, loading 5");
		}

		else if (question5.current === true) {
			console.log("question 5, ask 6");
			question6.ask();
			question5.current= false;
			
		}

		else if (question6.current === true) {

			question7.ask();
			question6.current= false;
			
		}

		else if (question7.current === true) {

			question8.ask();
			question7.current= false;
			
		}

		else if (question8.current === true) {

			question9.ask();
			question8.current= false;
			
		}

		else if (question9.current === true) {

			question10.ask();
			question9.current= false;
			
		}

		else if (question10.current === true) {

			$(".restart").animate({ opacity: "1" });
			question10.current= false;
			$(".correct").html("Corret: " + points);
			$(".question").html("Congrats you got " + points + " correct!")

		}
	}

}

// Get username

stopwatch.start();
stopwatch.count();
stopwatch.timeConverter();

if (stopwatch.time < 1) {
	alert("Sorry you have ran out of time, try again");
	points= 0;
	
	$(".restart").animate({ opacity: "0" });
	$(".start").animate({ opacity: "1" });
	
	$("#score").html("Corret: " + points);
	stopwatch.reset();
}
// Create Start Button Function 

$(".start").on("click" , function () {
	
	
	$("#timer").html(stopwatch.time);

	question1.ask();
	console.log("question1 asked");
	// stopwatch.reset();
	$(".start").animate({ opacity: "0.05" });
});

$(".option").on("click", function() {
	$("#gif").html("");
	var guess = "";
	guess = ($(this).attr("data-letter"));
	if (($(this).attr("data-letter")) === "correct") {


		console.log("you guessed right");
		var winGif = $("#gif").html("<img src= 'https://media.giphy.com/media/bznNJlqAi4pBC/giphy.gif'/>");
		$("img").animate({ top: '+=500px' });

		points++;
		$("#answer1").attr({ "data-letter": "none" });
		$("#answer2").attr({ "data-letter": "none" });
		$("#answer3").attr({ "data-letter": "none" });
		$("#answer4").attr({ "data-letter": "none" });
		$("#score").html("Corret: " + points);
		questionPuller.pull();
	}

	else {



		$("#answer1").attr({ "data-letter": "none" });
		$("#answer2").attr({ "data-letter": "none" });
		$("#answer3").attr({ "data-letter": "none" });
		$("#answer4").attr({ "data-letter": "none" });

		questionPuller.pull();

	}

})

$(".restart").on("click", function(){
	points= 0;
	
	$(".restart").animate({ opacity: "0" });
	$(".start").animate({ opacity: "1" });
	
	$("#score").html("Corret: " + points);
	stopwatch.reset();
})

