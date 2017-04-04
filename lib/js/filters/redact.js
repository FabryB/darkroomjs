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
        },

        applyTo: function(canvasEl) {
            var context = canvasEl.getContext('2d'),
                imageData = context.getImageData(this.left, this.top, this.width || canvasEl.width, this.height || canvasEl.height),
                data = imageData.data;

            for (var i = 0, len = data.length; i < len; i += 4) {
                // replace all pixels with zero (net effect: black)
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
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
