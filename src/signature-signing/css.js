(function(SignatureSigning){SignatureSigning.prototype._drawCss = function() {this.css = '@charset "utf-8";';var style = document.createElement('style');style.type = 'text/css';if (style.styleSheet) {style.styleSheet.cssText = this.css;} else {style.appendChild(document.createTextNode(this.css));}return document.body.appendChild(style);};}(SignatureSigning));