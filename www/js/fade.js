
var btn = document.querySelector('.js-btn');
var el = document.querySelector('.js-fade');


btn.addEventListener('click', function(e){
  el.classList.remove('is-paused');
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