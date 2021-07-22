
function SolveVigenereKey(){
	
}

function RandomVigenere(){
	console.log("random vigenere");
	var keys = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO"];
	document.getElementById("keybox2").style.display = "block";
	document.getElementById("keybox3").style.display = "block";
	document.getElementById("keybox4").style.display = "block";
	document.getElementById("keybox5").style.display = "block";
	
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+keys[0]+"<span><input type='radio' checked='checked' name='key'  value='"+keys[0]+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").innerHTML = "<label class='container'><span id='key2'>"+keys[1]+"<span><input type='radio' name='key' value='"+keys[1]+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox3").innerHTML = "<label class='container'><span id='key3'>"+keys[2]+"<span><input type='radio' name='key' value='"+keys[2]+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox4").innerHTML = "<label class='container'><span id='key4'>"+keys[3]+"<span><input type='radio' name='key' value='"+keys[3]+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";
	document.getElementById("keybox5").innerHTML = "<label class='container'><span id='key5'>"+keys[4]+"<span><input type='radio' name='key' value='"+keys[4]+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";
}

function KnownVigenere(){
	console.log("known vigenere");
	document.querySelector('input[name="key"]:checked').checked=false;
	var knownKey = document.getElementById("aKey").value.toUpperCase();
	if(knownKey==""){
		console.log("bahbahba");
		knownKey="ALPHA";
	}
	console.log(knownKey);
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+knownKey+"<span><input type='radio' checked='checked' name='key'  value='"+knownKey+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
	console.log(document.querySelector('input[name="key"]:checked').value);
}

function Cypher(key, mode){
	console.log("cypher");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var input = document.getElementById("input").value.toUpperCase();
	if(input==""){
		input ="ATTACK AT DAWN...";
	}
    var translated = "";
    var stage = 0;
    var KeyLength = (key.length)-1;
	console.log(input);
    for(c=0; c<input.length; c++)
    {
		var found = false;
		while(!found && c<input.length){
			var found = false;
			for(i=0; i<26; i++){
				if(letterArray[i] == input[c]){
					found = true;
					var letteridx = i;
				}
			}
			if(!found){
				translated=translated.concat(input[c]);
				input = input.substr(0,c) + input.substr(c+1);
			}
		}
		if(c!=input.length){
			for(i=0; i<26; i++){
				if(letterArray[i] == key[stage]){
					var keyidx = i;
				}
			}
			if(mode == "cypher"){
				var translatedidx = (letteridx + keyidx);
			}else{
				var translatedidx = (letteridx - keyidx);
			}
			if (translatedidx <0)
			{
				translatedidx += 26;
			}else if(translatedidx>25){
				translatedidx -= 26;
			}
			translated = translated.concat(letterArray[translatedidx]);
			console.log(letteridx+" "+input[c]+" "+keyidx+" "+key[stage]+" "+translatedidx+" "+letterArray[translatedidx]);
			stage++;
			if (stage > KeyLength)
			{
				stage = 0;
			}
		}
	}
	console.log(input);
	document.getElementById("output").textContent =translated;
}

function Decypher(key){
	console.log("decypher");
	var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
	var input = document.getElementById("input").value.toUpperCase();
	if(input==""){
		input ="ATTACK AT DAWN...";
	}
    var translated = "";
    var stage = 0;
    var KeyLength = (key.length)-1;
	console.log(input);
    for(c=0; c<input.length; c++)
    {
		var found = false;
		while(!found && c<input.length){
			var found = false;
			for(i=0; i<26; i++){
				if(letterArray[i] == input[c]){
					found = true;
					var letteridx = i;
				}
			}
			if(!found){
				translated=translated.concat(input[c]);
				input = input.substr(0,c) + input.substr(c+1);
			}
		}
		if(c!=input.length){
			for(i=0; i<26; i++){
				if(letterArray[i] == key[stage]){
					var keyidx = i;
				}
			}
			var translatedidx = (letteridx - keyidx);
			if (translatedidx <0)
			{
				translatedidx += 26;
			}else if(translatedidx>25){
				translatedidx -= 26;
			}
			translated = translated.concat(letterArray[translatedidx]);
			console.log(letteridx+" "+input[c]+" "+keyidx+" "+key[stage]+" "+translatedidx+" "+letterArray[translatedidx]);
			stage++;
			if (stage > KeyLength)
			{
				stage = 0;
			}
		}
	}
	console.log(input);
	document.getElementById("output").textContent =translated;
}


function UpdateVigenere(type){
	if(type=="textarea"){
		if(document.getElementById("Random").checked && document.getElementById("decypher").checked && type=="textarea"){
			SolveVigenereKey();
		}
	}else if(type=="checkbox"){
		if(document.getElementById("Random").checked && document.getElementById("cypher").checked){
			RandomVigenere();
		}else if(document.getElementById("Random").checked && document.getElementById("decypher").checked){
			SolveVigenereKey();
		}else if(document.getElementById("Known").checked){
			KnownVigenere();
		}
	}
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log("key " + key);
	var b = parseInt(key);
	if(document.getElementById("cypher").checked){
		Cypher(key, "cypher");
	}else{
		Cypher(key, "decypher");
	}
}