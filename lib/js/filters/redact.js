(function(global) {

    "use strict";

    // var fabric  = global.fabric || (global.fabric = { }),
    
    var extend = fabric.util.object.extend;

    fabric.Image.filters.Redact = fabric.util.createClass(fabric.Image.filters.BaseFilter, {

        type: 'Redact',

        initialize: function(options) {
            options = options || { };
            this.left = options.left || 0;
            this.top = options.top || 0;
            this.width = options.width;
            this.height = options.height;
            this.color = options.color;
        },

        applyTo: function(canvasEl) {
            var context = canvasEl.getContext('2d'),
                imageData = context.getImageData(this.left, this.top, this.width || canvasEl.width, this.height || canvasEl.height),
                data = imageData.data;

            var red = 0,
                green = 0,
                blue = 0;
            if (this.color && this.color.red && this.color.green && this.color.blue) {
                red = this.color.red;
                green = this.color.green;
                blue = this.color.blue;
            }

            for (var i = 0, len = data.length; i < len; i += 4) {
                // replace all pixels with zero (net effect: black)
                data[i] = red;
                data[i + 1] = green;
                data[i + 2] = blue;
            }

            context.putImageData(imageData, this.left, this.top);
        },

        toObject: function() {
            return extend(this.callSuper('toObject'), {
                left: this.left,
                top: this.top,
                width: this.width,
                height: this.height
            });
        }
    });
})(typeof exports !== 'undefined' ? exports : this);
