/****************************************************
******* CLASS SELECTOR VARS
*****************************************************/


var mainMenu = document.querySelector('.home');
var slide1 = document.querySelector('.intro1');
var slide2 = document.querySelector('.intro2');
var slide3 = document.querySelector('.intro3');
var logo = document.querySelector('.logo');
var icons = document.querySelector('.intro-icons');


/****************************************************
******* HOME ARROW
*****************************************************/

document.querySelector(".arrownext").addEventListener("click", function(){
	
		mainMenu.classList.add("hidden");
		slide1.classList.remove("hidden");
});


/****************************************************
******* INTRO 1 ARROWS
*****************************************************/

document.querySelector(".arrowprev2").addEventListener("click", function(){
	
		mainMenu.classList.remove("hidden");
		slide1.classList.add("hidden");
});


document.querySelector(".arrownext2").addEventListener("click", function(){
	
		slide1.classList.add("hidden");
		slide2.classList.remove("hidden");
});