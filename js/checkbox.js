var i1 = document.getElementById('tab-nav-1');
var i2 = document.getElementById('tab-nav-2');
var i3 = document.getElementById('tab-nav-3');
var i4 = document.getElementById('tab-nav-4');

var cv = document.getElementById('cv');
var port = document.getElementById('port');
var cert = document.getElementById('cert');
var lor = document.getElementById('lor');

var e = document.querySelectorAll('.over');

var body = document.getElementById('body');
var wrap = document.getElementById('wrap');
var footer = document.getElementById('footer');

cv.style.opacity = 0;
cv.style.zIndex = 0;

for (var i = 0; i < e.length; i++) {
	e[i].style.width = 0;

	cv.style.opacity = 1;
	cv.style.zIndex = 1;

	if (cv.style.opacity == 1 && cv.style.zIndex == 1) {
		setTimeout( function() {
			for (var i = 0; i < e.length; i++) {
				e[i].style.width = '';
			}
		}, 0);
	} 
}

i1.onclick = function() {
	cv.style.opacity = 1;
	cv.style.zIndex = 1;
	port.style.opacity = 0;
	port.style.zIndex = 0;
	cert.style.opacity = 0;
	cert.style.zIndex = 0;
	lor.style.opacity = 0;
	lor.style.zIndex = 0;
	setTimeout( function() {
			for (var i = 0; i < e.length; i++) {
				e[i].style.width = '';
			}
		}, 0);
	wrap.style.height = 1350 + "px";
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
	setTimeout( function() {
			for (var i = 0; i < e.length; i++) {
				e[i].style.width = 0;
			}
		}, 300);
	wrap.style.height = (document.documentElement.clientHeight - footer.clientHeight) + "px";
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
	setTimeout( function() {
			for (var i = 0; i < e.length; i++) {
				e[i].style.width = 0;
			}
		}, 300);
	wrap.style.height = (document.documentElement.clientHeight - footer.clientHeight) + "px";
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
	setTimeout( function() {
			for (var i = 0; i < e.length; i++) {
				e[i].style.width = 0;
			}
		}, 300);
	wrap.style.height = (document.documentElement.clientHeight - footer.clientHeight) + "px";

};