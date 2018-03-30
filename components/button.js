var Button = function(name) {
  this.name = name;
  this._getElement().setAttribute("class", "pure-button");
  console.log(name + ": created");
}

Button.prototype._getElement = function() {
    buttons = document.getElementsByTagName("button");
    for (i = 0; i < buttons.length; ++i) {
        validButton = (buttons[i].getAttribute("use-component") == "Button") && (buttons[i].getAttribute("name") == this.name);
        if (validButton) {
            // console.log(this.name + ": found");
            return buttons[i];
        }
        else {
            // console.log(this.name + ": not found in DOM elements");
        }
    }
    return null;
}

Button.prototype._addClass = function(el, c) {
    var list = element.className.split(" ");
    if (list.indexOf(c)===-1) list[list.length] = c;
    el.className = list.join(" ");
}

Button.prototype._removeClass = function(el, c) {
    var list = el.className.split(" ");
    if (list.indexOf(c)!==-1) delete list[list.indexOf(c)];
    el.className = list.join(" ");
}

Button.prototype.setType = function(type) {
    button = this._getElement();
    if (button) {
        this._getElement().setAttribute("class", "pure-button pure-button-" + type);
        // console.log(this.name + ": set type : " + type);
    }
   return this;
};

Button.prototype.setEvent = function(evtName, callback) {
    button = this._getElement();
    if (button) {
        button.addEventListener(evtName, function(e) {
            callback(e);
        }, false);
        // console.log(this.name + ": set event : " + evtName);
    }
   return this;
};

module.exports = Button;
