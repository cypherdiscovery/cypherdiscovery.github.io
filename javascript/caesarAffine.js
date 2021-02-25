function Cypher(a, b){
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var input = document.getElementById("input").textContent;
	var cleanedInput = input.toUpperCase();
	var output = "";
	if(document.getElementById("input").childNodes.length==0){
		cleanedInput="ATTACK AT DONE...";
	}
	for(i = 0; i<cleanedInput.length; i++){
		var found = false;
		for(s = 0; s<26; s++){
			if(cleanedInput.charAt(i)==letterArray[s]){
				number = (s+1);
				found = true;
			}
		}
		if(found){
			var newNumber=((a*number + b)%26)-1;
			console.log(number,  newNumber, a, b);
			output=output.concat(letterArray[newNumber]);
		}else{
			output=output.concat(cleanedInput.charAt(i));
		}
	console.log("input " + cleanedInput);
	
	document.getElementById("output").textContent = output;
	}
	
}
function Decypher(a, b){
	
}
function solveCaesarKey(){
	
}
function UpdateCaesar(){
	if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
		var key = solveCaesarKey();
	}else{
		var key = document.querySelector('input[name="key"]:checked').value;
	}
	console.log("key " + key);
	b = parseInt(key);
	if(document.getElementById("cypher").checked){
		Cypher(1, b);
	}else{
		CaesarDecypher(1, b);
	}
}