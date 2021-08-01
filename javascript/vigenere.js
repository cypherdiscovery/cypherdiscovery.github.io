
function SolveVigenereKey(){
	//calculate the length of the key
	var coincidences = [];
	var input = document.getElementById("input").value.toUpperCase();
	if(input==""){
		input ="ATTACK AT DAWN...";
	}
	var inputLength = input.length;
	
	var alteredInput = input;
	console.log("coincidences:");
	for(x = 0;x<(inputLength-1);x++)
	{
		var coin = 0;
		alteredInput = " "+alteredInput;
		for(y = 0;y<(inputLength-1);y++)
		{
			if(input[y]==alteredInput[y])
			{
				coin+=1;
			}
		}
		coincidences.push(coin);
		console.log(coin);
	}
	console.log("altered Input:" +alteredInput);
	var relevantCoin = [];
	for(u = 0; u < (inputLength/2); u++) 
	{
		var temp1 = (coincidences[u] * 100);
		var temp2 = (inputLength - u);
		relevantCoin.push((temp1/temp2) * (temp1/temp2) * (temp1/temp2));
		console.log(u + " - " + relevantCoin[u]);
	}
	var mean = 0;
	for (x = 0; x < (inputLength/2); x++)
	{
		mean += relevantCoin[x];
		console.log(x + " - " + mean);
	}
	mean = mean / inputLength - 1;
	console.log("mean: "+mean);
	var sd = 0;
	for(j = 0; j < (inputLength/2); j++)
	{
		sd += (relevantCoin[j] - mean)*(relevantCoin[j]-mean);
	}
	sd = sd / (inputLength / 2);
	sd = Math.sqrt(sd);
	console.log("SD: "+sd);
	var differences = [];
	var dist = 1;
	var bah = mean+sd
	console.log("bah "+bah);
	for(x = 0; x<(inputLength/2);x++)
	{
		console.log(relevantCoin[x] +" - "+bah);
		if (relevantCoin[x] < bah)
		{
			dist++;
		   
		}
		else
		{
			differences.push(dist);
			dist = 1;
		}
	}
	for(d = 0; d<differences.length; d++)
	{
		console.log(differences[d]);
	}
	var mode = 0;
	var modeData = [];
	var modeNum = [];
	for(d = 0; d<differences.length; d++)
	{
		var contains = false;
		for(i = 0; i<modeData.length; i++){
			if(modeData[i]==differences[d]){
				contains = true;
			}
		}
		if (!contains)
		{
			modeData.push(differences[d]);
			modeNum.push(0);
		}
		for(m = 0; m<modeData.length; m++){
			if(modeData[m] == differences[d]){
				var idx = m;
			}
		}
		modeNum[idx]+=1;
	}
	for(i = 0; i<modeData.Count; i++)
	{
		console.log(modeData[i]+" - "+modeNum[i]);
	}
	var highestIndex = 0;
	var highestMode = 0; 
	for(n=0; n<modeNum.length; n++) 
	{
		if (modeNum[n] > highestMode)
		{
			highestMode = modeNum[n];
			highestIndex = n;
			console.log(highestIndex+" "+highestMode);
		}
	}
	var keyLength = modeData[highestIndex];
	console.log("key length: "+keyLength);
	
	
	//calculate key
	var englishFrequencies = [ 8.497, 1.492, 2.202, 4.253, 11.162, 2.228, 2.015, 6.094, 7.546, 0.153, 1.292, 4.025, 2.406, 6.749, 7.507, 1.929, 0.095, 7.587, 6.327, 9.356, 2.758, 0.978, 2.560, 0.150, 1.994, 0.077 ];
	var key = "";
	for (x = 0; x<keyLength; x++)
	{
		var y = 0;
		var letterArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
		var FreqArray = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		var relativeFreqArray = [];
		for(c = 0; c<input.length; c++)
		{
			if (y == x)
			{
				for (z = 0; z < 26; z++)
				{
					if (letterArray[z] == input[c])
					{
						FreqArray[z]++;
					}
				}
			}
			if (y == (keyLength - 1))
			{
				y = 0;
			}
			else
			{
				y++;
			}
		}
		var total = 0;
		for(n=0; n<26; n++)
		{
			total += FreqArray[n];
		}
		for(w = 0; w < 26; w++) 
		{
			var burh = FreqArray[w];
			var buhr = total;
			var relativeFreq = burh / buhr; 
			relativeFreqArray[w] = relativeFreq;
		}
		var multipliedTotals = [];
		for(p = 0; p < 26; p++)
		{
			var multipliedFrequencies = [];
			for (b = 0; b < 26; b++)
			{
			multipliedFrequencies.push(relativeFreqArray[b] * englishFrequencies[b]);
			}
			var total69 = 0;
			for(d=0; d<multipliedFrequencies.length; d++)
				{
					total69 += multipliedFrequencies[d];
				}
			multipliedTotals[p] = total69;
			relativeFreqArray[25] = relativeFreqArray[0];
			var temp71112 = relativeFreqArray[25];
			for (d = 25; d>0; d=d-1)
			{
				var temp699957 = relativeFreqArray[d - 1];
				relativeFreqArray[d - 1] = temp71112;
				temp71112 = temp699957;
			}
		}
		var highestPosition = 0;
		var highest = 0;
		for (g = 0; g < 26; g++)
		{
			{
				if (highest < multipliedTotals[g])
				{
					highestPosition = g;
					highest = multipliedTotals[g];
				}
			}
		}
		key = key + letterArray[highestPosition];
	}
	console.log("key is: "+key);
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+key+"<span><input type='radio' checked='checked' name='key'  value='"+key+"' onclick='UpdateVigenere(\"radiobox\")'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
	console.log(document.querySelector('input[name="key"]:checked').value);
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
	console.log(mode);
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
	if(document.getElementById("cypher").checked){
			document.getElementById("explanation1").textContent = "The Vigenere Cypher uses the idea that multiple caesar shifts can be used in a repeating pattern to encrypt a text. With the pattern often corresponding to a repeating keyphrase. This French diplomatic cypher elegantly obscures the First Exploit of frequency analasis.";
			document.getElementById("explanation2").textContent = "The Cypher utilises the Tablua Recta, shown to the right of the screen. To implement the cypher, you look up the letter corresponding to the collumn letter of the plaintext, and the row letter of the key. Reversing this process to decypher it.";
			document.getElementById("explanation3").textContent = "Almost impossible to brute force, as with an unknown key length there are infinite possibilities for the key. However, mathematical analasis can still be used to make an attempt.";
			document.getElementById("explanation4").textContent = "";
	}else {
			document.getElementById("explanation1").textContent = "British Mathematician Charles Babbage and the Polish Cryptographer Friedrich Kasiski came up with the idea of the index of coincidences. It allows the length of they key to be found by moving the plaintext along by one character, counting the number of character that match when compared to the original plaintext and recording these 'coincidences' for every character the plaintext can be moved along by. The key length can then be found as it will be the distance between 'peaks' in these coincidences.";
			document.getElementById("explanation2").textContent = "Once the keylength is known, the problem can then be tackled using the principle that, when multiplying two sets of numbers and adding them all up at the end. The biggest number will be given when the numbers are multiplied by themselves.";
			document.getElementById("explanation3").textContent = "Create an array of every nth letter (n being the key length), then count the frequencies of each letter in this array. Multiply the relative frequencies with the real frequencies for a shift of 0 and add them. Then repeat this process with a shift of 1, 2, 3...25, The biggest number will correspond to the shift for the first letter of the key. Repeat for every n+1, n+2... n-1 letter to find all letters in the key, then decipher as normal.";
			document.getElementById("explanation4").textContent = "This method does not produce accurate results every time, especially with small sample texts. Try decyphering the example text JKSKYVSZYVSKYVSZEVSZ with an unknown key to demonstrate how the process would work on easily decyphered text.";
	}
}