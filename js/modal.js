var modalCont = document.getElementsByClassName("modal-content")[0];
var myMod = document.getElementById('myModal');
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];

window.addEventListener('click', closeModal, 1);

modalCont.addEventListener('click', openModal);
prev.addEventListener('click', openModal);
next.addEventListener('click', openModal);

function openModal() {
  document.getElementById('myModal').style.display = "block";
  var modalCont = document.getElementsByClassName("modal-content")[0];
  var nav = document.getElementsByClassName("nav-block")[0];
  var h = document.getElementsByTagName('header')[0];
  var f = document.getElementsByTagName('footer')[0];
  h.style.zIndex = 1;
  f.style.zIndex = 0;
  nav.style.zIndex = 0;
  setTimeout(function() {
    modalCont.style.opacity = 1;
  }, 100);
}

function closeModal() {
  var modalCont = document.getElementsByClassName("modal-content")[0];
  var nav = document.getElementsByClassName("nav-block")[0];
  var h = document.getElementsByTagName('header')[0];
  var f = document.getElementsByTagName('footer')[0];
  document.getElementById('myModal').style.display = "none";
  h.style.zIndex = "";
  f.style.zIndex = "";
  nav.style.zIndex = "";
  setTimeout(function() {
    modalCont.style.opacity = 0;
  }, 0);
}
  

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}