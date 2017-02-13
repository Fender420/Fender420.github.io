var menuBlock = document.getElementsByClassName('nav-block')[0];
var menuButton = document.getElementsByClassName('c-hamburger')[0];
handler(menuButton);
stay();

function handler(menuButton) {
	menuButton.addEventListener('click', function() {
		if (menuButton.classList.contains('is-active')) {
			menuBlock.classList.add('open');
		} else {
			menuBlock.classList.remove('open');
		}
	});
}

handler.onload = document.addEventListener('click', function() {
	if (menuButton.classList.contains('is-active')) {
		menuBlock.classList.remove('open');
	}
}, 1);

function stay() {
	menuBlock.addEventListener('mouseenter', function() {
		menuBlock.classList.add('open');
		menuButton.classList.add('is-active');
	});
	menuBlock.addEventListener('click', leave);
}

function leave() {
	menuBlock.classList.add('open');
	setTimeout(menuBlock.addEventListener('mouseleave', function() {
		menuBlock.classList.remove('open');
		menuButton.classList.remove('is-active');
	}), 0);
}


function scroll(){
	window.scrollBy(0, -20);
	if (window.pageYOffset > 0) {
		requestAnimationFrame(scroll);
	}
}

menuBlock.addEventListener('click', function(e) {
	scroll();
}, false);
