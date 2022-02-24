// 간단 jQuery 만들기

var jQuery = function(param) {
	if(typeof(param)	=== 'function') {
		window.addEventListener('load', param);
		return;
	}
	
	if(typeof(param) === 'string') {
		var elements = document.querySelectorAll(param);
		return new _jQuery(elements);
	}	
}

var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < elements.length; i++) {
		this[i] = elements[i];		
	}
}

_jQuery.prototype.jquery = 'jquery.simple.0.0.1';
_jQuery.prototype.css = function(name, value) {
	for(var i = 0; i < this.length; i++){
		this[i].style[name] = value;  //name으로 들어온게 color이다.  value는 red이다.
	}	
}

_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.length; i++){
		this[i].addEventListener('click', handler);  //엘러먼트 basic읨 add 엘러먼ㄷ트
	}	
}


_jQuery.prototype.click = function(handler) {
	for(var i = 0; i < this.length; i++){
		this[index];
	}	
}



var $ = jQuery;