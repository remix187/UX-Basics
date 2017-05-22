
var btn = document.querySelector('.js-btn');
var btn2 = document.querySelector('.js-btn2');
var btn3 = document.querySelector('.js-btn3');
var el = document.querySelector('.js-fade');
var el = document.querySelector('.js-fade2');
var el = document.querySelector('.js-fade3');


btn.addEventListener('mousedown', function(e){
  el.classList.remove('is-paused');
});


btn2.addEventListener('mousedown', function(e){
  el.classList.remove('is-paused2');
});

btn3.addEventListener('mousedown', function(e){
  el.classList.remove('is-paused3');
});


/****************************************************
******* Show / hide step content
*****************************************************/

/*

var btn = document.querySelector('.js-btn');
var introList = document.querySelectorAll('.js-fade');

for (var i = 0; i < introList.length; i++) {

	var step = introList[i];

	next.addEventListener('mousedown', function (event) {

		var nextIntro = this.querySelector('.js-fade');
		nextIntro.classList.remove('is-paused');

	});
};

*/