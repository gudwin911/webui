var result = 0;
var operation = "";
var isNewNum = true;

var input = document.getElementById("input"); // input field

/*var plus = document.getElementById("plus");
plus.onclick = function() {
	if (!isNewNum) {
		result += parseFloat(input.value);
		isNewNum = true;
	}
	input.value = result;
	operation = "+";
}
var minus = document.getElementById("minus");
minus.onclick = function() {
	if (isNewNum) {
		input.value = result;	
	} else {
		result += parseFloat(input.value);
		isNewNum = true;
	}
	input.value = result;
	operation = "-";
}
var divide = document.getElementById("divide");
divide.onclick = function() {
	if (isNewNum) {
		input.value = result;	
	} else {
		result += parseFloat(input.value);
		isNewNum = true;
	}
	input.value = result;
	operation = "/";
}
var multiple = document.getElementById("multiple");
multiple.onclick = function() {
	if (isNewNum) {
		input.value = result;	
	} else {
		result += parseFloat(input.value);
		isNewNum = true;
	}
	input.value = result;
	operation = "*";
}*/

/*var isEqual = document.getElementById("equal");
isEqual.onclick = function() {
	if (operation) {
		
		if (isNewNum) {
			input.value = result;		
		} else {
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
			input.value = result;
			isNewNum = true;
		}
		//operation = "";

	} else {
			isNewNum = true;
			result = 0;
	}
}*/
// all math buttons +, -, /, *, = 
var mathEls = document.getElementsByClassName("math");
for(var j = 0; j < mathEls.length; j++){
  mathEls[j].addEventListener('click', mathFunc, false);
}

function mathFunc(el) {
	if (isNewNum && operation != "=") {
			input.value = result;
	} else {			
		if (operation == "+") {
			result += parseFloat(input.value);
		} else if (operation == "-") {
			result -= parseFloat(input.value);
		} else if (operation == "/" ) {
			if (input.value == "0") {
				alert("На ноль делить нельзя!");
				result = 0;
			} else {
				result /= parseFloat(input.value);
			}
		} else if (operation == "*") {
			result *= parseFloat(input.value);
		} else { 
			result = parseFloat(input.value);
		} 
		if (!Number.isInteger(result)) {
			result=result.toFixed(2);
		}
		//alert(result);
		isNewNum = true;
		input.value = result;
		operation = el.currentTarget.value;
		//alert(operation);
	}
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

/*btn[0].onclick = function() {
	if (isNewNum) {
		input.value = btn[0].value;
		isNewNum = false;
	} else {
		if (input.value == 0) {
			input.value = btn[0].value;
		} else {
			input.value += btn[0].value;
		}
	}
}*/

//onkeyboardpress

