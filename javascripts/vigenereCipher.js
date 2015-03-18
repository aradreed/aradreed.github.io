function cipher(mode) {
	var vigenereText = document.getElementById("VigenereText");
	var key = document.getElementById("Key").value;
	var text = "";
	
	if (mode == "cipher")
		text = vigenere(vigenereText.value, key);
	else
		text = devigenere(vigenereText.value, key);
	
	vigenereText.value = text;
}

function getKey(keyLetter) {
	// Finds the key to use for encoding
	
	if (keyLetter == keyLetter.toUpperCase()) 
		return keyLetter.charCodeAt() - 'A'.charCodeAt();
	else
		return keyLetter.charCodeAt() - 'a'.charCodeAt();
}

function vigenere(text, keyword) {
	var newString = "";
	var j = 0;
	
	var A = 'A'.charCodeAt();
	var a = 'a'.charCodeAt();
	
	for (var i = 0; i < text.length; i++) {
		
		var character = text.charAt(i);
		
		// Only change letters
		if (character.match(/[a-z]/i)) {
			if (character == character.toUpperCase()) {
				character = character.charCodeAt();
				newString += String.fromCharCode(((character - A + getKey(keyword.charAt(j))) % 26) + A);
				j = (j+1) % keyword.length;
			}
			else {
				character = character.charCodeAt();
				newString += String.fromCharCode(((character - a + getKey(keyword.charAt(j))) % 26) + a);
				j = (j+1) % keyword.length;
			}
		}
		
		else 
			newString += character;
	}
	
	return newString;
}

function devigenere(text, keyword) {
	var newString = "";
	var j = 0;
	
	var A = 'A'.charCodeAt();
	var a = 'a'.charCodeAt();
	
	for (var i = 0; i < text.length; i++) {
		
		var character = text.charAt(i);
		
		// Only change letters
		if (character.match(/[a-z]/i)) {
			if (character == character.toUpperCase()) {
				character = character.charCodeAt();
				var num = character - A - getKey(keyword.charAt(j));
				
				if (num < 0)
					num += 26;
			
				newString += String.fromCharCode((num % 26) + A);
				j = (j+1) % keyword.length;
			}
			else {
				character = character.charCodeAt();
				var num = character - a - getKey(keyword.charAt(j));
				
				if (num < 0)
					num += 26;
			
				newString += String.fromCharCode((num % 26) + a);
				j = (j+1) % keyword.length;
			}
		}
		
		else 
			newString += character;
	}

	return newString;
}