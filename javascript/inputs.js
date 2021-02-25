
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
	
	document.getElementById("keybox1").innerHTML = "<label class='container'><span id='key1'>"+keys[0]+"<span><input type='radio' checked='checked' name='key'  value="+keys[0]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";	
	document.getElementById("keybox2").innerHTML = "<label class='container'><span id='key2'>"+keys[1]+"<span><input type='radio' name='key' value="+keys[1]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox3").innerHTML = "<label class='container'><span id='key3'>"+keys[2]+"<span><input type='radio' name='key' value="+keys[2]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox4").innerHTML = "<label class='container'><span id='key4'>"+keys[3]+"<span><input type='radio' name='key' value="+keys[3]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
	document.getElementById("keybox5").innerHTML = "<label class='container'><span id='key5'>"+keys[4]+"<span><input type='radio' name='key' value="+keys[4]+" onclick='UpdateCaesar()'><span class='checkmark'></span></label>";
}