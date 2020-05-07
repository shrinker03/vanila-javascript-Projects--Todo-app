var numSquare = 6
var colors = generateRandomColor(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var massageDisplay = document.querySelector("#massage");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;


resetButton.addEventListener("click", function(){
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	massageDisplay.textContent = ""
	this.textContent = "Reset New colors"
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "cyan"
})

easyButton.addEventListener("click", function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}	
	}
})

hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
	numSquare = 6;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}	
})


hardButton.addEventListener("click", function(){
	colors = generateRandomColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "cyan"
})

for(var i = 0; i < squares.length; i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			changeColor(clickedColor)
			massageDisplay.textContent = "Correct"
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}else{
			this.style.backgroundColor = "#c5c2cc"
			massageDisplay.textContent = "Try Again"
		}
	});
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num ; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}