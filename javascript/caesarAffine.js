
function KnownCaesar()
{
	//deactivates the selected key, re writes the html for the first radio button to display the key inputted by the user for the caesar interface, hides the other four radio buttons
	document.querySelector('input[name="key"]:checked').checked=false;
	var knownKey = document.getElementById("quantity").value;
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+knownKey+"<span><input type='radio' checked='checked' name='key' value="+knownKey+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
}
function KnownAffine(){
	//deactivates the selected key, re writes the html for the first radio button to display the key inputted by the user for the affine interface, hides the other four radio buttons
	document.querySelector('input[name="key"]:checked').checked=false;
	var knownKeyA = document.getElementById("aKey").value;
	var knownKeyB = document.getElementById("bKey").value;
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+knownKeyA+"x+"+knownKeyB+"<span><input type='radio' checked='checked' name='key' value="+knownKeyA+"x+"+knownKeyB+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
}
function RandomCaesar()
{
	//creates a random selection of keys and orders them in caesar format, makes radio buttons visible, rewrites the HTML to declare these keys as options on the radio buttons
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
function RandomAffine(){
	//creates a random selection of keys and orders them in affine format, makes radio buttons visible, rewrites the HTML to declare these keys as options on the radio buttons
	var keys = [1,3,5,7,9];
	for (i = 0; i < 5; i++){
		var randomA=(Math.floor((Math.random() * 11)+1)*2)+1;
		
		var present = true;
		while (present)
		{
			present = false;
			for (n = 0; n < 5; n++){
				if(keys[n]==randomA){
					present=true;
				}
			}
			if(present || randomA==13){
				var randomA=(Math.floor((Math.random() * 11)+1)*2)+1;
			}else{
				keys[i]=randomA;
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
	for (i = 0; i < 5; i++)
	{
		var randomB = Math.floor(Math.random() * 25)+1;
		keys[i] = keys[i]+"x+"+ randomB;
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

function Cypher(a, b)
{
	//takes input from the document and cypheres it in an affine cypher with a given key, changes the output of the document to display this output
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
function Decypher(a, b)
{
	//takes input from the document and decyphers it assuming an affine cypher with a given key, changes the output of the document to display this output
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
				number = s;
				found = true;
			}
		}
		if(found){
			var newNumber=(modInverse*(number - b));
			console.log("================= "+newNumber);
			while(newNumber<1){
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
function SolveCaesarKey()
{
	//uses frequency analasis to determine the most likely key, assuming a caesar cypher
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var freqArray = frequencyAnalasis();
	for(i=0;i<26;i++){
		console.log(letterArray[i]+" - "+freqArray[i]);
	}
	var greatest= [[0,0],[0,0],[0,0],[0,0],[0,0]];
	for(i=0;i<26;i++){
		if(freqArray[i]>greatest[0][0]){
			greatest[0][1]=i;
			greatest[0][0]=freqArray[i];
		}else if(freqArray[i]>greatest[1][0]){
			greatest[1][1]=i;
			greatest[1][0]=freqArray[i];
		}else if(freqArray[i]>greatest[2][0]){
			greatest[2][1]=i;
			greatest[2][0]=freqArray[i];
		}else if(freqArray[i]>greatest[3][0]){
			greatest[3][1]=i;
			greatest[3][0]=freqArray[i];
		}else if(freqArray[i]>greatest[4][0]){
			greatest[4][1]=i;
			greatest[4][0]=freqArray[i];
		}
	}
	console.log(greatest[0][0]+" - "+greatest[0][1]);
	console.log(greatest[1][0]+" - "+greatest[1][1]);
	console.log(greatest[2][0]+" - "+greatest[2][1]);
	console.log(greatest[3][0]+" - "+greatest[3][1]);
	console.log(greatest[4][0]+" - "+greatest[4][1]);
	var likely=[0,0,0,0,0];
	likely[0]= (greatest[0][1]+1)-5;
	likely[1]= (greatest[1][1]+1)-5;
	likely[2]= (greatest[2][1]+1)-5;
	likely[3]= (greatest[3][1]+1)-5;
	likely[4]= (greatest[4][1]+1)-5;
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
function SolveAffineKey(){
	var freqArray = frequencyAnalasis();
	var greatest= [[0,0],[0,0],[0,0]];
	for(i=0;i<26;i++){
		if(freqArray[i]>greatest[0][0]){
			greatest[0][1]=i;
			greatest[0][0]=freqArray[i];
		}else if(freqArray[i]>greatest[1][0]){
			greatest[1][1]=i;
			greatest[1][0]=freqArray[i];
		}else if(freqArray[i]>greatest[2][0]){
			greatest[2][1]=i;
			greatest[2][0]=freqArray[i];
		}
	}
	var likely = [" "," "," "," "," "]
	var a = (7*(greatest[0][1]) - (7 * greatest[1][1]))%26;
	if(a<1){
		a+=26;
	}
	var b = (greatest[1][1] - (4 * a))%26;
	if(b<1){
		b+=26;
	}
	likely[0] = a+"x+"+b;
	a = ((7*greatest[1][1]) - (7 * greatest[0][1]))%26;
	if(a<1){
		a+=26;
	}
	b = (greatest[0][1] - (4 * a))%26;
	if(b<1){
		b+=26;
	}
	likely[1] = a+"x+"+b;
	a = ((7*greatest[0][1]) - (7 * greatest[2][1]))%26;
	if(a<1){
		a+=26;
	}
	b = (greatest[0][1] - (4 * a))%26;
	if(b<1){
		b+=26;
	}
	likely[2] = a+"x+"+b;
	a = ((7*greatest[1][1]) - (7 * greatest[2][1]))%26;
	if(a<1){
		a+=26;
	}
	b = (greatest[1][1] - (4 * a))%26;
	if(b<1){
		b+=26;
	}
	likely[3] = a+"x+"+b;
	a = ((7*greatest[2][1]) - (7 * greatest[0][1]))%26;
	if(a<1){
		a+=26;
	}
	b = (greatest[2][1] - (4 * a))%26;
	if(b<1){
		b+=26;
	}
	likely[4] = a+"x+"+b;
	for(i=0;i<5;i++){
		console.log(likely[i]);
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
function frequencyAnalasis()
{
	//returns an array of each characters frequency in the text 
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

function UpdateRotation() 
{
	//rotates the cypher wheel to represent the current key being used
	try{
		var img = document.getElementById('inner');
		var key = document.querySelector('input[name="key"]:checked').value;
		var neededRotation = Math.round(key*13.84615385);
		var transformation = 'rotate('+neededRotation+'deg)';
		img.style.transform = transformation;
	}catch{
		console.log("bah??!?!?!");
	}
}
function UpdateTable(a, b){
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var output = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	for(i = 0; i<26; i++){
		var newNumber=((a*i + b)%26);
		console.log(i,  newNumber, a, b);
		output[newNumber] = letterArray[i].toLowerCase();
	}
	for(i = 0; i<26; i++){
		console.log(output[i]);
	}
	stringHTML = "";
	for(i = 0; i<26; i++){
		stringHTML = stringHTML.concat("<th>"+output[i]+"</th>");
	}
	document.getElementById("exampleKey").innerHTML = stringHTML;
	console.log(stringHTML);
	
}
function UpdateCaesar(type)
{
	//function to run the appropriate method when a parameter in the user interface is changed on the caesar cypher page
	if(type=="textarea"){
		if(document.getElementById("Random").checked && document.getElementById("decypher").checked && type=="textarea"){
			SolveCaesarKey();
		}
	}else if(type=="checkbox"){
		if(document.getElementById("Random").checked && document.getElementById("cypher").checked){
			RandomCaesar();
		}else if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
			SolveCaesarKey();
		}else if(document.getElementById("Known").checked){
			KnownCaesar();
		}
	}
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log("key " + key);
	var b = parseInt(key);
	if(document.getElementById("cypher").checked){
		Cypher(1, b);
	}else{
		Decypher(1, b);
	}
	UpdateRotation();
	if(document.getElementById("cypher").checked){
			document.getElementById("explanation1").textContent = "The Caesar Cypher is a substitution cypher, meaning it replaces each letter with another letter that corresponds to a certain value of distance away from the original. You can think of this as 'shifting' the letters along by a certain coefficient, which leads to the Caesar Cypher being known as a 'Shift Cypher'.";
			document.getElementById("explanation2").textContent = "The Caesar Cypher came to be known as a Caesar Cypher due to it first being used by Julius Caesar. It was developed around 100 BC to allow his generals to send messages over the battle field safely, as the messages could not be understood at a quick glance. The messages were often convayed using torches.";
			document.getElementById("explanation3").textContent = "The cypher still finds use nowerdays as a way to obscure puzzle solutions or tv show spoilers, to prevent them from being understood at a quick glance.";
	}else {
			document.getElementById("explanation1").textContent = "The Caesar Cypher has only 25 possible keys, this makes brute forcing the cypher easy. A common way to brute force the cypher is using a cypher wheel, like the one to the right of the page. This allows you to try combnations and translate a small passage of the text until it makes sense. Try brute forcing this passage of text by selecting 'known key' and increasing the value until it makes sense: ";
			document.getElementById("explanation2").textContent = "PM OL OHK HUFAOPUN JVUMPKLUAPHS AV ZHF, OL DYVAL PA PU JPWOLY, AOHA PZ, IF ZV JOHUNPUN AOL VYKLY VM AOL SLAALYZ VM AOL HSWOHILA.";
			document.getElementById("explanation3").textContent = "However, just because you can brute force the cypher, doesnt mean you have to. A Principle known as the First Exploit allows you to speed up the process. The First Exploit works with the idea that the character 'e' is the most common letter in the english language. Meaning the key to a caesar cypher can be calculated by finding the most frequent character in a set of cypher text, and assuming this character translates to 'e'. Try choosing the Unknown Key option. This will show the 5 most likely options for the key. You may notice that the correct key is not always the most likely key. This is because in a small sample of text 'e' is not always the most common character.";
	}
}
function UpdateAffine(type){
	//function to run the appropriate method when a parameter in the user interface is changed on the affine cypher page
	if(type=="textarea"){
		if(document.getElementById("Random").checked && document.getElementById("decypher").checked && type=="textarea"){
			SolveAffineKey();
		}
	}else if(type=="checkbox"){
		//ensures the user has not selected 13
		var keyA = document.getElementById("aKey").value;
		var previousKey;
		if(sessionStorage.getItem("previousKeyA") == "null"){
			previousKey = 1;
		}else{
			previousKey = sessionStorage.getItem("previousKeyA");
		}
		if(keyA == 13){
			if(keyA>previousKey){
				document.getElementById("aKey").value = "15";
				keyA=15;
			}else if(keyA<previousKey){
				document.getElementById("aKey").value = "11";
				keyA=11;
			}else{
				document.getElementById("aKey").value = "11";
				keyA=11;
			}
		}
		sessionStorage.setItem("previousKeyA", keyA);
		if(document.getElementById("Random").checked && document.getElementById("cypher").checked){
			RandomAffine();
		}else if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
			SolveAffineKey();
		}else if(document.getElementById("Known").checked){
			KnownAffine();
		}
	}
	var key = document.querySelector('input[name="key"]:checked').value;
	var splitKey = key.split("x+");
	console.log("key " + key);
	var a = parseInt(splitKey[0]);
	var b = parseInt(splitKey[1]);
	if(document.getElementById("cypher").checked){
		Cypher(a,b);
	}else{
		Decypher(a,b);
	}
	UpdateTable(a,b);
	if(document.getElementById("cypher").checked){
			document.getElementById("explanation1").textContent = "The Affine Cypher is a Shift Cypher, meaning it encrypts messages by shifting the letters of the alphabet to correspond to different ones. However, where the Caesar Shift cypher used a key formula of x -> x+b (where b is the constant the alphabet is shifted by). The affine cypher uses a key formula  of x -> ax+b (where a and b are both constant keys).";
			document.getElementById("explanation2").textContent = "This cypher is a method for obscuring the text so that it cannot be decyphered using the first exploit, as even if you know what 'e' cyphers to, there are many different key combinations that match this.";
			document.getElementById("explanation3").textContent = "Like the Caesar Cypher, it is still possible to brute force the Affine cypher. However, in total there are 312 possible combinations (12 for a and 26 for b). However, this is far from practical. (There are only 12 options for a as a must be coprime to 26 (meaning they share no common factors) for the translation to work)";
			document.getElementById("explanation4").textContent = "";
			document.getElementById("explanation5").textContent = "";
			document.getElementById("explanation6").textContent = "";
	}else {
			document.getElementById("explanation1").textContent = "In order to take a mathematical approach to deciphering without knowing the key, we still use the First exploit, using the knowlege that the two most frequent letters in the cypher text are likely to correspond to 'e' and 't', as these are the most and second most used character in the alphabet. We then calculate the positions of the most frequent letters in the cyphertext compared to 'e' and 't' and use this to set up simultaneous equations.";
			document.getElementById("explanation2").textContent = "We subtract one equation from the other to cancel out one unknown, and add 26 to the modular number if it is negative. However, we cannot then devide both sides by a number, as this is modular arithmetic where we cannot devide, only multiply. So we multiply the modular side by the number corresponding to the number we want to devide by. Giving us a solveable equation for a and b";
			document.getElementById("explanation3").textContent = "Example: 'Q' appears for 13% of the letters, 'J' appears for 10% of the letters. Therefore 'e' = 'Q' and 't' = 'J'.";
			document.getElementById("explanation4").textContent = "'e' - 4 and 'Q' - 16. Therefore equation A: 4a+b=16mod26. 't' - 19 and 'J' - 9 Therefore equation B: 19a+b=9mod26";
			document.getElementById("explanation5").textContent = "Subtract Equation A from Equation B. Which gives 15a = -7mod26. Add 26 to account for negative giving 15a = 19mod26";
			document.getElementById("explanation6").textContent = "Multiplying by 7 is equialent to dividing by 15 in mod26 arithmetic. So multiply both sides by 7, giving 105a mod 26 = 133 mod 26. Which Gives a = 3. 5a+b = 19 so b = 4.";
	}
}