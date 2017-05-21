(function() {
'use strict';

Darkroom.plugins['color'] = Darkroom.Plugin.extend({
    mouseDown: false,
    padding: 10,
    border: 1,
    defaults: {
        red: 0,
        green: 0,
        blue: 0
    },

    initialize: function InitializeDarkroomColorPlugin() {
        var buttonGroup = this.darkroom.toolbar.createButtonGroup();

        this.colorPickerButton = buttonGroup.createButton({
            image: 'color'
        });
        
        var initColor = 'rgb(' + 
            this.options.red + ',' +
            this.options.green + ',' + 
            this.options.blue + ')';

        this.updateButtonColor(initColor);
        this.darkroom.options.color = { rgb: initColor, red: this.options.red, green: this.options.green, blue: this.options.blue };

        this.colorPaletteImage = new Image();

        this.colorPaletteCanvas = document.createElement('canvas');
        this.colorPaletteCanvas.width = 276;
        this.colorPaletteCanvas.height = 276;
        this.colorPaletteCanvas.style.zIndex   = 8;
        this.colorPaletteCanvas.style.position = "absolute";
        this.colorPaletteCanvas.style.border   = "1px solid";
        this.colorPaletteCanvas.style.top = '0';
        this.colorPaletteCanvas.style.left = '0';
        var context = this.colorPaletteCanvas.getContext('2d');

        this.colorPaletteOverlay = document.createElement('canvas');
        this.colorPaletteOverlay.width = 256;
        this.colorPaletteOverlay.height = 256;
        this.colorPaletteOverlay.style.zIndex   = 9;
        this.colorPaletteOverlay.style.border   = "1px solid #333";
        this.colorPaletteOverlay.style.position = "absolute";
        this.colorPaletteOverlay.style.top = '10px';
        this.colorPaletteOverlay.style.left = '10px';
        this.colorPaletteOverlay.style.cursor = 'default';
        
        this.colorContainer = document.createElement('div');
        this.colorContainer.style.position = 'absolute'; 
        this.colorContainer.style.top = '0';
        this.colorContainer.style.left = '0';

        this.destroy();

        this.colorPaletteImage.onload = function() {
            context.strokeStyle = '#444';
            context.lineWidth = 2;
            context.scale(1,1);
            context.drawImage(this.colorPaletteImage, 0,0);
            
            this.colorContainer.appendChild(this.colorPaletteCanvas);
            this.colorContainer.appendChild(this.colorPaletteOverlay);
            this.darkroom.containerElement.appendChild(this.colorContainer);
            //this.darkroom.containerElement.appendChild(this.colorPaletteCanvas);
            //this.darkroom.containerElement.appendChild(this.colorPaletteOverlay);
        }.bind(this);

        this.colorPaletteImage.src = './images/colors.png';
        
        this.colorPaletteOverlay.addEventListener('mousedown', this.onMouseDown.bind(this), false);
        this.colorPaletteOverlay.addEventListener('mouseup', this.onMouseUp.bind(this), false);
        this.colorPaletteOverlay.addEventListener('mousemove', this.onMouseMove.bind(this), false);
        this.colorPickerButton.addEventListener('click', this.onClick.bind(this));
    },

    onClick: function(event) {
        if(this.colorPaletteOverlay.style.display == 'none') {
            this.show();
        }
        else {
            this.destroy();
        } 
    },

    onMouseDown: function(event) {
        this.mouseDown = true;
    },

    onMouseUp: function(event) {
        this.mouseDown = false;
        var mousePosition = this.getMousePosition(this.colorPaletteOverlay, event);
        var color = this.getColor(this.colorPaletteCanvas, mousePosition);
        this.updateButtonColor(color.rgb);
        this.updatePointer(mousePosition, color);
        this.destroy();
        this.darkroom.options.color = color;
    },

    onMouseMove: function(event) {
        var mousePos = this.getMousePosition(this.colorPaletteOverlay, event);
        if (this.mouseDown && this.colorPaletteImage) {
            var color = this.getColor(this.colorPaletteCanvas, mousePos);
            this.updateButtonColor(color.rgb);
            this.updatePointer(mousePos, color);
        }
    },

    destroy: function() {
        this.colorPaletteOverlay.style.display = 'none';
        this.colorPaletteCanvas.style.display = 'none';
    },

    show: function() {
        this.colorPaletteOverlay.style.display = 'block';
        this.colorPaletteCanvas.style.display = 'block';
    },

    getMousePosition: function(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        var padding =this.padding || 0;
        var border = this.border || 0;
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            dataX: event.layerX - (border + 1),
            dataY: event.layerY - (border + 1),
        };
    },

    getColor: function(canvas, mousePosition) {
        var imgObj = this.colorPaletteImage;
        var context = canvas.getContext('2d');
        var imageData = context.getImageData(this.padding, this.padding, imgObj.width, imgObj.width);
        var data = imageData.data;
        var x = mousePosition.dataX < 0 ? 0 : mousePosition.dataX;
        var y = mousePosition.dataY < 0 ? 0 : mousePosition.dataY;
        var red = data[((imgObj.width * y) + x) * 4];
        var green = data[((imgObj.width * y) + x) * 4 + 1];
        var blue = data[((imgObj.width * y) + x) * 4 + 2];
        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        
        return {
            rgb: color,
            red: red, 
            green: green, 
            blue: blue
        };
    },

    updateButtonColor: function(rgb) {
        if (this.colorPickerButton !== null && this.colorPickerButton.element.firstElementChild !== null) {
            this.colorPickerButton.element.firstElementChild.style.fill = rgb;
        }
    },

    updatePointer: function(mousePosition, color) {
        var radius = 5;
        var ctx = this.colorPaletteOverlay.getContext('2d');
        ctx.clearRect(0, 0, this.colorPaletteOverlay.width, this.colorPaletteOverlay.height);
        ctx.beginPath();
        ctx.arc(mousePosition.x, mousePosition.y, radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'transparent';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        if(color !== null) {
            if(color.red < 60 && color.green < 60 && color.blue < 60) {
                ctx.strokeStyle = '#fff';
            }
        }
        ctx.stroke();
    }

});

})();
