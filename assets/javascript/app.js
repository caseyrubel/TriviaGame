
var names = [
		[{
			question: "Who is the NBA's all time assist leader?",
			choices: ["Steve Nash", "Jason Kidd", "John Stockton", "Magic Johnson"],
			correctChoice: "John Stockton"
		},{
			question: "Which Player holds the record for most tripple-doubles in a season?",
			choices: ["Russel Westbrook", "Oscar Robinson", "Michael Jordan", "Lebron James"],
			correctChoice: "Russel Westbrook"
		}
		,{
			question: "What team recently set the record for most 3 pointers attempted in a season?",
			choices: ["Yankees", "Red Sox", "Rockets", "Giants"],
			correctChoice: "Rockets"
		},{
			question: "Who is the youngest player ever to score 70 points?",
			choices: ["Wilt Chamberlain", "Devin Booker", "Michael Jordan", "Lebron James"],
			correctChoice: "Devin Booker"
		},{
			question: "Which of these players never won the dunk contest?",
			choices: ["Brent Barry", "Michael Jordan", "Cedric Cebalos", "Lebron James"],
			correctChoice: "Lebron James"
		},{
			question: "Which of these players has won the most NBA titles?",
			choices: ["Lebron James", "Michael Jordan", "Robert Horry", "James Jones"],
			correctChoice: "Robert Horry"
		}
	],[{
			question: "Who is the NBA's all time assist leader?",
			choices: ["Steve Nash", "Jason Kidd", "John Stockton", "Magic Johnson"],
			correctChoice: "John Stockton"
		},{
			question: "Which Player holds the record for most tripple-doubles in a season?",
			choices: ["Russel Westbrook", "Oscar Robinson", "Michael Jordan", "Lebron James"],
			correctChoice: "Russel Westbrook"
		}
		,{
			question: "What team recently set the record for most 3 pointers attempted in a season?",
			choices: ["Yankees", "Red Sox", "Rockets", "Giants"],
			correctChoice: "Rockets"
		},{
			question: "Who is the youngest player ever to score 70 points?",
			choices: ["Wilt Chamberlain", "Devin Booker", "Michael Jordan", "Lebron James"],
			correctChoice: "Devin Boooker"
		},{
			question: "Which of these players never won the dunk contest?",
			choices: ["Brent Barry", "Michael Jordan", "Cedric Cebalos", "Lebron James"],
			correctChoice: "Lebron James"
		},{
			question: "Which of these players has won the most NBA titles?",
			choices: ["Lebron James", "Michael Jordan", "Robert Horry", "James Jones"],
			correctChoice: "Robert Horry"
		}
	],[{
			question: "Who is the NBA's all time assist leader?",
			choices: ["Steve Nash", "Jason Kidd", "John Stockton", "Magic Johnson"],
			correctChoice: "John Stockton"
		},{
			question: "Which Player holds the record for most tripple-doubles in a season?",
			choices: ["Russel Westbrook", "Oscar Robinson", "Michael Jordan", "Lebron James"],
			correctChoice: "Russel Westbrook"
		}
		,{
			question: "What team recently set the record for most 3 pointers attempted in a season?",
			choices: ["Yankees", "Red Sox", "Rockets", "Giants"],
			correctChoice: "Rockets"
		},{
			question: "Who is the youngest player ever to score 70 points?",
			choices: ["Wilt Chamberlain", "Devin Booker", "Michael Jordan", "Lebron James"],
			correctChoice: "Devin Boooker"
		},{
			question: "Which of these players never won the dunk contest?",
			choices: ["Brent Barry", "Michael Jordan", "Cedric Cebalos", "Lebron James"],
			correctChoice: "Lebron James"
		},{
			question: "Which of these players has won the most NBA titles?",
			choices: ["Lebron James", "Michael Jordan", "Robert Horry", "James Jones"],
			correctChoice: "Robert Horry"
		}
	],
]
console.log(names)
var nameStrings = ["basketball", "baseball", "soccer"]

var array;
var correct = 0;
var incorrect = 0;
var number = 0;
var answer;
fresh();

function fresh() {
	$("#correct").empty();
	$("#incorrect").empty();
	$("#choices").empty();
	$("#question").empty();
	$("#fresh").html("Which Sport would you like to test your knowledge of?");
	for (i=0;i<names.length;i++){
		var n = $("<button>");
	      // Adding a class
	      n.addClass("sports");
	      // Added a data-attribute
	      n.data("key", names[i]);
	      // Provided the initial button text
	      n.text(nameStrings[i]);
	      // Added the button to the HTML
	      $("#fresh").append(n);
	}
}

function startGame(arr) {
	$("#fresh").empty();
	correct = 0;
	incorrect = 0;
	number = 0;
	$("#correct").html("Correct : " + correct);
	$("#incorrect").html("Incorrect : " + incorrect);
	nextQuestion(arr);
}

function nextQuestion(arr) {
	console.log(arr);
	if (number < arr.length) {
		$("#choices").empty();
		$("#question").html('<p class="questions">' + arr[number].question + "</p>");
		for (i=0;i<arr[number].choices.length;i++){
			var a = $("<p>");
	          // Adding a class
	          a.addClass("answers");
	          // Added a data-attribute
	          a.attr("data-name", arr[number].choices[i]);
	          // Provided the initial button text
	          a.text(arr[number].choices[i]);
	          // Added the button to the HTML
	          $("#choices").append(a);
	      }

	} else {
		alert("you scored " + (Math.floor((correct/(correct+incorrect))*100)) + "%");
		$("#correct").empty();
		$("#incorrect").empty();
		$("#choices").empty();
		$("#question").empty();
		fresh();
	}
}

function correctAnswer(arr) {
	console.log(answer);
	console.log(arr[number].correctChoice)
	if (answer === arr[number].correctChoice){
		alert("correct");
		correct++;
	} else {
		alert("Incorrect");
		incorrect++;
	}
}
var sport;
$(document).on("click", ".sports", function() {
	sport = $(this).data("key");
	startGame(sport);
});

$(document).on("click", ".answers", function() {
	answer = $(this).attr("data-name");
	correctAnswer(sport);
	$("#correct").html("Correct : " + correct);
	$("#incorrect").html("Incorrect : " + incorrect);
	number++;
	nextQuestion(sport);
});



// $(".answers").click(function() {
// 	console.log("click")
// 	correctAnswer(basketball);
// 	number++;
// 	nextQuestion(basketball);
// });




