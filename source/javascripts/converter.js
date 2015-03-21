/*
Add option to remove whitespace in strings (separate by spaces in decimal and binary instead of showing value)
Filter input. Chars take nearly anything. Binary only takes 1 and 0 (and spaces), decimal only takes nums
*/

var charTxt;
var binTxt;
var decTxt;

window.onload = function () {
	charTxt = document.getElementById("charText");
	binTxt = document.getElementById("binaryText");
	decTxt = document.getElementById("decimalText");
	
	charTxt.onkeyup = function(){
	    convertChar();
	}

	binTxt.onkeyup = function(){
		var regex = /[^[0-1|\s]]*/;
		
		if (binTxt.value.match(regex)) {
			binTxt.value = binTxt.value.replace(regex, "");
		}
		
	    convertBinary();
	}

	decTxt.onkeyup = function(){
		var regex = /[^[0-9|\s]]*/;
		
		if (decTxt.value.match(regex)) {
			decTxt.value = decTxt.value.replace(regex, "");
		}
		
	    convertDecimal();
	}
};

function convertChar() {
	var str = charTxt.value;
	var decimal = "";
	var binary = "";
	
	for (var i = 0; i < str.length; i++) {
		decimal += str.charCodeAt(i);
		binary += (decimal >>> 0).toString(2);
	}
	
	binTxt.value = binary;
	decTxt.value = decimal;
}

function convertBinary() {
	var binary = binTxt.value;
	var decimal = "";
	var str = "";
	
	// Get rid of empty values
	var binaries = binary.split(" ").filter(function(e){ return e === 0 || e });
	
	for (var i = 0; i < binaries.length; i++) {
		// Use newDec so that binary separated by spaces also creates another char for that binary
		var newDec = parseInt(binaries[i], 2);
		decimal += newDec + " ";
		str += String.fromCharCode(newDec) + " ";
	}
	
	charTxt.value = str;
	decTxt.value = decimal;
}

function convertDecimal() {
	var decimal = decTxt.value;
	var str = "";
	var binary = "";
	
	// Get rid of empty values
	var decimals = decimal.split(" ").filter(function(e){ return e === 0 || e });
	
	for (var i = 0; i < decimals.length; i++) {
		str += String.fromCharCode(decimals[i]) + " ";
		binary += (decimals[i] >>> 0).toString(2) + " ";
	}
	
	binTxt.value = binary;
	charTxt.value = str;
}

function reset() {
	charTxt.value = "";
	binTxt.value = "";
	decTxt.value = "";
}