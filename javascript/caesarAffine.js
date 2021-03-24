
function Known(){
	document.querySelector('input[name="key"]:checked').checked=false;
	var knownKey = document.getElementById("quantity").value;
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+knownKey+"<span><input type='radio' checked='checked' name='key' value="+knownKey+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
}
function Random(){
	var keys = [1,2,3,4,5];
	for (i = 0; i < 5; i++){
		var random=Math.floor(Math.random() * 25)+1;
		
		var present = true;
		while (present)
		{
			present = false;
			for (n = 0; n < 5; n++){
				if(keys[n]==random){
					present=true;
				}
			}
			if(present){
				random=Math.floor(Math.random() * 25)+1;
			}else{
				keys[i]=random;
			}
		}
	}
	var ordered = false;
	while(!ordered){
		ordered=true;
		for(i = 0; i < 5; i++){
			if(keys[i]>keys[i+1]){
				var temp = keys[i+1];
				keys[i+1]=keys[i];
				keys[i]=temp;
				ordered = false;
			}
		}
	}
	document.getElementById("keybox2").style.display = "block";
	document.getElementById("keybox3").style.display = "block";
	document.getElementById("keybox4").style.display = "block";
	document.getElementById("keybox5").style.display = "block";
	
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+keys[0]+"<span><input type='radio' checked='checked' name='key'  value="+keys[0]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").innerHTML = "<label class='container'><span id='key2'>"+keys[1]+"<span><input type='radio' name='key' value="+keys[1]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox3").innerHTML = "<label class='container'><span id='key3'>"+keys[2]+"<span><input type='radio' name='key' value="+keys[2]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox4").innerHTML = "<label class='container'><span id='key4'>"+keys[3]+"<span><input type='radio' name='key' value="+keys[3]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox5").innerHTML = "<label class='container'><span id='key5'>"+keys[4]+"<span><input type='radio' name='key' value="+keys[4]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
}

function Cypher(a, b){
	console.log("cypher");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var input = document.getElementById("input").value;
	var cleanedInput = input.toUpperCase();
	var output = "";
	if(document.getElementById("input").value==""){
		cleanedInput="ATTACK AT DAWN...";
	}
	for(i = 0; i<cleanedInput.length; i++){
		var found = false;
		for(s = 0; s<26; s++){
			if(cleanedInput.charAt(i)==letterArray[s]){
				number = (s);
				found = true;
			}
		}
		if(found){
			var newNumber=((a*number + b)%26);
			console.log(number,  newNumber, a, b);
			output=output.concat(letterArray[newNumber]);
		}else{
			console.log("input " + cleanedInput);
			output=output.concat(cleanedInput.charAt(i));
		}
	
	document.getElementById("output").textContent = output;
	}
	
}
function Decypher(a, b){
	console.log("decypher "+a+" "+b);
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var aNumbers = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];
	var modCoefficients = [1, 9, 21, 15, 3, 19, 7, 23, 11, 5, 17, 25];
	var input = document.getElementById("input").value.toUpperCase();
	var output = "";
	var modInverse = 1;
	for(i = 0; i<26; i++){
		if(aNumbers[i]==a){
			modInverse = modCoefficients[i];
		}
	}
	console.log("mod inverse "+modInverse);
	if(document.getElementById("input").value==""){
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
	document.getElementById("keybox2").style.display = "block";
	document.getElementById("keybox3").style.display = "block";
	document.getElementById("keybox4").style.display = "block";
	document.getElementById("keybox5").style.display = "block";
	
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+likely[0]+"<span><input type='radio' checked='checked' name='key'  value="+likely[0]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").innerHTML = "<label class='container'><span id='key2'>"+likely[1]+"<span><input type='radio' name='key' value="+likely[1]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox3").innerHTML = "<label class='container'><span id='key3'>"+likely[2]+"<span><input type='radio' name='key' value="+likely[2]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox4").innerHTML = "<label class='container'><span id='key4'>"+likely[3]+"<span><input type='radio' name='key' value="+likely[3]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox5").innerHTML = "<label class='container'><span id='key5'>"+likely[4]+"<span><input type='radio' name='key' value="+likely[4]+" onclick='UpdateCaesar(\"radiobox\")'><span class='checkmark'></span></label>";

}
function frequencyAnalasis(){
	console.log("frequency analasis");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var freqArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	var input = document.getElementById("input").value.toUpperCase();
	if(document.getElementById("input").value==""){
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
function UpdateRotation() {
        var img = document.getElementById('inner');
		var key = document.querySelector('input[name="key"]:checked').value;
		var neededRotation = Math.round(key*13.84615385);
		var transformation = 'rotate('+neededRotation+'deg)';
        img.style.transform = transformation;
}
function UpdateCaesar(type){
	if(type=="textarea"){
		if(document.getElementById("Random").checked && document.getElementById("decypher").checked && type=="textarea"){
			solveCaesarKey();
		}
	}else if(type=="checkbox"){
		if(document.getElementById("Random").checked && document.getElementById("cypher").checked){
			Random();
		}else if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
			solveCaesarKey();
		}else if(document.getElementById("Known").checked){
			Known();
		}
	}
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log("key " + key);
	b = parseInt(key);
	if(document.getElementById("cypher").checked){
		Cypher(1, b);
	}else{
		Decypher(1, b);
	}
	UpdateRotation();
}