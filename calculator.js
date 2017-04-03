var result = 0;
var operation = "";
var isNewNum = true;

var input = document.getElementById("input"); // input field

// all math buttons +, -, /, *
var mathEls = document.getElementsByClassName("math");
for(var j = 0; j < mathEls.length; j++){
  mathEls[j].addEventListener('click', mathFunc, false);
}

function mathFunc(el) {
	if (!isNewNum) {
		if (operation == "+") {
			result = parseFloat(result) + parseFloat(input.value);
		} else if (operation == "-") {
			result = parseFloat(result) - parseFloat(input.value);
		} else if (operation == "/" ) {
			if (input.value == "0") {
				alert("На ноль делить нельзя!");
				result = 0;
			} else {
				result = parseFloat(result) / parseFloat(input.value);
			}
		} else if (operation == "*") {
			result = parseFloat(result) * parseFloat(input.value);
		} else { 
			result = parseFloat(input.value);
		}
	} else {
		operation = el.currentTarget.value;
	}
	if (result != Number.isInteger(result)) {
			result=result.toFixed(2);
		}
	isNewNum = true;
	input.value = result;
	operation = el.currentTarget.value;
}
// clear C
var clear = document.getElementById("clear");
clear.onclick = function() {
	result = 0;
	input.value = "0";
	isNewNum = true;
	operation = "";
}
// unar +-
var unar = document.getElementById("unar");
unar.onclick = function() {
	input.value = -parseFloat(input.value);
}
// .
var pointer = document.getElementById("pointer");
pointer.onclick = function() {
	if (isNewNum) {
		input.value = "0.";		
	} else if (input.value.indexOf(".") == -1) {
		input.value += ".";
	}
	isNewNum = false;
}
// all number buttons input [0-9]
var numbers = document.getElementsByClassName("number");
for(var i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', numberValue, false);
}

function numberValue(e) {
	if (isNewNum) {
		input.value = e.currentTarget.value;
		isNewNum = false;
	} else {
		if (input.value == "0") {
			input.value = e.currentTarget.value;
		} else {
			input.value += e.currentTarget.value;
		}
	}
}
// =
var isEqual = document.getElementById("equal");
isEqual.onclick = function() {
	if (operation) {
		
		if (!isNewNum) {
			switch (operation) {
				case "+":
					result = parseFloat(result) + parseFloat(input.value);
					break;
				case "-":
					result = parseFloat(result) - parseFloat(input.value);
					break;
				case "*":
					result = parseFloat(result) * parseFloat(input.value);
					break;
				case "/":
					if (input.value == 0) {
						alert("Делить на 0 нельзя!");
						result = 0;
					} else {
						result = parseFloat(result) / parseFloat(input.value);
					}
			}
			if (result != Number.isInteger(result)) {
			result=result.toFixed(2);
			}
			input.value = result;
			isNewNum = true;
		}
		
	} else {
			isNewNum = true;
			//result = 0;
	}
	operation = "";
}