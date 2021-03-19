
function cypher(){
	document.getElementById("decypher").checked = false;
	if(document.getElementById("cypher").checked == false){
		document.getElementById("cypher").checked = true;
	}
	document.getElementById("random_label").innerHTML = "Random";
}
function decypher(){
	document.getElementById("cypher").checked = false;
	if(document.getElementById("decypher").checked == false){
		document.getElementById("decypher").checked = true;
	}
	document.getElementById("random_label").innerHTML = "Unknown";
}
function keySwitch(mode, notMode){
	if(document.getElementById(notMode).checked == true){
		document.getElementById(notMode).checked = false;
	}else{
		document.getElementById(mode).checked = true;
	}
}