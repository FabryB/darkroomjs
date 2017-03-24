(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="hand" viewBox="0 0 128 128"><path class="iconic-property-fill" d="M101.657 70.343a8 8 0 0 0-11.314 0L80 78.846c-3.165 2.602-8 .778-8-2.846V14a6 6 0 1 0-12 0v38a4 4 0 0 1-8 0V6a6 6 0 1 0-12 0v50a4 4 0 0 1-8 0V14a6 6 0 1 0-12 0v46a4 4 0 0 1-8 0V22a6 6 0 1 0-12 0v70c0 19.882 16.118 36 36 36 9.223 0 17.631-3.472 24.001-9.175l-.001.007s41.448-36.966 41.657-37.175a8 8 0 0 0 0-11.314z"/></symbol><symbol id="mask" viewBox="0 0 90 90"><path d="M45 18c-8.802 0-17.045 1.167-24.73 3.498C12.646 23.879 5.888 27.066 0 30.936V61a34.288 34.288 0 0 0 9.459 5.836C13.046 68.278 16.893 69 21 69s7.94-.722 11.498-2.164C36.085 65.363 39.252 63.393 42 61c.393-.326.843-.59 1.352-.791A4.56 4.56 0 0 1 45 59.914c.587 0 1.134.098 1.643.295.512.2.964.465 1.357.791a34.288 34.288 0 0 0 9.459 5.836C61.046 68.278 64.893 69 69 69s7.94-.722 11.498-2.164C84.085 65.363 87.252 63.393 90 61V30.936c-5.888-3.87-12.675-7.057-20.361-9.438C62.015 19.167 53.802 18 45 18zM24 39.092c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C29.672 49.505 26.933 50 24 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48zm42 0c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C71.672 49.505 68.933 50 66 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="zoom-in" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zM40 24v15.998H24v4h16V60h4.002V43.998H60v-4H44.002V24H40z"/></symbol><symbol id="zoom-out" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zm-18 30v4h36v-4H24z"/></symbol></svg><!-- endinject -->';
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
;(function(global) {

    "use strict";

    var fabric  = global.fabric || (global.fabric = { }),
        extend = fabric.util.object.extend;

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
;;(function (window, document, Darkroom, fabric) {
  'use strict';

  var Redact = Darkroom.Transformation.extend({
    applyTransformation: function(canvas, image, next) {
      var viewport = Darkroom.Utils.computeImageViewPort(image);
      var imageWidth = viewport.width;
      var imageHeight = viewport.height;

      var left = this.options.left * imageWidth;
      var top = this.options.top * imageHeight;
      var width = Math.min(this.options.width * imageWidth, imageWidth - left);
      var height = Math.min(this.options.height * imageHeight, imageHeight - top);

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

        var redactFilter = new fabric.Image.filters.Redact({
          left:   left,
          top:    top,
          width:  width,
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
})(window, document, Darkroom, fabric);
;(function (Darkroom) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwicmVkYWN0LmpzIiwiem9vbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NqV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N2bEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxyXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5lbGVtZW50LmlkID0gJ2Rhcmtyb29tLWljb25zJztcclxuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xyXG5lbGVtZW50LnN0eWxlLndpZHRoID0gMDtcclxuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5lbGVtZW50LmlubmVySFRNTCA9ICc8IS0tIGluamVjdDpzdmcgLS0+PCEtLSBlbmRpbmplY3QgLS0+JztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxud2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XHJcblxyXG4vLyBDb3JlIG9iamVjdCBvZiBEYXJrcm9vbUpTLlxyXG4vLyBCYXNpY2FsbHkgaXQncyBhIHNpbmdsZSBvYmplY3QsIGluc3RhbmNpYWJsZSB2aWEgYW4gZWxlbWVudFxyXG4vLyAoaXQgY291bGQgYmUgYSBDU1Mgc2VsZWN0b3Igb3IgYSBET00gZWxlbWVudCksIHNvbWUgY3VzdG9tIG9wdGlvbnMsXHJcbi8vIGFuZCBhIGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMgKG9yIG5vbmUgdG8gdXNlIGRlZmF1bHQgb25lcykuXHJcbmZ1bmN0aW9uIERhcmtyb29tKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcclxuICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIGFuIGVtcHR5IGxpc3Qgb2YgcGx1Z2luIG9iamVjdHMsIHdoaWNoIHdpbGwgYmUgZmlsbGVkIGJ5XHJcbi8vIG90aGVyIHBsdWdpbiBzY3JpcHRzLiBUaGlzIGlzIHRoZSBkZWZhdWx0IHBsdWdpbiBsaXN0IGlmIG5vbmUgaXNcclxuLy8gc3BlY2lmaWVkIGluIERhcmtyb29tJ3NzIGNvbnN0cnVjdG9yLlxyXG5EYXJrcm9vbS5wbHVnaW5zID0gW107XHJcblxyXG5EYXJrcm9vbS5wcm90b3R5cGUgPSB7XHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBtYWluIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdFxyXG4gIGNhbnZhczogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0XHJcbiAgaW1hZ2U6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIHNvdXJjZSBjYW52YXMgb2JqZWN0XHJcbiAgc291cmNlQ2FudmFzOiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgaW1hZ2Ugb2JqZWN0XHJcbiAgc291cmNlSW1hZ2U6IG51bGwsXHJcblxyXG4gIC8vIFRyYWNrIG9mIHRoZSBvcmlnaW5hbCBpbWFnZSBlbGVtZW50XHJcbiAgb3JpZ2luYWxJbWFnZUVsZW1lbnQ6IG51bGwsXHJcblxyXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXHJcbiAgdHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIC8vIENhbnZhcyBwcm9wZXJ0aWVzIChkaW1lbnNpb24sIHJhdGlvLCBjb2xvcilcclxuICAgIG1pbldpZHRoOiBudWxsLFxyXG4gICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgbWF4V2lkdGg6IG51bGwsXHJcbiAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG5cclxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xyXG4gICAgcGx1Z2luczoge30sXHJcblxyXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IC8qIG5vb3AgKi8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIExpc3Qgb2YgdGhlIGluc3RhbmNpZWQgcGx1Z2luc1xyXG4gIHBsdWdpbnM6IHt9LFxyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgYXJlIGEgbWVyZ2UgYmV0d2VlbiBgZGVmYXVsdHNgIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcclxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxyXG4gIG9wdGlvbnM6IHt9LFxyXG5cclxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgaWYgKG51bGwgPT09IGVsZW1lbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xyXG5cclxuICAgICAgLy8gVGhlbiBpbml0aWFsaXplIHRoZSBwbHVnaW5zXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQbHVnaW5zKERhcmtyb29tLnBsdWdpbnMpO1xyXG5cclxuICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcclxuICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9LmJpbmQodGhpcylcclxuXHJcbiAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnNyYztcclxuICB9LFxyXG5cclxuICBzZWxmRGVzdHJveTogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbGVtZW50O1xyXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGltYWdlLCBjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gQWRkIGFiaWxpdHkgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBjb3JlIG9iamVjdC5cclxuICAvLyBJdCB1c2VzIHRoZSBjYW52YXMgZWxlbWVudCB0byBwcm9jZXNzIGV2ZW50cy5cclxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgZWwgPSB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCk7XHJcbiAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XHJcbiAgICAgIGVsLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihldmVudE5hbWUpIHtcclxuICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXHJcbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvRXZlbnRzL0NyZWF0aW5nX2FuZF90cmlnZ2VyaW5nX2V2ZW50c1xyXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XHJcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfSxcclxuXHJcbiAgLy8gQWRqdXN0IGltYWdlICYgY2FudmFzIGRpbWVuc2lvbiBhY2NvcmRpbmcgdG8gbWluL21heCB3aWR0aC9oZWlnaHRcclxuICAvLyBhbmQgcmF0aW8gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxyXG4gIC8vIFRoaXMgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgZWFjaCBpbWFnZSB0cmFuc2Zvcm1hdGlvbi5cclxuICByZWZyZXNoOiBmdW5jdGlvbihuZXh0KSB7XHJcbiAgICB2YXIgY2xvbmUgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNsb25lLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUpKTtcclxuXHJcbiAgICAgIGlmIChuZXh0KSBuZXh0KCk7XHJcbiAgICB9LmJpbmQodGhpcyk7XHJcbiAgICBjbG9uZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xyXG4gIH0sXHJcblxyXG4gIF9yZXBsYWNlQ3VycmVudEltYWdlOiBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcclxuICAgICAgdGhpcy5pbWFnZS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmltYWdlID0gbmV3SW1hZ2U7XHJcbiAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgdmFyIGNhbnZhc1JhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XHJcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xyXG4gICAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXHJcbiAgICB2YXIgc2NhbGVNaW4gPSAxO1xyXG4gICAgdmFyIHNjYWxlTWF4ID0gMTtcclxuICAgIHZhciBzY2FsZVggPSAxO1xyXG4gICAgdmFyIHNjYWxlWSA9IDE7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xyXG4gICAgICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1heFdpZHRoIC8gY2FudmFzV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgc2NhbGVYID0gMTtcclxuICAgIHNjYWxlWSA9IDE7XHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgIHNjYWxlWCA9ICB0aGlzLm9wdGlvbnMubWluV2lkdGggLyBjYW52YXNXaWR0aDtcclxuICAgIH1cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2NhbGVZID0gIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXHJcblxyXG4gICAgY2FudmFzV2lkdGggKj0gc2NhbGU7XHJcbiAgICBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XHJcblxyXG4gICAgLy8gRmluYWxseSBwbGFjZSB0aGUgaW1hZ2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgY2FudmFzXHJcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xyXG4gICAgdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLmltYWdlKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcclxuICB9LFxyXG5cclxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXHJcbiAgLy8gdHJhbnNmb3JtYXRpb25zIHN0YWNrIChpbiBvcmRlciB0byByZWNvbnN0aXR1dGUgdGhlIHByZXZpb3VzIHN0YXRlc1xyXG4gIC8vIG9mIHRoZSBpbWFnZSkuXHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxyXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICBfcG9zdFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgaWYgKG5ld0ltYWdlKVxyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XHJcblxyXG4gICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBpbWFnZSBmcm9tIG9yaWdpbmFsIGVsZW1lbnQgcGx1cyByZS1hcHBseSBldmVyeVxyXG4gIC8vIHRyYW5zZm9ybWF0aW9ucy5cclxuICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNvdXJjZUltYWdlLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XHJcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxyXG4gIH0sXHJcblxyXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XHJcbiAgICBpZiAoMCA9PT0gdHJhbnNmb3JtYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6cmVpbml0aWFsaXplZCcpO1xyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0cmFuc2Zvcm1hdGlvbiA9IHRyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xyXG5cclxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcclxuICAgICAgaWYgKG5ld0ltYWdlKSB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XHJcbiAgICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRyYW5zZm9ybWF0aW9ucylcclxuICAgIH07XHJcblxyXG4gICAgdHJhbnNmb3JtYXRpb24uYXBwbHlUcmFuc2Zvcm1hdGlvbihcclxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXHJcbiAgICAgIG5leHQuYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXHJcbiAgLy8gVGhlIGltYWdlIGVsZW1lbnQgaXMgcmVwbGFjZWQgYnkgYSBuZXcgYGRpdmAgZWxlbWVudC5cclxuICAvLyBIb3dldmVyIHRoZSBvcmlnaW5hbCBpbWFnZSBpcyByZS1pbmplY3RlZCBpbiBvcmRlciB0byBrZWVwIGEgdHJhY2Ugb2YgaXQuXHJcbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xyXG4gICAgLy8gQ29udGFpbmVyXHJcbiAgICB2YXIgbWFpbkNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xyXG5cclxuICAgIC8vIFRvb2xiYXJcclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9vbGJhckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXRvb2xiYXInO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodG9vbGJhckVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFZpZXdwb3J0IGNhbnZhc1xyXG4gICAgdmFyIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XHJcbiAgICB2YXIgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNFbGVtZW50KTtcclxuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICAgIC8vIFNvdXJjZSBjYW52YXNcclxuICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1zb3VyY2UtY29udGFpbmVyJztcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0VsZW1lbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gT3JpZ2luYWwgaW1hZ2VcclxuICAgIGltYWdlRWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtYWluQ29udGFpbmVyRWxlbWVudCwgaW1hZ2VFbGVtZW50KTtcclxuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcclxuXHJcbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xyXG4gICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gbWFpbkNvbnRhaW5lckVsZW1lbnQ7XHJcbiAgICB0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50ID0gaW1hZ2VFbGVtZW50O1xyXG5cclxuICAgIHRoaXMudG9vbGJhciA9IG5ldyBEYXJrcm9vbS5VSS5Ub29sYmFyKHRvb2xiYXJFbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcclxuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcclxuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBJbnN0YW5jaWF0ZSB0aGUgRmFicmljIGltYWdlIG9iamVjdC5cclxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcclxuICAvLyB0aGVuIGl0IGlzIGFkZCBpbiB0aGUgRmFicmljIGNhbnZhcyBvYmplY3QuXHJcbiAgX2luaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XHJcbiAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcclxuXHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXHJcbiAgLy8gTm90ZSB0aGF0IHBsdWdpbnMgYXJlIGluc3RhbmNpYXRlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGFuIHRoZXlcclxuICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXHJcbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbnMpIHtcclxuICAgICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbbmFtZV07XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XHJcblxyXG4gICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXHJcbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXHJcbiAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIHRoaXMucGx1Z2luc1tuYW1lXSA9IG5ldyBwbHVnaW4odGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XHJcblxyXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxyXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxyXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcclxuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XHJcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5QbHVnaW4ucHJvdG90eXBlID0ge1xyXG4gIGRlZmF1bHRzOiB7fSxcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfVxyXG59XHJcblxyXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cclxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cclxufVxyXG5cclxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXHJcblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVUkgPSB7XHJcbiAgVG9vbGJhcjogVG9vbGJhcixcclxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXHJcbiAgQnV0dG9uOiBCdXR0b24sXHJcbn07XHJcblxyXG4vLyBUb29sYmFyIG9iamVjdC5cclxuZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuVG9vbGJhci5wcm90b3R5cGUgPSB7XHJcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG5cclxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcclxuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgaW1hZ2U6ICdoZWxwJyxcclxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcclxuICAgIGJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJkYXJrcm9vbS1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiIycgKyBvcHRpb25zLmltYWdlICsgJ1wiIC8+PC9zdmc+JztcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuXHJcbiAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcclxuICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XHJcbiAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG59XHJcblxyXG5CdXR0b24ucHJvdG90eXBlID0ge1xyXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xyXG4gIH0sXHJcbiAgaGlkZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSlcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcclxuICB9LFxyXG4gIGRpc2FibGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAodmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVXRpbHMgPSB7XHJcbiAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxyXG59O1xyXG5cclxuXHJcbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cclxuZnVuY3Rpb24gZXh0ZW5kKGIsIGEpIHtcclxuICB2YXIgcHJvcDtcclxuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcbiAgZm9yIChwcm9wIGluIGEpIHtcclxuICAgIGlmIChhLmhhc093blByb3BlcnR5KHByb3ApICYmIGIuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICB9XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgRGFya3Jvb20ucGx1Z2luc1snaGlzdG9yeSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21IaXN0b3J5UGx1Z2luKCkge1xyXG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5fb25UcmFuZm9ybWF0aW9uQXBwbGllZC5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBsYXN0VHJhbnNmb3JtYXRpb24gPSB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wb3AoKTtcclxuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnVuc2hpZnQobGFzdFRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWRvOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW5jZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wdXNoKGNhbmNlbFRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfaW5pdEJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdyZWRvJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRvLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmRpc2FibGUoKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcclxuICAgIH0sXHJcblxyXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgIHZhciBhbmdsZSA9IChpbWFnZS5nZXRBbmdsZSgpICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAlIDM2MDtcclxuICAgIGltYWdlLnJvdGF0ZShhbmdsZSk7XHJcblxyXG4gICAgdmFyIHdpZHRoLCBoZWlnaHQ7XHJcbiAgICBoZWlnaHQgPSBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XHJcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcclxuXHJcbiAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xyXG5cclxuICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xyXG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcblxyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5EYXJrcm9vbS5wbHVnaW5zWydyb3RhdGUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAncm90YXRlLWxlZnQnXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3JvdGF0ZS1yaWdodCdcclxuICAgIH0pO1xyXG5cclxuICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZUxlZnQuYmluZCh0aGlzKSk7XHJcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuXHJcbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcclxuICAgIHRoaXMucm90YXRlKC05MCk7XHJcbiAgfSxcclxuXHJcbiAgcm90YXRlUmlnaHQ6IGZ1bmN0aW9uIHJvdGF0ZVJpZ2h0KCkge1xyXG4gICAgdGhpcy5yb3RhdGUoOTApO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGFuZ2xlKSB7XHJcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIG5ldyBSb3RhdGlvbih7YW5nbGU6IGFuZ2xlfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBDcm9wID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcclxuICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIFZhbGlkYXRlIGltYWdlXHJcbiAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcblxyXG4gICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcclxuICAgICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xyXG5cclxuICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xyXG4gICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XHJcbiAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIHZhciBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xyXG4gICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcclxuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcclxuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcclxuXHJcbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcclxuICAgICAgbGVmdDogbGVmdCxcclxuICAgICAgdG9wOiB0b3AsXHJcbiAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcclxuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgIHZhciBkYXNoV2lkdGggPSA3O1xyXG5cclxuICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxyXG4gICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcclxuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XHJcbiAgICB2YXIgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcclxuICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xyXG5cclxuICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcclxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcclxuXHJcbiAgICAvLyBTZXQgZGFzaGVkIGJvcmRlcnNcclxuICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xyXG4gICAgZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xyXG5cclxuICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuXHJcbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcclxuICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xyXG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgIC8vIFJlc2V0IHNjYWxlXHJcbiAgICBjdHguc2NhbGUoMS9zY2FsZVgsIDEvc2NhbGVZKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24oY3R4KSB7XHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcclxuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgLy9cclxuXHJcbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XHJcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcclxuXHJcbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgXHJcbiAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cclxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXHJcbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XHJcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxyXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xyXG5cclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gcmlnaHRcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIGxlZnRcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJHcmlkOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIC8vIFZlcnRpY2FsIGxpbmVzXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ2Nyb3AnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gIC8vIEluaXQgcG9pbnRcclxuICBzdGFydFg6IG51bGwsXHJcbiAgc3RhcnRZOiBudWxsLFxyXG5cclxuICAvLyBLZXljcm9wXHJcbiAgaXNLZXlDcm9waW5nOiBmYWxzZSxcclxuICBpc0tleUxlZnQ6IGZhbHNlLFxyXG4gIGlzS2V5VXA6IGZhbHNlLFxyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXHJcbiAgICBtaW5IZWlnaHQ6IDEsXHJcbiAgICBtaW5XaWR0aDogMSxcclxuICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxyXG4gICAgcXVpY2tDcm9wS2V5OiBmYWxzZVxyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUNyb3BQbHVnaW4oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2Nyb3AnXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2Nsb3NlJyxcclxuICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgLy8gQ2FudmFzIGV2ZW50c1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNjYWxpbmcnLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcclxuICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSwgeSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XHJcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcbiAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcclxuICAgIHZhciBtYXhZID0gY2FudmFzLmdldEhlaWdodCgpIC0gaDtcclxuXHJcbiAgICBpZiAoeCA8IDApXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgMCk7XHJcbiAgICBpZiAoeSA8IDApXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcclxuICAgIGlmICh4ID4gbWF4WClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcclxuICAgIGlmICh5ID4gbWF4WSlcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIG1heFkpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcclxuICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XHJcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcclxuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgIHZhciBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XHJcbiAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG5cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5YIDwgMCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgdmFyIGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XHJcbiAgICB9XHJcbiAgICBpZiAobWluWSA8IDApIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCkgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xyXG4gICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSW5pdCBjcm9wIHpvbmVcclxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcblxyXG4gICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuICAgIHZhciBwb2ludCA9IG5ldyBmYWJyaWMuUG9pbnQoeCwgeSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cclxuICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICBpZiAoYWN0aXZlT2JqZWN0ID09PSB0aGlzLmNyb3Bab25lIHx8IHRoaXMuY3JvcFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgIHRoaXMuc3RhcnRZID0geTtcclxuICB9LFxyXG5cclxuICAvLyBFeHRlbmQgY3JvcCB6b25lXHJcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcclxuICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcclxuXHJcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XHJcbiAgfSxcclxuXHJcbiAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHpvbmUgPSB0aGlzLmNyb3Bab25lO1xyXG5cclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xyXG4gICAgICB6b25lLnNldFRvcCh5KTtcclxuICAgICAgem9uZS5zZXRMZWZ0KHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNLZXlMZWZ0ID0gIHggPCB6b25lLmxlZnQgKyB6b25lLndpZHRoIC8gMiA7XHJcbiAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDIgO1xyXG5cclxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKFxyXG4gICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxyXG4gICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXHJcbiAgICAgIE1hdGgubWF4KHpvbmUubGVmdCt6b25lLndpZHRoLCB4KSxcclxuICAgICAgTWF0aC5tYXgoem9uZS50b3Arem9uZS5oZWlnaHQsIHkpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIC8vIEZpbmlzaCBjcm9wIHpvbmVcclxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XHJcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWUgO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0VG9wKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRMZWZ0KDApO1xyXG4gIH0sXHJcblxyXG4gIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCAhdGhpcy5pc0tleUNyb3BpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBVbmFjdGl2ZSBxdWljayBjcm9wIGZsb3dcclxuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXJ0WCA9IDE7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IDE7XHJcbiAgICB0aGlzLm9uTW91c2VVcCgpO1xyXG4gIH0sXHJcblxyXG4gIHNlbGVjdFpvbmU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuXHJcbiAgICBpZiAoIWZvcmNlRGltZW5zaW9uKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHgsIHksIHgrd2lkdGgsIHkraGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcclxuICAgICAgICAnbGVmdCc6IHgsXHJcbiAgICAgICAgJ3RvcCc6IHksXHJcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgsXHJcbiAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVDcm9wOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xyXG4gIH0sXHJcblxyXG4gIGNyb3BDdXJyZW50Wm9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxyXG4gICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XHJcblxyXG4gICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xyXG4gICAgdmFyIHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNyb3Bab25lLmdldFdpZHRoKCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XHJcbiAgICBpZiAodG9wIDwgMCkge1xyXG4gICAgICBoZWlnaHQgKz0gdG9wO1xyXG4gICAgICB0b3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICB3aWR0aCArPSBsZWZ0O1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxyXG4gICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXHJcbiAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcclxuICAgICAgdG9wOiB0b3AgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0IC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXHJcbiAgICB9KSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxyXG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNyb3Bab25lICE9PSB1bmRlZmluZWQ7XHJcbiAgfSxcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBjcm9wIHpvbmVcclxuICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XHJcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxyXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAvL2JvcmRlckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXHJcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLmNyb3Bab25lKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXHJcbiAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckNyb3Bab25lOiBmdW5jdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcblxyXG4gICAgdmFyIGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xyXG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xyXG4gICAgdmFyIGlzRG93biA9ICh0b1kgPiBmcm9tWSk7XHJcbiAgICB2YXIgaXNVcCA9ICFpc0Rvd247XHJcblxyXG4gICAgdmFyIG1pbldpZHRoID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5XaWR0aCwgY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG5cclxuICAgIC8vIERlZmluZSBjb3JuZXIgY29vcmRpbmF0ZXNcclxuICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xyXG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xyXG4gICAgdmFyIHRvcFkgPSBNYXRoLm1pbihmcm9tWSwgdG9ZKTtcclxuICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XHJcblxyXG4gICAgLy8gUmVwbGFjZSBjdXJyZW50IHBvaW50IGludG8gdGhlIGNhbnZhc1xyXG4gICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XHJcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcclxuICAgIHRvcFkgPSBNYXRoLm1heCgwLCB0b3BZKVxyXG4gICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XHJcblxyXG4gICAgLy8gUmVjYWxpYnJhdGUgY29vcmRpbmF0ZXMgYWNjb3JkaW5nIHRvIGdpdmVuIG9wdGlvbnNcclxuICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XHJcbiAgICAgIGlmIChpc1JpZ2h0KVxyXG4gICAgICAgIHJpZ2h0WCA9IGxlZnRYICsgbWluV2lkdGg7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgIGlmIChpc0Rvd24pXHJcbiAgICAgICAgYm90dG9tWSA9IHRvcFkgKyBtaW5IZWlnaHQ7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcclxuICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XHJcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XHJcbiAgICAgIGxlZnRYID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcclxuICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodG9wWSA8IDApIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cclxuICAgICAgYm90dG9tWSArPSBNYXRoLmFicyh0b3BZKTtcclxuICAgICAgdG9wWSA9IDBcclxuICAgIH1cclxuICAgIGlmIChib3R0b21ZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcclxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGJvdHRvbVkgPSBjYW52YXMuZ2V0SGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdpZHRoID0gcmlnaHRYIC0gbGVmdFg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XHJcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcclxuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuXHJcbiAgICAgIGlmKHRoaXMuaXNLZXlDcm9waW5nKSB7XHJcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XHJcbiAgICAgICAgaXNVcCA9IHRoaXMuaXNLZXlVcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA8IHJhdGlvKSB7XHJcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gaGVpZ2h0ICogcmF0aW87XHJcbiAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgbGVmdFggLT0gKG5ld1dpZHRoIC0gd2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA+IHJhdGlvKSB7XHJcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodC93aWR0aCk7XHJcbiAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgIHRvcFkgLT0gKG5ld0hlaWdodCAtIGhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAgIGxlZnRYID0gMDtcclxuICAgICAgICAvL1RPRE9cclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSA8IDApIHtcclxuICAgICAgICB0b3BZID0gMDtcclxuICAgICAgICAvL1RPRE9cclxuICAgICAgfVxyXG4gICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcclxuICAgICAgICBoZWlnaHQgPSBuZXdXaWR0aCAqIGhlaWdodCAvIHdpZHRoO1xyXG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgIHRvcFkgPSBmcm9tWSAtIGhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcFkgKyBoZWlnaHQgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcclxuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xyXG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcclxuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xyXG4gICAgdGhpcy5jcm9wWm9uZS50b3AgPSB0b3BZO1xyXG4gICAgdGhpcy5jcm9wWm9uZS53aWR0aCA9IHdpZHRoO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9XHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5zZWxmRGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVNhdmVQbHVnaW4oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3NhdmUnXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCI7KGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgUmVkYWN0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcclxuICAgICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcblxyXG4gICAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcclxuICAgICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFZhbGlkYXRlIGltYWdlXHJcbiAgICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgaW1nSW5zdGFuY2UgPSBuZXcgZmFicmljLkltYWdlKHRoaXMsIHtcclxuICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciByZWRhY3RGaWx0ZXIgPSBuZXcgZmFicmljLkltYWdlLmZpbHRlcnMuUmVkYWN0KHtcclxuICAgICAgICAgIGxlZnQ6ICAgbGVmdCxcclxuICAgICAgICAgIHRvcDogICAgdG9wLFxyXG4gICAgICAgICAgd2lkdGg6ICB3aWR0aCxcclxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGltZ0luc3RhbmNlLmFwcGx5RmlsdGVycyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBBZGQgaW1hZ2VcclxuICAgICAgICAgIGltYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XHJcbiAgICAgICAgfSwgW3JlZGFjdEZpbHRlcl0pO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICB2YXIgUmVkYWN0Wm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XHJcbiAgICBfcmVuZGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG4gICAgICB2YXIgZGFzaFdpZHRoID0gNztcclxuXHJcbiAgICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxyXG4gICAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xyXG4gICAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xyXG4gICAgICB2YXIgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcclxuICAgICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XHJcblxyXG4gICAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuNSknO1xyXG4gICAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XHJcblxyXG4gICAgICAvLyBTZXQgZGFzaGVkIGJvcmRlcnNcclxuICAgICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcclxuICAgICAgZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XHJcblxyXG4gICAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjIpJztcclxuICAgICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcclxuICAgICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcclxuICAgICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgICAvLyBSZXNldCBzY2FsZVxyXG4gICAgICBjdHguc2NhbGUoMSAvIHNjYWxlWCwgMSAvIHNjYWxlWSk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG4gICAgICB2YXIgYm9yZGVyT2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgIC8vXHJcbiAgICAgIC8vICAgIHgwICAgIHgxICAgICAgICB4MiAgICAgIHgzXHJcbiAgICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAwICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAgIC8vXHJcblxyXG4gICAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XHJcbiAgICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICAgIHZhciB4MiA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyKTtcclxuICAgICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcclxuXHJcbiAgICAgIHZhciB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcclxuICAgICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIHZhciB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcclxuXHJcbiAgICAgIC8vIFVwcGVyIHJlY3RcclxuICAgICAgY3R4LmZpbGxSZWN0KHgwLCB5MCwgeDMgLSB4MCwgeTEgLSB5MCArIGJvcmRlck9mZnNldCk7XHJcblxyXG4gICAgICAvLyBMZWZ0IHJlY3RcclxuICAgICAgY3R4LmZpbGxSZWN0KHgwLCB5MSwgeDEgLSB4MCwgeTIgLSB5MSArIGJvcmRlck9mZnNldCk7XHJcblxyXG4gICAgICAvLyBSaWdodCByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MiwgeTEsIHgzIC0geDIsIHkyIC0geTEgKyBib3JkZXJPZmZzZXQpO1xyXG5cclxuICAgICAgLy8gRG93biByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTIsIHgzIC0geDAsIHkzIC0geTIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVuZGVyQm9yZGVyczogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIHVwcGVyIGxlZnRcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciByaWdodFxyXG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gZG93biByaWdodFxyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gbGVmdFxyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgLy8gVmVydGljYWwgbGluZXNcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAvLyBIb3Jpem9udGFsIGxpbmVzXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIERhcmtyb29tLnBsdWdpbnNbJ3JlZGFjdCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICAvLyBJbml0IHBvaW50XHJcbiAgICBzdGFydFg6IG51bGwsXHJcbiAgICBzdGFydFk6IG51bGwsXHJcblxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgLy8gbWluIGNyb3AgZGltZW5zaW9uXHJcbiAgICAgIG1pbkhlaWdodDogMSxcclxuICAgICAgbWluV2lkdGg6IDEsXHJcbiAgICAgIC8vIGVuc3VyZSBjcm9wIHJhdGlvXHJcbiAgICAgIHJhdGlvOiBudWxsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdtYXNrJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdkb25lJyxcclxuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCdXR0b25zIGNsaWNrXHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVSZWRhY3QuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZGFjdEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgLy8gQ2FudmFzIGV2ZW50c1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQXZvaWQgY3JvcCB6b25lIHRvIGdvIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzXHJcbiAgICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XHJcblxyXG4gICAgICBpZiAoeCA8IDApXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcclxuICAgICAgaWYgKHkgPCAwKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcclxuICAgICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgbWF4WCk7XHJcbiAgICAgIGlmICh5ID4gbWF4WSlcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXHJcbiAgICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5yZWRhY3Rab25lKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcclxuICAgICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG5cclxuICAgICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVgobGFzdFNjYWxlWCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1pblggPCAwKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRMZWZ0KDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1pblkgPCAwKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sYXN0U2NhbGVYID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVgoKTtcclxuICAgICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJbml0IGNyb3Agem9uZVxyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cclxuICAgICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5yZWRhY3Rab25lIHx8IHRoaXMucmVkYWN0Wm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFdpZHRoKDApO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0SGVpZ2h0KDApO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0U2NhbGVZKDEpO1xyXG5cclxuICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEV4dGVuZCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICAgIHRoaXMuX3JlbmRlclJlZGFjdFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRmluaXNoIGNyb3Agem9uZVxyXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5zZXRDb29yZHMoKTtcclxuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgICAgdGhpcy5zdGFydFggPSBudWxsO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlbGVjdFpvbmU6IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG5cclxuICAgICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclJlZGFjdFpvbmUoeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0KHtcclxuICAgICAgICAgICdsZWZ0JzogeCxcclxuICAgICAgICAgICd0b3AnOiB5LFxyXG4gICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXHJcbiAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVSZWRhY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZGFjdEN1cnJlbnRab25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdm9pZCByZWRhY3RpbmcgZW1wdHkgem9uZVxyXG4gICAgICBpZiAodGhpcy5yZWRhY3Rab25lLndpZHRoIDwgMSAmJiB0aGlzLnJlZGFjdFpvbmUuaGVpZ2h0IDwgMSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgZGFya3Jvb20gPSB0aGlzLmRhcmtyb29tO1xyXG4gICAgICB2YXIgY2FudmFzID0gZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgaW1hZ2UgPSBkYXJrcm9vbS5pbWFnZTtcclxuXHJcbiAgICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcclxuICAgICAgdmFyIHRvcCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5yZWRhY3Rab25lLmdldEhlaWdodCgpO1xyXG5cclxuICAgICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxyXG4gICAgICBpZiAodG9wIDwgMCkge1xyXG4gICAgICAgIGhlaWdodCArPSB0b3A7XHJcbiAgICAgICAgdG9wID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgd2lkdGggKz0gbGVmdDtcclxuICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cclxuICAgICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXHJcbiAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUmVkYWN0KHtcclxuICAgICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKVxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRlc3Qgd2hldGhlciByZWRhY3Qgem9uZSBpcyBzZXRcclxuICAgIGhhc0ZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlZGFjdFpvbmUgIT09IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSByZWRhY3Qgem9uZVxyXG4gICAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZSA9IG5ldyBSZWRhY3Rab25lKHtcclxuICAgICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAvL3N0cm9rZTogJyM0NDQnLFxyXG4gICAgICAgIC8vc3Ryb2tlRGFzaEFycmF5OiBbNSwgNV0sXHJcbiAgICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgICAgY29ybmVyU2l6ZTogOCxcclxuICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxyXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICBoYXNSb3RhdGluZ1BvaW50OiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3RCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUmVtb3ZlIHRoZSByZWRhY3Qgem9uZVxyXG4gICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUucmVtb3ZlKCk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlclJlZGFjdFpvbmU6IGZ1bmN0aW9uIChmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAgIHZhciBpc1JpZ2h0ID0gKHRvWCA+IGZyb21YKTtcclxuICAgICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xyXG4gICAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgICAgdmFyIGlzVXAgPSAhaXNEb3duO1xyXG5cclxuICAgICAgdmFyIG1pbldpZHRoID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5XaWR0aCwgY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXHJcbiAgICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xyXG4gICAgICB2YXIgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XHJcbiAgICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XHJcbiAgICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XHJcblxyXG4gICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICAgIGxlZnRYID0gTWF0aC5tYXgoMCwgbGVmdFgpO1xyXG4gICAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcclxuICAgICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpO1xyXG4gICAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuXHJcbiAgICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXHJcbiAgICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgaWYgKGlzUmlnaHQpXHJcbiAgICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGlzRG93bilcclxuICAgICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRvcFkgPSBib3R0b21ZIC0gbWluSGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcclxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgbGVmdFxyXG4gICAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XHJcbiAgICAgICAgbGVmdFggPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cclxuICAgICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xyXG4gICAgICAgIHRvcFkgPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdpZHRoID0gcmlnaHRYIC0gbGVmdFg7XHJcbiAgICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcclxuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcclxuICAgICAgICB2YXIgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQgLyB3aWR0aCk7XHJcbiAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAgICAgbGVmdFggPSAwO1xyXG4gICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgICAgdG9wWSA9IDA7XHJcbiAgICAgICAgICAvL1RPRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlZnRYICsgd2lkdGggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcclxuICAgICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XHJcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIHRvcFk7XHJcbiAgICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBcHBseSBjb29yZGluYXRlc1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUubGVmdCA9IGxlZnRYO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUudG9wID0gdG9wWTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5yZWRhY3Rab25lKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKTtcclxuIiwiKGZ1bmN0aW9uIChEYXJrcm9vbSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW1wbGVtZW50YXRpb24oX3RoaXMpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHVwZGF0ZXMgc3RhdGUgb2YgYnV0dG9ucyByZWxhdGl2ZSB0byBpbWFnZSBzaXplIHYgY2FudmFzIHNpemVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBfdXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZSwgcGFuQnV0dG9uID0gX3RoaXMuYnV0dG9ucy5wYW4sIHpvb21PdXRCdXR0b24gPSBfdGhpcy5idXR0b25zLnpvb21PdXQsIHNob3VsZERpc2FibGUgPSAoKGltYWdlLmdldFdpZHRoKCkgPD0gY2FudmFzLmdldFdpZHRoKCkpICYmIChpbWFnZS5nZXRIZWlnaHQoKSA8PSBjYW52YXMuZ2V0SGVpZ2h0KCkpKTtcclxuICAgICAgICAgICAgcGFuQnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZSk7XHJcbiAgICAgICAgICAgIHpvb21PdXRCdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZW5zdXJlcyBib3R0b20gZWRnZSBhbmQgcmlnaHQgZWRnZSBvZiBpbWFnZSBuZXZlciBtb3ZlIHRvIGEgcG9zaXRpb24gbGVzcyB0aGFuIHRoZSBjYW52YXNcclxuICAgICAgICAgKiBib3R0b20gZWRnZSBhbmQgcmlnaHQgZWRnZSByZXNwZWN0aXZlbHlcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBfcmVmaXRJbWFnZUluQ2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzLCBtaW5YID0gY2FudmFzLmdldFdpZHRoKCksIG1pblkgPSBjYW52YXMuZ2V0SGVpZ2h0KCksIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2UsIGJvdHRvbVJpZ2h0ID0gaW1hZ2Uub0Nvb3Jkcy5icjtcclxuICAgICAgICAgICAgaWYgKGJvdHRvbVJpZ2h0LnggPCBtaW5YKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5sZWZ0ID0gaW1hZ2UubGVmdCArIChtaW5YIC0gYm90dG9tUmlnaHQueCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5sZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0gLy8gYnV0IG5vdCBiZXlvbmQgbGVmdCBlZGdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvdHRvbVJpZ2h0LnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyAobWluWSAtIGJvdHRvbVJpZ2h0LnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLnRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS50b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBidXQgbm90IGJleW9uZCB0b3AgZWRnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgem9vbSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uuc2NhbGUoaW1hZ2Uuc2NhbGVYICogZGVsdGEpO1xyXG4gICAgICAgICAgICBfdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCd6b29tOmNoYW5nZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9pbml0UGFuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMucGFuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9ucy5wYW4uYWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgICAgICBjYW52YXMub24oJ21vdXNlOmRvd24nLCBldmVudExpc3RlbmVycy5wYW5FbnRlcik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vbignbW91c2U6dXAnLCBldmVudExpc3RlbmVycy5wYW5FeGl0KTtcclxuICAgICAgICAgICAgY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgZXZlbnRMaXN0ZW5lcnMucGFuKTtcclxuICAgICAgICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgX2V4aXRQYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9ucy5wYW4uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6ZG93bicsIGV2ZW50TGlzdGVuZXJzLnBhbkVudGVyKTtcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6dXAnLCBldmVudExpc3RlbmVycy5wYW5FeGl0KTtcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6bW92ZScsIGV2ZW50TGlzdGVuZXJzLnBhbik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMuZGVmYXVsdEN1cnNvciA9PSAnbW92ZScpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaW1pdHMgcGFuIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGltYWdlIHJlbGF0aXZlIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICAgICAgICogQHBhcmFtIGRlbHRhXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX2NvbnN0cmFpblBhbiA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzLCBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLCB0bCA9IGltYWdlLm9Db29yZHMudGwsIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgICBiciA9IGltYWdlLm9Db29yZHMuYnI7IC8vIGJvdHRvbSByaWdodCBjb3JuZXJcclxuICAgICAgICAgICAgaWYgKGRlbHRhLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS54ID0gKCh0bC54ICsgZGVsdGEueCkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLngpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueCA9IE1hdGguY2VpbChkZWx0YS54KTtcclxuICAgICAgICAgICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLngpICsgZGVsdGEueCkgPCBjYW52YXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YS54ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVsdGEueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnkgPSAoKHRsLnkgKyBkZWx0YS55KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS55ID0gTWF0aC5jZWlsKGRlbHRhLnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueSkgKyBkZWx0YS55KSA8IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YS55ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgX2RvUGFuID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlO1xyXG4gICAgICAgICAgICBkZWx0YSA9IF9jb25zdHJhaW5QYW4oZGVsdGEpO1xyXG4gICAgICAgICAgICBpbWFnZS5sZWZ0ID0gaW1hZ2UubGVmdCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIGltYWdlLnRvcCA9IGltYWdlLnRvcCArIGRlbHRhLnk7XHJcbiAgICAgICAgICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgICAgICAgICBzdGF0ZXMucmVhbFBhbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGltYWdlLm9Db29yZHMudGwueCxcclxuICAgICAgICAgICAgICAgIHk6IGltYWdlLm9Db29yZHMudGwueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gICAgICAgICAgICB6b29tSW46IGZ1bmN0aW9uICgpIHsgem9vbSgxLjA1KTsgfSxcclxuICAgICAgICAgICAgem9vbU91dDogZnVuY3Rpb24gKCkgeyB6b29tKDAuOTUpOyB9LFxyXG4gICAgICAgICAgICBhYm9ydFBhbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuQnV0dG9uID0gX3RoaXMuYnV0dG9ucy5wYW47XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdzdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgPT0gcGFuQnV0dG9uLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ3VzZSdcclxuICAgICAgICAgICAgICAgICAgICAmJiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZXhpdFBhbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVQYW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2V4aXRQYW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pbml0UGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbkVudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFuOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFubmluZyAmJiBldmVudCAmJiBldmVudC5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmUubW92ZW1lbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5lLm1vdmVtZW50WVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX2RvUGFuKGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbkV4aXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgem9vbUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVzLmxhc3RTY2FsZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIF91cGRhdGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICBfcmVmaXRJbWFnZUluQ2FudmFzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3RvcmVab29tUGFuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLmxhc3RTY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGUoc3RhdGVzLmxhc3RTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5yZWFsUGFuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RvUGFuKHN0YXRlcy5yZWFsUGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBfcmVmaXRJbWFnZUluQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGF0ZXMgPSB7XHJcbiAgICAgICAgICAgIHBhbkFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYXN0U2NhbGU6IG51bGwsXHJcbiAgICAgICAgICAgIHJlYWxQYW46IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJzOiBldmVudExpc3RlbmVycyxcclxuICAgICAgICAgICAgc3RhdGVzOiBzdGF0ZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgRGFya3Jvb20ucGx1Z2luc1snem9vbSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICAgICAgZGVmYXVsdHM6IHt9LFxyXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25zID0ge307XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbUluID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHsgaW1hZ2U6ICd6b29tLWluJyB9KTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tT3V0ID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHsgaW1hZ2U6ICd6b29tLW91dCcsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBidXR0b25zLnBhbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnaGFuZCcsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB2YXIgaW1wbGVtZW50YXRpb24gPSBnZXRJbXBsZW1lbnRhdGlvbih0aGlzKTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tSW4pO1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tT3V0KTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy50b2dnbGVQYW4pO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLnRvb2xiYXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLmFib3J0UGFuKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCd6b29tOmNoYW5nZScsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnpvb21DaGFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy5yZXN0b3JlWm9vbVBhbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKERhcmtyb29tKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
