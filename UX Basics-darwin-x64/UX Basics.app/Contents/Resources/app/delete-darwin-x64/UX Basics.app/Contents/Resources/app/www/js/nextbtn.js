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

/* BACK TO HOME */
document.querySelector(".arrowprev2").addEventListener("click", function(){
	
		mainMenu.classList.remove("hidden");
		slide1.classList.add("hidden");
});
/* END */


/* GO TO NEXT */
document.querySelector(".arrownext2").addEventListener("click", function(){
	
		slide1.classList.add("hidden");
		slide2.classList.remove("hidden");
});
/* END */


/****************************************************
******* INTRO 2 ARROWS
*****************************************************/

/* BACK TO PREVIOUS */
document.querySelector(".arrowprev3").addEventListener("click", function(){
	
		slide1.classList.remove("hidden");
		slide2.classList.add("hidden");

});
/* END */


/* GO TO NEXT */
document.querySelector(".arrownext3").addEventListener("click", function(){
	
		slide2.classList.add("hidden");
		slide3.classList.remove("hidden");
});
/* END */


/****************************************************
******* INTRO 2 ARROWS
*****************************************************/

/* BACK TO PREVIOUS */
document.querySelector(".arrowprev4").addEventListener("click", function(){
	
		slide2.classList.remove("hidden");
		slide3.classList.add("hidden");

});
/* END */