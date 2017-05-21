var btn = document.querySelector('.js-btn');
var btn2 = document.querySelector('.js-btn2');
var btn3 = document.querySelector('.js-btn3');
var el = document.querySelector('.js-fade');

btn.addEventListener('click', function(e){
  el.classList.remove('is-paused');
});

btn2.addEventListener('click', function(e){
  el.classList.remove('is-paused');
});

btn3.addEventListener('click', function(e){
  el.classList.remove('is-paused');
});

