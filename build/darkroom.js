(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="color"><path stroke="#fff" d="M4 6h16v12H4z"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="full"><g stroke="#fff" stroke-linecap="null" stroke-linejoin="null" stroke-width="2"><path d="M3.151 4.01h6.735M4.142 3.02v6.734M14.189 4.01h6.735M19.933 3.019v6.735M3.151 20.021h6.735M4.141 14.278v6.734M14.189 20.021h6.735M19.932 14.277v6.735"/></g></symbol><symbol id="hand" viewBox="0 0 128 128"><path class="iconic-property-fill" d="M101.657 70.343a8 8 0 0 0-11.314 0L80 78.846c-3.165 2.602-8 .778-8-2.846V14a6 6 0 1 0-12 0v38a4 4 0 0 1-8 0V6a6 6 0 1 0-12 0v50a4 4 0 0 1-8 0V14a6 6 0 1 0-12 0v46a4 4 0 0 1-8 0V22a6 6 0 1 0-12 0v70c0 19.882 16.118 36 36 36 9.223 0 17.631-3.472 24.001-9.175l-.001.007s41.448-36.966 41.657-37.175a8 8 0 0 0 0-11.314z"/></symbol><symbol id="mask" viewBox="0 0 90 90"><path d="M45 18c-8.802 0-17.045 1.167-24.73 3.498C12.646 23.879 5.888 27.066 0 30.936V61a34.288 34.288 0 0 0 9.459 5.836C13.046 68.278 16.893 69 21 69s7.94-.722 11.498-2.164C36.085 65.363 39.252 63.393 42 61c.393-.326.843-.59 1.352-.791A4.56 4.56 0 0 1 45 59.914c.587 0 1.134.098 1.643.295.512.2.964.465 1.357.791a34.288 34.288 0 0 0 9.459 5.836C61.046 68.278 64.893 69 69 69s7.94-.722 11.498-2.164C84.085 65.363 87.252 63.393 90 61V30.936c-5.888-3.87-12.675-7.057-20.361-9.438C62.015 19.167 53.802 18 45 18zM24 39.092c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C29.672 49.505 26.933 50 24 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48zm42 0c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C71.672 49.505 68.933 50 66 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48z"/></symbol><symbol id="pixelate"><path d="M0 0h24v24H0V0"/><path fill="#999" d="M2 2h10v10H2z"/><path fill="#BBB" d="M2 12h10v10H2z"/><path fill="#666" d="M12 2h10v10H12z"/><path fill="#DDD" d="M12 12h10v10H12z"/>&gt;</symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="zoom-in" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zM40 24v15.998H24v4h16V60h4.002V43.998H60v-4H44.002V24H40z"/></symbol><symbol id="zoom-out" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zm-18 30v4h36v-4H24z"/></symbol></svg><!-- endinject -->';
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
  // if using orientation options and a plugin changes the source Image set .dirty = true
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
    color: { 
      rgb: 'rgb(0,0,0)',
      red: '0',
      green: '0',
      blue: '0'
    },
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
      var imageData = (function(image) { 
        var width = image.getWidth();
        var height = image.getHeight();
        if (Math.abs(image.angle) == 90 || Math.abs(image.angle) == 270) { //swap
          var temp = width;
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
      disabled: false,
      tooltip: null
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    if (options.tooltip) {
      buttonElement.tooltip = options.tooltip;
      buttonElement.title = options.tooltip;
    }
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
  isActive: function(value) {
    return this.element.classList.contains('darkroom-button-active');
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
    var lowestDiff = 99999999;
    var lowestRatio = '1:1';
    var lowestValue = 1.0;

    for(var x=0; x<ratios[orientation].length; x++) {
      var r = ratios[orientation][x];
      var diff = Math.abs(r.value - ratio);
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
    image.dirty = true;

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
  initialize: function (options) {
    options = options || {};
    this.callSuper('initialize', options);
  },

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
    //ctx.fillStyle = 'rgba(235, 70, 70, 0.5)';
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
      image: 'crop',
      tooltip: 'Crop'
    });    
    this.fullButton = buttonGroup.createButton({
      image: 'full',
      tooltip: 'Select full area',
      hide: true
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      tooltip: 'Apply changes',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      tooltip: 'Cancel',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));
    this.fullButton.addEventListener('click', this.fullCropZone.bind(this));

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

  fullCropZone: function() {
    if(!this.hasFocus())
      return;

    this.selectZone(0, 0, this.darkroom.canvas.width, this.darkroom.canvas.height, false);
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
    this.fullButton.hide(false);
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
    this.fullButton.hide(true);

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
;(function() {
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
            this.darkroom.dispatchEvent('color:start');
        }
        else {
            this.darkroom.dispatchEvent('color:end');
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
        this.darkroom.dispatchEvent('color:update');
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
            this.color = options.color;
            this.pixel = options.pixel;
        },

        applyTo: function(canvasEl) {
            var context = canvasEl.getContext('2d');
            var imageData = null;

            if(this.pixel) {
                var width = this.width || canvasEl.width; width = Math.ceil(width);
                var height = this.height || canvasEl.height; height = Math.ceil(height);
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
            var width = imageData.width*4;
            var height = imageData.height;
            var chunkWidth = 20*4
            var chunkHeight = 20;
            var chunk = chunkWidth * chunkHeight / 4;
            var aChunkWidth = chunkWidth;
            var aChunkHeight = chunkHeight;            
            
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
                            var index = py * (imageData.width*4) + px;
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
            var red = 0,
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
      var color = this.options.color;
      var pixel = this.options.pixel;

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
          height: height,
          color: color,
          pixel: pixel
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
        image: 'mask',
        tooltip: 'Redact'
      });
      this.redactBlurButton = buttonGroup.createButton({
        image: 'pixelate',
        hide: true,
        tooltip: 'Pixelate'
      });
      this.okButton = buttonGroup.createButton({
        image: 'done',
        type: 'success',
        tooltip: 'Apply changes',
        hide: true
      });
      this.cancelButton = buttonGroup.createButton({
        image: 'close',
        type: 'danger',
        tooltip: 'Cancel',
        hide: true
      });

      // Buttons click
      this.redactButton.addEventListener('click', this.toggleRedact.bind(this));
      this.redactBlurButton.addEventListener('click', this.setPixel.bind(this));
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

    setPixel: function() {
      if(!this.hasFocus()) {
        return;
      }
      this.pixel = true;
      this.redactBlurButton.active(true);
      this.redactButton.active(false);
    },

    setRedact: function() {
      if(!this.hasFocus()) {
        return;
      }
      this.redactButton.active(true);
      this.redactBlurButton.active(false);
      this.pixel = false;
    },

    toggleRedact: function () {
      if (!this.hasFocus())
        this.requireFocus();
      else {
        if(this.redactBlurButton.isActive()) {
          this.setRedact();
          return;
        }
        this.releaseFocus();
      }
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
      var color = this.darkroom.options.color || null;
      var pixel = this.pixel || false;

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
        height: height / image.getHeight(),
        color: color,
        pixel: pixel
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

      if(this.pixel) {
        this.redactButton.active(false);
        this.redactBlurButton.active(true);
      } else {
        this.redactButton.active(true);
        this.redactBlurButton.active(false);
      }

      this.redactBlurButton.hide(false);
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
      this.redactBlurButton.hide(true);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwiZGFya3Jvb20uY29sb3IuanMiLCJyZWRhY3QuanMiLCJ6b29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDaGJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3ckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDeG9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XHJcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XHJcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbndpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xyXG5cclxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cclxuLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcclxuLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxyXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxyXG5mdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XHJcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxyXG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXHJcbi8vIHNwZWNpZmllZCBpbiBEYXJrcm9vbSdzcyBjb25zdHJ1Y3Rvci5cclxuRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xyXG5cclxuRGFya3Jvb20ucHJvdG90eXBlID0ge1xyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxyXG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcclxuICBjYW52YXM6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxyXG4gIGltYWdlOiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxyXG4gIHNvdXJjZUNhbnZhczogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxyXG4gIC8vIGlmIHVzaW5nIG9yaWVudGF0aW9uIG9wdGlvbnMgYW5kIGEgcGx1Z2luIGNoYW5nZXMgdGhlIHNvdXJjZSBJbWFnZSBzZXQgLmRpcnR5ID0gdHJ1ZVxyXG4gIHNvdXJjZUltYWdlOiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxyXG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvcmlnaW5hbCBvcmllbnRhdGlvblxyXG4gIHNvdXJjZUltYWdlT3JpZW50YXRpb246IG51bGwsXHJcblxyXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXHJcbiAgdHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIC8vIENhbnZhcyBwcm9wZXJ0aWVzIChkaW1lbnNpb24sIHJhdGlvLCBjb2xvcilcclxuICAgIG1pbldpZHRoOiBudWxsLFxyXG4gICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgbWF4V2lkdGg6IG51bGwsXHJcbiAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIGNvbG9yOiB7IFxyXG4gICAgICByZ2I6ICdyZ2IoMCwwLDApJyxcclxuICAgICAgcmVkOiAnMCcsXHJcbiAgICAgIGdyZWVuOiAnMCcsXHJcbiAgICAgIGJsdWU6ICcwJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLCBcclxuICAgIG9yaWVudGF0aW9uOiB7XHJcbiAgICAgIGFjY2VwdGVkUmF0aW9zOiB7fSxcclxuICAgICAgbWF4V2lkdGhQb3J0cmFpdDogbnVsbCxcclxuICAgICAgbWF4V2lkdGhMYW5kc2NhcGU6IG51bGwsIC8vbWF4IHdpZHRoIGF2YWlsYWJsZSBmb3IgYSBpbWFnZSBhc3N1bWVkIGluIGxhbmRzY2FwZVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBQbHVnaW5zIG9wdGlvbnNcclxuICAgIHBsdWdpbnM6IHt9LFxyXG5cclxuICAgIC8vIFBvc3QtaW5pdGlhbGlzYXRpb24gY2FsbGJhY2tcclxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyAvKiBub29wICovIH1cclxuICB9LFxyXG5cclxuICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcclxuICBwbHVnaW5zOiB7fSxcclxuXHJcbiAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXHJcbiAgLy8gdGhyb3VnaCB0aGUgY29uc3RydWN0b3JcclxuICBvcHRpb25zOiB7fSxcclxuXHJcbiAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcclxuXHJcbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKVxyXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuICAgIGlmIChudWxsID09PSBlbGVtZW50KVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NL0ZhYnJpYyBlbGVtZW50c1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcclxuXHJcbiAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xyXG4gICAgICB0aGlzLl9pbml0aWFsaXplUGx1Z2lucyhEYXJrcm9vbS5wbHVnaW5zKTtcclxuXHJcbiAgICAgIC8vIFB1YmxpYyBtZXRob2QgdG8gYWRqdXN0IGltYWdlIGFjY29yZGluZyB0byB0aGUgY2FudmFzXHJcbiAgICAgIHRoaXMucmVmcmVzaChmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBFeGVjdXRlIGEgY3VzdG9tIGNhbGxiYWNrIGFmdGVyIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XHJcbiAgICAgIH0uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgfS5iaW5kKHRoaXMpXHJcblxyXG4gICAgLy9pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xyXG4gICAgdmFyIGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZScpO1xyXG4gICAgaWYgKGZpbGUgIT09IG51bGwpIHtcclxuICAgICAgZmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGYgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICBlbGVtZW50LnNyYyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGYpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlbGZEZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcclxuICAgIC8vaW1hZ2Uuc3JjID0gdGhpcy5pbWFnZS50b0RhdGFVUkwoKTtcclxuICB9LFxyXG5cclxuICAvLyBBZGQgYWJpbGl0eSB0byBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgb24gdGhlIGNvcmUgb2JqZWN0LlxyXG4gIC8vIEl0IHVzZXMgdGhlIGNhbnZhcyBlbGVtZW50IHRvIHByb2Nlc3MgZXZlbnRzLlxyXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBlbCA9IHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKTtcclxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcclxuICAgIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcclxuICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xyXG4gICAgLy8gVXNlIHRoZSBvbGQgd2F5IG9mIGNyZWF0aW5nIGV2ZW50IHRvIGJlIElFIGNvbXBhdGlibGVcclxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXHJcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgIGV2ZW50LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIHRydWUpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICB9LFxyXG5cclxuICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxyXG4gIC8vIGFuZCByYXRpbyBzcGVjaWZpZWQgaW4gdGhlIG9wdGlvbnMuXHJcbiAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxyXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKG5leHQpIHtcclxuICAgIHZhciBjbG9uZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xyXG5cclxuICAgICAgaWYgKG5leHQpIG5leHQoKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICAgIGNsb25lLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XHJcbiAgICBpZiAodGhpcy5pbWFnZSkge1xyXG4gICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgIHRoaXMuaW1hZ2Uuc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuICAgIFxyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcbiAgICB2YXIgbWF4V2lkdGggPSB0aGlzLm9wdGlvbnMubWF4V2lkdGg7XHJcbiAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5vcHRpb25zLm1heEhlaWdodDtcclxuICAgIHZhciBpbWFnZU9yaWVudGF0aW9uID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlT3JpZW50YXRpb24odGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLmFjY2VwdGVkUmF0aW9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLm1heFdpZHRoTGFuZHNjYXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZUltYWdlT3JpZW50YXRpb24ub3JpZW50YXRpb24pO1xyXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XHJcbiAgICAgIHZhciBjdXJyZW50UmF0aW8gPSBjYW52YXNXaWR0aCAvIGNhbnZhc0hlaWdodDtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPiBjYW52YXNSYXRpbykge1xyXG4gICAgICAgIGNhbnZhc0hlaWdodCA9IGNhbnZhc1dpZHRoIC8gY2FudmFzUmF0aW87XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvIDwgY2FudmFzUmF0aW8pIHtcclxuICAgICAgICBjYW52YXNXaWR0aCA9IGNhbnZhc0hlaWdodCAqIGNhbnZhc1JhdGlvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlbiBzY2FsZSB0aGUgaW1hZ2UgdG8gZml0IGludG8gZGltZW5zaW9uIGxpbWl0c1xyXG4gICAgdmFyIHNjYWxlTWluID0gMTtcclxuICAgIHZhciBzY2FsZU1heCA9IDE7XHJcbiAgICB2YXIgc2NhbGVYID0gMTtcclxuICAgIHZhciBzY2FsZVkgPSAxO1xyXG5cclxuICAgIGlmIChudWxsICE9PSBtYXhXaWR0aCkge1xyXG4gICAgICBpZihudWxsICE9PSBpbWFnZU9yaWVudGF0aW9uLm1heFdpZHRoICYmIGltYWdlT3JpZW50YXRpb24ubWF4V2lkdGggPCB0aGlzLmltYWdlLmdldFdpZHRoKCkpIHtcclxuICAgICAgICBzY2FsZVggPSBpbWFnZU9yaWVudGF0aW9uLm1heFdpZHRoIC8gdGhpcy5pbWFnZS5nZXRXaWR0aCgpO1xyXG4gICAgICB9IGVsc2UgaWYobWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xyXG4gICAgICAgIHNjYWxlWCA9ICBtYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9IFxyXG5cclxuICAgIGlmIChudWxsICE9PSBtYXhIZWlnaHQgJiYgbWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIHNjYWxlWSA9ICBtYXhIZWlnaHQgLyBjYW52YXNIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICBzY2FsZVggPSAxO1xyXG4gICAgc2NhbGVZID0gMTtcclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluV2lkdGggJiYgdGhpcy5vcHRpb25zLm1pbldpZHRoID4gY2FudmFzV2lkdGgpIHtcclxuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgJiYgdGhpcy5vcHRpb25zLm1pbkhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xyXG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcclxuICAgIH1cclxuICAgIHNjYWxlTWF4ID0gTWF0aC5tYXgoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcclxuXHJcbiAgICBjYW52YXNXaWR0aCAqPSBzY2FsZTtcclxuICAgIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcclxuXHJcbiAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcclxuICAgIC8vdGhpcy5pbWFnZS5zZXRTY2FsZVgoMSAqIHNjYWxlKTtcclxuICAgIC8vdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcclxuICAgIHRoaXMuaW1hZ2UuZmlsdGVycy5wdXNoKG5ldyBmYWJyaWMuSW1hZ2UuZmlsdGVycy5SZXNpemUoe1xyXG4gICAgICByZXNpemVUeXBlOiAnc2xpY2VIYWNrJyxcclxuICAgICAgc2NhbGVYOiBzY2FsZSxcclxuICAgICAgc2NhbGVZOiBzY2FsZVxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5pbWFnZS5hcHBseUZpbHRlcnModGhpcy5jYW52YXMucmVuZGVyQWxsLmJpbmQodGhpcy5jYW52YXMpKTtcclxuICAgIHRoaXMuY2FudmFzLmFkZCh0aGlzLmltYWdlKTtcclxuICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcclxuICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgdGhpcy5jYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcclxuICB9LFxyXG5cclxuICAvLyBJbWFnZSBoYXMgYmVlbiBtYWRlIGRpcnR5IGFuZCBoYXMgbm90IGFwcGxpZWQgaXRzIGNoYW5nZXMsIHJlc2V0IG9yaWVudGF0aW9uIGJlZm9yZSBhcHBseWluZ1xyXG4gIF9yZXNjYWxlOiBmdW5jdGlvbigpIHsgICAgXHJcbiAgICBkZWxldGUgdGhpcy5zb3VyY2VJbWFnZS5kaXJ0eTsgXHJcbiAgICBpZiAodGhpcy5zb3VyY2VJbWFnZS5hbmdsZSAhPSB0aGlzLnNvdXJjZUltYWdlT3JpZW50YXRpb24uYW5nbGUpIHtcclxuICAgICAgdmFyIGltYWdlRGF0YSA9IChmdW5jdGlvbihpbWFnZSkgeyBcclxuICAgICAgICB2YXIgd2lkdGggPSBpbWFnZS5nZXRXaWR0aCgpO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBpbWFnZS5nZXRIZWlnaHQoKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnMoaW1hZ2UuYW5nbGUpID09IDkwIHx8IE1hdGguYWJzKGltYWdlLmFuZ2xlKSA9PSAyNzApIHsgLy9zd2FwXHJcbiAgICAgICAgICB2YXIgdGVtcCA9IHdpZHRoO1xyXG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQgPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7IHJldHVybiB3aWR0aDsgIH0sXHJcbiAgICAgICAgZ2V0SGVpZ2h0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGhlaWdodDsgfSxcclxuICAgICAgICBhbmdsZTogaW1hZ2UuYW5nbGUsXHJcbiAgICAgIH19KSh0aGlzLnNvdXJjZUltYWdlKTsgXHJcbiAgICAgIHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbiA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZU9yaWVudGF0aW9uKGltYWdlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24uYWNjZXB0ZWRSYXRpb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLm1heFdpZHRoUG9ydHJhaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLm1heFdpZHRoTGFuZHNjYXBlKTtcclxuICAgIH0gICAgXHJcbiAgfSxcclxuXHJcbiAgLy8gQXBwbHkgdGhlIHRyYW5zZm9ybWF0aW9uIG9uIHRoZSBjdXJyZW50IGltYWdlIGFuZCBzYXZlIGl0IGluIHRoZVxyXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcclxuICAvLyBvZiB0aGUgaW1hZ2UpLlxyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKHRyYW5zZm9ybWF0aW9uKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcclxuICAgICAgdGhpcy5fcG9zdFRyYW5zZm9ybWF0aW9uLmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcclxuICAgIGlmIChuZXdJbWFnZSlcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xyXG5cclxuICAgIGlmICh0aGlzLnNvdXJjZUltYWdlLmRpcnR5KSB7XHJcbiAgICAgIHRoaXMuX3Jlc2NhbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTp0cmFuc2Zvcm1hdGlvbicpO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGltYWdlIGZyb20gb3JpZ2luYWwgZWxlbWVudCBwbHVzIHJlLWFwcGx5IGV2ZXJ5XHJcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxyXG4gIHJlaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuc291cmNlSW1hZ2UucmVtb3ZlKCk7XHJcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcclxuICAgIHRoaXMuX3BvcFRyYW5zZm9ybWF0aW9uKHRoaXMudHJhbnNmb3JtYXRpb25zLnNsaWNlKCkpXHJcbiAgfSxcclxuXHJcbiAgX3BvcFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbih0cmFuc2Zvcm1hdGlvbnMpIHtcclxuICAgIGlmICgwID09PSB0cmFuc2Zvcm1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XHJcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zLnNoaWZ0KCk7XHJcblxyXG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgICBpZiAobmV3SW1hZ2UpIHRoaXMuc291cmNlSW1hZ2UgPSBuZXdJbWFnZTtcclxuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxyXG4gICAgfTtcclxuXHJcbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZSxcclxuICAgICAgbmV4dC5iaW5kKHRoaXMpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzIGFuZCBpbnN0YW5jaWF0ZSB0aGUgRmFicmljIGNhbnZhcy5cclxuICAvLyBUaGUgaW1hZ2UgZWxlbWVudCBpcyByZXBsYWNlZCBieSBhIG5ldyBgZGl2YCBlbGVtZW50LlxyXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cclxuICBfaW5pdGlhbGl6ZURPTTogZnVuY3Rpb24oaW1hZ2VFbGVtZW50KSB7XHJcbiAgICAvLyBDb250YWluZXJcclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWNvbnRhaW5lcic7XHJcblxyXG4gICAgLy8gVG9vbGJhclxyXG4gICAgdmFyIHRvb2xiYXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b29sYmFyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tdG9vbGJhcic7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gVmlld3BvcnQgY2FudmFzXHJcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20taW1hZ2UtY29udGFpbmVyJztcclxuICAgIHZhciBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xyXG4gICAgbWFpbkNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzQ29udGFpbmVyRWxlbWVudCk7XHJcblxyXG4gICAgLy8gU291cmNlIGNhbnZhc1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLXNvdXJjZS1jb250YWluZXInO1xyXG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdmFyIHNvdXJjZUNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoc291cmNlQ2FudmFzRWxlbWVudCk7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICAvLyBPcmlnaW5hbCBpbWFnZVxyXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xyXG4gICAgaW1hZ2VFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEluc3RhbmNpYXRlIG9iamVjdCBmcm9tIGVsZW1lbnRzXHJcbiAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBtYWluQ29udGFpbmVyRWxlbWVudDtcclxuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b29sYmFyID0gbmV3IERhcmtyb29tLlVJLlRvb2xiYXIodG9vbGJhckVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuY2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoY2FudmFzRWxlbWVudCwge1xyXG4gICAgICBzZWxlY3Rpb246IGZhbHNlLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgIGltYWdlU21vb3RoaW5nRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhzb3VyY2VDYW52YXNFbGVtZW50LCB7XHJcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxyXG4gICAgfSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBpbWFnZSBvYmplY3QuXHJcbiAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXHJcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxyXG4gIF9pbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xyXG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZUltYWdlT3JpZW50YXRpb24gPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VPcmllbnRhdGlvbih0aGlzLnNvdXJjZUltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5hY2NlcHRlZFJhdGlvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhMYW5kc2NhcGUpO1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcclxuXHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XHJcbiAgICB2YXIgY2FudmFzSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcclxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXHJcbiAgLy8gTm90ZSB0aGF0IHBsdWdpbnMgYXJlIGluc3RhbmNpYXRlZCBpbiB0aGUgc2FtZSBvcmRlciB0aGFuIHRoZXlcclxuICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXHJcbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbnMpIHtcclxuICAgICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbbmFtZV07XHJcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XHJcblxyXG4gICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXHJcbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXHJcbiAgICAgIGlmICghcGx1Z2lucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSlcclxuICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgIHRoaXMucGx1Z2luc1tuYW1lXSA9IG5ldyBwbHVnaW4odGhpcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgfSxcclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XHJcblxyXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxyXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxyXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcclxuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XHJcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5QbHVnaW4ucHJvdG90eXBlID0ge1xyXG4gIGRlZmF1bHRzOiB7fSxcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfVxyXG59XHJcblxyXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cclxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cclxufVxyXG5cclxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXHJcblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVUkgPSB7XHJcbiAgVG9vbGJhcjogVG9vbGJhcixcclxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXHJcbiAgQnV0dG9uOiBCdXR0b24sXHJcbn07XHJcblxyXG4vLyBUb29sYmFyIG9iamVjdC5cclxuZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuVG9vbGJhci5wcm90b3R5cGUgPSB7XHJcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG5cclxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcclxuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgaW1hZ2U6ICdoZWxwJyxcclxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICB0b29sdGlwOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcclxuICAgIGlmIChvcHRpb25zLnRvb2x0aXApIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC50b29sdGlwID0gb3B0aW9ucy50b29sdGlwO1xyXG4gICAgICBidXR0b25FbGVtZW50LnRpdGxlID0gb3B0aW9ucy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gb2JqZWN0LlxyXG5mdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbi5wcm90b3R5cGUgPSB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgfSxcclxuICBpc0FjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgfSxcclxuICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gIH0sXHJcbiAgZGlzYWJsZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5VdGlscyA9IHtcclxuICBleHRlbmQ6IGV4dGVuZCxcclxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXHJcbiAgY29tcHV0ZUltYWdlT3JpZW50YXRpb246IGNvbXB1dGVJbWFnZU9yaWVudGF0aW9uLFxyXG59O1xyXG5cclxuLy8gVXRpbGl0eSBtZXRob2QgdG8gZWFzaWx5IGV4dGVuZCBvYmplY3RzLlxyXG5mdW5jdGlvbiBleHRlbmQoYiwgYSkge1xyXG4gIHZhciBwcm9wO1xyXG4gIGlmIChiID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuICBmb3IgKHByb3AgaW4gYSkge1xyXG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcclxuICAgICAgYltwcm9wXSA9IGFbcHJvcF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxyXG4gICAgd2lkdGg6IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUltYWdlT3JpZW50YXRpb24oaW1hZ2UsIHJhdGlvcywgcG9ydHJhaXRXLCBsYW5kc2NhcGVXLCBmb3JjZU9yaWVudGF0aW9uID0gbnVsbCkge1xyXG4gIHZhciB3aWR0aCA9IGltYWdlLmdldFdpZHRoKCk7XHJcbiAgdmFyIGhlaWdodCA9IGltYWdlLmdldEhlaWdodCgpO1xyXG4gIHZhciByYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG4gIHZhciBvcmllbnRhdGlvbiA9IGZvcmNlT3JpZW50YXRpb24gfHwgKHJhdGlvID4gMSA/ICdsYW5kc2NhcGUnIDogJ3BvcnRyYWl0Jyk7XHJcbiAgdmFyIGJlc3RNYXRjaFJhdGlvID0geyByYXRpbzogJzE6MScsIHZhbHVlOiAxLjAgfTtcclxuICB2YXIgaW1hZ2VXaWR0aCA9IHdpZHRoLFxyXG4gICAgICBpbWFnZUhlaWdodCA9IGhlaWdodDtcclxuICBcclxuICBpZiAocmF0aW9zICYmIHJhdGlvc1tvcmllbnRhdGlvbl0pIHtcclxuICAgIHZhciBsb3dlc3REaWZmID0gOTk5OTk5OTk7XHJcbiAgICB2YXIgbG93ZXN0UmF0aW8gPSAnMToxJztcclxuICAgIHZhciBsb3dlc3RWYWx1ZSA9IDEuMDtcclxuXHJcbiAgICBmb3IodmFyIHg9MDsgeDxyYXRpb3Nbb3JpZW50YXRpb25dLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgIHZhciByID0gcmF0aW9zW29yaWVudGF0aW9uXVt4XTtcclxuICAgICAgdmFyIGRpZmYgPSBNYXRoLmFicyhyLnZhbHVlIC0gcmF0aW8pO1xyXG4gICAgICBpZihkaWZmIDwgbG93ZXN0RGlmZikge1xyXG4gICAgICAgIGxvd2VzdERpZmYgPSBkaWZmO1xyXG4gICAgICAgIGxvd2VzdFJhdGlvID0gci5yYXRpbztcclxuICAgICAgICBsb3dlc3RWYWx1ZSA9IHIudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiZXN0TWF0Y2hSYXRpby5yYXRpbyA9IGxvd2VzdFJhdGlvO1xyXG4gICAgYmVzdE1hdGNoUmF0aW8udmFsdWUgPSBsb3dlc3RWYWx1ZTtcclxuICB9XHJcblxyXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyAmJiBwb3J0cmFpdFcgJiYgYmVzdE1hdGNoUmF0aW8udmFsdWUgIT0gMS4wKSB7XHJcbiAgICAgIGltYWdlV2lkdGggPSBfbmVhcmVzdFdpZHRoKGltYWdlV2lkdGgsIHBvcnRyYWl0VywgYmVzdE1hdGNoUmF0aW8udmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAobGFuZHNjYXBlVyAmJiBiZXN0TWF0Y2hSYXRpby52YWx1ZSAhPSAxLjApIHtcclxuICAgICAgaW1hZ2VXaWR0aCA9IF9uZWFyZXN0V2lkdGgoaW1hZ2VXaWR0aCwgbGFuZHNjYXBlVywgYmVzdE1hdGNoUmF0aW8udmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvbixcclxuICAgIGFzcGVjdFJhdGlvOiBiZXN0TWF0Y2hSYXRpby5yYXRpbyxcclxuICAgIGFzcGVjdFZhbHVlOiBiZXN0TWF0Y2hSYXRpby52YWx1ZSxcclxuICAgIGJlc3RGaXRXaWR0aDogTWF0aC5yb3VuZChpbWFnZVdpZHRoKSxcclxuICAgIG1heFdpZHRoOiBvcmllbnRhdGlvbiA9PT0gJ3BvcnRyYWl0JyA/IHBvcnRyYWl0VyA6IGxhbmRzY2FwZVcsXHJcbiAgICBhbmdsZTogaW1hZ2UuYW5nbGUgfHwgMFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9uZWFyZXN0V2lkdGgod2lkdGgsIGJhcnJpZXIsIHJhdGlvKSB7XHJcbiAgaWYgKHdpZHRoID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gYmFycmllcjtcclxuICB9XHJcblxyXG4gIHZhciBfd2lkdGggPSByYXRpbyA+IDEgPyB3aWR0aCAvIHJhdGlvIDogd2lkdGggKiByYXRpbztcclxuICBpZiAoX3dpZHRoID4gYmFycmllcikge1xyXG4gICAgd2lkdGggPSBfbmVhcmVzdFdpZHRoKF93aWR0aCwgYmFycmllciwgcmF0aW8pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpZHRoO1xyXG59XHJcblxyXG59KSgpO1xyXG4iLCI7KGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIERhcmtyb29tLnBsdWdpbnNbJ2hpc3RvcnknXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgdW5kb1RyYW5zZm9ybWF0aW9uczogW10sXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tSGlzdG9yeVBsdWdpbigpIHtcclxuICAgICAgdGhpcy5faW5pdEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMuX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQuYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVuZG86IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XHJcbiAgICAgIHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy51bnNoaWZ0KGxhc3RUcmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVkbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucHVzaChjYW5jZWxUcmFuc2Zvcm1hdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgX2luaXRCdXR0b25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgICB0aGlzLmJhY2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAndW5kbycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAncmVkbycsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVuZG8uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBfdXBkYXRlQnV0dG9uczogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxyXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24uZGlzYWJsZSgodGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXHJcbiAgICB9LFxyXG5cclxuICAgIF9vblRyYW5mb3JtYXRpb25BcHBsaWVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zID0gW107XHJcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgIH1cclxuICB9KTtcclxufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFJvdGF0aW9uID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XHJcbiAgICBpbWFnZS5yb3RhdGUoYW5nbGUpO1xyXG4gICAgaW1hZ2UuZGlydHkgPSB0cnVlO1xyXG5cclxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xyXG4gICAgaGVpZ2h0ID0gTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkqKE1hdGguY29zKGFuZ2xlKk1hdGguUEkvMTgwKSkpO1xyXG4gICAgd2lkdGggPSBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5zaW4oYW5nbGUqTWF0aC5QSS8xODApKSkrTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XHJcblxyXG4gICAgY2FudmFzLnNldFdpZHRoKHdpZHRoKTtcclxuICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICBjYW52YXMuY2VudGVyT2JqZWN0KGltYWdlKTtcclxuICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xyXG5cclxuICAgIG5leHQoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tUm90YXRlUGx1Z2luKCkge1xyXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcblxyXG4gICAgdmFyIGxlZnRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xyXG4gICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZVJpZ2h0LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZUxlZnQ6IGZ1bmN0aW9uIHJvdGF0ZUxlZnQoKSB7XHJcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcclxuICAgIHRoaXMucm90YXRlKDkwKTtcclxuICB9LFxyXG5cclxuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xyXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKFxyXG4gICAgICBuZXcgUm90YXRpb24oe2FuZ2xlOiBhbmdsZX0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXHJcbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XHJcbiAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIEFkZCBpbWFnZVxyXG4gICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcblxyXG4gICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XHJcbiAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhczsgXHJcbiAgICB2YXIgZGFzaFdpZHRoID0gNztcclxuXHJcbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XHJcbiAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xyXG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcclxuXHJcbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXHJcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7IFxyXG4gICAgLy9jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjM1LCA3MCwgNzAsIDAuNSknO1xyXG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xyXG5cclxuICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xyXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XHJcblxyXG4gICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xyXG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxyXG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XHJcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgLy8gUmVzZXQgc2NhbGVcclxuICAgIGN0eC5zY2FsZSgxL3NjYWxlWCwgMS9zY2FsZVkpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xyXG4gICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAvL1xyXG4gICAgXHJcbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XHJcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcclxuXHJcbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgXHJcbiAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cclxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXHJcbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XHJcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxyXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xyXG5cclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkgeyAgXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciByaWdodFxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgLy8gVmVydGljYWwgbGluZXNcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgLy8gSW5pdCBwb2ludFxyXG4gIHN0YXJ0WDogbnVsbCxcclxuICBzdGFydFk6IG51bGwsXHJcblxyXG4gIC8vIEtleWNyb3BcclxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxyXG4gIGlzS2V5TGVmdDogZmFsc2UsXHJcbiAgaXNLZXlVcDogZmFsc2UsXHJcblxyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cclxuICAgIG1pbkhlaWdodDogMSxcclxuICAgIG1pbldpZHRoOiAxLFxyXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cclxuICAgIHJhdGlvOiBudWxsLFxyXG4gICAgLy8gcXVpY2sgY3JvcCBmZWF0dXJlIChzZXQgYSBrZXkgY29kZSB0byBlbmFibGUgaXQpXHJcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY3JvcCcsXHJcbiAgICAgIHRvb2x0aXA6ICdDcm9wJ1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5mdWxsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdmdWxsJyxcclxuICAgICAgdG9vbHRpcDogJ1NlbGVjdCBmdWxsIGFyZWEnLFxyXG4gICAgICBoaWRlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIHRvb2x0aXA6ICdBcHBseSBjaGFuZ2VzJyxcclxuICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgdG9vbHRpcDogJ0NhbmNlbCcsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmZ1bGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZ1bGxDcm9wWm9uZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBDYW52YXMgZXZlbnRzXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xyXG5cclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gIG9uT2JqZWN0TW92aW5nOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xyXG5cclxuICAgIGlmICh4IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcclxuICAgIGlmICh5IDwgMClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIDApO1xyXG4gICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xyXG4gICAgaWYgKHkgPiBtYXhZKVxyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxyXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJldmVudFNjYWxpbmcgPSBmYWxzZTtcclxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xyXG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcclxuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IHByZXZlbnRTY2FsaW5nKSB7XHJcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1pblggPCAwKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5ZIDwgMCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICB0aGlzLmxhc3RTY2FsZVkgPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWSgpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvLyBJbml0IGNyb3Agem9uZVxyXG4gIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxyXG4gICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XHJcblxyXG4gICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gIH0sXHJcblxyXG4gIC8vIEV4dGVuZCBjcm9wIHpvbmVcclxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxyXG4gICAgaWYgKHRoaXMuaXNLZXlDcm9waW5nKVxyXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xyXG5cclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICB9LFxyXG5cclxuICBvbk1vdXNlTW92ZUtleUNyb3A6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XHJcblxyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XHJcbiAgICAgIHpvbmUuc2V0VG9wKHkpO1xyXG4gICAgICB6b25lLnNldExlZnQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcclxuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXHJcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXHJcbiAgICAgIE1hdGgubWluKHpvbmUudG9wLCB5KSxcclxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxyXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gRmluaXNoIGNyb3Agem9uZVxyXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcclxuICAgIHRoaXMuc3RhcnRZID0gbnVsbDtcclxuICB9LFxyXG5cclxuICBvbktleURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcclxuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldExlZnQoMCk7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xyXG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuc3RhcnRYID0gMTtcclxuICAgIHRoaXMuc3RhcnRZID0gMTtcclxuICAgIHRoaXMub25Nb3VzZVVwKCk7XHJcbiAgfSxcclxuXHJcbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG5cclxuICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoe1xyXG4gICAgICAgICdsZWZ0JzogeCxcclxuICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAnd2lkdGgnOiB3aWR0aCxcclxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xyXG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH0sXHJcblxyXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XHJcbiAgfSxcclxuXHJcbiAgZnVsbENyb3Bab25lOiBmdW5jdGlvbigpIHtcclxuICAgIGlmKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnNlbGVjdFpvbmUoMCwgMCwgdGhpcy5kYXJrcm9vbS5jYW52YXMud2lkdGgsIHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodCwgZmFsc2UpO1xyXG4gIH0sXHJcblxyXG4gIGNyb3BDdXJyZW50Wm9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIEF2b2lkIGNyb3BpbmcgZW1wdHkgem9uZVxyXG4gICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XHJcblxyXG4gICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xyXG4gICAgdmFyIHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcclxuICAgIHZhciBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XHJcbiAgICB2YXIgd2lkdGggPSB0aGlzLmNyb3Bab25lLmdldFdpZHRoKCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICAvLyBBZGp1c3QgZGltZW5zaW9ucyB0byBpbWFnZSBvbmx5XHJcbiAgICBpZiAodG9wIDwgMCkge1xyXG4gICAgICBoZWlnaHQgKz0gdG9wO1xyXG4gICAgICB0b3AgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICB3aWR0aCArPSBsZWZ0O1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxyXG4gICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXHJcbiAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcclxuICAgICAgdG9wOiB0b3AgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0IC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXHJcbiAgICB9KSk7XHJcbiAgfSxcclxuXHJcbiAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxyXG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNyb3Bab25lICE9PSB1bmRlZmluZWQ7XHJcbiAgfSxcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBjcm9wIHpvbmVcclxuICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XHJcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxyXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAvL2JvcmRlckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXHJcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLmNyb3Bab25lKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgdGhpcy5mdWxsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXHJcbiAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICB0aGlzLmZ1bGxCdXR0b24uaGlkZSh0cnVlKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XHJcbiAgICB2YXIgaXNMZWZ0ID0gIWlzUmlnaHQ7XHJcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgIHZhciBpc1VwID0gIWlzRG93bjtcclxuXHJcbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblxyXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xyXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xyXG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcclxuICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xyXG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXHJcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuXHJcbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xyXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcclxuICAgICAgaWYgKGlzUmlnaHQpXHJcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgaWYgKGlzRG93bilcclxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRvcFkgPSBib3R0b21ZIC0gbWluSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRydW5jYXRlIHRydW5jYXRlIGFjY29yZGluZyB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcclxuICAgICAgcmlnaHRYICs9IE1hdGguYWJzKGxlZnRYKTtcclxuICAgICAgbGVmdFggPSAwXHJcbiAgICB9XHJcbiAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xyXG4gICAgICB0b3BZID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcclxuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcclxuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcclxuICAgIHZhciBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xyXG4gICAgICB2YXIgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG5cclxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcclxuICAgICAgICBpc0xlZnQgPSB0aGlzLmlzS2V5TGVmdDtcclxuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcclxuICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgbGVmdFggPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgIHRvcFkgPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xyXG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XHJcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggKiBuZXdIZWlnaHQgLyBoZWlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgIGxlZnRYID0gZnJvbVggLSB3aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xyXG4gICAgdGhpcy5jcm9wWm9uZS5sZWZ0ID0gbGVmdFg7XHJcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XHJcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNyb3Bab25lLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ3NhdmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnc2F2ZSdcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snY29sb3InXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgbW91c2VEb3duOiBmYWxzZSxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgYm9yZGVyOiAxLFxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgICByZWQ6IDAsXHJcbiAgICAgICAgZ3JlZW46IDAsXHJcbiAgICAgICAgYmx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21Db2xvclBsdWdpbigpIHtcclxuICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclBpY2tlckJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgICAgIGltYWdlOiAnY29sb3InXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGluaXRDb2xvciA9ICdyZ2IoJyArIFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmVkICsgJywnICtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmdyZWVuICsgJywnICsgXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ibHVlICsgJyknO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbkNvbG9yKGluaXRDb2xvcik7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmNvbG9yID0geyByZ2I6IGluaXRDb2xvciwgcmVkOiB0aGlzLm9wdGlvbnMucmVkLCBncmVlbjogdGhpcy5vcHRpb25zLmdyZWVuLCBibHVlOiB0aGlzLm9wdGlvbnMuYmx1ZSB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMud2lkdGggPSAyNzY7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMuaGVpZ2h0ID0gMjc2O1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLnN0eWxlLnpJbmRleCAgID0gODtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5ib3JkZXIgICA9IFwiMXB4IHNvbGlkXCI7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkud2lkdGggPSAyNTY7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LmhlaWdodCA9IDI1NjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuekluZGV4ICAgPSA5O1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5zdHlsZS5ib3JkZXIgICA9IFwiMXB4IHNvbGlkICMzMzNcIjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LnN0eWxlLnRvcCA9ICcxMHB4JztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgXHJcbiAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjNDQ0JztcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEsMSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY29sb3JQYWxldHRlSW1hZ2UsIDAsMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29sb3JQYWxldHRlQ2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb2xvckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXJrcm9vbS5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29sb3JQYWxldHRlQ2FudmFzKTtcclxuICAgICAgICAgICAgLy90aGlzLmRhcmtyb29tLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb2xvclBhbGV0dGVPdmVybGF5KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2NvbG9ycy5wbmcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvclBpY2tlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGljazogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZih0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY29sb3I6c3RhcnQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY29sb3I6ZW5kJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LCBldmVudCk7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcih0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcywgbW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Db2xvcihjb2xvci5yZ2IpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUG9pbnRlcihtb3VzZVBvc2l0aW9uLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjb2xvcjp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheSwgZXZlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93biAmJiB0aGlzLmNvbG9yUGFsZXR0ZUltYWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IodGhpcy5jb2xvclBhbGV0dGVDYW52YXMsIG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVCdXR0b25Db2xvcihjb2xvci5yZ2IpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvaW50ZXIobW91c2VQb3MsIGNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24oY2FudmFzLCBldmVudCkge1xyXG4gICAgICAgIHZhciByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBwYWRkaW5nID10aGlzLnBhZGRpbmcgfHwgMDtcclxuICAgICAgICB2YXIgYm9yZGVyID0gdGhpcy5ib3JkZXIgfHwgMDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxyXG4gICAgICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3AsXHJcbiAgICAgICAgICAgIGRhdGFYOiBldmVudC5sYXllclggLSAoYm9yZGVyICsgMSksXHJcbiAgICAgICAgICAgIGRhdGFZOiBldmVudC5sYXllclkgLSAoYm9yZGVyICsgMSksXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Q29sb3I6IGZ1bmN0aW9uKGNhbnZhcywgbW91c2VQb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBpbWdPYmogPSB0aGlzLmNvbG9yUGFsZXR0ZUltYWdlO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHRoaXMucGFkZGluZywgdGhpcy5wYWRkaW5nLCBpbWdPYmoud2lkdGgsIGltZ09iai53aWR0aCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcclxuICAgICAgICB2YXIgeCA9IG1vdXNlUG9zaXRpb24uZGF0YVggPCAwID8gMCA6IG1vdXNlUG9zaXRpb24uZGF0YVg7XHJcbiAgICAgICAgdmFyIHkgPSBtb3VzZVBvc2l0aW9uLmRhdGFZIDwgMCA/IDAgOiBtb3VzZVBvc2l0aW9uLmRhdGFZO1xyXG4gICAgICAgIHZhciByZWQgPSBkYXRhWygoaW1nT2JqLndpZHRoICogeSkgKyB4KSAqIDRdO1xyXG4gICAgICAgIHZhciBncmVlbiA9IGRhdGFbKChpbWdPYmoud2lkdGggKiB5KSArIHgpICogNCArIDFdO1xyXG4gICAgICAgIHZhciBibHVlID0gZGF0YVsoKGltZ09iai53aWR0aCAqIHkpICsgeCkgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIGNvbG9yID0gJ3JnYignICsgcmVkICsgJywnICsgZ3JlZW4gKyAnLCcgKyBibHVlICsgJyknO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJnYjogY29sb3IsXHJcbiAgICAgICAgICAgIHJlZDogcmVkLCBcclxuICAgICAgICAgICAgZ3JlZW46IGdyZWVuLCBcclxuICAgICAgICAgICAgYmx1ZTogYmx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUJ1dHRvbkNvbG9yOiBmdW5jdGlvbihyZ2IpIHtcclxuICAgICAgICBpZiAodGhpcy5jb2xvclBpY2tlckJ1dHRvbiAhPT0gbnVsbCAmJiB0aGlzLmNvbG9yUGlja2VyQnV0dG9uLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvclBpY2tlckJ1dHRvbi5lbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmZpbGwgPSByZ2I7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVQb2ludGVyOiBmdW5jdGlvbihtb3VzZVBvc2l0aW9uLCBjb2xvcikge1xyXG4gICAgICAgIHZhciByYWRpdXMgPSA1O1xyXG4gICAgICAgIHZhciBjdHggPSB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS53aWR0aCwgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LmhlaWdodCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmMobW91c2VQb3NpdGlvbi54LCBtb3VzZVBvc2l0aW9uLnksIHJhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICBpZihjb2xvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihjb2xvci5yZWQgPCA2MCAmJiBjb2xvci5ncmVlbiA8IDYwICYmIGNvbG9yLmJsdWUgPCA2MCkge1xyXG4gICAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiOyhmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgdmFyIFJlZGFjdCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XHJcbiAgICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcclxuICAgICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gdmlld3BvcnQuaGVpZ2h0O1xyXG5cclxuICAgICAgdmFyIGxlZnQgPSB0aGlzLm9wdGlvbnMubGVmdCAqIGltYWdlV2lkdGg7XHJcbiAgICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XHJcbiAgICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcclxuICAgICAgdmFyIGhlaWdodCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy5oZWlnaHQgKiBpbWFnZUhlaWdodCwgaW1hZ2VIZWlnaHQgLSB0b3ApO1xyXG4gICAgICB2YXIgY29sb3IgPSB0aGlzLm9wdGlvbnMuY29sb3I7XHJcbiAgICAgIHZhciBwaXhlbCA9IHRoaXMub3B0aW9ucy5waXhlbDtcclxuXHJcbiAgICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxyXG4gICAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcclxuICAgICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXHJcbiAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xyXG4gICAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHJlZGFjdEZpbHRlciA9IG5ldyBmYWJyaWMuSW1hZ2UuZmlsdGVycy5SZWRhY3Qoe1xyXG4gICAgICAgICAgbGVmdDogICBsZWZ0LFxyXG4gICAgICAgICAgdG9wOiAgICB0b3AsXHJcbiAgICAgICAgICB3aWR0aDogIHdpZHRoLFxyXG4gICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgICBwaXhlbDogcGl4ZWxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW1nSW5zdGFuY2UuYXBwbHlGaWx0ZXJzKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIEFkZCBpbWFnZVxyXG4gICAgICAgICAgaW1hZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgICAgICB9LCBbcmVkYWN0RmlsdGVyXSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHZhciBSZWRhY3Rab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcclxuICAgIF9yZW5kZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XHJcbiAgICAgIHZhciBkYXNoV2lkdGggPSA3O1xyXG5cclxuICAgICAgLy8gU2V0IG9yaWdpbmFsIHNjYWxlXHJcbiAgICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XHJcbiAgICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XHJcbiAgICAgIHZhciBzY2FsZVggPSBmbGlwWCAvIHRoaXMuc2NhbGVYO1xyXG4gICAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcclxuXHJcbiAgICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlck92ZXJsYXkoY3R4KTtcclxuXHJcbiAgICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xyXG4gICAgICBpZiAoY3R4LnNldExpbmVEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xyXG4gICAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGN0eC5tb3pEYXNoID0gW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXTtcclxuXHJcbiAgICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xyXG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuXHJcbiAgICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxyXG4gICAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xyXG4gICAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcclxuXHJcbiAgICAgIC8vIFJlc2V0IHNjYWxlXHJcbiAgICAgIGN0eC5zY2FsZSgxIC8gc2NhbGVYLCAxIC8gc2NhbGVZKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XHJcbiAgICAgIHZhciBib3JkZXJPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgLy9cclxuICAgICAgLy8gICAgeDAgICAgeDEgICAgICAgIHgyICAgICAgeDNcclxuICAgICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgIDAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgICAgLy9cclxuXHJcbiAgICAgIHZhciB4MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMiAtIHRoaXMuZ2V0TGVmdCgpKTtcclxuICAgICAgdmFyIHgxID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyKTtcclxuICAgICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgICB2YXIgeDMgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMiArIChjYW52YXMud2lkdGggLSB0aGlzLmdldFdpZHRoKCkgLSB0aGlzLmdldExlZnQoKSkpO1xyXG5cclxuICAgICAgdmFyIHkwID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMiAtIHRoaXMuZ2V0VG9wKCkpO1xyXG4gICAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgdmFyIHkzID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgKGNhbnZhcy5oZWlnaHQgLSB0aGlzLmdldEhlaWdodCgpIC0gdGhpcy5nZXRUb3AoKSkpO1xyXG5cclxuICAgICAgLy8gVXBwZXIgcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDAsIHkwLCB4MyAtIHgwLCB5MSAtIHkwICsgYm9yZGVyT2Zmc2V0KTtcclxuXHJcbiAgICAgIC8vIExlZnQgcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDAsIHkxLCB4MSAtIHgwLCB5MiAtIHkxICsgYm9yZGVyT2Zmc2V0KTtcclxuXHJcbiAgICAgIC8vIFJpZ2h0IHJlY3RcclxuICAgICAgY3R4LmZpbGxSZWN0KHgyLCB5MSwgeDMgLSB4MiwgeTIgLSB5MSArIGJvcmRlck9mZnNldCk7XHJcblxyXG4gICAgICAvLyBEb3duIHJlY3RcclxuICAgICAgY3R4LmZpbGxSZWN0KHgwLCB5MiwgeDMgLSB4MCwgeTMgLSB5Mik7XHJcbiAgICB9LFxyXG5cclxuICAgIF9yZW5kZXJCb3JkZXJzOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIHVwcGVyIHJpZ2h0XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyBkb3duIHJpZ2h0XHJcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gZG93biBsZWZ0XHJcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIHVwcGVyIGxlZnRcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVuZGVyR3JpZDogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAvLyBWZXJ0aWNhbCBsaW5lc1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgIC8vIEhvcml6b250YWwgbGluZXNcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAxIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgRGFya3Jvb20ucGx1Z2luc1sncmVkYWN0J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgIC8vIEluaXQgcG9pbnRcclxuICAgIHN0YXJ0WDogbnVsbCxcclxuICAgIHN0YXJ0WTogbnVsbCxcclxuXHJcbiAgICBkZWZhdWx0czoge1xyXG4gICAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cclxuICAgICAgbWluSGVpZ2h0OiAxLFxyXG4gICAgICBtaW5XaWR0aDogMSxcclxuICAgICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cclxuICAgICAgcmF0aW86IG51bGxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ21hc2snLFxyXG4gICAgICAgIHRvb2x0aXA6ICdSZWRhY3QnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAncGl4ZWxhdGUnLFxyXG4gICAgICAgIGhpZGU6IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcDogJ1BpeGVsYXRlJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdkb25lJyxcclxuICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgdG9vbHRpcDogJ0FwcGx5IGNoYW5nZXMnLFxyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ2Nsb3NlJyxcclxuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgICB0b29sdGlwOiAnQ2FuY2VsJyxcclxuICAgICAgICBoaWRlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQnV0dG9ucyBjbGlja1xyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUmVkYWN0LmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldFBpeGVsLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRhY3RDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIC8vIENhbnZhcyBldmVudHNcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xyXG4gICAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLnJlZGFjdFpvbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgICAgdmFyIHcgPSBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCksIGggPSBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG4gICAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcclxuICAgICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xyXG5cclxuICAgICAgaWYgKHggPCAwKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgMCk7XHJcbiAgICAgIGlmICh5IDwgMClcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XHJcbiAgICAgIGlmICh4ID4gbWF4WClcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xyXG4gICAgICBpZiAoeSA+IG1heFkpXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIG1heFkpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFByZXZlbnQgY3JvcCB6b25lIGZyb20gZ29pbmcgYmV5b25kIHRoZSBjYW52YXMgZWRnZXMgKGxpa2UgbW91c2VNb3ZlKVxyXG4gICAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xyXG4gICAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgICAgdmFyIG1heFggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSArIGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKTtcclxuICAgICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcclxuXHJcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAgIHByZXZlbnRTY2FsaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5YIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgICB2YXIgbGFzdFNjYWxlWSA9IHRoaXMubGFzdFNjYWxlWSB8fCAxO1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtaW5ZIDwgMCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvV2lkdGgodGhpcy5vcHRpb25zLm1pbldpZHRoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9IZWlnaHQodGhpcy5vcHRpb25zLm1pbkhlaWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XHJcbiAgICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gSW5pdCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXHJcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuICAgICAgdmFyIHBvaW50ID0gbmV3IGZhYnJpYy5Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzY2FsZSBvciBkcmFnIHRoZSBjcm9wIHpvbmUuXHJcbiAgICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMucmVkYWN0Wm9uZSB8fCB0aGlzLnJlZGFjdFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5zZXRXaWR0aCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldEhlaWdodCgwKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWCgxKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFNjYWxlWSgxKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBFeHRlbmQgY3JvcCB6b25lXHJcbiAgICBvbk1vdXNlTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgICB0aGlzLl9yZW5kZXJSZWRhY3Rab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEZpbmlzaCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcclxuICAgICAgdGhpcy5zdGFydFkgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3Rab25lOiBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuXHJcbiAgICAgIGlmICghZm9yY2VEaW1lbnNpb24pIHtcclxuICAgICAgICB0aGlzLl9yZW5kZXJSZWRhY3Rab25lKHgsIHksIHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3Rab25lLnNldCh7XHJcbiAgICAgICAgICAnbGVmdCc6IHgsXHJcbiAgICAgICAgICAndG9wJzogeSxcclxuICAgICAgICAgICd3aWR0aCc6IHdpZHRoLFxyXG4gICAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIGNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldENvb3JkcygpO1xyXG4gICAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMucmVkYWN0Wm9uZSk7XHJcbiAgICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0UGl4ZWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZighdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGl4ZWwgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRSZWRhY3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZighdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgdGhpcy5yZWRhY3RCbHVyQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHRoaXMucGl4ZWwgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlUmVkYWN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFJlZGFjdCgpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZGFjdEN1cnJlbnRab25lOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBdm9pZCByZWRhY3RpbmcgZW1wdHkgem9uZVxyXG4gICAgICBpZiAodGhpcy5yZWRhY3Rab25lLndpZHRoIDwgMSAmJiB0aGlzLnJlZGFjdFpvbmUuaGVpZ2h0IDwgMSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgZGFya3Jvb20gPSB0aGlzLmRhcmtyb29tO1xyXG4gICAgICB2YXIgY2FudmFzID0gZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICB2YXIgaW1hZ2UgPSBkYXJrcm9vbS5pbWFnZTtcclxuXHJcbiAgICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcclxuICAgICAgdmFyIHRvcCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XHJcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMucmVkYWN0Wm9uZS5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5yZWRhY3Rab25lLmdldEhlaWdodCgpO1xyXG4gICAgICB2YXIgY29sb3IgPSB0aGlzLmRhcmtyb29tLm9wdGlvbnMuY29sb3IgfHwgbnVsbDtcclxuICAgICAgdmFyIHBpeGVsID0gdGhpcy5waXhlbCB8fCBmYWxzZTtcclxuXHJcbiAgICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcclxuICAgICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgICBoZWlnaHQgKz0gdG9wO1xyXG4gICAgICAgIHRvcCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgIHdpZHRoICs9IGxlZnQ7XHJcbiAgICAgICAgbGVmdCA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFwcGx5IGNyb3AgdHJhbnNmb3JtYXRpb24uXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxyXG4gICAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24obmV3IFJlZGFjdCh7XHJcbiAgICAgICAgdG9wOiB0b3AgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcclxuICAgICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICAgIGhlaWdodDogaGVpZ2h0IC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXHJcbiAgICAgICAgY29sb3I6IGNvbG9yLFxyXG4gICAgICAgIHBpeGVsOiBwaXhlbFxyXG4gICAgICB9KSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFRlc3Qgd2hldGhlciByZWRhY3Qgem9uZSBpcyBzZXRcclxuICAgIGhhc0ZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlZGFjdFpvbmUgIT09IHVuZGVmaW5lZDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSByZWRhY3Qgem9uZVxyXG4gICAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZSA9IG5ldyBSZWRhY3Rab25lKHtcclxuICAgICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICAgIG9yaWdpblg6ICdsZWZ0JyxcclxuICAgICAgICBvcmlnaW5ZOiAndG9wJyxcclxuICAgICAgICAvL3N0cm9rZTogJyM0NDQnLFxyXG4gICAgICAgIC8vc3Ryb2tlRGFzaEFycmF5OiBbNSwgNV0sXHJcbiAgICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgICAgY29ybmVyU2l6ZTogOCxcclxuICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxyXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICBoYXNSb3RhdGluZ1BvaW50OiBmYWxzZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG5cclxuICAgICAgaWYodGhpcy5waXhlbCkge1xyXG4gICAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5yZWRhY3RCbHVyQnV0dG9uLmFjdGl2ZSh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5yZWRhY3RCbHVyQnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgcmVkYWN0IHpvbmVcclxuICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLnJlZGFjdFpvbmUpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnJlbW92ZSgpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgICAgdGhpcy5va0J1dHRvbi5oaWRlKHRydWUpO1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVuZGVyUmVkYWN0Wm9uZTogZnVuY3Rpb24gKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgICAgdmFyIGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xyXG4gICAgICB2YXIgaXNMZWZ0ID0gIWlzUmlnaHQ7XHJcbiAgICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xyXG4gICAgICB2YXIgaXNVcCA9ICFpc0Rvd247XHJcblxyXG4gICAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgIHZhciBtaW5IZWlnaHQgPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbkhlaWdodCwgY2FudmFzLmdldEhlaWdodCgpKTtcclxuXHJcbiAgICAgIC8vIERlZmluZSBjb3JuZXIgY29vcmRpbmF0ZXNcclxuICAgICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XHJcbiAgICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcclxuICAgICAgdmFyIHRvcFkgPSBNYXRoLm1pbihmcm9tWSwgdG9ZKTtcclxuICAgICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcclxuXHJcbiAgICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcclxuICAgICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XHJcbiAgICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xyXG4gICAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSk7XHJcbiAgICAgIGJvdHRvbVkgPSBNYXRoLm1pbihjYW52YXMuZ2V0SGVpZ2h0KCksIGJvdHRvbVkpO1xyXG5cclxuICAgICAgLy8gUmVjYWxpYnJhdGUgY29vcmRpbmF0ZXMgYWNjb3JkaW5nIHRvIGdpdmVuIG9wdGlvbnNcclxuICAgICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcclxuICAgICAgICBpZiAoaXNSaWdodClcclxuICAgICAgICAgIHJpZ2h0WCA9IGxlZnRYICsgbWluV2lkdGg7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgICBpZiAoaXNEb3duKVxyXG4gICAgICAgICAgYm90dG9tWSA9IHRvcFkgKyBtaW5IZWlnaHQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRydW5jYXRlIHRydW5jYXRlIGFjY29yZGluZyB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XHJcbiAgICAgICAgcmlnaHRYICs9IE1hdGguYWJzKGxlZnRYKTtcclxuICAgICAgICBsZWZ0WCA9IDBcclxuICAgICAgfVxyXG4gICAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcclxuICAgICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSA8IDApIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XHJcbiAgICAgICAgdG9wWSA9IDBcclxuICAgICAgfVxyXG4gICAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcclxuICAgICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcclxuICAgICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcclxuICAgICAgdmFyIGhlaWdodCA9IGJvdHRvbVkgLSB0b3BZO1xyXG4gICAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xyXG4gICAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xyXG4gICAgICAgICAgdmFyIG5ld1dpZHRoID0gaGVpZ2h0ICogcmF0aW87XHJcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xyXG4gICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodCAvIHdpZHRoKTtcclxuICAgICAgICAgIGlmIChpc1VwKSB7XHJcbiAgICAgICAgICAgIHRvcFkgLT0gKG5ld0hlaWdodCAtIGhlaWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgICBsZWZ0WCA9IDA7XHJcbiAgICAgICAgICAvL1RPRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgICB0b3BZID0gMDtcclxuICAgICAgICAgIC8vVE9ET1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgICAgICB2YXIgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcclxuICAgICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcclxuICAgICAgICAgIHdpZHRoID0gd2lkdGggKiBuZXdIZWlnaHQgLyBoZWlnaHQ7XHJcbiAgICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XHJcbiAgICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICAgIGxlZnRYID0gZnJvbVggLSB3aWR0aDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFwcGx5IGNvb3JkaW5hdGVzXHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5sZWZ0ID0gbGVmdFg7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS50b3AgPSB0b3BZO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnJlZGFjdFpvbmUpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdyZWRhY3Q6dXBkYXRlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMpO1xyXG4iLCIoZnVuY3Rpb24gKERhcmtyb29tKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICBmdW5jdGlvbiBnZXRJbXBsZW1lbnRhdGlvbihfdGhpcykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgdXBkYXRlcyBzdGF0ZSBvZiBidXR0b25zIHJlbGF0aXZlIHRvIGltYWdlIHNpemUgdiBjYW52YXMgc2l6ZVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIF91cGRhdGVCdXR0b25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzLCBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLCBwYW5CdXR0b24gPSBfdGhpcy5idXR0b25zLnBhbiwgem9vbU91dEJ1dHRvbiA9IF90aGlzLmJ1dHRvbnMuem9vbU91dCwgc2hvdWxkRGlzYWJsZSA9ICgoaW1hZ2UuZ2V0V2lkdGgoKSA8PSBjYW52YXMuZ2V0V2lkdGgoKSkgJiYgKGltYWdlLmdldEhlaWdodCgpIDw9IGNhbnZhcy5nZXRIZWlnaHQoKSkpO1xyXG4gICAgICAgICAgICBwYW5CdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlKTtcclxuICAgICAgICAgICAgem9vbU91dEJ1dHRvbi5kaXNhYmxlKHNob3VsZERpc2FibGUpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSGVscGVyIG1ldGhvZCBlbnN1cmVzIGJvdHRvbSBlZGdlIGFuZCByaWdodCBlZGdlIG9mIGltYWdlIG5ldmVyIG1vdmUgdG8gYSBwb3NpdGlvbiBsZXNzIHRoYW4gdGhlIGNhbnZhc1xyXG4gICAgICAgICAqIGJvdHRvbSBlZGdlIGFuZCByaWdodCBlZGdlIHJlc3BlY3RpdmVseVxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIF9yZWZpdEltYWdlSW5DYW52YXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXMsIG1pblggPSBjYW52YXMuZ2V0V2lkdGgoKSwgbWluWSA9IGNhbnZhcy5nZXRIZWlnaHQoKSwgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZSwgYm90dG9tUmlnaHQgPSBpbWFnZS5vQ29vcmRzLmJyO1xyXG4gICAgICAgICAgICBpZiAoYm90dG9tUmlnaHQueCA8IG1pblgpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLmxlZnQgPSBpbWFnZS5sZWZ0ICsgKG1pblggLSBib3R0b21SaWdodC54KTtcclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZS5sZWZ0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLmxlZnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBidXQgbm90IGJleW9uZCBsZWZ0IGVkZ2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYm90dG9tUmlnaHQueSA8IG1pblkpIHtcclxuICAgICAgICAgICAgICAgIGltYWdlLnRvcCA9IGltYWdlLnRvcCArIChtaW5ZIC0gYm90dG9tUmlnaHQueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UudG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnRvcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IC8vIGJ1dCBub3QgYmV5b25kIHRvcCBlZGdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB6b29tID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlO1xyXG4gICAgICAgICAgICBpbWFnZS5zY2FsZShpbWFnZS5zY2FsZVggKiBkZWx0YSk7XHJcbiAgICAgICAgICAgIF90aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3pvb206Y2hhbmdlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgX2luaXRQYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBfdGhpcy5idXR0b25zLnBhbi5hY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vbignbW91c2U6ZG93bicsIGV2ZW50TGlzdGVuZXJzLnBhbkVudGVyKTtcclxuICAgICAgICAgICAgY2FudmFzLm9uKCdtb3VzZTp1cCcsIGV2ZW50TGlzdGVuZXJzLnBhbkV4aXQpO1xyXG4gICAgICAgICAgICBjYW52YXMub24oJ21vdXNlOm1vdmUnLCBldmVudExpc3RlbmVycy5wYW4pO1xyXG4gICAgICAgICAgICBjYW52YXMuZGVmYXVsdEN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBfZXhpdFBhbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3RhdGVzLnBhbkFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfdGhpcy5idXR0b25zLnBhbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgICAgICBjYW52YXMub2ZmKCdtb3VzZTpkb3duJywgZXZlbnRMaXN0ZW5lcnMucGFuRW50ZXIpO1xyXG4gICAgICAgICAgICBjYW52YXMub2ZmKCdtb3VzZTp1cCcsIGV2ZW50TGlzdGVuZXJzLnBhbkV4aXQpO1xyXG4gICAgICAgICAgICBjYW52YXMub2ZmKCdtb3VzZTptb3ZlJywgZXZlbnRMaXN0ZW5lcnMucGFuKTtcclxuICAgICAgICAgICAgaWYgKGNhbnZhcy5kZWZhdWx0Q3Vyc29yID09ICdtb3ZlJykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIExpbWl0cyBwYW4gYmFzZWQgb24gcG9zaXRpb24gb2YgaW1hZ2UgcmVsYXRpdmUgdG8gY2FudmFzIGRpbWVuc2lvbnNcclxuICAgICAgICAgKiBAcGFyYW0gZGVsdGFcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBfY29uc3RyYWluUGFuID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIHZhciBjYW52YXMgPSBfdGhpcy5kYXJrcm9vbS5jYW52YXMsIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2UsIHRsID0gaW1hZ2Uub0Nvb3Jkcy50bCwgLy8gdG9wIGxlZnQgY29ybmVyXHJcbiAgICAgICAgICAgIGJyID0gaW1hZ2Uub0Nvb3Jkcy5icjsgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgICAgICBpZiAoZGVsdGEueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnggPSAoKHRsLnggKyBkZWx0YS54KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS54ID0gTWF0aC5jZWlsKGRlbHRhLngpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueCkgKyBkZWx0YS54KSA8IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkZWx0YS55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueSA9ICgodGwueSArIGRlbHRhLnkpID4gMCkgPyAwIDogTWF0aC5mbG9vcihkZWx0YS55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnkgPSBNYXRoLmNlaWwoZGVsdGEueSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKE1hdGguY2VpbChici55KSArIGRlbHRhLnkpIDwgY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkZWx0YTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBfZG9QYW4gPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICAgICAgdmFyIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2U7XHJcbiAgICAgICAgICAgIGRlbHRhID0gX2NvbnN0cmFpblBhbihkZWx0YSk7XHJcbiAgICAgICAgICAgIGltYWdlLmxlZnQgPSBpbWFnZS5sZWZ0ICsgZGVsdGEueDtcclxuICAgICAgICAgICAgaW1hZ2UudG9wID0gaW1hZ2UudG9wICsgZGVsdGEueTtcclxuICAgICAgICAgICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICAgICAgICAgIHN0YXRlcy5yZWFsUGFuID0ge1xyXG4gICAgICAgICAgICAgICAgeDogaW1hZ2Uub0Nvb3Jkcy50bC54LFxyXG4gICAgICAgICAgICAgICAgeTogaW1hZ2Uub0Nvb3Jkcy50bC55XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XHJcbiAgICAgICAgICAgIHpvb21JbjogZnVuY3Rpb24gKCkgeyB6b29tKDEuMDUpOyB9LFxyXG4gICAgICAgICAgICB6b29tT3V0OiBmdW5jdGlvbiAoKSB7IHpvb20oMC45NSk7IH0sXHJcbiAgICAgICAgICAgIGFib3J0UGFuOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYW5CdXR0b24gPSBfdGhpcy5idXR0b25zLnBhbjtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gcGFuQnV0dG9uLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ3N2ZydcclxuICAgICAgICAgICAgICAgICAgICAmJiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudCA9PSBwYW5CdXR0b24uZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudGFnTmFtZSA9PSAndXNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgPT0gcGFuQnV0dG9uLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF9leGl0UGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZVBhbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZXhpdFBhbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2luaXRQYW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFuRW50ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYW46IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5uaW5nICYmIGV2ZW50ICYmIGV2ZW50LmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZXZlbnQuZS5tb3ZlbWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGV2ZW50LmUubW92ZW1lbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBfZG9QYW4oZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5yZW5kZXJBbGwoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFuRXhpdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZXMucGFubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB6b29tQ2hhbmdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZXMubGFzdFNjYWxlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIF9yZWZpdEltYWdlSW5DYW52YXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzdG9yZVpvb21QYW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMubGFzdFNjYWxlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kYXJrcm9vbS5pbWFnZS5zY2FsZShzdGF0ZXMubGFzdFNjYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnJlYWxQYW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZG9QYW4oc3RhdGVzLnJlYWxQYW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBfdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9yZWZpdEltYWdlSW5DYW52YXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHN0YXRlcyA9IHtcclxuICAgICAgICAgICAgcGFuQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFubmluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhc3RTY2FsZTogbnVsbCxcclxuICAgICAgICAgICAgcmVhbFBhbjogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcnM6IGV2ZW50TGlzdGVuZXJzLFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHN0YXRlc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBEYXJrcm9vbS5wbHVnaW5zWyd6b29tJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcclxuICAgICAgICBkZWZhdWx0czoge30sXHJcbiAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbnMgPSB0aGlzLmJ1dHRvbnMgPSB7fTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tSW4gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oeyBpbWFnZTogJ3pvb20taW4nIH0pO1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21PdXQgPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oeyBpbWFnZTogJ3pvb20tb3V0JywgZGlzYWJsZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucGFuID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHsgaW1hZ2U6ICdoYW5kJywgZGlzYWJsZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHZhciBpbXBsZW1lbnRhdGlvbiA9IGdldEltcGxlbWVudGF0aW9uKHRoaXMpO1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21Jbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnpvb21Jbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbU91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnpvb21PdXQpO1xyXG4gICAgICAgICAgICBidXR0b25zLnBhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnRvZ2dsZVBhbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20udG9vbGJhci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuYWJvcnRQYW4pO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ3pvb206Y2hhbmdlJywgaW1wbGVtZW50YXRpb24uZXZlbnRMaXN0ZW5lcnMuem9vbUNoYW5nZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnJlc3RvcmVab29tUGFuKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoRGFya3Jvb20pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD16b29tLmpzLm1hcCJdfQ==
