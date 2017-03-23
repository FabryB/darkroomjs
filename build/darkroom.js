(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function() {
'use strict';

window.Darkroom = Darkroom;

// Core object of DarkroomJS.
// Basically it's a single object, instanciable via an element
// (it could be a CSS selector or a DOM element), some custom options,
// and a list of plugin objects (or none to use default ones).
function Darkroom(element, options, plugins) {
  return this.constructor(element, options, plugins);
}

// Create an empty list of plugin objects, which will be filled by
// other plugin scripts. This is the default plugin list if none is
// specified in Darkroom'ss constructor.
Darkroom.plugins = [];

Darkroom.prototype = {
  // Reference to the main container element
  containerElement: null,

  // Reference to the Fabric canvas object
  canvas: null,

  // Reference to the Fabric image object
  image: null,

  // Reference to the Fabric source canvas object
  sourceCanvas: null,

  // Reference to the Fabric source image object
  sourceImage: null,

  // Track of the original image element
  originalImageElement: null,

  // Stack of transformations to apply to the image source
  transformations: [],

  // Default options
  defaults: {
    // Canvas properties (dimension, ratio, color)
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    ratio: null,
    backgroundColor: '#fff',

    // Plugins options
    plugins: {},

    // Post-initialisation callback
    initialize: function() { /* noop */ }
  },

  // List of the instancied plugins
  plugins: {},

  // This options are a merge between `defaults` and the options passed
  // through the constructor
  options: {},

  constructor: function(element, options, plugins) {
    this.options = Darkroom.Utils.extend(options, this.defaults);

    if (typeof element === 'string')
      element = document.querySelector(element);
    if (null === element)
      return;

    var image = new Image();
    image.onload = function() {
      // Initialize the DOM/Fabric elements
      this._initializeDOM(element);
      this._initializeImage();

      // Then initialize the plugins
      this._initializePlugins(Darkroom.plugins);

      // Public method to adjust image according to the canvas
      this.refresh(function() {
        // Execute a custom callback after initialization
        this.options.initialize.bind(this).call();
      }.bind(this));

    }.bind(this)

    //image.crossOrigin = 'anonymous';
    image.src = element.src;
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
  },

  // Add ability to attach event listener on the core object.
  // It uses the canvas element to process events.
  addEventListener: function(eventName, callback) {
    var el = this.canvas.getElement();
    if (el.addEventListener){
      el.addEventListener(eventName, callback);
    } else if (el.attachEvent) {
      el.attachEvent('on' + eventName, callback);
    }
  },

  dispatchEvent: function(eventName) {
    // Use the old way of creating event to be IE compatible
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var event = document.createEvent('Event');
    event.initEvent(eventName, true, true);

    this.canvas.getElement().dispatchEvent(event);
  },

  // Adjust image & canvas dimension according to min/max width/height
  // and ratio specified in the options.
  // This method should be called after each image transformation.
  refresh: function(next) {
    var clone = new Image();
    clone.onload = function() {
      this._replaceCurrentImage(new fabric.Image(clone));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;
    this.image.selectable = false;

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.image);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    if (null !== this.options.ratio) {
      var canvasRatio = +this.options.ratio;
      var currentRatio = canvasWidth / canvasHeight;

      if (currentRatio > canvasRatio) {
        canvasHeight = canvasWidth / canvasRatio;
      } else if (currentRatio < canvasRatio) {
        canvasWidth = canvasHeight * canvasRatio;
      }
    }

    // Then scale the image to fit into dimension limits
    var scaleMin = 1;
    var scaleMax = 1;
    var scaleX = 1;
    var scaleY = 1;

    if (null !== this.options.maxWidth && this.options.maxWidth < canvasWidth) {
      scaleX =  this.options.maxWidth / canvasWidth;
    }
    if (null !== this.options.maxHeight && this.options.maxHeight < canvasHeight) {
      scaleY =  this.options.maxHeight / canvasHeight;
    }
    scaleMin = Math.min(scaleX, scaleY);

    scaleX = 1;
    scaleY = 1;
    if (null !== this.options.minWidth && this.options.minWidth > canvasWidth) {
      scaleX =  this.options.minWidth / canvasWidth;
    }
    if (null !== this.options.minHeight && this.options.minHeight > canvasHeight) {
      scaleY =  this.options.minHeight / canvasHeight;
    }
    scaleMax = Math.max(scaleX, scaleY);

    var scale = scaleMax * scaleMin; // one should be equals to 1

    canvasWidth *= scale;
    canvasHeight *= scale;

    // Finally place the image in the center of the canvas
    this.image.setScaleX(1 * scale);
    this.image.setScaleY(1 * scale);
    this.canvas.add(this.image);
    this.canvas.setWidth(canvasWidth);
    this.canvas.setHeight(canvasHeight);
    this.canvas.centerObject(this.image);
    this.image.setCoords();
  },

  // Apply the transformation on the current image and save it in the
  // transformations stack (in order to reconstitute the previous states
  // of the image).
  applyTransformation: function(transformation) {
    this.transformations.push(transformation);

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      this._postTransformation.bind(this)
    );
  },

  _postTransformation: function(newImage) {
    if (newImage)
      this.sourceImage = newImage;

    this.refresh(function() {
      this.dispatchEvent('core:transformation');
    }.bind(this));
  },

  // Initialize image from original element plus re-apply every
  // transformations.
  reinitializeImage: function() {
    this.sourceImage.remove();
    this._initializeImage();
    this._popTransformation(this.transformations.slice())
  },

  _popTransformation: function(transformations) {
    if (0 === transformations.length) {
      this.dispatchEvent('core:reinitialized');
      this.refresh();
      return;
    }

    var transformation = transformations.shift();

    var next = function(newImage) {
      if (newImage) this.sourceImage = newImage;
      this._popTransformation(transformations)
    };

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      next.bind(this)
    );
  },

  // Create the DOM elements and instanciate the Fabric canvas.
  // The image element is replaced by a new `div` element.
  // However the original image is re-injected in order to keep a trace of it.
  _initializeDOM: function(imageElement) {
    // Container
    var mainContainerElement = document.createElement('div');
    mainContainerElement.className = 'darkroom-container';

    // Toolbar
    var toolbarElement = document.createElement('div');
    toolbarElement.className = 'darkroom-toolbar';
    mainContainerElement.appendChild(toolbarElement);

    // Viewport canvas
    var canvasContainerElement = document.createElement('div');
    canvasContainerElement.className = 'darkroom-image-container';
    var canvasElement = document.createElement('canvas');
    canvasContainerElement.appendChild(canvasElement);
    mainContainerElement.appendChild(canvasContainerElement);

    // Source canvas
    var sourceCanvasContainerElement = document.createElement('div');
    sourceCanvasContainerElement.className = 'darkroom-source-container';
    sourceCanvasContainerElement.style.display = 'none';
    var sourceCanvasElement = document.createElement('canvas');
    sourceCanvasContainerElement.appendChild(sourceCanvasElement);
    mainContainerElement.appendChild(sourceCanvasContainerElement);

    // Original image
    imageElement.parentNode.replaceChild(mainContainerElement, imageElement);
    imageElement.style.display = 'none';
    mainContainerElement.appendChild(imageElement);

    // Instanciate object from elements
    this.containerElement = mainContainerElement;
    this.originalImageElement = imageElement;

    this.toolbar = new Darkroom.UI.Toolbar(toolbarElement);

    this.canvas = new fabric.Canvas(canvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });

    this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
      selection: false,
      backgroundColor: this.options.backgroundColor
    });
  },

  // Instanciate the Fabric image object.
  // The image is created as a static element with no control,
  // then it is add in the Fabric canvas object.
  _initializeImage: function() {
    this.sourceImage = new fabric.Image(this.originalImageElement, {
      // Some options to make the image static
      selectable: false,
      evented: false,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      lockUniScaling: true,
      hasControls: false,
      hasBorders: false,
    });

    this.sourceCanvas.add(this.sourceImage);

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.sourceImage);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    this.sourceCanvas.setWidth(canvasWidth);
    this.sourceCanvas.setHeight(canvasHeight);
    this.sourceCanvas.centerObject(this.sourceImage);
    this.sourceImage.setCoords();
  },

  // Initialize every plugins.
  // Note that plugins are instanciated in the same order than they
  // are declared in the parameter object.
  _initializePlugins: function(plugins) {
    for (var name in plugins) {
      var plugin = plugins[name];
      var options = this.options.plugins[name];

      // Setting false into the plugin options will disable the plugin
      if (options === false)
        continue;

      // Avoid any issues with _proto_
      if (!plugins.hasOwnProperty(name))
        continue;

      this.plugins[name] = new plugin(this, options);
    }
  },
}

})();
;(function() {
'use strict';

Darkroom.Plugin = Plugin;

// Define a plugin object. This is the (abstract) parent class which
// has to be extended for each plugin.
function Plugin(darkroom, options) {
  this.darkroom = darkroom;
  this.options = Darkroom.Utils.extend(options, this.defaults);
  this.initialize();
}

Plugin.prototype = {
  defaults: {},
  initialize: function() { }
}

// Inspired by Backbone.js extend capability.
Plugin.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.Transformation = Transformation;

function Transformation(options) {
  this.options = options;
}

Transformation.prototype = {
  applyTransformation: function(image) { /* no-op */  }
}

// Inspired by Backbone.js extend capability.
Transformation.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.UI = {
  Toolbar: Toolbar,
  ButtonGroup: ButtonGroup,
  Button: Button,
};

// Toolbar object.
function Toolbar(element) {
  this.element = element;
}

Toolbar.prototype = {
  createButtonGroup: function(options) {
    var buttonGroup = document.createElement('div');
    buttonGroup.className = 'darkroom-button-group';
    this.element.appendChild(buttonGroup);

    return new ButtonGroup(buttonGroup);
  }
};

// ButtonGroup object.
function ButtonGroup(element) {
  this.element = element;
}

ButtonGroup.prototype = {
  createButton: function(options) {
    var defaults = {
      image: 'help',
      type: 'default',
      group: 'default',
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    buttonElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
    this.element.appendChild(buttonElement);

    var button = new Button(buttonElement);
    button.hide(options.hide);
    button.disable(options.disabled);

    return button;
  }
}

// Button object.
function Button(element) {
  this.element = element;
}

Button.prototype = {
  addEventListener: function(eventName, listener) {
    if (this.element.addEventListener){
      this.element.addEventListener(eventName, listener);
    } else if (this.element.attachEvent) {
      this.element.attachEvent('on' + eventName, listener);
    }
  },
  removeEventListener: function(eventName, listener) {
    if (this.element.removeEventListener){
      this.element.removeEventListener(eventName, listener);
    }
  },
  active: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-active');
    else
      this.element.classList.remove('darkroom-button-active');
  },
  hide: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-hidden');
    else
      this.element.classList.remove('darkroom-button-hidden');
  },
  disable: function(value) {
    this.element.disabled = (value) ? true : false;
  }
};

})();
;(function() {
'use strict';

Darkroom.Utils = {
  extend: extend,
  computeImageViewPort: computeImageViewPort,
};


// Utility method to easily extend objects.
function extend(b, a) {
  var prop;
  if (b === undefined) {
    return a;
  }
  for (prop in a) {
    if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
      b[prop] = a[prop];
    }
  }
  return b;
}

function computeImageViewPort(image) {
  return {
    height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI/180))),
    width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI/180))),
  }
}

})();
;;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['history'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomHistoryPlugin() {
      this._initButtons();

      this.darkroom.addEventListener('core:transformation', this._onTranformationApplied.bind(this));
    },

    undo: function() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      var lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo: function() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      var cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons: function() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: 'undo',
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
        disabled: true
      });

      this.backButton.addEventListener('click', this.undo.bind(this));
      this.forwardButton.addEventListener('click', this.redo.bind(this));

      return this;
    },

    _updateButtons: function() {
      this.backButton.disable((this.darkroom.transformations.length === 0))
      this.forwardButton.disable((this.undoTransformations.length === 0))
    },

    _onTranformationApplied: function() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
})(window, document, Darkroom, fabric);
;(function() {
'use strict';

var Rotation = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    var angle = (image.getAngle() + this.options.angle) % 360;
    image.rotate(angle);

    var width, height;
    height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
    width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();
    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['rotate'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomRotatePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var leftButton = buttonGroup.createButton({
      image: 'rotate-left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right'
    });

    leftButton.addEventListener('click', this.rotateLeft.bind(this));
    rightButton.addEventListener('click', this.rotateRight.bind(this));
  },

  rotateLeft: function rotateLeft() {
    this.rotate(-90);
  },

  rotateRight: function rotateRight() {
    this.rotate(90);
  },

  rotate: function rotate(angle) {
    this.darkroom.applyTransformation(
      new Rotation({angle: angle})
    );
  }

});

})();
;(function() {
'use strict';

var Crop = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    // Snapshot the image delimited by the crop zone
    var snapshot = new Image();
    snapshot.onload = function() {
      // Validate image
      if (height < 1 || width < 1)
        return;

      var imgInstance = new fabric.Image(this, {
        // options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      var width = this.width;
      var height = this.height;

      // Update canvas size
      canvas.setWidth(width);
      canvas.setHeight(height);

      // Add image
      image.remove();
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

    snapshot.src = canvas.toDataURL({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }
});

var CropZone = fabric.util.createClass(fabric.Rect, {
  _render: function(ctx) {
    this.callSuper('_render', ctx);

    var canvas = ctx.canvas;
    var dashWidth = 7;

    // Set original scale
    var flipX = this.flipX ? -1 : 1;
    var flipY = this.flipY ? -1 : 1;
    var scaleX = flipX / this.scaleX;
    var scaleY = flipY / this.scaleY;

    ctx.scale(scaleX, scaleY);

    // Overlay rendering
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this._renderOverlay(ctx);

    // Set dashed borders
    if (ctx.setLineDash !== undefined)
      ctx.setLineDash([dashWidth, dashWidth]);
    else if (ctx.mozDash !== undefined)
      ctx.mozDash = [dashWidth, dashWidth];

    // First lines rendering with black
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Re render lines in white
    ctx.lineDashOffset = dashWidth;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Reset scale
    ctx.scale(1/scaleX, 1/scaleY);
  },

  _renderOverlay: function(ctx) {
    var canvas = ctx.canvas;

    //
    //    x0    x1        x2      x3
    // y0 +------------------------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y1 +------+---------+-------+
    //    |\\\\\\|         |\\\\\\\|
    //    |\\\\\\|    0    |\\\\\\\|
    //    |\\\\\\|         |\\\\\\\|
    // y2 +------+---------+-------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y3 +------------------------+
    //

    var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
    var x1 = Math.ceil(-this.getWidth() / 2);
    var x2 = Math.ceil(this.getWidth() / 2);
    var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

    var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
    var y1 = Math.ceil(-this.getHeight() / 2);
    var y2 = Math.ceil(this.getHeight() / 2);
    var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

    ctx.beginPath();
    
    // Draw outer rectangle.
    // Numbers are +/-1 so that overlay edges don't get blurry.
    ctx.moveTo(x0 - 1, y0 - 1);
    ctx.lineTo(x3 + 1, y0 - 1);
    ctx.lineTo(x3 + 1, y3 + 1);
    ctx.lineTo(x0 - 1, y3 - 1);
    ctx.lineTo(x0 - 1, y0 - 1);
    ctx.closePath();

    // Draw inner rectangle.
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x1, y1);

    ctx.closePath();
    ctx.fill();
  },

  _renderBorders: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2); // upper right
    ctx.lineTo(this.getWidth()/2, this.getHeight()/2); // down right
    ctx.lineTo(-this.getWidth()/2, this.getHeight()/2); // down left
    ctx.lineTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.stroke();
  },

  _renderGrid: function(ctx) {
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 1/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 1/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 2/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 2/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    // Horizontal lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.stroke();
  }
});

Darkroom.plugins['crop'] = Darkroom.Plugin.extend({
  // Init point
  startX: null,
  startY: null,

  // Keycrop
  isKeyCroping: false,
  isKeyLeft: false,
  isKeyUp: false,

  defaults: {
    // min crop dimension
    minHeight: 1,
    minWidth: 1,
    // ensure crop ratio
    ratio: null,
    // quick crop feature (set a key code to enable it)
    quickCropKey: false
  },

  initialize: function InitDarkroomCropPlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.cropButton = buttonGroup.createButton({
      image: 'crop'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));

    // Canvas events
    this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
    this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
    this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
    this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
    this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));

    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));

    this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
  },

  // Avoid crop zone to go beyond the canvas edges
  onObjectMoving: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var x = currentObject.getLeft(), y = currentObject.getTop();
    var w = currentObject.getWidth(), h = currentObject.getHeight();
    var maxX = canvas.getWidth() - w;
    var maxY = canvas.getHeight() - h;

    if (x < 0)
      currentObject.set('left', 0);
    if (y < 0)
      currentObject.set('top', 0);
    if (x > maxX)
      currentObject.set('left', maxX);
    if (y > maxY)
      currentObject.set('top', maxY);

    this.darkroom.dispatchEvent('crop:update');
  },

  // Prevent crop zone from going beyond the canvas edges (like mouseMove)
  onObjectScaling: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var preventScaling = false;
    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    var minX = currentObject.getLeft();
    var minY = currentObject.getTop();
    var maxX = currentObject.getLeft() + currentObject.getWidth();
    var maxY = currentObject.getTop() + currentObject.getHeight();

    if (null !== this.options.ratio) {
      if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
        preventScaling = true;
      }
    }

    if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
      var lastScaleX = this.lastScaleX || 1;
      currentObject.setScaleX(lastScaleX);
    }
    if (minX < 0) {
      currentObject.setLeft(0);
    }

    if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
      var lastScaleY = this.lastScaleY || 1;
      currentObject.setScaleY(lastScaleY);
    }
    if (minY < 0) {
      currentObject.setTop(0);
    }

    if (currentObject.getWidth() < this.options.minWidth) {
      currentObject.scaleToWidth(this.options.minWidth);
    }
    if (currentObject.getHeight() < this.options.minHeight) {
      currentObject.scaleToHeight(this.options.minHeight);
    }

    this.lastScaleX = currentObject.getScaleX();
    this.lastScaleY = currentObject.getScaleY();

    this.darkroom.dispatchEvent('crop:update');
  },

  // Init crop zone
  onMouseDown: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var canvas = this.darkroom.canvas;

    // recalculate offset, in case canvas was manipulated since last `calcOffset`
    canvas.calcOffset();
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;
    var point = new fabric.Point(x, y);

    // Check if user want to scale or drag the crop zone.
    var activeObject = canvas.getActiveObject();
    if (activeObject === this.cropZone || this.cropZone.containsPoint(point)) {
      return;
    }

    canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);

    this.startX = x;
    this.startY = y;
  },

  // Extend crop zone
  onMouseMove: function(event) {
    // Quick crop feature
    if (this.isKeyCroping)
      return this.onMouseMoveKeyCrop(event);

    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    this._renderCropZone(this.startX, this.startY, x, y);
  },

  onMouseMoveKeyCrop: function(event) {
    var canvas = this.darkroom.canvas;
    var zone = this.cropZone;

    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    if (!zone.left || !zone.top) {
      zone.setTop(y);
      zone.setLeft(x);
    }

    this.isKeyLeft =  x < zone.left + zone.width / 2 ;
    this.isKeyUp = y < zone.top + zone.height / 2 ;

    this._renderCropZone(
      Math.min(zone.left, x),
      Math.min(zone.top, y),
      Math.max(zone.left+zone.width, x),
      Math.max(zone.top+zone.height, y)
    );
  },

  // Finish crop zone
  onMouseUp: function(event) {
    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.startX = null;
    this.startY = null;
  },

  onKeyDown: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || this.isKeyCroping)
      return;

    // Active quick crop flow
    this.isKeyCroping = true ;
    this.darkroom.canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);
    this.cropZone.setTop(0);
    this.cropZone.setLeft(0);
  },

  onKeyUp: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping)
      return;

    // Unactive quick crop flow
    this.isKeyCroping = false;
    this.startX = 1;
    this.startY = 1;
    this.onMouseUp();
  },

  selectZone: function(x, y, width, height, forceDimension) {
    if (!this.hasFocus())
      this.requireFocus();

    if (!forceDimension) {
      this._renderCropZone(x, y, x+width, y+height);
    } else {
      this.cropZone.set({
        'left': x,
        'top': y,
        'width': width,
        'height': height
      });
    }

    var canvas = this.darkroom.canvas;
    canvas.bringToFront(this.cropZone);
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.darkroom.dispatchEvent('crop:update');
  },

  toggleCrop: function() {
    if (!this.hasFocus())
      this.requireFocus();
    else
      this.releaseFocus();
  },

  cropCurrentZone: function() {
    if (!this.hasFocus())
      return;

    // Avoid croping empty zone
    if (this.cropZone.width < 1 && this.cropZone.height < 1)
      return;

    var image = this.darkroom.image;

    // Compute crop zone dimensions
    var top = this.cropZone.getTop() - image.getTop();
    var left = this.cropZone.getLeft() - image.getLeft();
    var width = this.cropZone.getWidth();
    var height = this.cropZone.getHeight();

    // Adjust dimensions to image only
    if (top < 0) {
      height += top;
      top = 0;
    }

    if (left < 0) {
      width += left;
      left = 0;
    }

    // Apply crop transformation.
    // Make sure to use relative dimension since the crop will be applied
    // on the source image.
    this.darkroom.applyTransformation(new Crop({
      top: top / image.getHeight(),
      left: left / image.getWidth(),
      width: width / image.getWidth(),
      height: height / image.getHeight(),
    }));
  },

  // Test wether crop zone is set
  hasFocus: function() {
    return this.cropZone !== undefined;
  },

  // Create the crop zone
  requireFocus: function() {
    this.cropZone = new CropZone({
      fill: 'transparent',
      hasBorders: false,
      originX: 'left',
      originY: 'top',
      //stroke: '#444',
      //strokeDashArray: [5, 5],
      //borderColor: '#444',
      cornerColor: '#444',
      cornerSize: 8,
      transparentCorners: false,
      lockRotation: true,
      hasRotatingPoint: false,
    });

    if (null !== this.options.ratio) {
      this.cropZone.set('lockUniScaling', true);
    }

    this.darkroom.canvas.add(this.cropZone);
    this.darkroom.canvas.defaultCursor = 'crosshair';

    this.cropButton.active(true);
    this.okButton.hide(false);
    this.cancelButton.hide(false);
  },

  // Remove the crop zone
  releaseFocus: function() {
    if (undefined === this.cropZone)
      return;

    this.cropZone.remove();
    this.cropZone = undefined;

    this.cropButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.canvas.defaultCursor = 'default';

    this.darkroom.dispatchEvent('crop:update');
  },

  _renderCropZone: function(fromX, fromY, toX, toY) {
    var canvas = this.darkroom.canvas;

    var isRight = (toX > fromX);
    var isLeft = !isRight;
    var isDown = (toY > fromY);
    var isUp = !isDown;

    var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
    var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

    // Define corner coordinates
    var leftX = Math.min(fromX, toX);
    var rightX = Math.max(fromX, toX);
    var topY = Math.min(fromY, toY);
    var bottomY = Math.max(fromY, toY);

    // Replace current point into the canvas
    leftX = Math.max(0, leftX);
    rightX = Math.min(canvas.getWidth(), rightX);
    topY = Math.max(0, topY)
    bottomY = Math.min(canvas.getHeight(), bottomY);

    // Recalibrate coordinates according to given options
    if (rightX - leftX < minWidth) {
      if (isRight)
        rightX = leftX + minWidth;
      else
        leftX = rightX - minWidth;
    }
    if (bottomY - topY < minHeight) {
      if (isDown)
        bottomY = topY + minHeight;
      else
        topY = bottomY - minHeight;
    }

    // Truncate truncate according to canvas dimensions
    if (leftX < 0) {
      // Translate to the left
      rightX += Math.abs(leftX);
      leftX = 0
    }
    if (rightX > canvas.getWidth()) {
      // Translate to the right
      leftX -= (rightX - canvas.getWidth());
      rightX = canvas.getWidth();
    }
    if (topY < 0) {
      // Translate to the bottom
      bottomY += Math.abs(topY);
      topY = 0
    }
    if (bottomY > canvas.getHeight()) {
      // Translate to the right
      topY -= (bottomY - canvas.getHeight());
      bottomY = canvas.getHeight();
    }

    var width = rightX - leftX;
    var height = bottomY - topY;
    var currentRatio = width / height;

    if (this.options.ratio && +this.options.ratio !== currentRatio) {
      var ratio = +this.options.ratio;

      if(this.isKeyCroping) {
        isLeft = this.isKeyLeft;
        isUp = this.isKeyUp;
      }

      if (currentRatio < ratio) {
        var newWidth = height * ratio;
        if (isLeft) {
          leftX -= (newWidth - width);
        }
        width = newWidth;
      } else if (currentRatio > ratio) {
        var newHeight = height / (ratio * height/width);
        if (isUp) {
          topY -= (newHeight - height);
        }
        height = newHeight;
      }

      if (leftX < 0) {
        leftX = 0;
        //TODO
      }
      if (topY < 0) {
        topY = 0;
        //TODO
      }
      if (leftX + width > canvas.getWidth()) {
        var newWidth = canvas.getWidth() - leftX;
        height = newWidth * height / width;
        width = newWidth;
        if (isUp) {
          topY = fromY - height;
        }
      }
      if (topY + height > canvas.getHeight()) {
        var newHeight = canvas.getHeight() - topY;
        width = width * newHeight / height;
        height = newHeight;
        if (isLeft) {
          leftX = fromX - width;
        }
      }
    }

    // Apply coordinates
    this.cropZone.left = leftX;
    this.cropZone.top = topY;
    this.cropZone.width = width;
    this.cropZone.height = height;

    this.darkroom.canvas.bringToFront(this.cropZone);

    this.darkroom.dispatchEvent('crop:update');
  }
});

})();
;(function() {
'use strict';

Darkroom.plugins['save'] = Darkroom.Plugin.extend({

  defaults: {
    callback: function() {
      this.darkroom.selfDestroy();
    }
  },

  initialize: function InitializeDarkroomSavePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.destroyButton = buttonGroup.createButton({
      image: 'save'
    });

    this.destroyButton.addEventListener('click', this.options.callback.bind(this));
  },
});

})();
;(function (window, document, Darkroom, fabric) {
  'use strict';
  var Redact = Darkroom.Transformation.extend({
    applyTransformation: function (canvas, image, next) {
      var viewport = Darkroom.Utils.computeImageViewPort(image);
      var imageWidth = viewport.width;
      var imageHeight = viewport.height;
      var left = this.options.left * imageWidth;
      var top = this.options.top * imageHeight;
      var width = Math.min(this.options.width * imageWidth, imageWidth - left);
      var height = Math.min(this.options.height * imageHeight, imageHeight - top);
      // Snapshot the image delimited by the crop zone
      var snapshot = new Image();
      snapshot.onload = function () {
        // Validate image
        if (height < 1 || width < 1)
          return;
        var imgInstance = new fabric.Image(this, {
          // options to make the image static
          selectable: false,
          evented: false,
          lockMovementX: true,
          lockMovementY: true,
          lockRotation: true,
          lockScalingX: true,
          lockScalingY: true,
          lockUniScaling: true,
          hasControls: false,
          hasBorders: false
        });
        var redactFilter = new fabric.Image.filters.Redact({
          left: left,
          top: top,
          width: width,
          height: height
        });
        imgInstance.applyFilters(function () {
          // Add image
          image.remove();
          canvas.add(imgInstance);
          next(imgInstance);
        }, [redactFilter]);
      };
      snapshot.src = canvas.toDataURL();
    }
  });
  var RedactZone = fabric.util.createClass(fabric.Rect, {
    _render: function (ctx) {
      this.callSuper('_render', ctx);
      var canvas = ctx.canvas;
      var dashWidth = 7;
      // Set original scale
      var flipX = this.flipX ? -1 : 1;
      var flipY = this.flipY ? -1 : 1;
      var scaleX = flipX / this.scaleX;
      var scaleY = flipY / this.scaleY;
      ctx.scale(scaleX, scaleY);
      // Overlay rendering
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      this._renderOverlay(ctx);
      // Set dashed borders
      if (ctx.setLineDash !== undefined)
        ctx.setLineDash([dashWidth, dashWidth]);
      else if (ctx.mozDash !== undefined)
        ctx.mozDash = [dashWidth, dashWidth];
      // First lines rendering with black
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      this._renderBorders(ctx);
      this._renderGrid(ctx);
      // Re render lines in white
      ctx.lineDashOffset = dashWidth;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      this._renderBorders(ctx);
      this._renderGrid(ctx);
      // Reset scale
      ctx.scale(1 / scaleX, 1 / scaleY);
    },
    _renderOverlay: function (ctx) {
      var canvas = ctx.canvas;
      var borderOffset = 0;
      //
      //    x0    x1        x2      x3
      // y0 +------------------------+
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      // y1 +------+---------+-------+
      //    |\\\\\\|         |\\\\\\\|
      //    |\\\\\\|    0    |\\\\\\\|
      //    |\\\\\\|         |\\\\\\\|
      // y2 +------+---------+-------+
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      //    |\\\\\\\\\\\\\\\\\\\\\\\\|
      // y3 +------------------------+
      //
      var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
      var x1 = Math.ceil(-this.getWidth() / 2);
      var x2 = Math.ceil(this.getWidth() / 2);
      var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));
      var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
      var y1 = Math.ceil(-this.getHeight() / 2);
      var y2 = Math.ceil(this.getHeight() / 2);
      var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));
      // Upper rect
      ctx.fillRect(x0, y0, x3 - x0, y1 - y0 + borderOffset);
      // Left rect
      ctx.fillRect(x0, y1, x1 - x0, y2 - y1 + borderOffset);
      // Right rect
      ctx.fillRect(x2, y1, x3 - x2, y2 - y1 + borderOffset);
      // Down rect
      ctx.fillRect(x0, y2, x3 - x0, y3 - y2);
    },
    _renderBorders: function (ctx) {
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2); // upper right
      ctx.lineTo(this.getWidth() / 2, this.getHeight() / 2); // down right
      ctx.lineTo(-this.getWidth() / 2, this.getHeight() / 2); // down left
      ctx.lineTo(-this.getWidth() / 2, -this.getHeight() / 2); // upper left
      ctx.stroke();
    },
    _renderGrid: function (ctx) {
      // Vertical lines
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), -this.getHeight() / 2);
      ctx.lineTo(-this.getWidth() / 2 + 1 / 3 * this.getWidth(), this.getHeight() / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), -this.getHeight() / 2);
      ctx.lineTo(-this.getWidth() / 2 + 2 / 3 * this.getWidth(), this.getHeight() / 2);
      ctx.stroke();
      // Horizontal lines
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight());
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 1 / 3 * this.getHeight());
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight());
      ctx.lineTo(this.getWidth() / 2, -this.getHeight() / 2 + 2 / 3 * this.getHeight());
      ctx.stroke();
    }
  });
  Darkroom.plugins['redact'] = Darkroom.Plugin.extend({
    // Init point
    startX: null,
    startY: null,
    defaults: {
      // min crop dimension
      minHeight: 1,
      minWidth: 1,
      // ensure crop ratio
      ratio: null
    },
    initialize: function () {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();
      this.redactButton = buttonGroup.createButton({
        image: 'mask'
      });
      this.okButton = buttonGroup.createButton({
        image: 'done',
        type: 'success',
        hide: true
      });
      this.cancelButton = buttonGroup.createButton({
        image: 'close',
        type: 'danger',
        hide: true
      });
      // Buttons click
      this.redactButton.addEventListener('click', this.toggleRedact.bind(this));
      this.okButton.addEventListener('click', this.redactCurrentZone.bind(this));
      this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));
      // Canvas events
      this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
      this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
      this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
      this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
      this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));
      this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
    },
    // Avoid crop zone to go beyond the canvas edges
    onObjectMoving: function (event) {
      if (!this.hasFocus()) {
        return;
      }
      var currentObject = event.target;
      if (currentObject !== this.redactZone)
        return;
      var canvas = this.darkroom.canvas;
      var x = currentObject.getLeft(),
        y = currentObject.getTop();
      var w = currentObject.getWidth(),
        h = currentObject.getHeight();
      var maxX = canvas.getWidth() - w;
      var maxY = canvas.getHeight() - h;
      if (x < 0)
        currentObject.set('left', 0);
      if (y < 0)
        currentObject.set('top', 0);
      if (x > maxX)
        currentObject.set('left', maxX);
      if (y > maxY)
        currentObject.set('top', maxY);
      this.darkroom.dispatchEvent('redact:update');
    },
    // Prevent crop zone from going beyond the canvas edges (like mouseMove)
    onObjectScaling: function (event) {
      if (!this.hasFocus()) {
        return;
      }
      var preventScaling = false;
      var currentObject = event.target;
      if (currentObject !== this.redactZone)
        return;
      var canvas = this.darkroom.canvas;
      var pointer = canvas.getPointer(event.e);
      var x = pointer.x;
      var y = pointer.y;
      var minX = currentObject.getLeft();
      var minY = currentObject.getTop();
      var maxX = currentObject.getLeft() + currentObject.getWidth();
      var maxY = currentObject.getTop() + currentObject.getHeight();
      if (null !== this.options.ratio) {
        if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
          preventScaling = true;
        }
      }
      if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
        var lastScaleX = this.lastScaleX || 1;
        currentObject.setScaleX(lastScaleX);
      }
      if (minX < 0) {
        currentObject.setLeft(0);
      }
      if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
        var lastScaleY = this.lastScaleY || 1;
        currentObject.setScaleY(lastScaleY);
      }
      if (minY < 0) {
        currentObject.setTop(0);
      }
      if (currentObject.getWidth() < this.options.minWidth) {
        currentObject.scaleToWidth(this.options.minWidth);
      }
      if (currentObject.getHeight() < this.options.minHeight) {
        currentObject.scaleToHeight(this.options.minHeight);
      }
      this.lastScaleX = currentObject.getScaleX();
      this.lastScaleY = currentObject.getScaleY();
      this.darkroom.dispatchEvent('redact:update');
    },
    // Init crop zone
    onMouseDown: function (event) {
      if (!this.hasFocus()) {
        return;
      }
      var canvas = this.darkroom.canvas;
      // recalculate offset, in case canvas was manipulated since last `calcOffset`
      canvas.calcOffset();
      var pointer = canvas.getPointer(event.e);
      var x = pointer.x;
      var y = pointer.y;
      var point = new fabric.Point(x, y);
      // Check if user want to scale or drag the crop zone.
      var activeObject = canvas.getActiveObject();
      if (activeObject === this.redactZone || this.redactZone.containsPoint(point)) {
        return;
      }
      canvas.discardActiveObject();
      this.redactZone.setWidth(0);
      this.redactZone.setHeight(0);
      this.redactZone.setScaleX(1);
      this.redactZone.setScaleY(1);
      this.startX = x;
      this.startY = y;
    },
    // Extend crop zone
    onMouseMove: function (event) {
      if (null === this.startX || null === this.startY) {
        return;
      }
      var canvas = this.darkroom.canvas;
      var pointer = canvas.getPointer(event.e);
      var x = pointer.x;
      var y = pointer.y;
      this._renderRedactZone(this.startX, this.startY, x, y);
    },
    // Finish crop zone
    onMouseUp: function (event) {
      if (null === this.startX || null === this.startY) {
        return;
      }
      var canvas = this.darkroom.canvas;
      this.redactZone.setCoords();
      canvas.setActiveObject(this.redactZone);
      canvas.calcOffset();
      this.startX = null;
      this.startY = null;
    },
    selectZone: function (x, y, width, height, forceDimension) {
      if (!this.hasFocus())
        this.requireFocus();
      if (!forceDimension) {
        this._renderRedactZone(x, y, x + width, y + height);
      } else {
        this.redactZone.set({
          'left': x,
          'top': y,
          'width': width,
          'height': height
        });
      }
      var canvas = this.darkroom.canvas;
      canvas.bringToFront(this.redactZone);
      this.redactZone.setCoords();
      canvas.setActiveObject(this.redactZone);
      canvas.calcOffset();
      this.darkroom.dispatchEvent('redact:update');
    },
    toggleRedact: function () {
      if (!this.hasFocus())
        this.requireFocus();
      else
        this.releaseFocus();
    },
    redactCurrentZone: function () {
      if (!this.hasFocus()) {
        return;
      }
      // Avoid redacting empty zone
      if (this.redactZone.width < 1 && this.redactZone.height < 1)
        return;
      var darkroom = this.darkroom;
      var canvas = darkroom.canvas;
      var image = darkroom.image;
      // Compute crop zone dimensions
      var top = this.redactZone.getTop() - image.getTop();
      var left = this.redactZone.getLeft() - image.getLeft();
      var width = this.redactZone.getWidth();
      var height = this.redactZone.getHeight();
      // Adjust dimensions to image only
      if (top < 0) {
        height += top;
        top = 0;
      }
      if (left < 0) {
        width += left;
        left = 0;
      }
      // Apply crop transformation.
      // Make sure to use relative dimension since the crop will be applied
      // on the source image.
      this.darkroom.applyTransformation(new Redact({
        top: top / image.getHeight(),
        left: left / image.getWidth(),
        width: width / image.getWidth(),
        height: height / image.getHeight()
      }));
    },
    // Test whether redact zone is set
    hasFocus: function () {
      return this.redactZone !== undefined;
    },
    // Create the redact zone
    requireFocus: function () {
      this.redactZone = new RedactZone({
        fill: 'transparent',
        hasBorders: false,
        originX: 'left',
        originY: 'top',
        //stroke: '#444',
        //strokeDashArray: [5, 5],
        //borderColor: '#444',
        cornerColor: '#444',
        cornerSize: 8,
        transparentCorners: false,
        lockRotation: true,
        hasRotatingPoint: false
      });
      if (null !== this.options.ratio) {
        this.redactZone.set('lockUniScaling', true);
      }
      this.darkroom.canvas.add(this.redactZone);
      this.darkroom.canvas.defaultCursor = 'crosshair';
      this.redactButton.active(true);
      this.okButton.hide(false);
      this.cancelButton.hide(false);
    },
    // Remove the redact zone
    releaseFocus: function () {
      if (undefined === this.redactZone)
        return;
      this.redactZone.remove();
      this.redactZone = undefined;
      this.redactButton.active(false);
      this.okButton.hide(true);
      this.cancelButton.hide(true);
      this.darkroom.canvas.defaultCursor = 'default';
      this.darkroom.dispatchEvent('redact:update');
    },
    _renderRedactZone: function (fromX, fromY, toX, toY) {
      var canvas = this.darkroom.canvas;
      var isRight = (toX > fromX);
      var isLeft = !isRight;
      var isDown = (toY > fromY);
      var isUp = !isDown;
      var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
      var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());
      // Define corner coordinates
      var leftX = Math.min(fromX, toX);
      var rightX = Math.max(fromX, toX);
      var topY = Math.min(fromY, toY);
      var bottomY = Math.max(fromY, toY);
      // Replace current point into the canvas
      leftX = Math.max(0, leftX);
      rightX = Math.min(canvas.getWidth(), rightX);
      topY = Math.max(0, topY);
      bottomY = Math.min(canvas.getHeight(), bottomY);
      // Recalibrate coordinates according to given options
      if (rightX - leftX < minWidth) {
        if (isRight)
          rightX = leftX + minWidth;
        else
          leftX = rightX - minWidth;
      }
      if (bottomY - topY < minHeight) {
        if (isDown)
          bottomY = topY + minHeight;
        else
          topY = bottomY - minHeight;
      }
      // Truncate truncate according to canvas dimensions
      if (leftX < 0) {
        // Translate to the left
        rightX += Math.abs(leftX);
        leftX = 0;
      }
      if (rightX > canvas.getWidth()) {
        // Translate to the right
        leftX -= (rightX - canvas.getWidth());
        rightX = canvas.getWidth();
      }
      if (topY < 0) {
        // Translate to the bottom
        bottomY += Math.abs(topY);
        topY = 0;
      }
      if (bottomY > canvas.getHeight()) {
        // Translate to the right
        topY -= (bottomY - canvas.getHeight());
        bottomY = canvas.getHeight();
      }
      var width = rightX - leftX;
      var height = bottomY - topY;
      var currentRatio = width / height;
      if (this.options.ratio && +this.options.ratio !== currentRatio) {
        var ratio = +this.options.ratio;
        if (currentRatio < ratio) {
          var newWidth = height * ratio;
          if (isLeft) {
            leftX -= (newWidth - width);
          }
          width = newWidth;
        } else if (currentRatio > ratio) {
          var newHeight = height / (ratio * height / width);
          if (isUp) {
            topY -= (newHeight - height);
          }
          height = newHeight;
        }
        if (leftX < 0) {
          leftX = 0;
          //TODO
        }
        if (topY < 0) {
          topY = 0;
          //TODO
        }
        if (leftX + width > canvas.getWidth()) {
          var newWidth = canvas.getWidth() - leftX;
          height = newWidth * height / width;
          width = newWidth;
          if (isUp) {
            topY = fromY - height;
          }
        }
        if (topY + height > canvas.getHeight()) {
          var newHeight = canvas.getHeight() - topY;
          width = width * newHeight / height;
          height = newHeight;
          if (isLeft) {
            leftX = fromX - width;
          }
        }
      }
      // Apply coordinates
      this.redactZone.left = leftX;
      this.redactZone.top = topY;
      this.redactZone.width = width;
      this.redactZone.height = height;
      this.darkroom.canvas.bringToFront(this.redactZone);
      this.darkroom.dispatchEvent('redact:update');
    }
  });
})(window, document, Darkroom, fabric);;(function (Darkroom) {
    'use strict';
    function getImplementation(_this) {
        /**
         * Helper method updates state of buttons relative to image size v canvas size
         * @private
         */
        var _updateButtons = function () {
            var canvas = _this.darkroom.canvas, image = _this.darkroom.image, panButton = _this.buttons.pan, zoomOutButton = _this.buttons.zoomOut, shouldDisable = ((image.getWidth() <= canvas.getWidth()) && (image.getHeight() <= canvas.getHeight()));
            panButton.disable(shouldDisable);
            zoomOutButton.disable(shouldDisable);
        };
        /**
         * Helper method ensures bottom edge and right edge of image never move to a position less than the canvas
         * bottom edge and right edge respectively
         * @private
         */
        var _refitImageInCanvas = function () {
            var canvas = _this.darkroom.canvas, minX = canvas.getWidth(), minY = canvas.getHeight(), image = _this.darkroom.image, bottomRight = image.oCoords.br;
            if (bottomRight.x < minX) {
                image.left = image.left + (minX - bottomRight.x);
                if (image.left > 0) {
                    image.left = 0;
                } // but not beyond left edge
            }
            if (bottomRight.y < minY) {
                image.top = image.top + (minY - bottomRight.y);
                if (image.top > 0) {
                    image.top = 0;
                } // but not beyond top edge
            }
            image.setCoords();
            canvas.renderAll();
        };
        var zoom = function (delta) {
            var image = _this.darkroom.image;
            image.scale(image.scaleX * delta);
            _this.darkroom.dispatchEvent('zoom:change');
        };
        var _initPan = function () {
            states.panActive = true;
            _this.buttons.pan.active(true);
            var canvas = _this.darkroom.canvas;
            canvas.on('mouse:down', eventListeners.panEnter);
            canvas.on('mouse:up', eventListeners.panExit);
            canvas.on('mouse:move', eventListeners.pan);
            canvas.defaultCursor = 'move';
        };
        var _exitPan = function () {
            states.panActive = false;
            _this.buttons.pan.active(false);
            var canvas = _this.darkroom.canvas;
            canvas.off('mouse:down', eventListeners.panEnter);
            canvas.off('mouse:up', eventListeners.panExit);
            canvas.off('mouse:move', eventListeners.pan);
            if (canvas.defaultCursor == 'move') {
                canvas.defaultCursor = 'default';
            }
        };
        /**
         * Limits pan based on position of image relative to canvas dimensions
         * @param delta
         * @private
         */
        var _constrainPan = function (delta) {
            var canvas = _this.darkroom.canvas, image = _this.darkroom.image, tl = image.oCoords.tl, // top left corner
            br = image.oCoords.br; // bottom right corner
            if (delta.x > 0) {
                delta.x = ((tl.x + delta.x) > 0) ? 0 : Math.floor(delta.x);
            }
            else {
                delta.x = Math.ceil(delta.x);
                if ((Math.ceil(br.x) + delta.x) < canvas.width) {
                    delta.x = 0;
                }
            }
            if (delta.y > 0) {
                delta.y = ((tl.y + delta.y) > 0) ? 0 : Math.floor(delta.y);
            }
            else {
                delta.y = Math.ceil(delta.y);
                if ((Math.ceil(br.y) + delta.y) < canvas.height) {
                    delta.y = 0;
                }
            }
            return delta;
        };
        var _doPan = function (delta) {
            var image = _this.darkroom.image;
            delta = _constrainPan(delta);
            image.left = image.left + delta.x;
            image.top = image.top + delta.y;
            image.setCoords();
            states.realPan = {
                x: image.oCoords.tl.x,
                y: image.oCoords.tl.y
            };
        };
        var eventListeners = {
            zoomIn: function () { zoom(1.05); },
            zoomOut: function () { zoom(0.95); },
            abortPan: function (event) {
                var panButton = _this.buttons.pan;
                if (event.target == panButton.element) {
                    return;
                }
                if (event.target.tagName == 'svg'
                    && event.target.parentElement == panButton.element) {
                    return;
                }
                if (event.target.tagName == 'use'
                    && event.target.parentElement.parentElement == panButton.element) {
                    return;
                }
                if (states.panActive === true) {
                    _exitPan();
                }
            },
            togglePan: function () {
                if (states.panActive === true) {
                    _exitPan();
                }
                else {
                    _initPan();
                }
            },
            panEnter: function () {
                if (states.panActive) {
                    states.panning = true;
                }
            },
            pan: function (event) {
                if (states.panning && event && event.e) {
                    var canvas = _this.darkroom.canvas;
                    var delta = {
                        x: event.e.movementX,
                        y: event.e.movementY
                    };
                    _doPan(delta);
                    canvas.renderAll();
                }
            },
            panExit: function () {
                if (states.panActive) {
                    states.panning = false;
                }
            },
            zoomChange: function () {
                states.lastScale = _this.darkroom.image.scaleX;
                _updateButtons();
                _refitImageInCanvas();
            },
            restoreZoomPan: function () {
                if (states.lastScale != null) {
                    _this.darkroom.image.scale(states.lastScale);
                    if (states.realPan != null) {
                        _doPan(states.realPan);
                    }
                    _updateButtons();
                    _refitImageInCanvas();
                }
            }
        };
        var states = {
            panActive: false,
            panning: false,
            lastScale: null,
            realPan: null
        };
        return {
            eventListeners: eventListeners,
            states: states
        };
    }
    Darkroom.plugins['zoom'] = Darkroom.Plugin.extend({
        defaults: {},
        initialize: function () {
            var buttonGroup = this.darkroom.toolbar.createButtonGroup();
            var buttons = this.buttons = {};
            buttons.zoomIn = buttonGroup.createButton({ image: 'zoom-in' });
            buttons.zoomOut = buttonGroup.createButton({ image: 'zoom-out', disabled: true });
            buttons.pan = buttonGroup.createButton({ image: 'hand', disabled: true });
            var implementation = getImplementation(this);
            buttons.zoomIn.addEventListener('click', implementation.eventListeners.zoomIn);
            buttons.zoomOut.addEventListener('click', implementation.eventListeners.zoomOut);
            buttons.pan.addEventListener('click', implementation.eventListeners.togglePan);
            this.darkroom.toolbar.element.addEventListener('click', implementation.eventListeners.abortPan);
            this.darkroom.addEventListener('zoom:change', implementation.eventListeners.zoomChange);
            this.darkroom.addEventListener('core:transformation', implementation.eventListeners.restoreZoomPan);
        }
    });
})(Darkroom);
//# sourceMappingURL=zoom.js.map
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwicmVkYWN0LmpzIiwiem9vbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NqV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0N2ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGFya3Jvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEluamVjdCBTVkcgaWNvbnMgaW50byB0aGUgRE9NXHJcbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xyXG5lbGVtZW50LnN0eWxlLmhlaWdodCA9IDA7XHJcbmVsZW1lbnQuc3R5bGUud2lkdGggPSAwO1xyXG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbmVsZW1lbnQuaW5uZXJIVE1MID0gJzwhLS0gaW5qZWN0OnN2ZyAtLT48IS0tIGVuZGluamVjdCAtLT4nO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG53aW5kb3cuRGFya3Jvb20gPSBEYXJrcm9vbTtcclxuXHJcbi8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXHJcbi8vIEJhc2ljYWxseSBpdCdzIGEgc2luZ2xlIG9iamVjdCwgaW5zdGFuY2lhYmxlIHZpYSBhbiBlbGVtZW50XHJcbi8vIChpdCBjb3VsZCBiZSBhIENTUyBzZWxlY3RvciBvciBhIERPTSBlbGVtZW50KSwgc29tZSBjdXN0b20gb3B0aW9ucyxcclxuLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cclxuZnVuY3Rpb24gRGFya3Jvb20oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xyXG4gIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYW4gZW1wdHkgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cywgd2hpY2ggd2lsbCBiZSBmaWxsZWQgYnlcclxuLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xyXG4vLyBzcGVjaWZpZWQgaW4gRGFya3Jvb20nc3MgY29uc3RydWN0b3IuXHJcbkRhcmtyb29tLnBsdWdpbnMgPSBbXTtcclxuXHJcbkRhcmtyb29tLnByb3RvdHlwZSA9IHtcclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIG1haW4gY29udGFpbmVyIGVsZW1lbnRcclxuICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0XHJcbiAgY2FudmFzOiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBpbWFnZSBvYmplY3RcclxuICBpbWFnZTogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGNhbnZhcyBvYmplY3RcclxuICBzb3VyY2VDYW52YXM6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBpbWFnZSBvYmplY3RcclxuICBzb3VyY2VJbWFnZTogbnVsbCxcclxuXHJcbiAgLy8gVHJhY2sgb2YgdGhlIG9yaWdpbmFsIGltYWdlIGVsZW1lbnRcclxuICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcclxuXHJcbiAgLy8gU3RhY2sgb2YgdHJhbnNmb3JtYXRpb25zIHRvIGFwcGx5IHRvIHRoZSBpbWFnZSBzb3VyY2VcclxuICB0cmFuc2Zvcm1hdGlvbnM6IFtdLFxyXG5cclxuICAvLyBEZWZhdWx0IG9wdGlvbnNcclxuICBkZWZhdWx0czoge1xyXG4gICAgLy8gQ2FudmFzIHByb3BlcnRpZXMgKGRpbWVuc2lvbiwgcmF0aW8sIGNvbG9yKVxyXG4gICAgbWluV2lkdGg6IG51bGwsXHJcbiAgICBtaW5IZWlnaHQ6IG51bGwsXHJcbiAgICBtYXhXaWR0aDogbnVsbCxcclxuICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgIHJhdGlvOiBudWxsLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcblxyXG4gICAgLy8gUGx1Z2lucyBvcHRpb25zXHJcbiAgICBwbHVnaW5zOiB7fSxcclxuXHJcbiAgICAvLyBQb3N0LWluaXRpYWxpc2F0aW9uIGNhbGxiYWNrXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgLyogbm9vcCAqLyB9XHJcbiAgfSxcclxuXHJcbiAgLy8gTGlzdCBvZiB0aGUgaW5zdGFuY2llZCBwbHVnaW5zXHJcbiAgcGx1Z2luczoge30sXHJcblxyXG4gIC8vIFRoaXMgb3B0aW9ucyBhcmUgYSBtZXJnZSBiZXR3ZWVuIGBkZWZhdWx0c2AgYW5kIHRoZSBvcHRpb25zIHBhc3NlZFxyXG4gIC8vIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yXHJcbiAgb3B0aW9uczoge30sXHJcblxyXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcclxuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgICBpZiAobnVsbCA9PT0gZWxlbWVudClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIEluaXRpYWxpemUgdGhlIERPTS9GYWJyaWMgZWxlbWVudHNcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZURPTShlbGVtZW50KTtcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XHJcblxyXG4gICAgICAvLyBUaGVuIGluaXRpYWxpemUgdGhlIHBsdWdpbnNcclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XHJcblxyXG4gICAgICAvLyBQdWJsaWMgbWV0aG9kIHRvIGFkanVzdCBpbWFnZSBhY2NvcmRpbmcgdG8gdGhlIGNhbnZhc1xyXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRXhlY3V0ZSBhIGN1c3RvbSBjYWxsYmFjayBhZnRlciBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5pbml0aWFsaXplLmJpbmQodGhpcykuY2FsbCgpO1xyXG4gICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIH0uYmluZCh0aGlzKVxyXG5cclxuICAgIC8vaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gIH0sXHJcblxyXG4gIHNlbGZEZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcclxuICB9LFxyXG5cclxuICAvLyBBZGQgYWJpbGl0eSB0byBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgb24gdGhlIGNvcmUgb2JqZWN0LlxyXG4gIC8vIEl0IHVzZXMgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHByb2Nlc3MgZXZlbnRzLlxyXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcclxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xyXG4gICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcclxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXHJcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICB9LFxyXG5cclxuICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxyXG4gIC8vIGFuZCByYXRpbyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXHJcbiAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxyXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKG5leHQpIHtcclxuICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xyXG5cclxuICAgICAgaWYgKG5leHQpIG5leHQoKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNsb25lLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgIHRoaXMuaW1hZ2Uuc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG4gICAgICB2YXIgY3VycmVudFJhdGlvID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XHJcblxyXG4gICAgICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcclxuICAgICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXNXaWR0aCAvIGNhbnZhc1JhdGlvO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA8IGNhbnZhc1JhdGlvKSB7XHJcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZW4gc2NhbGUgdGhlIGltYWdlIHRvIGZpdCBpbnRvIGRpbWVuc2lvbiBsaW1pdHNcclxuICAgIHZhciBzY2FsZU1pbiA9IDE7XHJcbiAgICB2YXIgc2NhbGVNYXggPSAxO1xyXG4gICAgdmFyIHNjYWxlWCA9IDE7XHJcbiAgICB2YXIgc2NhbGVZID0gMTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heFdpZHRoICYmIHRoaXMub3B0aW9ucy5tYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWF4V2lkdGggLyBjYW52YXNXaWR0aDtcclxuICAgIH1cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICBzY2FsZVggPSAxO1xyXG4gICAgc2NhbGVZID0gMTtcclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluV2lkdGggJiYgdGhpcy5vcHRpb25zLm1pbldpZHRoID4gY2FudmFzV2lkdGgpIHtcclxuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1pbkhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xyXG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcclxuICAgIH1cclxuICAgIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcclxuXHJcbiAgICBjYW52YXNXaWR0aCAqPSBzY2FsZTtcclxuICAgIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcclxuXHJcbiAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcclxuICAgIHRoaXMuaW1hZ2Uuc2V0U2NhbGVYKDEgKiBzY2FsZSk7XHJcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1hdGlvbiBvbiB0aGUgY3VycmVudCBpbWFnZSBhbmQgc2F2ZSBpdCBpbiB0aGVcclxuICAvLyB0cmFuc2Zvcm1hdGlvbnMgc3RhY2sgKGluIG9yZGVyIHRvIHJlY29uc3RpdHV0ZSB0aGUgcHJldmlvdXMgc3RhdGVzXHJcbiAgLy8gb2YgdGhlIGltYWdlKS5cclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbikge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1hdGlvbnMucHVzaCh0cmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXHJcbiAgICAgIHRoaXMuX3Bvc3RUcmFuc2Zvcm1hdGlvbi5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIF9wb3N0VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XHJcbiAgICBpZiAobmV3SW1hZ2UpXHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcclxuXHJcbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGltYWdlIGZyb20gb3JpZ2luYWwgZWxlbWVudCBwbHVzIHJlLWFwcGx5IGV2ZXJ5XHJcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxyXG4gIHJlaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc291cmNlSW1hZ2UucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcclxuICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXHJcbiAgfSxcclxuXHJcbiAgX3BvcFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbnMpIHtcclxuICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XHJcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XHJcblxyXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxyXG4gICAgfTtcclxuXHJcbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcclxuICAgICAgbmV4dC5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzIGFuZCBpbnN0YW5jaWF0ZSB0aGUgRmFicmljIGNhbnZhcy5cclxuICAvLyBUaGUgaW1hZ2UgZWxlbWVudCBpcyByZXBsYWNlZCBieSBhIG5ldyBgZGl2YCBlbGVtZW50LlxyXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cclxuICBfaW5pdGlhbGl6ZURPTTogZnVuY3Rpb24oaW1hZ2VFbGVtZW50KSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVG9vbGJhclxyXG4gICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gVmlld3BvcnQgY2FudmFzXHJcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcclxuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU291cmNlIGNhbnZhc1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNvdXJjZS1jb250YWluZXInO1xyXG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzRWxlbWVudCk7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICAvLyBPcmlnaW5hbCBpbWFnZVxyXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xyXG4gICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXHJcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBtYWluQ29udGFpbmVyRWxlbWVudDtcclxuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b29sYmFyID0gbmV3IERhcmtyb29tLlVJLlRvb2xiYXIodG9vbGJhckVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxyXG4gIC8vIFRoZSBpbWFnZSBpcyBjcmVhdGVkIGFzIGEgc3RhdGljIGVsZW1lbnQgd2l0aCBubyBjb250cm9sLFxyXG4gIC8vIHRoZW4gaXQgaXMgYWRkIGluIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdC5cclxuICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc291cmNlSW1hZ2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQsIHtcclxuICAgICAgLy8gU29tZSBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xyXG5cclxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XHJcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XHJcbiAgICB0aGlzLnNvdXJjZUltYWdlLnNldENvb3JkcygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cclxuICAvLyBOb3RlIHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFuY2lhdGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYW4gdGhleVxyXG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cclxuICBfaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uKHBsdWdpbnMpIHtcclxuICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xyXG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcclxuXHJcbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cclxuICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gQXZvaWQgYW55IGlzc3VlcyB3aXRoIF9wcm90b19cclxuICAgICAgaWYgKCFwbHVnaW5zLmhhc093blByb3BlcnR5KG5hbWUpKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9LFxyXG59XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLlBsdWdpbiA9IFBsdWdpbjtcclxuXHJcbi8vIERlZmluZSBhIHBsdWdpbiBvYmplY3QuIFRoaXMgaXMgdGhlIChhYnN0cmFjdCkgcGFyZW50IGNsYXNzIHdoaWNoXHJcbi8vIGhhcyB0byBiZSBleHRlbmRlZCBmb3IgZWFjaCBwbHVnaW4uXHJcbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xyXG4gIHRoaXMuZGFya3Jvb20gPSBkYXJrcm9vbTtcclxuICB0aGlzLm9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XHJcbiAgdGhpcy5pbml0aWFsaXplKCk7XHJcbn1cclxuXHJcblBsdWdpbi5wcm90b3R5cGUgPSB7XHJcbiAgZGVmYXVsdHM6IHt9LFxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyB9XHJcbn1cclxuXHJcbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxyXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xyXG4gIHZhciBwYXJlbnQgPSB0aGlzO1xyXG4gIHZhciBjaGlsZDtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xyXG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcclxuICB9XHJcblxyXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcclxuXHJcbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcclxuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcclxuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xyXG5cclxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcblxyXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XHJcblxyXG4gIHJldHVybiBjaGlsZDtcclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xyXG5cclxuZnVuY3Rpb24gVHJhbnNmb3JtYXRpb24ob3B0aW9ucykge1xyXG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbn1cclxuXHJcblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihpbWFnZSkgeyAvKiBuby1vcCAqLyAgfVxyXG59XHJcblxyXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cclxuVHJhbnNmb3JtYXRpb24uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xyXG4gIHZhciBwYXJlbnQgPSB0aGlzO1xyXG4gIHZhciBjaGlsZDtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xyXG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcclxuICB9XHJcblxyXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcclxuXHJcbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcclxuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcclxuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xyXG5cclxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcblxyXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XHJcblxyXG4gIHJldHVybiBjaGlsZDtcclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5VSSA9IHtcclxuICBUb29sYmFyOiBUb29sYmFyLFxyXG4gIEJ1dHRvbkdyb3VwOiBCdXR0b25Hcm91cCxcclxuICBCdXR0b246IEJ1dHRvbixcclxufTtcclxuXHJcbi8vIFRvb2xiYXIgb2JqZWN0LlxyXG5mdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG59XHJcblxyXG5Ub29sYmFyLnByb3RvdHlwZSA9IHtcclxuICBjcmVhdGVCdXR0b25Hcm91cDogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25Hcm91cC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uLWdyb3VwJztcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBCdXR0b25Hcm91cChidXR0b25Hcm91cCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQnV0dG9uR3JvdXAgb2JqZWN0LlxyXG5mdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuQnV0dG9uR3JvdXAucHJvdG90eXBlID0ge1xyXG4gIGNyZWF0ZUJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgdmFyIGRlZmF1bHRzID0ge1xyXG4gICAgICBpbWFnZTogJ2hlbHAnLFxyXG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXHJcbiAgICAgIGdyb3VwOiAnZGVmYXVsdCcsXHJcbiAgICAgIGhpZGU6IGZhbHNlLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgb3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCBkZWZhdWx0cyk7XHJcblxyXG4gICAgdmFyIGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvbkVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWJ1dHRvbi0nICsgb3B0aW9ucy50eXBlO1xyXG4gICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gb2JqZWN0LlxyXG5mdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbi5wcm90b3R5cGUgPSB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgfSxcclxuICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gIH0sXHJcbiAgZGlzYWJsZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5VdGlscyA9IHtcclxuICBleHRlbmQ6IGV4dGVuZCxcclxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXHJcbn07XHJcblxyXG5cclxuLy8gVXRpbGl0eSBtZXRob2QgdG8gZWFzaWx5IGV4dGVuZCBvYmplY3RzLlxyXG5mdW5jdGlvbiBleHRlbmQoYiwgYSkge1xyXG4gIHZhciBwcm9wO1xyXG4gIGlmIChiID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuICBmb3IgKHByb3AgaW4gYSkge1xyXG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcclxuICAgICAgYltwcm9wXSA9IGFbcHJvcF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxyXG4gICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxyXG4gIH1cclxufVxyXG5cclxufSkoKTtcclxuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgIHVuZG9UcmFuc2Zvcm1hdGlvbnM6IFtdLFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XHJcbiAgICAgIHRoaXMuX2luaXRCdXR0b25zKCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxhc3RUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnBvcCgpO1xyXG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbmNlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ3VuZG8nLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ3JlZG8nLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51bmRvLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgX3VwZGF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmJhY2tCdXR0b24uZGlzYWJsZSgodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxyXG4gICAgfSxcclxuXHJcbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgdmFyIGFuZ2xlID0gKGltYWdlLmdldEFuZ2xlKCkgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICUgMzYwO1xyXG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcclxuXHJcbiAgICB2YXIgd2lkdGgsIGhlaWdodDtcclxuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcclxuICAgIHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xyXG5cclxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XHJcbiAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XHJcblxyXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XHJcbiAgICBpbWFnZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuXHJcbiAgICBuZXh0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ3JvdGF0ZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbVJvdGF0ZVBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHZhciBsZWZ0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdyb3RhdGUtbGVmdCdcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciByaWdodEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAncm90YXRlLXJpZ2h0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcclxuICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVSaWdodC5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICByb3RhdGVMZWZ0OiBmdW5jdGlvbiByb3RhdGVMZWZ0KCkge1xyXG4gICAgdGhpcy5yb3RhdGUoLTkwKTtcclxuICB9LFxyXG5cclxuICByb3RhdGVSaWdodDogZnVuY3Rpb24gcm90YXRlUmlnaHQoKSB7XHJcbiAgICB0aGlzLnJvdGF0ZSg5MCk7XHJcbiAgfSxcclxuXHJcbiAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcclxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihcclxuICAgICAgbmV3IFJvdGF0aW9uKHthbmdsZTogYW5nbGV9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxyXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XHJcbiAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcclxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xyXG4gICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSBjYW52YXMgc2l6ZVxyXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XHJcblxyXG4gICAgICAvLyBBZGQgaW1hZ2VcclxuICAgICAgaW1hZ2UucmVtb3ZlKCk7XHJcbiAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xyXG5cclxuICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgIHZhciBpbWFnZVdpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgdmFyIGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XHJcbiAgICB2YXIgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xyXG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xyXG4gICAgdmFyIGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xyXG5cclxuICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoe1xyXG4gICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICB0b3A6IHRvcCxcclxuICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG52YXIgQ3JvcFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xyXG4gIF9yZW5kZXI6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG4gICAgdmFyIGRhc2hXaWR0aCA9IDc7XHJcblxyXG4gICAgLy8gU2V0IG9yaWdpbmFsIHNjYWxlXHJcbiAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xyXG4gICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcclxuICAgIHZhciBzY2FsZVggPSBmbGlwWCAvIHRoaXMuc2NhbGVYO1xyXG4gICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XHJcblxyXG4gICAgY3R4LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xyXG5cclxuICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xyXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XHJcblxyXG4gICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xyXG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxyXG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XHJcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgLy8gUmVzZXQgc2NhbGVcclxuICAgIGN0eC5zY2FsZSgxL3NjYWxlWCwgMS9zY2FsZVkpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xyXG4gICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAvL1xyXG5cclxuICAgIHZhciB4MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMiAtIHRoaXMuZ2V0TGVmdCgpKTtcclxuICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICB2YXIgeDMgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMiArIChjYW52YXMud2lkdGggLSB0aGlzLmdldFdpZHRoKCkgLSB0aGlzLmdldExlZnQoKSkpO1xyXG5cclxuICAgIHZhciB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcclxuICAgIHZhciB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgIHZhciB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcclxuXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBcclxuICAgIC8vIERyYXcgb3V0ZXIgcmVjdGFuZ2xlLlxyXG4gICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cclxuICAgIGN0eC5tb3ZlVG8oeDAgLSAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkwIC0gMSk7XHJcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcclxuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MyAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkwIC0gMSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgLy8gRHJhdyBpbm5lciByZWN0YW5nbGUuXHJcbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICBjdHgubGluZVRvKHgxLCB5Mik7XHJcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XHJcbiAgICBjdHgubGluZVRvKHgyLCB5MSk7XHJcbiAgICBjdHgubGluZVRvKHgxLCB5MSk7XHJcblxyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgY3R4LmZpbGwoKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyQm9yZGVyczogZnVuY3Rpb24oY3R4KSB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciByaWdodFxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgLy8gVmVydGljYWwgbGluZXNcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgLy8gSW5pdCBwb2ludFxyXG4gIHN0YXJ0WDogbnVsbCxcclxuICBzdGFydFk6IG51bGwsXHJcblxyXG4gIC8vIEtleWNyb3BcclxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxyXG4gIGlzS2V5TGVmdDogZmFsc2UsXHJcbiAgaXNLZXlVcDogZmFsc2UsXHJcblxyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cclxuICAgIG1pbkhlaWdodDogMSxcclxuICAgIG1pbldpZHRoOiAxLFxyXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cclxuICAgIHJhdGlvOiBudWxsLFxyXG4gICAgLy8gcXVpY2sgY3JvcCBmZWF0dXJlIChzZXQgYSBrZXkgY29kZSB0byBlbmFibGUgaXQpXHJcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY3JvcCdcclxuICAgIH0pO1xyXG4gICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnZG9uZScsXHJcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQnV0dG9ucyBjbGlja1xyXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDcm9wLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBDYW52YXMgZXZlbnRzXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xyXG5cclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gIG9uT2JqZWN0TW92aW5nOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xyXG5cclxuICAgIGlmICh4IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcclxuICAgIGlmICh5IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIDApO1xyXG4gICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xyXG4gICAgaWYgKHkgPiBtYXhZKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxyXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xyXG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcclxuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XHJcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pblggPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5ZIDwgMCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICB0aGlzLmxhc3RTY2FsZVkgPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWSgpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0IGNyb3Agem9uZVxyXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxyXG4gICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XHJcblxyXG4gICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gIH0sXHJcblxyXG4gIC8vIEV4dGVuZCBjcm9wIHpvbmVcclxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxyXG4gICAgaWYgKHRoaXMuaXNLZXlDcm9waW5nKVxyXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xyXG5cclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICB9LFxyXG5cclxuICBvbk1vdXNlTW92ZUtleUNyb3A6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XHJcblxyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XHJcbiAgICAgIHpvbmUuc2V0VG9wKHkpO1xyXG4gICAgICB6b25lLnNldExlZnQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcclxuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXHJcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXHJcbiAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcclxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxyXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gRmluaXNoIGNyb3Agem9uZVxyXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcclxuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcclxuICB9LFxyXG5cclxuICBvbktleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcclxuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xyXG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhcnRYID0gMTtcclxuICAgIHRoaXMuc3RhcnRZID0gMTtcclxuICAgIHRoaXMub25Nb3VzZVVwKCk7XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG5cclxuICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xyXG4gICAgICAgICdsZWZ0JzogeCxcclxuICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAnd2lkdGgnOiB3aWR0aCxcclxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XHJcbiAgfSxcclxuXHJcbiAgY3JvcEN1cnJlbnRab25lOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXHJcbiAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuXHJcbiAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXHJcbiAgICB2YXIgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xyXG4gICAgdmFyIGxlZnQgPSB0aGlzLmNyb3Bab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcclxuICAgIHZhciB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcclxuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xyXG5cclxuICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcclxuICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgIGhlaWdodCArPSB0b3A7XHJcbiAgICAgIHRvcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgIHdpZHRoICs9IGxlZnQ7XHJcbiAgICAgIGxlZnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcclxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IENyb3Aoe1xyXG4gICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgd2lkdGg6IHdpZHRoIC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgIH0pKTtcclxuICB9LFxyXG5cclxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XHJcbiAgaGFzRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcclxuICB9LFxyXG5cclxuICAvLyBDcmVhdGUgdGhlIGNyb3Agem9uZVxyXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNyb3Bab25lID0gbmV3IENyb3Bab25lKHtcclxuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXHJcbiAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXHJcbiAgICAgIC8vc3Ryb2tlRGFzaEFycmF5OiBbNSwgNV0sXHJcbiAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgY29ybmVyU2l6ZTogOCxcclxuICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcclxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICBoYXNSb3RhdGluZ1BvaW50OiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoJ2xvY2tVbmlTY2FsaW5nJywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG5cclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUmVtb3ZlIHRoZSBjcm9wIHpvbmVcclxuICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNyb3Bab25lID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XHJcbiAgICB2YXIgaXNMZWZ0ID0gIWlzUmlnaHQ7XHJcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgIHZhciBpc1VwID0gIWlzRG93bjtcclxuXHJcbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblxyXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xyXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xyXG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcclxuICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xyXG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXHJcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuXHJcbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xyXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcclxuICAgICAgaWYgKGlzUmlnaHQpXHJcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgaWYgKGlzRG93bilcclxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRvcFkgPSBib3R0b21ZIC0gbWluSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRydW5jYXRlIHRydW5jYXRlIGFjY29yZGluZyB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcclxuICAgICAgcmlnaHRYICs9IE1hdGguYWJzKGxlZnRYKTtcclxuICAgICAgbGVmdFggPSAwXHJcbiAgICB9XHJcbiAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xyXG4gICAgICB0b3BZID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcclxuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcclxuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcclxuICAgIHZhciBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xyXG4gICAgICB2YXIgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG5cclxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcclxuICAgICAgICBpc0xlZnQgPSB0aGlzLmlzS2V5TGVmdDtcclxuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcclxuICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgbGVmdFggPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgIHRvcFkgPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xyXG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XHJcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggKiBuZXdIZWlnaHQgLyBoZWlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgIGxlZnRYID0gZnJvbVggLSB3aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xyXG4gICAgdGhpcy5jcm9wWm9uZS5sZWZ0ID0gbGVmdFg7XHJcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XHJcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNyb3Bab25lLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ3NhdmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnc2F2ZSdcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICB2YXIgUmVkYWN0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uIChjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcclxuICAgICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcbiAgICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxyXG4gICAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXHJcbiAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xyXG4gICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVkYWN0RmlsdGVyID0gbmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlJlZGFjdCh7XHJcbiAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGltZ0luc3RhbmNlLmFwcGx5RmlsdGVycyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBBZGQgaW1hZ2VcclxuICAgICAgICAgIGltYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcbiAgICAgICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgICAgICB9LCBbcmVkYWN0RmlsdGVyXSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIH1cclxuICB9KTtcclxuICB2YXIgUmVkYWN0Wm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XHJcbiAgICBfcmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuICAgICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XHJcbiAgICAgIHZhciBkYXNoV2lkdGggPSA3O1xyXG4gICAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcclxuICAgICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcclxuICAgICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xyXG4gICAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcclxuICAgICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXHJcbiAgICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xyXG4gICAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcbiAgICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxyXG4gICAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xyXG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuICAgICAgLy8gUmVzZXQgc2NhbGVcclxuICAgICAgY3R4LnNjYWxlKDEgLyBzY2FsZVgsIDEgLyBzY2FsZVkpO1xyXG4gICAgfSxcclxuICAgIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG4gICAgICB2YXIgYm9yZGVyT2Zmc2V0ID0gMDtcclxuICAgICAgLy9cclxuICAgICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcclxuICAgICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgICAgLy9cclxuICAgICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xyXG4gICAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XHJcbiAgICAgIHZhciB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcclxuICAgICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIHZhciB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcclxuICAgICAgLy8gVXBwZXIgcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDAsIHkwLCB4MyAtIHgwLCB5MSAtIHkwICsgYm9yZGVyT2Zmc2V0KTtcclxuICAgICAgLy8gTGVmdCByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTEsIHgxIC0geDAsIHkyIC0geTEgKyBib3JkZXJPZmZzZXQpO1xyXG4gICAgICAvLyBSaWdodCByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MiwgeTEsIHgzIC0geDIsIHkyIC0geTEgKyBib3JkZXJPZmZzZXQpO1xyXG4gICAgICAvLyBEb3duIHJlY3RcclxuICAgICAgY3R4LmZpbGxSZWN0KHgwLCB5MiwgeDMgLSB4MCwgeTMgLSB5Mik7XHJcbiAgICB9LFxyXG4gICAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyBkb3duIGxlZnRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9LFxyXG4gICAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgLy8gVmVydGljYWwgbGluZXNcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAvLyBIb3Jpem9udGFsIGxpbmVzXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgRGFya3Jvb20ucGx1Z2luc1sncmVkYWN0J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgIC8vIEluaXQgcG9pbnRcclxuICAgIHN0YXJ0WDogbnVsbCxcclxuICAgIHN0YXJ0WTogbnVsbCxcclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxyXG4gICAgICBtaW5IZWlnaHQ6IDEsXHJcbiAgICAgIG1pbldpZHRoOiAxLFxyXG4gICAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xyXG4gICAgICByYXRpbzogbnVsbFxyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ21hc2snXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdjbG9zZScsXHJcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gQnV0dG9ucyBjbGlja1xyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUmVkYWN0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRhY3RDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuICAgICAgLy8gQ2FudmFzIGV2ZW50c1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuICAgIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gICAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIHggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSxcclxuICAgICAgICB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgICAgdmFyIHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCksXHJcbiAgICAgICAgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XHJcbiAgICAgIGlmICh4IDwgMClcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIDApO1xyXG4gICAgICBpZiAoeSA8IDApXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIDApO1xyXG4gICAgICBpZiAoeCA+IG1heFgpXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcclxuICAgICAgaWYgKHkgPiBtYXhZKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCBtYXhZKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG4gICAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXHJcbiAgICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcclxuICAgICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLnJlZGFjdFpvbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuICAgICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcclxuICAgICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5YIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1pblkgPCAwKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCkgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuICAgIC8vIEluaXQgY3JvcCB6b25lXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xyXG4gICAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxyXG4gICAgICB2YXIgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgICBpZiAoYWN0aXZlT2JqZWN0ID09PSB0aGlzLnJlZGFjdFpvbmUgfHwgdGhpcy5yZWRhY3Rab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5zZXRXaWR0aCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldEhlaWdodCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWCgxKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWSgxKTtcclxuICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgICB9LFxyXG4gICAgLy8gRXh0ZW5kIGNyb3Agem9uZVxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcbiAgICAgIHRoaXMuX3JlbmRlclJlZGFjdFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICAgIH0sXHJcbiAgICAvLyBGaW5pc2ggY3JvcCB6b25lXHJcbiAgICBvbk1vdXNlVXA6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgICAgdGhpcy5zdGFydFggPSBudWxsO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0Wm9uZTogZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJSZWRhY3Rab25lKHgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3Rab25lLnNldCh7XHJcbiAgICAgICAgICAnbGVmdCc6IHgsXHJcbiAgICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAgICd3aWR0aCc6IHdpZHRoLFxyXG4gICAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlUmVkYWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xyXG4gICAgfSxcclxuICAgIHJlZGFjdEN1cnJlbnRab25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEF2b2lkIHJlZGFjdGluZyBlbXB0eSB6b25lXHJcbiAgICAgIGlmICh0aGlzLnJlZGFjdFpvbmUud2lkdGggPCAxICYmIHRoaXMucmVkYWN0Wm9uZS5oZWlnaHQgPCAxKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdmFyIGRhcmtyb29tID0gdGhpcy5kYXJrcm9vbTtcclxuICAgICAgdmFyIGNhbnZhcyA9IGRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIGltYWdlID0gZGFya3Jvb20uaW1hZ2U7XHJcbiAgICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcclxuICAgICAgdmFyIHRvcCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5yZWRhY3Rab25lLmdldEhlaWdodCgpO1xyXG4gICAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XHJcbiAgICAgIGlmICh0b3AgPCAwKSB7XHJcbiAgICAgICAgaGVpZ2h0ICs9IHRvcDtcclxuICAgICAgICB0b3AgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgIHdpZHRoICs9IGxlZnQ7XHJcbiAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cclxuICAgICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXHJcbiAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUmVkYWN0KHtcclxuICAgICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKVxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gVGVzdCB3aGV0aGVyIHJlZGFjdCB6b25lIGlzIHNldFxyXG4gICAgaGFzRm9jdXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVkYWN0Wm9uZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuICAgIC8vIENyZWF0ZSB0aGUgcmVkYWN0IHpvbmVcclxuICAgIHJlcXVpcmVGb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUgPSBuZXcgUmVkYWN0Wm9uZSh7XHJcbiAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgLy9zdHJva2U6ICcjNDQ0JyxcclxuICAgICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgICBjb3JuZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcclxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgLy8gUmVtb3ZlIHRoZSByZWRhY3Qgem9uZVxyXG4gICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuICAgIF9yZW5kZXJSZWRhY3Rab25lOiBmdW5jdGlvbiAoZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBpc1JpZ2h0ID0gKHRvWCA+IGZyb21YKTtcclxuICAgICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xyXG4gICAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgICAgdmFyIGlzVXAgPSAhaXNEb3duO1xyXG4gICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbkhlaWdodCwgY2FudmFzLmdldEhlaWdodCgpKTtcclxuICAgICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xyXG4gICAgICB2YXIgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcclxuICAgICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xyXG4gICAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xyXG4gICAgICB2YXIgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xyXG4gICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICAgIGxlZnRYID0gTWF0aC5tYXgoMCwgbGVmdFgpO1xyXG4gICAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcclxuICAgICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpO1xyXG4gICAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuICAgICAgLy8gUmVjYWxpYnJhdGUgY29vcmRpbmF0ZXMgYWNjb3JkaW5nIHRvIGdpdmVuIG9wdGlvbnNcclxuICAgICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcclxuICAgICAgICBpZiAoaXNSaWdodClcclxuICAgICAgICAgIHJpZ2h0WCA9IGxlZnRYICsgbWluV2lkdGg7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICBpZiAoaXNEb3duKVxyXG4gICAgICAgICAgYm90dG9tWSA9IHRvcFkgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcclxuICAgICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xyXG4gICAgICAgIGxlZnRYID0gMDtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSA8IDApIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XHJcbiAgICAgICAgdG9wWSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcclxuICAgICAgdmFyIGhlaWdodCA9IGJvdHRvbVkgLSB0b3BZO1xyXG4gICAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gJiYgK3RoaXMub3B0aW9ucy5yYXRpbyAhPT0gY3VycmVudFJhdGlvKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuICAgICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQgLyB3aWR0aCk7XHJcbiAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgICBsZWZ0WCA9IDA7XHJcbiAgICAgICAgICAvL1RPRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgICB0b3BZID0gMDtcclxuICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgICAgICB2YXIgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcclxuICAgICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcclxuICAgICAgICAgIHdpZHRoID0gd2lkdGggKiBuZXdIZWlnaHQgLyBoZWlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgIGxlZnRYID0gZnJvbVggLSB3aWR0aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLmxlZnQgPSBsZWZ0WDtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnRvcCA9IHRvcFk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpOyIsIihmdW5jdGlvbiAoRGFya3Jvb20pIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGZ1bmN0aW9uIGdldEltcGxlbWVudGF0aW9uKF90aGlzKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB1cGRhdGVzIHN0YXRlIG9mIGJ1dHRvbnMgcmVsYXRpdmUgdG8gaW1hZ2Ugc2l6ZSB2IGNhbnZhcyBzaXplXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX3VwZGF0ZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXMsIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2UsIHBhbkJ1dHRvbiA9IF90aGlzLmJ1dHRvbnMucGFuLCB6b29tT3V0QnV0dG9uID0gX3RoaXMuYnV0dG9ucy56b29tT3V0LCBzaG91bGREaXNhYmxlID0gKChpbWFnZS5nZXRXaWR0aCgpIDw9IGNhbnZhcy5nZXRXaWR0aCgpKSAmJiAoaW1hZ2UuZ2V0SGVpZ2h0KCkgPD0gY2FudmFzLmdldEhlaWdodCgpKSk7XHJcbiAgICAgICAgICAgIHBhbkJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGUpO1xyXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGVuc3VyZXMgYm90dG9tIGVkZ2UgYW5kIHJpZ2h0IGVkZ2Ugb2YgaW1hZ2UgbmV2ZXIgbW92ZSB0byBhIHBvc2l0aW9uIGxlc3MgdGhhbiB0aGUgY2FudmFzXHJcbiAgICAgICAgICogYm90dG9tIGVkZ2UgYW5kIHJpZ2h0IGVkZ2UgcmVzcGVjdGl2ZWx5XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX3JlZml0SW1hZ2VJbkNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgbWluWCA9IGNhbnZhcy5nZXRXaWR0aCgpLCBtaW5ZID0gY2FudmFzLmdldEhlaWdodCgpLCBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLCBib3R0b21SaWdodCA9IGltYWdlLm9Db29yZHMuYnI7XHJcbiAgICAgICAgICAgIGlmIChib3R0b21SaWdodC54IDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UubGVmdCA9IGltYWdlLmxlZnQgKyAobWluWCAtIGJvdHRvbVJpZ2h0LngpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UubGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IC8vIGJ1dCBub3QgYmV5b25kIGxlZnQgZWRnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib3R0b21SaWdodC55IDwgbWluWSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UudG9wID0gaW1hZ2UudG9wICsgKG1pblkgLSBib3R0b21SaWdodC55KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZS50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UudG9wID0gMDtcclxuICAgICAgICAgICAgICAgIH0gLy8gYnV0IG5vdCBiZXlvbmQgdG9wIGVkZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHpvb20gPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgdmFyIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2U7XHJcbiAgICAgICAgICAgIGltYWdlLnNjYWxlKGltYWdlLnNjYWxlWCAqIGRlbHRhKTtcclxuICAgICAgICAgICAgX3RoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnem9vbTpjaGFuZ2UnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBfaW5pdFBhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvbnMucGFuLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLm9uKCdtb3VzZTpkb3duJywgZXZlbnRMaXN0ZW5lcnMucGFuRW50ZXIpO1xyXG4gICAgICAgICAgICBjYW52YXMub24oJ21vdXNlOnVwJywgZXZlbnRMaXN0ZW5lcnMucGFuRXhpdCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vbignbW91c2U6bW92ZScsIGV2ZW50TGlzdGVuZXJzLnBhbik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9leGl0UGFuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMucGFuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvbnMucGFuLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOmRvd24nLCBldmVudExpc3RlbmVycy5wYW5FbnRlcik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOnVwJywgZXZlbnRMaXN0ZW5lcnMucGFuRXhpdCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOm1vdmUnLCBldmVudExpc3RlbmVycy5wYW4pO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzLmRlZmF1bHRDdXJzb3IgPT0gJ21vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGltaXRzIHBhbiBiYXNlZCBvbiBwb3NpdGlvbiBvZiBpbWFnZSByZWxhdGl2ZSB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgICAgICAqIEBwYXJhbSBkZWx0YVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIF9jb25zdHJhaW5QYW4gPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZSwgdGwgPSBpbWFnZS5vQ29vcmRzLnRsLCAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgICAgYnIgPSBpbWFnZS5vQ29vcmRzLmJyOyAvLyBib3R0b20gcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICAgIGlmIChkZWx0YS54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueCA9ICgodGwueCArIGRlbHRhLngpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnggPSBNYXRoLmNlaWwoZGVsdGEueCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKE1hdGguY2VpbChici54KSArIGRlbHRhLngpIDwgY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEueCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS55ID0gKCh0bC55ICsgZGVsdGEueSkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueSA9IE1hdGguY2VpbChkZWx0YS55KTtcclxuICAgICAgICAgICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLnkpICsgZGVsdGEueSkgPCBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlbHRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9kb1BhbiA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgICAgICAgZGVsdGEgPSBfY29uc3RyYWluUGFuKGRlbHRhKTtcclxuICAgICAgICAgICAgaW1hZ2UubGVmdCA9IGltYWdlLmxlZnQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyBkZWx0YS55O1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcclxuICAgICAgICAgICAgc3RhdGVzLnJlYWxQYW4gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBpbWFnZS5vQ29vcmRzLnRsLngsXHJcbiAgICAgICAgICAgICAgICB5OiBpbWFnZS5vQ29vcmRzLnRsLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBldmVudExpc3RlbmVycyA9IHtcclxuICAgICAgICAgICAgem9vbUluOiBmdW5jdGlvbiAoKSB7IHpvb20oMS4wNSk7IH0sXHJcbiAgICAgICAgICAgIHpvb21PdXQ6IGZ1bmN0aW9uICgpIHsgem9vbSgwLjk1KTsgfSxcclxuICAgICAgICAgICAgYWJvcnRQYW46IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhbkJ1dHRvbiA9IF90aGlzLmJ1dHRvbnMucGFuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBwYW5CdXR0b24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PSAnc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICd1c2UnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBwYW5CdXR0b24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2V4aXRQYW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlUGFuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9leGl0UGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfaW5pdFBhbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYW5FbnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMucGFubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbm5pbmcgJiYgZXZlbnQgJiYgZXZlbnQuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5lLm1vdmVtZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuZS5tb3ZlbWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9kb1BhbihkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYW5FeGl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb21DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlcy5sYXN0U2NhbGUgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZS5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICBfdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgX3JlZml0SW1hZ2VJbkNhbnZhcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXN0b3JlWm9vbVBhbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5sYXN0U2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlKHN0YXRlcy5sYXN0U2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucmVhbFBhbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kb1BhbihzdGF0ZXMucmVhbFBhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3JlZml0SW1hZ2VJbkNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBwYW5BY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFzdFNjYWxlOiBudWxsLFxyXG4gICAgICAgICAgICByZWFsUGFuOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBldmVudExpc3RlbmVyczogZXZlbnRMaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgIHN0YXRlczogc3RhdGVzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIERhcmtyb29tLnBsdWdpbnNbJ3pvb20nXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgICAgIGRlZmF1bHRzOiB7fSxcclxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucyA9IHt9O1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21JbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnem9vbS1pbicgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbU91dCA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnem9vbS1vdXQnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wYW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oeyBpbWFnZTogJ2hhbmQnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdmFyIGltcGxlbWVudGF0aW9uID0gZ2V0SW1wbGVtZW50YXRpb24odGhpcyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbUluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuem9vbUluKTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuem9vbU91dCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMudG9nZ2xlUGFuKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS50b29sYmFyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy5hYm9ydFBhbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignem9vbTpjaGFuZ2UnLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tQ2hhbmdlKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMucmVzdG9yZVpvb21QYW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KShEYXJrcm9vbSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIl19
