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

  // Track original orientation
  sourceImageOrientation: null,

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
    orientation: {
      acceptedRatios: {},
      maxWidthPortrait: null,
      maxWidthLandscape: null, //max width available for a image assumed in landscape
    },

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
    var file = document.getElementById('file');
    if (file !== null) {
      file.addEventListener('change', function(e) {
        
        var f = e.target.files[0];
        element.src = window.URL.createObjectURL(f);
        image.src = element.src;
      });
    } else {
      image.src = element.src;
    }
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
    //image.src = this.image.toDataURL();
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

    
    var viewport = Darkroom.Utils.computeImageViewPort(this.image);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;
    var maxWidth = this.options.maxWidth;
    var maxHeight = this.options.maxHeight;
    var imageOrientation = Darkroom.Utils.computeImageOrientation(this.image,
                                                                  this.options.orientation.acceptedRatios,
                                                                  this.options.orientation.maxWidthPortrait,
                                                                  this.options.orientation.maxWidthLandscape,
                                                                  this.sourceImageOrientation.orientation);
    // Adjust width or height according to specified ratio
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

    if (null !== maxWidth) {
      if(null !== imageOrientation.maxWidth && imageOrientation.maxWidth < this.image.getWidth()) {
        scaleX = imageOrientation.maxWidth / this.image.getWidth();
      } else if(maxWidth < canvasWidth) {
        scaleX =  maxWidth / canvasWidth;
      }
    } 

    if (null !== maxHeight && maxHeight < canvasHeight) {
      scaleY =  maxHeight / canvasHeight;
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
    //this.image.setScaleX(1 * scale);
    //this.image.setScaleY(1 * scale);
    this.image.filters.push(new fabric.Image.filters.Resize({
      resizeType: 'sliceHack',
      scaleX: scale,
      scaleY: scale
    }));
    this.image.applyFilters(this.canvas.renderAll.bind(this.canvas));
    this.canvas.add(this.image);
    this.canvas.setWidth(canvasWidth);
    this.canvas.setHeight(canvasHeight);
    this.canvas.centerObject(this.image);
    this.image.setCoords();
  },

  // Image has been made dirty and has not applied its changes, reset orientation before applying
  _rescale: function() {    
    delete this.sourceImage.dirty; 
    if (this.sourceImage.angle != this.sourceImageOrientation.angle) {
      let imageData = (function(image) { 
        var width = image.getWidth();
        var height = image.getHeight();
        if (image.angle == 90 || image.angle == 270) { //swap
          let temp = width;
          width = height;
          height = temp;
        }
      return {
        getWidth: function() { return width;  },
        getHeight: function() { return height; },
        angle: image.angle,
      }})(this.sourceImage); 
      this.sourceImageOrientation = Darkroom.Utils.computeImageOrientation(imageData,
                                                                          this.options.orientation.acceptedRatios,
                                                                          this.options.orientation.maxWidthPortrait,
                                                                          this.options.orientation.maxWidthLandscape);
    }    
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

    if (this.sourceImage.dirty) {
      this._rescale();
    }

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
      backgroundColor: this.options.backgroundColor,
      imageSmoothingEnabled: false,
      
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

    this.sourceImageOrientation = Darkroom.Utils.computeImageOrientation(this.sourceImage,
                                                                          this.options.orientation.acceptedRatios,
                                                                          this.options.orientation.maxWidthPortrait,
                                                                          this.options.orientation.maxWidthLandscape);

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
  computeImageOrientation: computeImageOrientation,
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

function computeImageOrientation(image, ratios, portraitW, landscapeW, forceOrientation = null) {
  var width = image.getWidth();
  var height = image.getHeight();
  var ratio = width / height;
  var orientation = forceOrientation || (ratio > 1 ? 'landscape' : 'portrait');
  var bestMatchRatio = { ratio: '1:1', value: 1.0 };
  var imageWidth = width,
      imageHeight = height;
  
  if (ratios && ratios[orientation]) {
    let lowestDiff = 99999999;
    let lowestRatio = '1:1';
    let lowestValue = 1.0;

    for(var x=0; x<ratios[orientation].length; x++) {
      let r = ratios[orientation][x];
      let diff = Math.abs(r.value - ratio);
      if(diff < lowestDiff) {
        lowestDiff = diff;
        lowestRatio = r.ratio;
        lowestValue = r.value;
      }
    }

    bestMatchRatio.ratio = lowestRatio;
    bestMatchRatio.value = lowestValue;
  }

  if (orientation === 'portrait' && portraitW && bestMatchRatio.value != 1.0) {
      imageWidth = _nearestWidth(imageWidth, portraitW, bestMatchRatio.value);
  } else if (landscapeW && bestMatchRatio.value != 1.0) {
      imageWidth = _nearestWidth(imageWidth, landscapeW, bestMatchRatio.value);
  }

  return {
    orientation: orientation,
    aspectRatio: bestMatchRatio.ratio,
    aspectValue: bestMatchRatio.value,
    bestFitWidth: Math.round(imageWidth),
    maxWidth: orientation === 'portrait' ? portraitW : landscapeW,
    angle: image.angle || 0
  };
}

function _nearestWidth(width, barrier, ratio) {
  if (width === null) {
    return barrier;
  }

  var _width = ratio > 1 ? width / ratio : width * ratio;
  if (_width > barrier) {
    width = _nearestWidth(_width, barrier, ratio);
  }

  return width;
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
    canvas.dirty = true;
    
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwicmVkYWN0LmpzIiwiem9vbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N6YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDcnFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0E3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdmxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XHJcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XHJcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbndpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xyXG5cclxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cclxuLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcclxuLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxyXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxyXG5mdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XHJcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxyXG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXHJcbi8vIHNwZWNpZmllZCBpbiBEYXJrcm9vbSdzcyBjb25zdHJ1Y3Rvci5cclxuRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xyXG5cclxuRGFya3Jvb20ucHJvdG90eXBlID0ge1xyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxyXG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcclxuICBjYW52YXM6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxyXG4gIGltYWdlOiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxyXG4gIHNvdXJjZUNhbnZhczogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxyXG4gIHNvdXJjZUltYWdlOiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxyXG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvcmlnaW5hbCBvcmllbnRhdGlvblxyXG4gIHNvdXJjZUltYWdlT3JpZW50YXRpb246IG51bGwsXHJcblxyXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXHJcbiAgdHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIC8vIENhbnZhcyBwcm9wZXJ0aWVzIChkaW1lbnNpb24sIHJhdGlvLCBjb2xvcilcclxuICAgIG1pbldpZHRoOiBudWxsLFxyXG4gICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgbWF4V2lkdGg6IG51bGwsXHJcbiAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgb3JpZW50YXRpb246IHtcclxuICAgICAgYWNjZXB0ZWRSYXRpb3M6IHt9LFxyXG4gICAgICBtYXhXaWR0aFBvcnRyYWl0OiBudWxsLFxyXG4gICAgICBtYXhXaWR0aExhbmRzY2FwZTogbnVsbCwgLy9tYXggd2lkdGggYXZhaWxhYmxlIGZvciBhIGltYWdlIGFzc3VtZWQgaW4gbGFuZHNjYXBlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xyXG4gICAgcGx1Z2luczoge30sXHJcblxyXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IC8qIG5vb3AgKi8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIExpc3Qgb2YgdGhlIGluc3RhbmNpZWQgcGx1Z2luc1xyXG4gIHBsdWdpbnM6IHt9LFxyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgYXJlIGEgbWVyZ2UgYmV0d2VlbiBgZGVmYXVsdHNgIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcclxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxyXG4gIG9wdGlvbnM6IHt9LFxyXG5cclxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgaWYgKG51bGwgPT09IGVsZW1lbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xyXG5cclxuICAgICAgLy8gVGhlbiBpbml0aWFsaXplIHRoZSBwbHVnaW5zXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQbHVnaW5zKERhcmtyb29tLnBsdWdpbnMpO1xyXG5cclxuICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcclxuICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9LmJpbmQodGhpcylcclxuXHJcbiAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZiA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VsZkRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbWFnZSwgY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xyXG4gICAgLy9pbWFnZS5zcmMgPSB0aGlzLmltYWdlLnRvRGF0YVVSTCgpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXHJcbiAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGVsID0gdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xyXG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oZXZlbnROYW1lKSB7XHJcbiAgICAvLyBVc2UgdGhlIG9sZCB3YXkgb2YgY3JlYXRpbmcgZXZlbnQgdG8gYmUgSUUgY29tcGF0aWJsZVxyXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcclxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XHJcbiAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cclxuICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXHJcbiAgcmVmcmVzaDogZnVuY3Rpb24obmV4dCkge1xyXG4gICAgdmFyIGNsb25lID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5fcmVwbGFjZUN1cnJlbnRJbWFnZShuZXcgZmFicmljLkltYWdlKGNsb25lKSk7XHJcblxyXG4gICAgICBpZiAobmV4dCkgbmV4dCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcclxuICB9LFxyXG5cclxuICBfcmVwbGFjZUN1cnJlbnRJbWFnZTogZnVuY3Rpb24obmV3SW1hZ2UpIHtcclxuICAgIGlmICh0aGlzLmltYWdlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xyXG4gICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgXHJcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLmltYWdlKTtcclxuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuICAgIHZhciBtYXhXaWR0aCA9IHRoaXMub3B0aW9ucy5tYXhXaWR0aDtcclxuICAgIHZhciBtYXhIZWlnaHQgPSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0O1xyXG4gICAgdmFyIGltYWdlT3JpZW50YXRpb24gPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VPcmllbnRhdGlvbih0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24uYWNjZXB0ZWRSYXRpb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5tYXhXaWR0aFBvcnRyYWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhMYW5kc2NhcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbi5vcmllbnRhdGlvbik7XHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgdmFyIGNhbnZhc1JhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XHJcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xyXG4gICAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXHJcbiAgICB2YXIgc2NhbGVNaW4gPSAxO1xyXG4gICAgdmFyIHNjYWxlTWF4ID0gMTtcclxuICAgIHZhciBzY2FsZVggPSAxO1xyXG4gICAgdmFyIHNjYWxlWSA9IDE7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IG1heFdpZHRoKSB7XHJcbiAgICAgIGlmKG51bGwgIT09IGltYWdlT3JpZW50YXRpb24ubWF4V2lkdGggJiYgaW1hZ2VPcmllbnRhdGlvbi5tYXhXaWR0aCA8IHRoaXMuaW1hZ2UuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgIHNjYWxlWCA9IGltYWdlT3JpZW50YXRpb24ubWF4V2lkdGggLyB0aGlzLmltYWdlLmdldFdpZHRoKCk7XHJcbiAgICAgIH0gZWxzZSBpZihtYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgc2NhbGVYID0gIG1heFdpZHRoIC8gY2FudmFzV2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgaWYgKG51bGwgIT09IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2NhbGVZID0gIG1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcclxuICAgIH1cclxuICAgIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIHNjYWxlWCA9IDE7XHJcbiAgICBzY2FsZVkgPSAxO1xyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xyXG4gICAgICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1pbldpZHRoIC8gY2FudmFzV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWluSGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgdmFyIHNjYWxlID0gc2NhbGVNYXggKiBzY2FsZU1pbjsgLy8gb25lIHNob3VsZCBiZSBlcXVhbHMgdG8gMVxyXG5cclxuICAgIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xyXG4gICAgY2FudmFzSGVpZ2h0ICo9IHNjYWxlO1xyXG5cclxuICAgIC8vIEZpbmFsbHkgcGxhY2UgdGhlIGltYWdlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xyXG4gICAgLy90aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xyXG4gICAgLy90aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xyXG4gICAgdGhpcy5pbWFnZS5maWx0ZXJzLnB1c2gobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlJlc2l6ZSh7XHJcbiAgICAgIHJlc2l6ZVR5cGU6ICdzbGljZUhhY2snLFxyXG4gICAgICBzY2FsZVg6IHNjYWxlLFxyXG4gICAgICBzY2FsZVk6IHNjYWxlXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLmltYWdlLmFwcGx5RmlsdGVycyh0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEltYWdlIGhhcyBiZWVuIG1hZGUgZGlydHkgYW5kIGhhcyBub3QgYXBwbGllZCBpdHMgY2hhbmdlcywgcmVzZXQgb3JpZW50YXRpb24gYmVmb3JlIGFwcGx5aW5nXHJcbiAgX3Jlc2NhbGU6IGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIGRlbGV0ZSB0aGlzLnNvdXJjZUltYWdlLmRpcnR5OyBcclxuICAgIGlmICh0aGlzLnNvdXJjZUltYWdlLmFuZ2xlICE9IHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbi5hbmdsZSkge1xyXG4gICAgICBsZXQgaW1hZ2VEYXRhID0gKGZ1bmN0aW9uKGltYWdlKSB7IFxyXG4gICAgICAgIHZhciB3aWR0aCA9IGltYWdlLmdldFdpZHRoKCk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmdldEhlaWdodCgpO1xyXG4gICAgICAgIGlmIChpbWFnZS5hbmdsZSA9PSA5MCB8fCBpbWFnZS5hbmdsZSA9PSAyNzApIHsgLy9zd2FwXHJcbiAgICAgICAgICBsZXQgdGVtcCA9IHdpZHRoO1xyXG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7IHJldHVybiB3aWR0aDsgIH0sXHJcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGhlaWdodDsgfSxcclxuICAgICAgICBhbmdsZTogaW1hZ2UuYW5nbGUsXHJcbiAgICAgIH19KSh0aGlzLnNvdXJjZUltYWdlKTsgXHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbiA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZU9yaWVudGF0aW9uKGltYWdlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24uYWNjZXB0ZWRSYXRpb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLm1heFdpZHRoUG9ydHJhaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLm1heFdpZHRoTGFuZHNjYXBlKTtcclxuICAgIH0gICAgXHJcbiAgfSxcclxuXHJcbiAgLy8gQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlIGFuZCBzYXZlIGl0IGluIHRoZVxyXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcclxuICAvLyBvZiB0aGUgaW1hZ2UpLlxyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKHRyYW5zZm9ybWF0aW9uKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcclxuICAgICAgdGhpcy5fcG9zdFRyYW5zZm9ybWF0aW9uLmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcclxuICAgIGlmIChuZXdJbWFnZSlcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZUltYWdlLmRpcnR5KSB7XHJcbiAgICAgIHRoaXMuX3Jlc2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGltYWdlIGZyb20gb3JpZ2luYWwgZWxlbWVudCBwbHVzIHJlLWFwcGx5IGV2ZXJ5XHJcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxyXG4gIHJlaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc291cmNlSW1hZ2UucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcclxuICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXHJcbiAgfSxcclxuXHJcbiAgX3BvcFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbnMpIHtcclxuICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XHJcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XHJcblxyXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxyXG4gICAgfTtcclxuXHJcbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcclxuICAgICAgbmV4dC5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzIGFuZCBpbnN0YW5jaWF0ZSB0aGUgRmFicmljIGNhbnZhcy5cclxuICAvLyBUaGUgaW1hZ2UgZWxlbWVudCBpcyByZXBsYWNlZCBieSBhIG5ldyBgZGl2YCBlbGVtZW50LlxyXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cclxuICBfaW5pdGlhbGl6ZURPTTogZnVuY3Rpb24oaW1hZ2VFbGVtZW50KSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVG9vbGJhclxyXG4gICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gVmlld3BvcnQgY2FudmFzXHJcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcclxuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU291cmNlIGNhbnZhc1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNvdXJjZS1jb250YWluZXInO1xyXG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzRWxlbWVudCk7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICAvLyBPcmlnaW5hbCBpbWFnZVxyXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xyXG4gICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXHJcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBtYWluQ29udGFpbmVyRWxlbWVudDtcclxuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b29sYmFyID0gbmV3IERhcmtyb29tLlVJLlRvb2xiYXIodG9vbGJhckVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhzb3VyY2VDYW52YXNFbGVtZW50LCB7XHJcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXHJcbiAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXHJcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxyXG4gIF9pbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xyXG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZUltYWdlT3JpZW50YXRpb24gPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VPcmllbnRhdGlvbih0aGlzLnNvdXJjZUltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5hY2NlcHRlZFJhdGlvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhMYW5kc2NhcGUpO1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcclxuXHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXHJcbiAgLy8gTm90ZSB0aGF0IHBsdWdpbnMgYXJlIGluc3RhbmNpYXRlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGFuIHRoZXlcclxuICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXHJcbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbnMpIHtcclxuICAgICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbbmFtZV07XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XHJcblxyXG4gICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXHJcbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXHJcbiAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIHRoaXMucGx1Z2luc1tuYW1lXSA9IG5ldyBwbHVnaW4odGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XHJcblxyXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxyXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxyXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcclxuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XHJcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5QbHVnaW4ucHJvdG90eXBlID0ge1xyXG4gIGRlZmF1bHRzOiB7fSxcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfVxyXG59XHJcblxyXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cclxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cclxufVxyXG5cclxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXHJcblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVUkgPSB7XHJcbiAgVG9vbGJhcjogVG9vbGJhcixcclxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXHJcbiAgQnV0dG9uOiBCdXR0b24sXHJcbn07XHJcblxyXG4vLyBUb29sYmFyIG9iamVjdC5cclxuZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuVG9vbGJhci5wcm90b3R5cGUgPSB7XHJcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG5cclxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcclxuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgaW1hZ2U6ICdoZWxwJyxcclxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcclxuICAgIGJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJkYXJrcm9vbS1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiIycgKyBvcHRpb25zLmltYWdlICsgJ1wiIC8+PC9zdmc+JztcclxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuXHJcbiAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcclxuICAgIGJ1dHRvbi5oaWRlKG9wdGlvbnMuaGlkZSk7XHJcbiAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQnV0dG9uIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG59XHJcblxyXG5CdXR0b24ucHJvdG90eXBlID0ge1xyXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aXZlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xyXG4gIH0sXHJcbiAgaGlkZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSlcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcclxuICB9LFxyXG4gIGRpc2FibGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAodmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVXRpbHMgPSB7XHJcbiAgZXh0ZW5kOiBleHRlbmQsXHJcbiAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxyXG4gIGNvbXB1dGVJbWFnZU9yaWVudGF0aW9uOiBjb21wdXRlSW1hZ2VPcmllbnRhdGlvbixcclxufTtcclxuXHJcbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cclxuZnVuY3Rpb24gZXh0ZW5kKGIsIGEpIHtcclxuICB2YXIgcHJvcDtcclxuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcbiAgZm9yIChwcm9wIGluIGEpIHtcclxuICAgIGlmIChhLmhhc093blByb3BlcnR5KHByb3ApICYmIGIuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVJbWFnZU9yaWVudGF0aW9uKGltYWdlLCByYXRpb3MsIHBvcnRyYWl0VywgbGFuZHNjYXBlVywgZm9yY2VPcmllbnRhdGlvbiA9IG51bGwpIHtcclxuICB2YXIgd2lkdGggPSBpbWFnZS5nZXRXaWR0aCgpO1xyXG4gIHZhciBoZWlnaHQgPSBpbWFnZS5nZXRIZWlnaHQoKTtcclxuICB2YXIgcmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICB2YXIgb3JpZW50YXRpb24gPSBmb3JjZU9yaWVudGF0aW9uIHx8IChyYXRpbyA+IDEgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCcpO1xyXG4gIHZhciBiZXN0TWF0Y2hSYXRpbyA9IHsgcmF0aW86ICcxOjEnLCB2YWx1ZTogMS4wIH07XHJcbiAgdmFyIGltYWdlV2lkdGggPSB3aWR0aCxcclxuICAgICAgaW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgXHJcbiAgaWYgKHJhdGlvcyAmJiByYXRpb3Nbb3JpZW50YXRpb25dKSB7XHJcbiAgICBsZXQgbG93ZXN0RGlmZiA9IDk5OTk5OTk5O1xyXG4gICAgbGV0IGxvd2VzdFJhdGlvID0gJzE6MSc7XHJcbiAgICBsZXQgbG93ZXN0VmFsdWUgPSAxLjA7XHJcblxyXG4gICAgZm9yKHZhciB4PTA7IHg8cmF0aW9zW29yaWVudGF0aW9uXS5sZW5ndGg7IHgrKykge1xyXG4gICAgICBsZXQgciA9IHJhdGlvc1tvcmllbnRhdGlvbl1beF07XHJcbiAgICAgIGxldCBkaWZmID0gTWF0aC5hYnMoci52YWx1ZSAtIHJhdGlvKTtcclxuICAgICAgaWYoZGlmZiA8IGxvd2VzdERpZmYpIHtcclxuICAgICAgICBsb3dlc3REaWZmID0gZGlmZjtcclxuICAgICAgICBsb3dlc3RSYXRpbyA9IHIucmF0aW87XHJcbiAgICAgICAgbG93ZXN0VmFsdWUgPSByLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmVzdE1hdGNoUmF0aW8ucmF0aW8gPSBsb3dlc3RSYXRpbztcclxuICAgIGJlc3RNYXRjaFJhdGlvLnZhbHVlID0gbG93ZXN0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAob3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgJiYgcG9ydHJhaXRXICYmIGJlc3RNYXRjaFJhdGlvLnZhbHVlICE9IDEuMCkge1xyXG4gICAgICBpbWFnZVdpZHRoID0gX25lYXJlc3RXaWR0aChpbWFnZVdpZHRoLCBwb3J0cmFpdFcsIGJlc3RNYXRjaFJhdGlvLnZhbHVlKTtcclxuICB9IGVsc2UgaWYgKGxhbmRzY2FwZVcgJiYgYmVzdE1hdGNoUmF0aW8udmFsdWUgIT0gMS4wKSB7XHJcbiAgICAgIGltYWdlV2lkdGggPSBfbmVhcmVzdFdpZHRoKGltYWdlV2lkdGgsIGxhbmRzY2FwZVcsIGJlc3RNYXRjaFJhdGlvLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXHJcbiAgICBhc3BlY3RSYXRpbzogYmVzdE1hdGNoUmF0aW8ucmF0aW8sXHJcbiAgICBhc3BlY3RWYWx1ZTogYmVzdE1hdGNoUmF0aW8udmFsdWUsXHJcbiAgICBiZXN0Rml0V2lkdGg6IE1hdGgucm91bmQoaW1hZ2VXaWR0aCksXHJcbiAgICBtYXhXaWR0aDogb3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyBwb3J0cmFpdFcgOiBsYW5kc2NhcGVXLFxyXG4gICAgYW5nbGU6IGltYWdlLmFuZ2xlIHx8IDBcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfbmVhcmVzdFdpZHRoKHdpZHRoLCBiYXJyaWVyLCByYXRpbykge1xyXG4gIGlmICh3aWR0aCA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGJhcnJpZXI7XHJcbiAgfVxyXG5cclxuICB2YXIgX3dpZHRoID0gcmF0aW8gPiAxID8gd2lkdGggLyByYXRpbyA6IHdpZHRoICogcmF0aW87XHJcbiAgaWYgKF93aWR0aCA+IGJhcnJpZXIpIHtcclxuICAgIHdpZHRoID0gX25lYXJlc3RXaWR0aChfd2lkdGgsIGJhcnJpZXIsIHJhdGlvKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB3aWR0aDtcclxufVxyXG5cclxufSkoKTtcclxuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgIHVuZG9UcmFuc2Zvcm1hdGlvbnM6IFtdLFxyXG5cclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XHJcbiAgICAgIHRoaXMuX2luaXRCdXR0b25zKCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGxhc3RUcmFuc2Zvcm1hdGlvbiA9IHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnBvcCgpO1xyXG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbmNlbFRyYW5zZm9ybWF0aW9uID0gdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5yZWluaXRpYWxpemVJbWFnZSgpO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ3VuZG8nLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ3JlZG8nLFxyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy51bmRvLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZG8uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgX3VwZGF0ZUJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmJhY2tCdXR0b24uZGlzYWJsZSgodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxyXG4gICAgfSxcclxuXHJcbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucyA9IFtdO1xyXG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgdmFyIGFuZ2xlID0gKGltYWdlLmdldEFuZ2xlKCkgKyB0aGlzLm9wdGlvbnMuYW5nbGUpICUgMzYwO1xyXG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcclxuXHJcbiAgICB2YXIgd2lkdGgsIGhlaWdodDtcclxuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcclxuICAgIHdpZHRoID0gTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xyXG5cclxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XHJcbiAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XHJcbiAgICBjYW52YXMuZGlydHkgPSB0cnVlO1xyXG4gICAgXHJcbiAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcclxuICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tUm90YXRlUGx1Z2luKCkge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgdmFyIGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xyXG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZVJpZ2h0LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZUxlZnQ6IGZ1bmN0aW9uIHJvdGF0ZUxlZnQoKSB7XHJcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcclxuICAgIHRoaXMucm90YXRlKDkwKTtcclxuICB9LFxyXG5cclxuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICBuZXcgUm90YXRpb24oe2FuZ2xlOiBhbmdsZX0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXHJcbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XHJcbiAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIEFkZCBpbWFnZVxyXG4gICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcblxyXG4gICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XHJcbiAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XHJcbiAgX3JlbmRlcjogZnVuY3Rpb24oY3R4KSB7XHJcbiAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XHJcbiAgICB2YXIgZGFzaFdpZHRoID0gNztcclxuXHJcbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XHJcbiAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xyXG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcclxuXHJcbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXHJcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XHJcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XHJcblxyXG4gICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXHJcbiAgICBpZiAoY3R4LnNldExpbmVEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIGN0eC5zZXRMaW5lRGFzaChbZGFzaFdpZHRoLCBkYXNoV2lkdGhdKTtcclxuICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIGN0eC5tb3pEYXNoID0gW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXTtcclxuXHJcbiAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XHJcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgLy8gUmUgcmVuZGVyIGxpbmVzIGluIHdoaXRlXHJcbiAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcclxuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuXHJcbiAgICAvLyBSZXNldCBzY2FsZVxyXG4gICAgY3R4LnNjYWxlKDEvc2NhbGVYLCAxL3NjYWxlWSk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XHJcblxyXG4gICAgLy9cclxuICAgIC8vICAgIHgwICAgIHgxICAgICAgICB4MiAgICAgIHgzXHJcbiAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAwICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgIC8vXHJcblxyXG4gICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xyXG4gICAgdmFyIHgxID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyKTtcclxuICAgIHZhciB4MiA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyKTtcclxuICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XHJcblxyXG4gICAgdmFyIHkwID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMiAtIHRoaXMuZ2V0VG9wKCkpO1xyXG4gICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICB2YXIgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgdmFyIHkzID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpIC0gdGhpcy5nZXRUb3AoKSkpO1xyXG5cclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIFxyXG4gICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXHJcbiAgICAvLyBOdW1iZXJzIGFyZSArLy0xIHNvIHRoYXQgb3ZlcmxheSBlZGdlcyBkb24ndCBnZXQgYmx1cnJ5LlxyXG4gICAgY3R4Lm1vdmVUbyh4MCAtIDEsIHkwIC0gMSk7XHJcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MyArIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkzIC0gMSk7XHJcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuXHJcbiAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cclxuICAgIGN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcclxuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgIGN0eC5saW5lVG8oeDIsIHkxKTtcclxuICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcclxuXHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJCb3JkZXJzOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIHJpZ2h0XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIHJpZ2h0XHJcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biBsZWZ0XHJcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyR3JpZDogZnVuY3Rpb24oY3R4KSB7XHJcbiAgICAvLyBWZXJ0aWNhbCBsaW5lc1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIC8vIEhvcml6b250YWwgbGluZXNcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5EYXJrcm9vbS5wbHVnaW5zWydjcm9wJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAvLyBJbml0IHBvaW50XHJcbiAgc3RhcnRYOiBudWxsLFxyXG4gIHN0YXJ0WTogbnVsbCxcclxuXHJcbiAgLy8gS2V5Y3JvcFxyXG4gIGlzS2V5Q3JvcGluZzogZmFsc2UsXHJcbiAgaXNLZXlMZWZ0OiBmYWxzZSxcclxuICBpc0tleVVwOiBmYWxzZSxcclxuXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxyXG4gICAgbWluSGVpZ2h0OiAxLFxyXG4gICAgbWluV2lkdGg6IDEsXHJcbiAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xyXG4gICAgcmF0aW86IG51bGwsXHJcbiAgICAvLyBxdWljayBjcm9wIGZlYXR1cmUgKHNldCBhIGtleSBjb2RlIHRvIGVuYWJsZSBpdClcclxuICAgIHF1aWNrQ3JvcEtleTogZmFsc2VcclxuICB9LFxyXG5cclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Dcm9wUGx1Z2luKCkge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdjcm9wJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdkb25lJyxcclxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICBoaWRlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdjbG9zZScsXHJcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICBoaWRlOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBCdXR0b25zIGNsaWNrXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcm9wQ3VycmVudFpvbmUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIENhbnZhcyBldmVudHNcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTpkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDptb3ZpbmcnLCB0aGlzLm9uT2JqZWN0TW92aW5nLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xyXG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gQXZvaWQgY3JvcCB6b25lIHRvIGdvIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzXHJcbiAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgdmFyIHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCksIGggPSBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG4gICAgdmFyIG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XHJcbiAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XHJcblxyXG4gICAgaWYgKHggPCAwKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIDApO1xyXG4gICAgaWYgKHkgPCAwKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XHJcbiAgICBpZiAoeCA+IG1heFgpXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgbWF4WCk7XHJcbiAgICBpZiAoeSA+IG1heFkpXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCBtYXhZKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXHJcbiAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xyXG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XHJcbiAgICB2YXIgbWluWSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XHJcbiAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgIHByZXZlbnRTY2FsaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgdmFyIGxhc3RTY2FsZVggPSB0aGlzLmxhc3RTY2FsZVggfHwgMTtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVgobGFzdFNjYWxlWCk7XHJcbiAgICB9XHJcbiAgICBpZiAobWluWCA8IDApIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRMZWZ0KDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XHJcbiAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pblkgPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvV2lkdGgodGhpcy5vcHRpb25zLm1pbldpZHRoKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9IZWlnaHQodGhpcy5vcHRpb25zLm1pbkhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYXN0U2NhbGVYID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVgoKTtcclxuICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEluaXQgY3JvcCB6b25lXHJcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcbiAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzY2FsZSBvciBkcmFnIHRoZSBjcm9wIHpvbmUuXHJcbiAgICB2YXIgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0WCA9IHg7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgfSxcclxuXHJcbiAgLy8gRXh0ZW5kIGNyb3Agem9uZVxyXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgLy8gUXVpY2sgY3JvcCBmZWF0dXJlXHJcbiAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpXHJcbiAgICAgIHJldHVybiB0aGlzLm9uTW91c2VNb3ZlS2V5Q3JvcChldmVudCk7XHJcblxyXG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHgsIHkpO1xyXG4gIH0sXHJcblxyXG4gIG9uTW91c2VNb3ZlS2V5Q3JvcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHZhciB6b25lID0gdGhpcy5jcm9wWm9uZTtcclxuXHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICBpZiAoIXpvbmUubGVmdCB8fCAhem9uZS50b3ApIHtcclxuICAgICAgem9uZS5zZXRUb3AoeSk7XHJcbiAgICAgIHpvbmUuc2V0TGVmdCh4KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzS2V5TGVmdCA9ICB4IDwgem9uZS5sZWZ0ICsgem9uZS53aWR0aCAvIDIgO1xyXG4gICAgdGhpcy5pc0tleVVwID0geSA8IHpvbmUudG9wICsgem9uZS5oZWlnaHQgLyAyIDtcclxuXHJcbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZShcclxuICAgICAgTWF0aC5taW4oem9uZS5sZWZ0LCB4KSxcclxuICAgICAgTWF0aC5taW4oem9uZS50b3AsIHkpLFxyXG4gICAgICBNYXRoLm1heCh6b25lLmxlZnQrem9uZS53aWR0aCwgeCksXHJcbiAgICAgIE1hdGgubWF4KHpvbmUudG9wK3pvbmUuaGVpZ2h0LCB5KVxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICAvLyBGaW5pc2ggY3JvcCB6b25lXHJcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgdGhpcy5zdGFydFggPSBudWxsO1xyXG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xyXG4gIH0sXHJcblxyXG4gIG9uS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IHRoaXMuaXNLZXlDcm9waW5nKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gQWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xyXG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSB0cnVlIDtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFRvcCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0TGVmdCgwKTtcclxuICB9LFxyXG5cclxuICBvbktleVVwOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgIXRoaXMuaXNLZXlDcm9waW5nKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgLy8gVW5hY3RpdmUgcXVpY2sgY3JvcCBmbG93XHJcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5zdGFydFggPSAxO1xyXG4gICAgdGhpcy5zdGFydFkgPSAxO1xyXG4gICAgdGhpcy5vbk1vdXNlVXAoKTtcclxuICB9LFxyXG5cclxuICBzZWxlY3Rab25lOiBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcblxyXG4gICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xyXG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4K3dpZHRoLCB5K2hlaWdodCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyb3Bab25lLnNldCh7XHJcbiAgICAgICAgJ2xlZnQnOiB4LFxyXG4gICAgICAgICd0b3AnOiB5LFxyXG4gICAgICAgICd3aWR0aCc6IHdpZHRoLFxyXG4gICAgICAgICdoZWlnaHQnOiBoZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgdG9nZ2xlQ3JvcDogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcclxuICB9LFxyXG5cclxuICBjcm9wQ3VycmVudFpvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcclxuICAgIGlmICh0aGlzLmNyb3Bab25lLndpZHRoIDwgMSAmJiB0aGlzLmNyb3Bab25lLmhlaWdodCA8IDEpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xyXG5cclxuICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcclxuICAgIHZhciB0b3AgPSB0aGlzLmNyb3Bab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY3JvcFpvbmUuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxyXG4gICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgaGVpZ2h0ICs9IHRvcDtcclxuICAgICAgdG9wID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgd2lkdGggKz0gbGVmdDtcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cclxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxyXG4gICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XHJcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXHJcbiAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgfSkpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlc3Qgd2V0aGVyIGNyb3Agem9uZSBpcyBzZXRcclxuICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xyXG4gIH0sXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXHJcbiAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xyXG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgICAgb3JpZ2luWDogJ2xlZnQnLFxyXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgLy9zdHJva2U6ICcjNDQ0JyxcclxuICAgICAgLy9zdHJva2VEYXNoQXJyYXk6IFs1LCA1XSxcclxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICBjb3JuZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICBjb3JuZXJTaXplOiA4LFxyXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxyXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgIGhhc1JvdGF0aW5nUG9pbnQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgIHRoaXMub2tCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcclxuICB9LFxyXG5cclxuICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxyXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jcm9wWm9uZS5yZW1vdmUoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJDcm9wWm9uZTogZnVuY3Rpb24oZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgIHZhciBpc1JpZ2h0ID0gKHRvWCA+IGZyb21YKTtcclxuICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcclxuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xyXG4gICAgdmFyIGlzVXAgPSAhaXNEb3duO1xyXG5cclxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbkhlaWdodCwgY2FudmFzLmdldEhlaWdodCgpKTtcclxuXHJcbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXHJcbiAgICB2YXIgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcclxuICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcclxuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XHJcbiAgICB2YXIgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xyXG5cclxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcclxuICAgIGxlZnRYID0gTWF0aC5tYXgoMCwgbGVmdFgpO1xyXG4gICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XHJcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcclxuICAgIGJvdHRvbVkgPSBNYXRoLm1pbihjYW52YXMuZ2V0SGVpZ2h0KCksIGJvdHRvbVkpO1xyXG5cclxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXHJcbiAgICBpZiAocmlnaHRYIC0gbGVmdFggPCBtaW5XaWR0aCkge1xyXG4gICAgICBpZiAoaXNSaWdodClcclxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcclxuICAgIH1cclxuICAgIGlmIChib3R0b21ZIC0gdG9wWSA8IG1pbkhlaWdodCkge1xyXG4gICAgICBpZiAoaXNEb3duKVxyXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xyXG4gICAgICBlbHNlXHJcbiAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgbGVmdFxyXG4gICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xyXG4gICAgICBsZWZ0WCA9IDBcclxuICAgIH1cclxuICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXHJcbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XHJcbiAgICAgIHRvcFkgPSAwXHJcbiAgICB9XHJcbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xyXG4gICAgdmFyIGhlaWdodCA9IGJvdHRvbVkgLSB0b3BZO1xyXG4gICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gJiYgK3RoaXMub3B0aW9ucy5yYXRpbyAhPT0gY3VycmVudFJhdGlvKSB7XHJcbiAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XHJcblxyXG4gICAgICBpZih0aGlzLmlzS2V5Q3JvcGluZykge1xyXG4gICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xyXG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xyXG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQvd2lkdGgpO1xyXG4gICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgICBsZWZ0WCA9IDA7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgdG9wWSA9IDA7XHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGxlZnRYICsgd2lkdGggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcclxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIHRvcFk7XHJcbiAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcclxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcclxuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcclxuICAgIHRoaXMuY3JvcFpvbmUud2lkdGggPSB3aWR0aDtcclxuICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snc2F2ZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcblxyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21TYXZlUGx1Z2luKCkge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdzYXZlJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiOyhmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIFJlZGFjdCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgICAgdmFyIGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XHJcbiAgICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XHJcbiAgICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcclxuICAgICAgdmFyIGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xyXG5cclxuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcmVkYWN0RmlsdGVyID0gbmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlJlZGFjdCh7XHJcbiAgICAgICAgICBsZWZ0OiAgIGxlZnQsXHJcbiAgICAgICAgICB0b3A6ICAgIHRvcCxcclxuICAgICAgICAgIHdpZHRoOiAgd2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbWdJbnN0YW5jZS5hcHBseUZpbHRlcnMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG4gICAgICAgIH0sIFtyZWRhY3RGaWx0ZXJdKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIFJlZGFjdFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xyXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgICAgdmFyIGRhc2hXaWR0aCA9IDc7XHJcblxyXG4gICAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcclxuICAgICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcclxuICAgICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xyXG5cclxuICAgICAgY3R4LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xyXG5cclxuICAgICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXHJcbiAgICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xyXG5cclxuICAgICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgICAgLy8gUmUgcmVuZGVyIGxpbmVzIGluIHdoaXRlXHJcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgICAgLy8gUmVzZXQgc2NhbGVcclxuICAgICAgY3R4LnNjYWxlKDEgLyBzY2FsZVgsIDEgLyBzY2FsZVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgICAgdmFyIGJvcmRlck9mZnNldCA9IDA7XHJcblxyXG4gICAgICAvL1xyXG4gICAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xyXG4gICAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgICAvL1xyXG5cclxuICAgICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xyXG4gICAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XHJcblxyXG4gICAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICAgIHZhciB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICB2YXIgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgICAvLyBVcHBlciByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTAsIHgzIC0geDAsIHkxIC0geTAgKyBib3JkZXJPZmZzZXQpO1xyXG5cclxuICAgICAgLy8gTGVmdCByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTEsIHgxIC0geDAsIHkyIC0geTEgKyBib3JkZXJPZmZzZXQpO1xyXG5cclxuICAgICAgLy8gUmlnaHQgcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDIsIHkxLCB4MyAtIHgyLCB5MiAtIHkxICsgYm9yZGVyT2Zmc2V0KTtcclxuXHJcbiAgICAgIC8vIERvd24gcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDAsIHkyLCB4MyAtIHgwLCB5MyAtIHkyKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyBkb3duIGxlZnRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9yZW5kZXJHcmlkOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIC8vIFZlcnRpY2FsIGxpbmVzXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydyZWRhY3QnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgLy8gSW5pdCBwb2ludFxyXG4gICAgc3RhcnRYOiBudWxsLFxyXG4gICAgc3RhcnRZOiBudWxsLFxyXG5cclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxyXG4gICAgICBtaW5IZWlnaHQ6IDEsXHJcbiAgICAgIG1pbldpZHRoOiAxLFxyXG4gICAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xyXG4gICAgICByYXRpbzogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3RCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnbWFzaydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnZG9uZScsXHJcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ2Nsb3NlJyxcclxuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQnV0dG9ucyBjbGlja1xyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUmVkYWN0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRhY3RDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIC8vIENhbnZhcyBldmVudHNcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gICAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLnJlZGFjdFpvbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgICAgdmFyIHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCksIGggPSBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG4gICAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcclxuICAgICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xyXG5cclxuICAgICAgaWYgKHggPCAwKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgMCk7XHJcbiAgICAgIGlmICh5IDwgMClcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XHJcbiAgICAgIGlmICh4ID4gbWF4WClcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xyXG4gICAgICBpZiAoeSA+IG1heFkpXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIG1heFkpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxyXG4gICAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xyXG4gICAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcclxuICAgICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAgIHByZXZlbnRTY2FsaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5YIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5ZIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvV2lkdGgodGhpcy5vcHRpb25zLm1pbldpZHRoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9IZWlnaHQodGhpcy5vcHRpb25zLm1pbkhlaWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gSW5pdCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXHJcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuICAgICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzY2FsZSBvciBkcmFnIHRoZSBjcm9wIHpvbmUuXHJcbiAgICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMucmVkYWN0Wm9uZSB8fCB0aGlzLnJlZGFjdFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5zZXRXaWR0aCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldEhlaWdodCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWCgxKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWSgxKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeHRlbmQgY3JvcCB6b25lXHJcbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgICB0aGlzLl9yZW5kZXJSZWRhY3Rab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEZpbmlzaCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcclxuICAgICAgdGhpcy5zdGFydFkgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3Rab25lOiBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuXHJcbiAgICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJSZWRhY3Rab25lKHgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3Rab25lLnNldCh7XHJcbiAgICAgICAgICAnbGVmdCc6IHgsXHJcbiAgICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAgICd3aWR0aCc6IHdpZHRoLFxyXG4gICAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldENvb3JkcygpO1xyXG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMucmVkYWN0Wm9uZSk7XHJcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlUmVkYWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICAgIGVsc2VcclxuICAgICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWRhY3RDdXJyZW50Wm9uZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXZvaWQgcmVkYWN0aW5nIGVtcHR5IHpvbmVcclxuICAgICAgaWYgKHRoaXMucmVkYWN0Wm9uZS53aWR0aCA8IDEgJiYgdGhpcy5yZWRhY3Rab25lLmhlaWdodCA8IDEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGRhcmtyb29tID0gdGhpcy5kYXJrcm9vbTtcclxuICAgICAgdmFyIGNhbnZhcyA9IGRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIGltYWdlID0gZGFya3Jvb20uaW1hZ2U7XHJcblxyXG4gICAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXHJcbiAgICAgIHZhciB0b3AgPSB0aGlzLnJlZGFjdFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcclxuICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlZGFjdFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xyXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLnJlZGFjdFpvbmUuZ2V0V2lkdGgoKTtcclxuICAgICAgdmFyIGhlaWdodCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcclxuICAgICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgICBoZWlnaHQgKz0gdG9wO1xyXG4gICAgICAgIHRvcCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgIHdpZHRoICs9IGxlZnQ7XHJcbiAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxyXG4gICAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFJlZGFjdCh7XHJcbiAgICAgICAgdG9wOiB0b3AgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICAgIGhlaWdodDogaGVpZ2h0IC8gaW1hZ2UuZ2V0SGVpZ2h0KClcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBUZXN0IHdoZXRoZXIgcmVkYWN0IHpvbmUgaXMgc2V0XHJcbiAgICBoYXNGb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWRhY3Rab25lICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgcmVkYWN0IHpvbmVcclxuICAgIHJlcXVpcmVGb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUgPSBuZXcgUmVkYWN0Wm9uZSh7XHJcbiAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgLy9zdHJva2U6ICcjNDQ0JyxcclxuICAgICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgICBjb3JuZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcclxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3Rab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucmVkYWN0Wm9uZSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgcmVkYWN0IHpvbmVcclxuICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLnJlZGFjdFpvbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9yZW5kZXJSZWRhY3Rab25lOiBmdW5jdGlvbiAoZnJvbVgsIGZyb21ZLCB0b1gsIHRvWSkge1xyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcblxyXG4gICAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XHJcbiAgICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcclxuICAgICAgdmFyIGlzRG93biA9ICh0b1kgPiBmcm9tWSk7XHJcbiAgICAgIHZhciBpc1VwID0gIWlzRG93bjtcclxuXHJcbiAgICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG5cclxuICAgICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xyXG4gICAgICB2YXIgbGVmdFggPSBNYXRoLm1pbihmcm9tWCwgdG9YKTtcclxuICAgICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xyXG4gICAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xyXG4gICAgICB2YXIgYm90dG9tWSA9IE1hdGgubWF4KGZyb21ZLCB0b1kpO1xyXG5cclxuICAgICAgLy8gUmVwbGFjZSBjdXJyZW50IHBvaW50IGludG8gdGhlIGNhbnZhc1xyXG4gICAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcclxuICAgICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XHJcbiAgICAgIHRvcFkgPSBNYXRoLm1heCgwLCB0b3BZKTtcclxuICAgICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XHJcblxyXG4gICAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xyXG4gICAgICBpZiAocmlnaHRYIC0gbGVmdFggPCBtaW5XaWR0aCkge1xyXG4gICAgICAgIGlmIChpc1JpZ2h0KVxyXG4gICAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChib3R0b21ZIC0gdG9wWSA8IG1pbkhlaWdodCkge1xyXG4gICAgICAgIGlmIChpc0Rvd24pXHJcbiAgICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcclxuICAgICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xyXG4gICAgICAgIGxlZnRYID0gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcclxuICAgICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXHJcbiAgICAgICAgYm90dG9tWSArPSBNYXRoLmFicyh0b3BZKTtcclxuICAgICAgICB0b3BZID0gMFxyXG4gICAgICB9XHJcbiAgICAgIGlmIChib3R0b21ZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICAgIGJvdHRvbVkgPSBjYW52YXMuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XHJcbiAgICAgIHZhciBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmF0aW8gJiYgK3RoaXMub3B0aW9ucy5yYXRpbyAhPT0gY3VycmVudFJhdGlvKSB7XHJcbiAgICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRSYXRpbyA8IHJhdGlvKSB7XHJcbiAgICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcclxuICAgICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgICAgbGVmdFggLT0gKG5ld1dpZHRoIC0gd2lkdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSYXRpbyA+IHJhdGlvKSB7XHJcbiAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0IC8gd2lkdGgpO1xyXG4gICAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsZWZ0WCA8IDApIHtcclxuICAgICAgICAgIGxlZnRYID0gMDtcclxuICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9wWSA8IDApIHtcclxuICAgICAgICAgIHRvcFkgPSAwO1xyXG4gICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XHJcbiAgICAgICAgICBoZWlnaHQgPSBuZXdXaWR0aCAqIGhlaWdodCAvIHdpZHRoO1xyXG4gICAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICAgIHRvcFkgPSBmcm9tWSAtIGhlaWdodDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvcFkgKyBoZWlnaHQgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xyXG4gICAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcclxuICAgICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcclxuICAgICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLmxlZnQgPSBsZWZ0WDtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnRvcCA9IHRvcFk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMucmVkYWN0Wm9uZSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH1cclxuICB9KTtcclxufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XHJcbiIsIihmdW5jdGlvbiAoRGFya3Jvb20pIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGZ1bmN0aW9uIGdldEltcGxlbWVudGF0aW9uKF90aGlzKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCB1cGRhdGVzIHN0YXRlIG9mIGJ1dHRvbnMgcmVsYXRpdmUgdG8gaW1hZ2Ugc2l6ZSB2IGNhbnZhcyBzaXplXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX3VwZGF0ZUJ1dHRvbnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXMsIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2UsIHBhbkJ1dHRvbiA9IF90aGlzLmJ1dHRvbnMucGFuLCB6b29tT3V0QnV0dG9uID0gX3RoaXMuYnV0dG9ucy56b29tT3V0LCBzaG91bGREaXNhYmxlID0gKChpbWFnZS5nZXRXaWR0aCgpIDw9IGNhbnZhcy5nZXRXaWR0aCgpKSAmJiAoaW1hZ2UuZ2V0SGVpZ2h0KCkgPD0gY2FudmFzLmdldEhlaWdodCgpKSk7XHJcbiAgICAgICAgICAgIHBhbkJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGUpO1xyXG4gICAgICAgICAgICB6b29tT3V0QnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIGVuc3VyZXMgYm90dG9tIGVkZ2UgYW5kIHJpZ2h0IGVkZ2Ugb2YgaW1hZ2UgbmV2ZXIgbW92ZSB0byBhIHBvc2l0aW9uIGxlc3MgdGhhbiB0aGUgY2FudmFzXHJcbiAgICAgICAgICogYm90dG9tIGVkZ2UgYW5kIHJpZ2h0IGVkZ2UgcmVzcGVjdGl2ZWx5XHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX3JlZml0SW1hZ2VJbkNhbnZhcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgbWluWCA9IGNhbnZhcy5nZXRXaWR0aCgpLCBtaW5ZID0gY2FudmFzLmdldEhlaWdodCgpLCBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLCBib3R0b21SaWdodCA9IGltYWdlLm9Db29yZHMuYnI7XHJcbiAgICAgICAgICAgIGlmIChib3R0b21SaWdodC54IDwgbWluWCkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UubGVmdCA9IGltYWdlLmxlZnQgKyAobWluWCAtIGJvdHRvbVJpZ2h0LngpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmxlZnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UubGVmdCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IC8vIGJ1dCBub3QgYmV5b25kIGxlZnQgZWRnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChib3R0b21SaWdodC55IDwgbWluWSkge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UudG9wID0gaW1hZ2UudG9wICsgKG1pblkgLSBib3R0b21SaWdodC55KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZS50b3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UudG9wID0gMDtcclxuICAgICAgICAgICAgICAgIH0gLy8gYnV0IG5vdCBiZXlvbmQgdG9wIGVkZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHpvb20gPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgdmFyIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2U7XHJcbiAgICAgICAgICAgIGltYWdlLnNjYWxlKGltYWdlLnNjYWxlWCAqIGRlbHRhKTtcclxuICAgICAgICAgICAgX3RoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnem9vbTpjaGFuZ2UnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBfaW5pdFBhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvbnMucGFuLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLm9uKCdtb3VzZTpkb3duJywgZXZlbnRMaXN0ZW5lcnMucGFuRW50ZXIpO1xyXG4gICAgICAgICAgICBjYW52YXMub24oJ21vdXNlOnVwJywgZXZlbnRMaXN0ZW5lcnMucGFuRXhpdCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vbignbW91c2U6bW92ZScsIGV2ZW50TGlzdGVuZXJzLnBhbik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9leGl0UGFuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMucGFuQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF90aGlzLmJ1dHRvbnMucGFuLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOmRvd24nLCBldmVudExpc3RlbmVycy5wYW5FbnRlcik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOnVwJywgZXZlbnRMaXN0ZW5lcnMucGFuRXhpdCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vZmYoJ21vdXNlOm1vdmUnLCBldmVudExpc3RlbmVycy5wYW4pO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzLmRlZmF1bHRDdXJzb3IgPT0gJ21vdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTGltaXRzIHBhbiBiYXNlZCBvbiBwb3NpdGlvbiBvZiBpbWFnZSByZWxhdGl2ZSB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgICAgICAqIEBwYXJhbSBkZWx0YVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIF9jb25zdHJhaW5QYW4gPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZSwgdGwgPSBpbWFnZS5vQ29vcmRzLnRsLCAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgICAgYnIgPSBpbWFnZS5vQ29vcmRzLmJyOyAvLyBib3R0b20gcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICAgIGlmIChkZWx0YS54ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueCA9ICgodGwueCArIGRlbHRhLngpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS54KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnggPSBNYXRoLmNlaWwoZGVsdGEueCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKE1hdGguY2VpbChici54KSArIGRlbHRhLngpIDwgY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEueCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRlbHRhLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS55ID0gKCh0bC55ICsgZGVsdGEueSkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueSA9IE1hdGguY2VpbChkZWx0YS55KTtcclxuICAgICAgICAgICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLnkpICsgZGVsdGEueSkgPCBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRlbHRhO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9kb1BhbiA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgICAgICAgZGVsdGEgPSBfY29uc3RyYWluUGFuKGRlbHRhKTtcclxuICAgICAgICAgICAgaW1hZ2UubGVmdCA9IGltYWdlLmxlZnQgKyBkZWx0YS54O1xyXG4gICAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyBkZWx0YS55O1xyXG4gICAgICAgICAgICBpbWFnZS5zZXRDb29yZHMoKTtcclxuICAgICAgICAgICAgc3RhdGVzLnJlYWxQYW4gPSB7XHJcbiAgICAgICAgICAgICAgICB4OiBpbWFnZS5vQ29vcmRzLnRsLngsXHJcbiAgICAgICAgICAgICAgICB5OiBpbWFnZS5vQ29vcmRzLnRsLnlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBldmVudExpc3RlbmVycyA9IHtcclxuICAgICAgICAgICAgem9vbUluOiBmdW5jdGlvbiAoKSB7IHpvb20oMS4wNSk7IH0sXHJcbiAgICAgICAgICAgIHpvb21PdXQ6IGZ1bmN0aW9uICgpIHsgem9vbSgwLjk1KTsgfSxcclxuICAgICAgICAgICAgYWJvcnRQYW46IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhbkJ1dHRvbiA9IF90aGlzLmJ1dHRvbnMucGFuO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBwYW5CdXR0b24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PSAnc3ZnJ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICd1c2UnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCA9PSBwYW5CdXR0b24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2V4aXRQYW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9nZ2xlUGFuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9leGl0UGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfaW5pdFBhbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYW5FbnRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMucGFubmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbm5pbmcgJiYgZXZlbnQgJiYgZXZlbnQuZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5lLm1vdmVtZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZXZlbnQuZS5tb3ZlbWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIF9kb1BhbihkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYW5FeGl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wYW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHpvb21DaGFuZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHN0YXRlcy5sYXN0U2NhbGUgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZS5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICBfdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgX3JlZml0SW1hZ2VJbkNhbnZhcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXN0b3JlWm9vbVBhbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5sYXN0U2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlKHN0YXRlcy5sYXN0U2NhbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucmVhbFBhbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kb1BhbihzdGF0ZXMucmVhbFBhbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3JlZml0SW1hZ2VJbkNhbnZhcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgc3RhdGVzID0ge1xyXG4gICAgICAgICAgICBwYW5BY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYW5uaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFzdFNjYWxlOiBudWxsLFxyXG4gICAgICAgICAgICByZWFsUGFuOiBudWxsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBldmVudExpc3RlbmVyczogZXZlbnRMaXN0ZW5lcnMsXHJcbiAgICAgICAgICAgIHN0YXRlczogc3RhdGVzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIERhcmtyb29tLnBsdWdpbnNbJ3pvb20nXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgICAgIGRlZmF1bHRzOiB7fSxcclxuICAgICAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9ucyA9IHt9O1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21JbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnem9vbS1pbicgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbU91dCA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnem9vbS1vdXQnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wYW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oeyBpbWFnZTogJ2hhbmQnLCBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgdmFyIGltcGxlbWVudGF0aW9uID0gZ2V0SW1wbGVtZW50YXRpb24odGhpcyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbUluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuem9vbUluKTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tT3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuem9vbU91dCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMudG9nZ2xlUGFuKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS50b29sYmFyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy5hYm9ydFBhbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignem9vbTpjaGFuZ2UnLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tQ2hhbmdlKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMucmVzdG9yZVpvb21QYW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KShEYXJrcm9vbSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXpvb20uanMubWFwIl19
