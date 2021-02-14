function UpdateKeys(){
	if(document.getElementById("Random").checked){
		if(document.getElementById("cypher").checked){
			var keynum = document.querySelector('input[name="key"]:checked').value;
			
		}
	}else{
		return document.getElementById("Known").value;
	}
}

function CaesarCypher(){
	var key = UpdateKeys();
}
function CaesarDecypher(){
	var key = UpdateKeys();
}

function update(){
	if(document.getElementById("cypher").checked){
		CaesarCypher();
	}else{
		CaesarDecypher();
	}
}