function background(data) 
{
	//updates all images on the webpage and document colour variables to the correct colour mode 
	let root = document.documentElement;
	var checkBox = document.getElementById("viewMode");
	if (checkBox.checked == true){
		document.body.style.color = "LightCyan";
		document.body.style.backgroundColor = "black";
		var location = data.concat("images/DarkTitle.png");
		document.getElementById("title").src = location;
		try{
			var location = data.concat("images/OuterWheelDarkMode.jpg");
			document.getElementById("wheel").src = location;
			var location = data.concat("images/InnerWheelDarkMode.png");
			document.getElementById("inner").src = location;
		}catch{
			//pass
		}
		root.style.setProperty('--mainColour', '#483D8B');
		root.style.setProperty('--textColour', '#E0FFFF');
		root.style.setProperty('--backColour', '#000000');
		root.style.setProperty('--shadowMain', '#382C7A');
		root.style.setProperty('--shadowBack', '#303050');
		localStorage.setItem("darkMode", 'true');
	}else{
		document.body.style.color = "DarkSlateGrey";
		document.body.style.backgroundColor = "white";
		var location = data.concat("images/LightTitle.png");
		document.getElementById("title").src = location;
		try{
			var location = data.concat("images/OuterWheelLightMode.jpg");
			document.getElementById("wheel").src = location;
			var location = data.concat("images/InnerWheelLightMode.png");
			document.getElementById("inner").src = location;
		}catch{
			//pass
		}
		root.style.setProperty('--mainColour', '#B0C4DE');
		root.style.setProperty('--textColour', '#2F4F4F');
		root.style.setProperty('--backColour', '#FFFFFF');
		root.style.setProperty('--shadowMain', '#A0B4CE');
		root.style.setProperty('--shadowBack', '#DFDFDF');
		localStorage.setItem("darkMode", 'false');
	}
	try{
		var letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
		freqArray = frequencyAnalasis();
		
		stringHTML = "";
		for(i = 0; i<26; i++){
			stringHTML = stringHTML.concat("<th>"+freqArray[i]+"</th>");
		}
		document.getElementById("exampleKey").innerHTML = stringHTML;
		TESTER = document.getElementById('tester');
		var dark = getComputedStyle(document.documentElement).getPropertyValue('--shadowMain');
		if(dark=="#A0B4CE"){
			var c = 'rgba(160,180,206,0.8)';
			var l = 'rgba(255,255,255,0.8)';
		}else{
			var c = 'rgba(72,61,139,0.8)';
			var l = 'rgba(0,0,0,0.8)';
		}
		console.log("dark "+dark);
		var cs = [];
		for(i=0; i<26; i++){
			cs[i] = c;
		}
		var data = [
		  {
			x: letters,
			y: freqArray,
			marker:{
				color: cs
			},
			type: 'bar'
			
		  }
		];
		var layout = {
		  paper_bgcolor: l,
		  plot_bgcolor: l
		};
		Plotly.newPlot( TESTER, data, layout );
	}catch{
		//is chill dont worry about it
	}
}
function checkMode(data)
{
	//checks the users colour preference and runs appropriate method to reflect it
	var dark = localStorage.getItem("darkMode");
	if(dark=="false")
	{
		document.getElementById("viewMode").checked = false;
	}else{
		document.getElementById("viewMode").checked = true;
	}
	background(data);
}
