function cypher(){
	document.getElementById("decypher").checked = false;
	if(document.getElementById("cypher").checked == false){
		document.getElementById("decypher").checked = true;
	}
	document.getElementById("random_label").innerHTML = "Random";
	//document.getElementById("keyType").innerHTML = "<label class='container'>Random <input type='checkbox' id='Random' onclick='random()'checked='checked'><span class='checkmark'></span></label><label class='container'>Known Key: <input type='checkbox' id='Known' onclick='known()'><span class='checkmark'></span></label><input style='color: var(--textColour); font-family: Verdana; font-weight: bold; font-size: 12px; background-color: var(--backColour);' type='number' id='quantity' name='quantity' min='1' max='25'>";
}
function decypher(){
	document.getElementById("cypher").checked = false;
	if(document.getElementById("decypher").checked == false){
		document.getElementById("cypher").checked = true;
	}
	document.getElementById("random_label").innerHTML = "Unknown";
	//document.getElementById("keyType").innerHTML = "<label class='container'>Unknown <input type='checkbox' id='Random' onclick='random()' checked='checked'><span class='checkmark'></span></label><label class='container'>Known Key: <input type='checkbox' id='Known' onclick='known()'><span class='checkmark'></span></label><input style='color: var(--textColour); font-family: Verdana; font-weight: bold; font-size: 12px; background-color: var(--backColour);' type='number' id='quantity' name='quantity' min='1' max='25'>";
}
function random(){
	document.getElementById("Known").checked = false;
	if(document.getElementById("Random").checked == false){
		document.getElementById("Known").checked = true;
	}
	document.getElementById("keybox2").style.display = "block";
	document.getElementById("keybox3").style.display = "block";
	document.getElementById("keybox4").style.display = "block";
	document.getElementById("keybox5").style.display = "block";
	
}
function known(){
	document.getElementById("Random").checked = false;
	if(document.getElementById("Known").checked == false){
		document.getElementById("Random").checked = true;
	}
	document.getElementById("keybox2").style.display = "none";
	document.getElementById("keybox3").style.display = "none";
	document.getElementById("keybox4").style.display = "none";
	document.getElementById("keybox5").style.display = "none";
	
}