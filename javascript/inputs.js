function cypher(){
	document.getElementById("decypher").checked = false;
	if(document.getElementById("cypher").checked == false){
		document.getElementById("decypher").checked = true;
	}
	document.getElementById("keyType").innerHTML = "<label class='container'>Random <input type='checkbox' id='Random' onclick='random()'checked='checked'><span class='checkmark'></span></label><label class='container'>Known Key: <input type='checkbox' id='Known' onclick='known()'><span class='checkmark'></span></label><input type='number' id='quantity' name='quantity' min='1' max='25'>";
}
function decypher(){
	document.getElementById("cypher").checked = false;
	if(document.getElementById("decypher").checked == false){
		document.getElementById("cypher").checked = true;
	}
	document.getElementById("keyType").innerHTML = "<label class='container'>Unknown <input type='checkbox' id='Random' onclick='random()' checked='checked'><span class='checkmark'></span></label><label class='container'>Known Key: <input type='checkbox' id='Known' onclick='known()'><span class='checkmark'></span></label><input type='number' id='quantity' name='quantity' min='1' max='25'>";
}
function random(){
	document.getElementById("Known").checked = false;
	if(document.getElementById("Random").checked == false){
		document.getElementById("Known").checked = true;
	}
}
function known(){
	document.getElementById("Random").checked = false;
	if(document.getElementById("Known").checked == false){
		document.getElementById("Random").checked = true;
	}
}