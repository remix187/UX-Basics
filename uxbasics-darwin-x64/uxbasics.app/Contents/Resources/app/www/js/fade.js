
var btn = document.querySelector('.js-btn');
var el = document.querySelector('.js-fade');


btn.addEventListener('mousedown', function(e){
  el.classList.remove('is-paused');
});