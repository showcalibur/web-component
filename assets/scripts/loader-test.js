var isLocalhost;

(function(w, d){
	isLocalhost = (w.location.hostname === "localhost" || w.location.hostname === "127.0.0.1");
}(window, document));

(function(w, d){
	var b = d.getElementsByTagName("body")[0];
	var s = d.createElement("script"); s.async = true;
	s.src = "./assets/scripts/mocha.min.js";
	s.setAttribute("async", "true");
	b.appendChild(s);
}(window, document));

(function(w, d){
	var b = d.getElementsByTagName("body")[0];
	var s = d.createElement("script"); s.async = true;
	s.src = "./assets/scripts/chai.min.js";
	s.setAttribute("async", "true");
	b.appendChild(s);
}(window, document));
