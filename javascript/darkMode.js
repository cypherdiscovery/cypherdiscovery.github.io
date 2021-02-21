function background(data) 
{
	let root = document.documentElement;
	var checkBox = document.getElementById("viewMode");
	if (checkBox.checked == true){
		document.body.style.color = "LightCyan";
		document.body.style.backgroundColor = "black";
		var location = data.concat("images/DarkTitle.png");
		document.getElementById("title").src = location;
		root.style.setProperty('--mainColour', '#483D8B');
		root.style.setProperty('--textColour', '#E0FFFF');
		root.style.setProperty('--backColour', '#000000');
		root.style.setProperty('--shadowMain', '#382C7A');
		root.style.setProperty('--shadowBack', '#303050');
		localStorage.setItem("darkMode", 'true');
	}else{
		document.body.style.color = "LightSlateGrey";
		document.body.style.backgroundColor = "white";
		var location = data.concat("images/LightTitle.png");
		document.getElementById("title").src = location;
		root.style.setProperty('--mainColour', '#B0C4DE');
		root.style.setProperty('--textColour', '#778899');
		root.style.setProperty('--backColour', '#FFFFFF');
		root.style.setProperty('--shadowMain', '#A0B4CE');
		root.style.setProperty('--shadowBack', '#DFDFDF');
		localStorage.setItem("darkMode", 'false');
	}
	var dark = localStorage.getItem("darkMode");
}
function checkMode(data)
{
	var dark = localStorage.getItem("darkMode");
	if(dark=="false")
	{
		document.getElementById("viewMode").checked = false;
	}else{
		document.getElementById("viewMode").checked = true;
	}
	background(data);
}
