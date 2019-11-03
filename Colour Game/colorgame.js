var numSquares = 6;
var colors = []
var pickedColor;
var squares = $(".square")
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = $(".mode")
var body = document.querySelector("body")

init()

function init(){
	reset()
	setupModeButtons()
	colorSquares()
	setupSquares()
}

resetButton.addEventListener("click", reset)

function setupModeButtons(){
	$(modeButtons).on("click", function(){
		$(modeButtons).removeClass("selected")
		$(this).addClass("selected")
		if($(this).text() === "Easy"){
			numSquares = 3
		} else if ($(this).text() === "Normal") {
			numSquares = 6
		} else if ($(this).text() === "Hard") {
			numSquares = 12
		} else {
			numSquares = 24
		}
		reset()
		setupSquares()
	})
}

function setupSquares(){
	$(".square").on("click", function () {
		var clickedColor = this.style.backgroundColor
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play again?"
			changeColors(clickedColor)
			h1.style.backgroundColor = clickedColor
		} else {
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
		}
	})
}

function reset(){
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor()
	messageDisplay.textContent = ""
	resetButton.textContent = "New colors"
	colorDisplay.textContent = pickedColor
	makeBoard(numSquares)
	colorSquares()
	h1.style.backgroundColor = "steelblue"
	body.style.backgroundColor = "#232323"
}


function makeBoard(num){
	$(".square").remove()
	for (var i = 0; i < num; i++){
		$("#gameBoard").append("<div class='square'></div>")
	}
}

function colorSquares(){
	for (var i = 0; i < $(".square").length; i++){
		if (colors[i]) {
			var squares = $(".square")
			$(squares[i]).css({
				display: "block",
				backgroundColor: colors[i]
		})} else {
			$(squares[i]).css("display", "none") 
		}
	}
}

function changeColors(color){
	for (var i = 0; i < $(".square").length; i++) {
		var squares = $(".square")
		$(squares[i]).css("display", "none")
		$("body").css("backgroundColor", color)
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	return arr
}

function randomColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

$(window).scroll(function () {
	var sticky = $('.sticky'),
		scroll = $(window).scrollTop();

	if (scroll >= 175) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});