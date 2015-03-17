window.addEventListener('load', setKeys);

function cipher(mode) {
	var caesarText = document.getElementById("CaesarText");
	
	if (mode == "cipher")
		var text = caesar(+document.getElementById("KeyValue").value, caesarText.value);
	else
		var text = decaesar(+document.getElementById("KeyValue").value, caesarText.value);
		
	caesarText.value = text;
		
}

function setKeys() {
	var selectField = document.getElementById("KeyValue");
	
	for(var i = 0; i <= 26; i++)
	{
	   var opt = document.createElement("option");
	   opt.value= i;
	   opt.innerHTML = i;
	   selectField.appendChild(opt);
	}
}

function caesar(key, text) {
	var newString = "";
	
	for (var i = 0; i < text.length; i++) {
		var character = text.charAt(i);
		
		// Only change letters
		if (character.match(/[a-z]/i)) {
			
			if (character == character.toUpperCase()) {
				character = character.charCodeAt();
				var A = 'A'.charCodeAt();
				newString += String.fromCharCode(((character - A + key) % 26) + A);
			}
			else {
				character = character.charCodeAt();
				var a = 'a'.charCodeAt();
				newString += String.fromCharCode(((character - a + key) % 26) + a);
			}
		}
		
		else 
			newString += character;
	}
	
	return newString;
}

function decaesar(key, text) {
	var newString = ""
	
	for (var i = 0; i < text.length; i++) {
		var character = text.charAt(i);
		
		// Only change letters
		if (character.match(/[a-z]/i)) {
			
			if (character == character.toUpperCase()) {
				character = character.charCodeAt();
				var A = 'A'.charCodeAt();
				var num = (character - A - key);
			
				// Mod interacts differently with negative values. qc + r (nonnegative) = num
				if (num < 0)
					num += 26;
	
				newString += String.fromCharCode((num % 26) + A);
			}
			
			else {
				character = character.charCodeAt();
				var a = 'a'.charCodeAt();
				var num = (character - a - key);
			
				// Mod interacts differently with negative values. qc + r (nonnegative) = num
				if (num < 0)
					num += 26;
			
				newString += String.fromCharCode((num % 26) + a);
			}
		}
		
		else
			newString += character;
	}
	
	return newString;
}