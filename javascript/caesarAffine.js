function Cypher(a, b){
	console.log("cypher");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var input = document.getElementById("input").textContent;
	var cleanedInput = input.toUpperCase();
	var output = "";
	if(document.getElementById("input").childNodes.length==0){
		cleanedInput="ATTACK AT DAWN...";
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
			console.log("input " + cleanedInput);
			output=output.concat(cleanedInput.charAt(i));
		}
	
	document.getElementById("output").textContent = output;
	}
	
}
function CaesarDecypher(a, b){
	console.log("decypher "+a+" "+b);
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var aNumbers = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
	var modCoefficients = [1, 9, 21, 15, 3, 19, 7, 23, 11, 5, 17, 25];
	var input = document.getElementById("input").textContent.toUpperCase();
	var output = "";
	var modInverse = 1;
	for(i = 0; i<26; i++){
		if(aNumbers[i]==a){
			modInverse = modCoefficients[i];
		}
	}
	console.log("mod inverse "+modInverse);
	if(document.getElementById("input").childNodes.length==0){
		input="ATTACK AT DAWN...";
	}
	for(i = 0; i<input.length; i++){
		var found = false;
		for(s = 0; s<26; s++){
			if(input.charAt(i)==letterArray[s]){
				number = (s+1);
				found = true;
			}
		}
		if(found){
			var newNumber=(modInverse*(number - b)-1);
			if(newNumber<1){
				newNumber+=26;
			}
			newNumber=newNumber%26;
			console.log(number,  newNumber, a, b);
			output=output.concat(letterArray[newNumber]);
		}else{
			output=output.concat(input.charAt(i));
		}
	document.getElementById("output").textContent = output;
	}
}
function solveCaesarKey(){
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var freqArray = frequencyAnalasis();
	for(i=0;i<26;i++){
		console.log(letterArray[i]+" - "+freqArray[i]);
	}
	var greatest= [0,0];
	var greatest2=[0,0];
	var greatest3=[0,0];
	var greatest4=[0,0];
	var greatest5=[0,0];
	for(i=0;i<26;i++){
		if(freqArray[i]>greatest[0]){
			greatest[1]=i;
			greatest[0]=freqArray[i];
		}else if(freqArray[i]>greatest2[0]){
			greatest2[1]=i;
			greatest2[0]=freqArray[i];
		}else if(freqArray[i]>greatest3[0]){
			greatest3[1]=i;
			greatest3[0]=freqArray[i];
		}else if(freqArray[i]>greatest4[0]){
			greatest4[1]=i;
			greatest4[0]=freqArray[i];
		}else if(freqArray[i]>greatest5[0]){
			greatest5[1]=i;
			greatest5[0]=freqArray[i];
		}
	}
	console.log(greatest[0]+" - "+greatest[1]);
	console.log(greatest2[0]+" - "+greatest2[1]);
	console.log(greatest3[0]+" - "+greatest3[1]);
	console.log(greatest4[0]+" - "+greatest4[1]);
	console.log(greatest5[0]+" - "+greatest5[1]);
	var likely=[0,0,0,0,0];
	likely[0]= (greatest[1]+1)-5;
	likely[1]= (greatest2[1]+1)-5;
	likely[2]= (greatest3[1]+1)-5;
	likely[3]= (greatest4[1]+1)-5;
	likely[4]= (greatest5[1]+1)-5;
	for(i=0;i<5;i++){
		if(likely[i]<1){
			likely[i]+=26;
		}
	}
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+likely[0]+"<span><input type='radio' checked='checked' name='key'  value="+likely[0]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").innerHTML = "<label class='container'><span id='key2'>"+likely[1]+"<span><input type='radio' name='key' value="+likely[1]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox3").innerHTML = "<label class='container'><span id='key3'>"+likely[2]+"<span><input type='radio' name='key' value="+likely[2]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox4").innerHTML = "<label class='container'><span id='key4'>"+likely[3]+"<span><input type='radio' name='key' value="+likely[3]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox5").innerHTML = "<label class='container'><span id='key5'>"+likely[4]+"<span><input type='radio' name='key' value="+likely[4]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";

}
function frequencyAnalasis(){
	console.log("frequency analasis");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var freqArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	var input = document.getElementById("input").textContent.toUpperCase();
	if(document.getElementById("input").childNodes.length==0){
		input="ATTACK AT DAWN...";
	}
	for (i = 0; i<input.length; i++){
		console.log(input.charAt(i));
		for(x=0;x<25;x++){
			if(letterArray[x]==input.charAt(i)){
				freqArray[x]=freqArray[x]+1;
			}
		}
	}
	return freqArray;
}
function UpdateCaesar(){
	if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
		solveCaesarKey();
	}
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log("key " + key);
	b = parseInt(key);
	if(document.getElementById("cypher").checked){
		Cypher(1, b);
	}else{
		CaesarDecypher(1, b);
	}
}