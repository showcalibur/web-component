const ajax = require('../components/data/ajax');
const base64 = require('../components/data/base64');
const cookie = require('../components/data/cookie');

const Button = require('../components/ui/button');

button1 = new Button("button1");
button1.setType("primary");
button1.setEvent("click", function() {
    console.log("button1 is clicked");
	ajax.get('http://www.mocky.io/v2/5e56a6c0300000550828e951', function(data){
	    console.log(JSON.parse(data));
	    var b64data = base64.encode(data);
	    console.log(b64data);
	    console.log(base64.decode(b64data));
	    cookie.set('mydata', b64data);
	    cookie.set('mydata2', b64data, '/web-component/');
	    cookie.set('mydata3', b64data, '/web-component/', 5);
	    var b64data_get = cookie.get('mydata');
	    console.log(base64.decode(b64data_get));
	    var b64data_get = cookie.get('mydata2');
	    console.log(base64.decode(b64data_get));
	    var b64data_get = cookie.get('mydata3');
	    console.log(base64.decode(b64data_get));
	});
});
