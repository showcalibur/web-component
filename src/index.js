const Button = require('../components/button');

button1 = new Button("button1");
button1.setType("primary");
button1.setEvent("click", function() {
    console.log("button1 is clicked");
});
