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
            this.pixel = options.pixel;
        },

        applyTo: function(canvasEl) {
            var context = canvasEl.getContext('2d');
            var imageData = null;

            if(this.pixel) {
                let width = this.width || canvasEl.width; width = Math.ceil(width);
                let height = this.height || canvasEl.height; height = Math.ceil(height);
                width = this._by20(width);
                height = this._by20(height);

                if(height > canvasEl.height) height = canvasEl.height;
                if(width > canvasEl.width) width = canvasEl.width;
                
                var imageData = context.getImageData(this.left, this.top, width-1, height-1);
                this.pixelatte(imageData);                
            } else {
                var imageData = context.getImageData(this.left, this.top, this.width || canvasEl.width, this.height || canvasEl.height);
                this.redact(imageData);
            }

            if(null !== imageData)
                context.putImageData(imageData, this.left, this.top);
        },

        _by20: function(v) {      
            if(v % 10 != 0) {
                v = v + (10 - (v %10));
            }
            if(v % 20 != 0) {
                v = v + (20 - (v % 20));
            }
            return v;
        },

        pixelatte: function(imageData) {
            //var clone = new Uint8ClampedArray(imageData.data);//data.slice();
            var data = imageData.data;
            let width = imageData.width*4;
            let height = imageData.height;
            let chunkWidth = 20*4
            let chunkHeight = 20;
            let chunk = chunkWidth * chunkHeight / 4;
            let aChunkWidth = chunkWidth;
            let aChunkHeight = chunkHeight;            
            
            for (var y = 0; y <= height; y += chunkHeight) {
                for (var x =0; x<= width; x += chunkWidth) {
                    var r = 0, g = 0, b = 0;
                    aChunkHeight = y + chunkHeight;
                    if (aChunkHeight > height) {
                        aChunkHeight = height;
                    }
                    aChunkWidth = x + chunkWidth;
                    if(aChunkWidth > width) {
                        aChunkWidth = width;
                    }

                    for(var py = y; py < aChunkHeight; py++) {
                        if(py > height) continue;
                        for(var px=x; px < aChunkWidth; px+=4) {
                            let index = py * (imageData.width*4) + px;
                            if(index+2 > width*height) break;
                            r += (data[index]);
                            g += (data[index + 1]);
                            b += data[index + 2];
                        }
                    }
                
                    var rr = r / chunk;
                    var gg = g / chunk;
                    var bb = b / chunk;
                    
                    for(var py = y; py < aChunkHeight ; py++) {
                        if(py > height) continue;
                        for(var px= x; px < aChunkWidth; px+=4) {
                            if(px + 4 > width) continue;
                            var index = py * (imageData.width*4) + px;
                            if(index+2 > width*height) break;
                            data[index] = rr;
                            data[index + 1] = gg;
                            data[index + 2] = bb;
                        }
                    }
                }    
            }
        },

        redact: function(imageData) {
            var data = imageData.data;
            let red = 0,
                green = 0,
                blue = 0;
            if (this.color && this.color.red && this.color.green && this.color.blue) {
                red = this.color.red;
                green = this.color.green;
                blue = this.color.blue;
            }
            
            for (var i = 0, len = data.length; i < len; i += 4) {
                data[i] = red;
                data[i + 1] = green;
                data[i + 2] = blue;
            }
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
