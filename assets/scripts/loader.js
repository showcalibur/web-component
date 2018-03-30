var isLocalhost;

(function(w, d){
	isLocalhost = (w.location.hostname === "localhost" || w.location.hostname === "127.0.0.1");
}(window, document));

// https://github.com/verlok/lazyload
(function(w, d){
	var b = d.getElementsByTagName("body")[0];
	var s = d.createElement("script"); s.async = true;
	var v = !("IntersectionObserver" in w) ? "8.6.0" : "10.4.1";
	s.src = isLocalhost? "./assets/scripts/lazyload.min.js" : "https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/" + v + "/lazyload.min.js";
	w.lazyLoadOptions = {}; // Your options here. See "recipes" for more information about async.
	s.setAttribute("async", "true");
	b.appendChild(s);
}(window, document));

// https://cdnjs.com/libraries/handlebars.js
(function(w, d){
	var b = d.getElementsByTagName("body")[0];
	var s = d.createElement("script"); s.async = true;
	s.src = isLocalhost? "./assets/scripts/handlebars.min.js" : "https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js";
	s.setAttribute("async", "true");
	b.appendChild(s);
}(window, document));

// https://github.com/myrcutio/browser-scss
// (function(w, d){
// 	var b = d.getElementsByTagName("body")[0];
// 	var s = d.createElement("script"); s.async = true;
// 	s.src = "./assets/scripts/browser-scss.min.js";
// 	s.setAttribute("async", "true");
// 	b.appendChild(s);
// }(window, document));

// http://stuk.github.io/require1k/
(function(w, d){
	var b = d.getElementsByTagName("body")[0];
	var s = d.createElement("script"); s.async = false;
	s.src = "./assets/scripts/require1k.min.js";
	s.setAttribute("async", "false");
	s.setAttribute("data-main", "./" + d.currentScript.getAttribute("data-main-ref"));
	b.appendChild(s);
}(window, document));
