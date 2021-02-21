function CaesarCypher(){
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log(key)
}
function CaesarDecypher(){
	var key = document.querySelector('input[name="key"]:checked').value;
	console.log(key)
}

function UpdateCaesar(){
	if(document.getElementById("cypher").checked){
		CaesarCypher();
	}else{
		CaesarDecypher();
	}
}