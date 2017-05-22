/****************************************************
******* Show / hide step content
*****************************************************/

var stepList = document.querySelectorAll('.step .title');


for (var i = 0; i < stepList.length; i++) {

	var stepTitle = stepList[i];
	
	stepTitle.addEventListener('mousedown', function (event) {
			
			var step = this.parentElement;
			
			var stepContent = step.querySelector('.content');
			stepContent.classList.toggle("hidden");

			var stepArrowImage = step.querySelector('.arrow img');
			stepArrowImage.classList.toggle("down");
	});
};



/****************************************************
******* Massive Array For Content Selection
*****************************************************/

var a = document.querySelector('.chapter1');
var b = document.querySelector('.chapter2');
var c = document.querySelector('.chapter3');
var d = document.querySelector('.chapter4');
var e = document.querySelector('.chapter5');
var f = document.querySelector('.chapter6');

var tri1 = document.querySelector('.triangle1');
var tri2 = document.querySelector('.triangle2');
var tri3 = document.querySelector('.triangle3');
var tri4 = document.querySelector('.triangle4');
var tri5 = document.querySelector('.triangle5');
var tri6 = document.querySelector('.triangle6');


/****************************************************
******* Show only chapter 1
*****************************************************/

function hideContent(id) {

		a.classList.remove("hidden");
		b.classList.add("hidden");
		c.classList.add("hidden");
		d.classList.add("hidden");
		e.classList.add("hidden");
		f.classList.add("hidden");
	
		tri1.classList.add("triangleMove");
		tri2.classList.remove("triangleMove");
		tri3.classList.remove("triangleMove");
		tri4.classList.remove("triangleMove");
		tri5.classList.remove("triangleMove");
		tri6.classList.remove("triangleMove");
}


/****************************************************
******* Show only chapter 2
*****************************************************/

function hideContent2(id) {

		a.classList.add("hidden");
		b.classList.remove("hidden");
		c.classList.add("hidden");
		d.classList.add("hidden");
		e.classList.add("hidden");
		f.classList.add("hidden");

		
		tri1.classList.remove("triangleMove");
		tri2.classList.add("triangleMove");
		tri3.classList.remove("triangleMove");
		tri4.classList.remove("triangleMove");
		tri5.classList.remove("triangleMove");
		tri6.classList.remove("triangleMove");
}


/****************************************************
******* Show only chapter 3
*****************************************************/

function hideContent3(id) {
		
		a.classList.add("hidden");
		b.classList.add("hidden");
		c.classList.remove("hidden");
		d.classList.add("hidden");
		e.classList.add("hidden");
		f.classList.add("hidden");
	
		
		tri1.classList.remove("triangleMove");
		tri2.classList.remove("triangleMove");
		tri3.classList.add("triangleMove");
		tri4.classList.remove("triangleMove");
		tri5.classList.remove("triangleMove");
		tri6.classList.remove("triangleMove");
}


/****************************************************
******* Show only chapter 4
*****************************************************/

function hideContent4(id) {
		
		a.classList.add("hidden");
		b.classList.add("hidden");
		c.classList.add("hidden");
		d.classList.remove("hidden");
		e.classList.add("hidden");
		f.classList.add("hidden");
	
		tri1.classList.remove("triangleMove");
		tri2.classList.remove("triangleMove");
		tri3.classList.remove("triangleMove");
		tri4.classList.add("triangleMove");
		tri5.classList.remove("triangleMove");
		tri6.classList.remove("triangleMove");
}


/****************************************************
******* Show only chapter 5
*****************************************************/

function hideContent5(id) {

		a.classList.add("hidden");
		b.classList.add("hidden");
		c.classList.add("hidden");
		d.classList.add("hidden");
		e.classList.remove("hidden");
		f.classList.add("hidden");
	
		tri1.classList.remove("triangleMove");
		tri2.classList.remove("triangleMove");
		tri3.classList.remove("triangleMove");
		tri4.classList.remove("triangleMove");
		tri5.classList.add("triangleMove");
		tri6.classList.remove("triangleMove");
}



/****************************************************
******* Show only chapter 6
*****************************************************/

function hideContent6(id) {

		a.classList.add("hidden");
		b.classList.add("hidden");
		c.classList.add("hidden");
		d.classList.add("hidden");
		e.classList.add("hidden");
		f.classList.remove("hidden");
	
		tri1.classList.remove("triangleMove");
		tri2.classList.remove("triangleMove");
		tri3.classList.remove("triangleMove");
		tri4.classList.remove("triangleMove");
		tri5.classList.remove("triangleMove");
		tri6.classList.add("triangleMove");
}
