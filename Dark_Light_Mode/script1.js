"use strict"

var para=document.getElementsByTagName('p')[0];
var bodyElements = document.getElementsByTagName('body')[0];
var circle=document.getElementById('circle');
var btn=document.getElementById('toggle-button');
btn.addEventListener('click',toggletheme)
var dark=false;
function toggletheme()
{
	if(!dark)
	{
		para.classList.add("light-mode");
		bodyElements.classList.add("dark-mode");
		para.innerText="Click on the Above Button to Enter Light Mode";
		circle.style.marginLeft = "104px";
        dark = true;
	}
	else
	{
		para.classList.remove("light-mode");
		bodyElements.classList.remove("dark-mode");
		para.innerText="Click on the Above Button to Enter Dark Mode";
		circle.style.marginLeft = "0px";
        dark = false;
	}
}
