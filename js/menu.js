var menuBlock = document.getElementsByClassName("nav-block")[0];
var menuButton = document.getElementsByClassName("c-hamburger")[0];

menuButton.onclick = function() {
	menuBlock.classList.toggle("open");
};