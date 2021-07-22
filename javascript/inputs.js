//this code would not be needed if radio buttons were implemented instead
function cypher(){
	//when cypher checkbox is true, changes decypher checkbox to false
	document.getElementById("decypher").checked = false;
	if(document.getElementById("cypher").checked == false){
		document.getElementById("cypher").checked = true;
	}
	//changes 'unknown' to say 'random'
	document.getElementById("random_label").innerHTML = "Random";
}
function decypher(){
	//when decypher checkbox is true, changes cypher checkbox to false
	document.getElementById("cypher").checked = false;
	if(document.getElementById("decypher").checked == false){
		document.getElementById("decypher").checked = true;
	}
	//changes 'random' to say 'unknown'
	document.getElementById("random_label").innerHTML = "Unknown";
}
function keySwitch(mode, notMode){
	//when the type of key is altered, changes other to be the opposite
	if(document.getElementById(notMode).checked == true){
		document.getElementById(notMode).checked = false;
	}else{
		document.getElementById(mode).checked = true;
	}
}
