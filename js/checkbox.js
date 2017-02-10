var i1 = document.getElementById('tab-nav-1');
var i2 = document.getElementById('tab-nav-2');
var i3 = document.getElementById('tab-nav-3');
var i4 = document.getElementById('tab-nav-4');

var cv = document.getElementById('cv');
var port = document.getElementById('port');
var cert = document.getElementById('cert');
var lor = document.getElementById('lor');

cv.style.opacity = 1;
cv.style.zIndex = 1;

i1.onclick = function() {
	cv.style.opacity = 1;
	cv.style.zIndex = 1;
	port.style.opacity = 0;
	port.style.zIndex = 0;
	cert.style.opacity = 0;
	cert.style.zIndex = 0;
	lor.style.opacity = 0;
	lor.style.zIndex = 0;
};

i2.onclick = function() {
	cv.style.opacity = 0;
	cv.style.zIndex = 0;
	port.style.opacity = 1;
	port.style.zIndex = 1;
	cert.style.opacity = 0;
	cert.style.zIndex = 0;
	lor.style.opacity = 0;
	lor.style.zIndex = 0;
};

i3.onclick = function() {
	cv.style.opacity = 0;
	cv.style.zIndex = 0;
	port.style.opacity = 0;
	port.style.zIndex = 0;
	cert.style.opacity = 1;
	cert.style.zIndex = 1;
	lor.style.opacity = 0;
	lor.style.zIndex = 0;
};

i4.onclick = function() {
	cv.style.opacity = 0;
	cv.style.zIndex = 0;
	port.style.opacity = 0;
	port.style.zIndex = 0;
	cert.style.opacity = 0;
	cert.style.zIndex = 0;
	lor.style.opacity = 1;
	lor.style.zIndex = 1;
};