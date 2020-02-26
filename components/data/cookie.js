// https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/

exports.get = function(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};

exports.set = function(name, value, path, days) {
	var path = (typeof path !== "undefined") ? path : "/";
	var days = (typeof days !== "undefined") ? days : 30;
    var d = new Date;
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
    document.cookie = name + "=" + value + ";path=" + path + ";expires=" + d.toGMTString();
};

exports.delete = function(name) {
    setCookie(name, '', -1);
}