(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="color"><path stroke="#fff" d="M4 6h16v12H4z"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="full"><g stroke="#fff" stroke-linecap="null" stroke-linejoin="null" stroke-width="2"><path d="M3.151 4.01h6.735M4.142 3.02v6.734M14.189 4.01h6.735M19.933 3.019v6.735M3.151 20.021h6.735M4.141 14.278v6.734M14.189 20.021h6.735M19.932 14.277v6.735"/></g></symbol><symbol id="hand" viewBox="0 0 128 128"><path class="iconic-property-fill" d="M101.657 70.343a8 8 0 0 0-11.314 0L80 78.846c-3.165 2.602-8 .778-8-2.846V14a6 6 0 1 0-12 0v38a4 4 0 0 1-8 0V6a6 6 0 1 0-12 0v50a4 4 0 0 1-8 0V14a6 6 0 1 0-12 0v46a4 4 0 0 1-8 0V22a6 6 0 1 0-12 0v70c0 19.882 16.118 36 36 36 9.223 0 17.631-3.472 24.001-9.175l-.001.007s41.448-36.966 41.657-37.175a8 8 0 0 0 0-11.314z"/></symbol><symbol id="mask" viewBox="0 0 90 90"><path d="M45 18c-8.802 0-17.045 1.167-24.73 3.498C12.646 23.879 5.888 27.066 0 30.936V61a34.288 34.288 0 0 0 9.459 5.836C13.046 68.278 16.893 69 21 69s7.94-.722 11.498-2.164C36.085 65.363 39.252 63.393 42 61c.393-.326.843-.59 1.352-.791A4.56 4.56 0 0 1 45 59.914c.587 0 1.134.098 1.643.295.512.2.964.465 1.357.791a34.288 34.288 0 0 0 9.459 5.836C61.046 68.278 64.893 69 69 69s7.94-.722 11.498-2.164C84.085 65.363 87.252 63.393 90 61V30.936c-5.888-3.87-12.675-7.057-20.361-9.438C62.015 19.167 53.802 18 45 18zM24 39.092c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C29.672 49.505 26.933 50 24 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48zm42 0c2.934 0 5.672.492 8.213 1.48 2.562 1.01 4.824 2.333 6.787 3.973-1.963 1.64-4.225 2.964-6.787 3.973C71.672 49.505 68.933 50 66 50c-2.934 0-5.682-.495-8.244-1.482-2.541-1.01-4.793-2.334-6.756-3.973 1.963-1.64 4.215-2.964 6.756-3.973 2.562-.988 5.31-1.48 8.244-1.48z"/></symbol><symbol id="pencil" viewBox="10 10 90 90"><path d="M20 60l30-40 30 20-30 40-30 10V60z"/></symbol><symbol id="pencil2x"><ellipse ry="7.25" rx="7.25" cy="12" cx="12" stroke-width="1.5" stroke="#fff"/></symbol><symbol id="pixelate"><path d="M0 0h24v24H0V0"/><path fill="#999" d="M2 2h10v10H2z"/><path fill="#BBB" d="M2 12h10v10H2z"/><path fill="#666" d="M12 2h10v10H12z"/><path fill="#DDD" d="M12 12h10v10H12z"/>&gt;</symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol><symbol id="zoom-in" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zM40 24v15.998H24v4h16V60h4.002V43.998H60v-4H44.002V24H40z"/></symbol><symbol id="zoom-out" viewBox="0 0 96 96.000001"><path style="marker:none" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path d="M72.396 73.883c.017.021.04.035.057.056.02.026.03.057.05.083zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.021.041-.035.058-.057z"/><path d="M42 6C22.141 6 6 22.142 6 42s16.141 35.996 36 35.996c8.85 0 16.957-3.21 23.23-8.521l19.647 19.644 4.244-4.24-19.646-19.647C74.789 58.958 78 50.852 78 42 78 22.142 61.859 6 42 6zm0 3.998c17.696 0 31.998 14.305 31.998 32.002 0 17.697-14.302 31.998-31.998 31.998S10 59.698 10 42C10 24.303 24.304 9.998 42 9.998zm-18 30v4h36v-4H24z"/></symbol></svg><!-- endinject -->';
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
      blue: '0',
      hex: '#000',
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

  // clear all active toolbar plugins
  clearFocus: function(instance) {
    for(var key in this.plugins) {
      if(key != instance) {
        this.plugins[key].clear();
      }
    }
  }
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
  initialize: function() { },
  clear: function() { },
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
  convertRGBToHex: colorToHex,
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

function colorToHex(r,g,b) {
  var rh = r.toString(16);
  var gh = g.toString(16);
  var bh = b.toString(16);
  return "#" + (rh.length == 1 ? "0" + rh : rh) + (gh.length == 1 ? "0" + gh : gh) + (bh.length == 1 ? "0" + bh : bh); 
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

var Pencil = Darkroom.Transformation.extend({
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

      // Add image
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var width = viewport.width;
    var height = viewport.height;

    this.options.pencilZone._applyScaling(canvas.getWidth(), canvas.getHeight());        
    canvas.add(this.options.pencilZone);
    canvas.renderAll();
    snapshot.src = canvas.toDataURL();
  }
});

var PencilZone = fabric.util.createClass(fabric.Object, {
    type: 'pencilObject',

    initialize: function(options) {
        options = options || { };
        this.left = options.left || 0;
        this.top = options.top || 0;
        this.width = options.width;
        this.height = options.height;
        this.originalWidth = this.width;
        this.originalHeight = this.height;
        this.stroke = options.stroke;
        this.size = options.size;
        this.path = null;            
        this.cX = -this.getWidth()/2;
        this.cY = -this.getHeight()/2;
        this.callSuper('initialize', options);
    },

    _applyScaling: function (w,h) {
        var scaleX = this.getWidth() / w;
        var scaleY = this.getHeight() / h;
        this.set({ scaleX: this.scaleX/scaleX, scaleY: this.scaleY/scaleY });
    },

    _render: function (ctx) {
        var canvas = ctx.canvas;
        this._draw(ctx);
    },

    _draw: function(ctx) {
        if(ctx && this.path && this.path.length > 0) {
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.beginPath();
            ctx.moveTo((this.cX + this.path[0].x) ,
                        (this.cY + this.path[0].y) );

            for(var x=0; x<this.path.length; x++) {
                let drawX = (this.cX + this.path[x].x) ;
                let drawY =  (this.cY + this.path[x].y) ;
                ctx.lineTo( drawX, drawY);
            }
            

            ctx.strokeStyle = this.stroke;
            ctx.lineWidth = this.size;
            ctx.stroke();
        }
    },

    _clone: function() {
        return new PencilZone({
            stroke: this.stroke,
            size: this.size,
            width: this.width,
            height: this.height,
            selectable: false,
            lockRotation: true,
            evented: false,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            lockUniScaling: true,
            hasControls: false,
            hasBorders: false
        });
    }
  });

Darkroom.plugins['pencil'] = Darkroom.Plugin.extend({
    pencilMode: false,
    pencilZone: null,
    mouseDown: false,
    size: 20,
    defaults: {
        stroke: '#000',
        size: 20,
        sizeDouble: 40,
    },

    initialize: function InitializeDarkroomPencilPlugin() {
        var buttonGroup = this.darkroom.toolbar.createButtonGroup();

        this.pencilButton = buttonGroup.createButton({
            image: 'pencil',
            tooltip: 'Draw'
        });
        this.doubleSize = buttonGroup.createButton({
            image: 'pencil2x',
            hide: true,
        });

        this.path = [];
        this.width = this.darkroom.canvas.width;
        this.height = this.darkroom.canvas.height;
        this.size = this.options.size;
        this.stroke = this.darkroom.options.color.hex || this.options.stroke;
                
        this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
        this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
        this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
        this.darkroom.addEventListener('color:update', this.updateColor.bind(this))
        this.pencilButton.addEventListener('click', this.onClick.bind(this));
        this.doubleSize.addEventListener('click', this.toggleStrokeSize.bind(this));

        
    },

    clear: function() {
        if(this.hasFocus())
            this.removeFocus();
    },

    hasFocus: function() {
        return this.pencilZone !== null;
    },

    updateColor: function() {
        this.stroke = this.darkroom.options.color.hex;
        if(this.hasFocus()) {
            this.pencilZone.stroke = this.stroke;
        }
    },

    onClick: function(event) {
        if(!this.hasFocus()) {
            this.requireFocus();
            return;
        }
        this.removeFocus();
    },

    onMouseDown: function(event) {
        if(!this.hasFocus()) 
            return;

        this.darkroom.dispatchEvent('pencil:begin');
        this.mouseDown = true;
        this.path.push(this.getMousePosition(this.canvas, event));
        this.renderZone();
    },

    onMouseUp: function(event) {
        if(!this.hasFocus()) 
            return;

        if(this.mouseDown) {
            this.darkroom.dispatchEvent('pencil:end');
            this.mouseDown = false;
            var mousePos = this.getMousePosition(this.canvas, event);
            this.path.push(mousePos);
            this.renderZone();
            this.applyPencilPath();
            this.path = [];
        }
    },

    onMouseMove: function(event) {
        if(!this.hasFocus()) 
            return;

        if(this.mouseDown) {
            var mousePos = this.getMousePosition(this.canvas, event);
            this.path.push(mousePos);
            this.renderZone();
        }
    },

    toggleStrokeSize: function() {
        this.doubleSize.active(!this.doubleSize.isActive());
        this.size = this.doubleSize.isActive() ? this.options.sizeDouble : this.options.size;
        this.pencilZone.size = this.size;
    },

    removeFocus: function() {        
        this.darkroom.dispatchEvent('pencil:disabled');
        this.pencilButton.active(false);        
        this.doubleSize.hide(true);
        this.pencilMode = false;

        if(this.pencilZone) {
            this.pencilZone.remove();
            this.pencilZone = null;
        }
    },

    requireFocus: function() {
        this.darkroom.clearFocus('pencil');

        this.darkroom.dispatchEvent('pencil:enabled');
        this.pencilMode = true;
        this.pencilButton.active(true);
        this.doubleSize.active(false);
        this.doubleSize.hide(false);

        this.pencilZone = this.newZone();

        this.darkroom.canvas.add(this.pencilZone);
    },


    getMousePosition: function(canvas, event) {
        var canvas = this.darkroom.canvas;
        var rect = canvas.lowerCanvasEl.getBoundingClientRect();
        var pointer = canvas.getPointer(event.e);
        var scale = 720/1280
        return {
            x: pointer.x,
            y: pointer.y,
            cx: event.e.clientX - rect.left,
            cy: event.e.clientY - rect.top,
            sx: event.e.screenX,
            sy: event.e.screenY
        };
    },

    newZone: function() {
        this.path = [];
        var stroke = this.stroke;
        var size = this.size;
        var width = this.darkroom.canvas.getWidth();
        var height = this.darkroom.canvas.getHeight();
        var zone = new PencilZone({
            stroke: stroke,
            size: size,
            width: width,
            height: height,
            selectable: false,
            lockRotation: true,
            evented: false,
            lockMovementX: true,
            lockMovementY: true,
            lockScalingX: true,
            lockScalingY: true,
            lockUniScaling: true,
            hasControls: false,
            hasBorders: false
        });

        return zone;
    },

    applyPencilPath: function() {
        if (!this.hasFocus())
            return;

        // Avoid croping empty zone
        if (this.path === null || this.path.length == 0)
            return;

        // Apply crop transformation.
        // Make sure to use relative dimension since the crop will be applied
        // on the source image.
        var zone = this.pencilZone._clone();
        zone.path = this.path;
        this.darkroom.applyTransformation(new Pencil({
            pencilZone: zone,
        }));
        this.pencilZone.remove();
        this.pencilZone = this.newZone();
        this.darkroom.canvas.add(this.pencilZone);
    },

    renderZone: function() {
        if(this.path && this.path.length > 0) {
            this.darkroom.dispatchEvent('pencil:update');
            this.pencilZone.path = this.path;
        }
        this.darkroom.canvas.bringToFront(this.pencilZone);
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

  clear: function() {
    if(this.hasFocus())
      this.releaseFocus();
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
    this.darkroom.clearFocus('crop');
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
        this.darkroom.options.color = { 
            rgb: initColor, 
            red: this.options.red, green: this.options.green, blue: this.options.blue,
            hex: Darkroom.Utils.convertRGBToHex(this.options.red, this.options.green, this.options.blue) 
        };

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
        var hex = Darkroom.Utils.convertRGBToHex(red, green, blue);

        return {
            rgb: color,
            red: red, 
            green: green, 
            blue: blue,
            hex: hex
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

    clear: function() {
      if(this.hasFocus()) 
        this.releaseFocus();
    },

    // Create the redact zone
    requireFocus: function () {
      this.darkroom.clearFocus('redact');

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLnBlbmNpbC5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwiZGFya3Jvb20uY29sb3IuanMiLCJyZWRhY3QuanMiLCJ6b29tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MxYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0M3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDaEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ2xVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0Nuc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDOUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXpJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL29CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cclxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZWxlbWVudC5pZCA9ICdkYXJrcm9vbS1pY29ucyc7XHJcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcclxuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XHJcbmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbndpbmRvdy5EYXJrcm9vbSA9IERhcmtyb29tO1xyXG5cclxuLy8gQ29yZSBvYmplY3Qgb2YgRGFya3Jvb21KUy5cclxuLy8gQmFzaWNhbGx5IGl0J3MgYSBzaW5nbGUgb2JqZWN0LCBpbnN0YW5jaWFibGUgdmlhIGFuIGVsZW1lbnRcclxuLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxyXG4vLyBhbmQgYSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzIChvciBub25lIHRvIHVzZSBkZWZhdWx0IG9uZXMpLlxyXG5mdW5jdGlvbiBEYXJrcm9vbShlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XHJcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxyXG4vLyBvdGhlciBwbHVnaW4gc2NyaXB0cy4gVGhpcyBpcyB0aGUgZGVmYXVsdCBwbHVnaW4gbGlzdCBpZiBub25lIGlzXHJcbi8vIHNwZWNpZmllZCBpbiBEYXJrcm9vbSdzcyBjb25zdHJ1Y3Rvci5cclxuRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xyXG5cclxuRGFya3Jvb20ucHJvdG90eXBlID0ge1xyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxyXG4gIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcclxuICBjYW52YXM6IG51bGwsXHJcblxyXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxyXG4gIGltYWdlOiBudWxsLFxyXG5cclxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxyXG4gIHNvdXJjZUNhbnZhczogbnVsbCxcclxuXHJcbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxyXG4gIC8vIGlmIHVzaW5nIG9yaWVudGF0aW9uIG9wdGlvbnMgYW5kIGEgcGx1Z2luIGNoYW5nZXMgdGhlIHNvdXJjZSBJbWFnZSBzZXQgLmRpcnR5ID0gdHJ1ZVxyXG4gIHNvdXJjZUltYWdlOiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxyXG4gIG9yaWdpbmFsSW1hZ2VFbGVtZW50OiBudWxsLFxyXG5cclxuICAvLyBUcmFjayBvcmlnaW5hbCBvcmllbnRhdGlvblxyXG4gIHNvdXJjZUltYWdlT3JpZW50YXRpb246IG51bGwsXHJcblxyXG4gIC8vIFN0YWNrIG9mIHRyYW5zZm9ybWF0aW9ucyB0byBhcHBseSB0byB0aGUgaW1hZ2Ugc291cmNlXHJcbiAgdHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgZGVmYXVsdHM6IHtcclxuICAgIC8vIENhbnZhcyBwcm9wZXJ0aWVzIChkaW1lbnNpb24sIHJhdGlvLCBjb2xvcilcclxuICAgIG1pbldpZHRoOiBudWxsLFxyXG4gICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgbWF4V2lkdGg6IG51bGwsXHJcbiAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICByYXRpbzogbnVsbCxcclxuICAgIGNvbG9yOiB7IFxyXG4gICAgICByZ2I6ICdyZ2IoMCwwLDApJyxcclxuICAgICAgcmVkOiAnMCcsXHJcbiAgICAgIGdyZWVuOiAnMCcsXHJcbiAgICAgIGJsdWU6ICcwJyxcclxuICAgICAgaGV4OiAnIzAwMCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsIFxyXG4gICAgb3JpZW50YXRpb246IHtcclxuICAgICAgYWNjZXB0ZWRSYXRpb3M6IHt9LFxyXG4gICAgICBtYXhXaWR0aFBvcnRyYWl0OiBudWxsLFxyXG4gICAgICBtYXhXaWR0aExhbmRzY2FwZTogbnVsbCwgLy9tYXggd2lkdGggYXZhaWxhYmxlIGZvciBhIGltYWdlIGFzc3VtZWQgaW4gbGFuZHNjYXBlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xyXG4gICAgcGx1Z2luczoge30sXHJcblxyXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IC8qIG5vb3AgKi8gfVxyXG4gIH0sXHJcblxyXG4gIC8vIExpc3Qgb2YgdGhlIGluc3RhbmNpZWQgcGx1Z2luc1xyXG4gIHBsdWdpbnM6IHt9LFxyXG5cclxuICAvLyBUaGlzIG9wdGlvbnMgYXJlIGEgbWVyZ2UgYmV0d2VlbiBgZGVmYXVsdHNgIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcclxuICAvLyB0aHJvdWdoIHRoZSBjb25zdHJ1Y3RvclxyXG4gIG9wdGlvbnM6IHt9LFxyXG5cclxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24oZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpXHJcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgaWYgKG51bGwgPT09IGVsZW1lbnQpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVET00oZWxlbWVudCk7XHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xyXG5cclxuICAgICAgLy8gVGhlbiBpbml0aWFsaXplIHRoZSBwbHVnaW5zXHJcbiAgICAgIHRoaXMuX2luaXRpYWxpemVQbHVnaW5zKERhcmtyb29tLnBsdWdpbnMpO1xyXG5cclxuICAgICAgLy8gUHVibGljIG1ldGhvZCB0byBhZGp1c3QgaW1hZ2UgYWNjb3JkaW5nIHRvIHRoZSBjYW52YXNcclxuICAgICAgdGhpcy5yZWZyZXNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cclxuICAgICAgICB0aGlzLm9wdGlvbnMuaW5pdGlhbGl6ZS5iaW5kKHRoaXMpLmNhbGwoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICB9LmJpbmQodGhpcylcclxuXHJcbiAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICB2YXIgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XHJcbiAgICBpZiAoZmlsZSAhPT0gbnVsbCkge1xyXG4gICAgICBmaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgZiA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIGVsZW1lbnQuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZik7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgc2VsZkRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyRWxlbWVudDtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnRhaW5lci5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpbWFnZSwgY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBpbWFnZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xyXG4gICAgLy9pbWFnZS5zcmMgPSB0aGlzLmltYWdlLnRvRGF0YVVSTCgpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEFkZCBhYmlsaXR5IHRvIGF0dGFjaCBldmVudCBsaXN0ZW5lciBvbiB0aGUgY29yZSBvYmplY3QuXHJcbiAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGVsID0gdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpe1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xyXG4gICAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xyXG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oZXZlbnROYW1lKSB7XHJcbiAgICAvLyBVc2UgdGhlIG9sZCB3YXkgb2YgY3JlYXRpbmcgZXZlbnQgdG8gYmUgSUUgY29tcGF0aWJsZVxyXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcclxuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xyXG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEFkanVzdCBpbWFnZSAmIGNhbnZhcyBkaW1lbnNpb24gYWNjb3JkaW5nIHRvIG1pbi9tYXggd2lkdGgvaGVpZ2h0XHJcbiAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cclxuICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXHJcbiAgcmVmcmVzaDogZnVuY3Rpb24obmV4dCkge1xyXG4gICAgdmFyIGNsb25lID0gbmV3IEltYWdlKCk7XHJcbiAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5fcmVwbGFjZUN1cnJlbnRJbWFnZShuZXcgZmFicmljLkltYWdlKGNsb25lKSk7XHJcblxyXG4gICAgICBpZiAobmV4dCkgbmV4dCgpO1xyXG4gICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgY2xvbmUuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcclxuICB9LFxyXG5cclxuICBfcmVwbGFjZUN1cnJlbnRJbWFnZTogZnVuY3Rpb24obmV3SW1hZ2UpIHtcclxuICAgIGlmICh0aGlzLmltYWdlKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xyXG4gICAgdGhpcy5pbWFnZS5zZWxlY3RhYmxlID0gZmFsc2U7XHJcblxyXG4gICAgXHJcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydCh0aGlzLmltYWdlKTtcclxuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuICAgIHZhciBtYXhXaWR0aCA9IHRoaXMub3B0aW9ucy5tYXhXaWR0aDtcclxuICAgIHZhciBtYXhIZWlnaHQgPSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0O1xyXG4gICAgdmFyIGltYWdlT3JpZW50YXRpb24gPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VPcmllbnRhdGlvbih0aGlzLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24uYWNjZXB0ZWRSYXRpb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5tYXhXaWR0aFBvcnRyYWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhMYW5kc2NhcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbi5vcmllbnRhdGlvbik7XHJcbiAgICAvLyBBZGp1c3Qgd2lkdGggb3IgaGVpZ2h0IGFjY29yZGluZyB0byBzcGVjaWZpZWQgcmF0aW9cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgdmFyIGNhbnZhc1JhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcclxuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRSYXRpbyA+IGNhbnZhc1JhdGlvKSB7XHJcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcclxuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xyXG4gICAgICAgIGNhbnZhc1dpZHRoID0gY2FudmFzSGVpZ2h0ICogY2FudmFzUmF0aW87XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXHJcbiAgICB2YXIgc2NhbGVNaW4gPSAxO1xyXG4gICAgdmFyIHNjYWxlTWF4ID0gMTtcclxuICAgIHZhciBzY2FsZVggPSAxO1xyXG4gICAgdmFyIHNjYWxlWSA9IDE7XHJcblxyXG4gICAgaWYgKG51bGwgIT09IG1heFdpZHRoKSB7XHJcbiAgICAgIGlmKG51bGwgIT09IGltYWdlT3JpZW50YXRpb24ubWF4V2lkdGggJiYgaW1hZ2VPcmllbnRhdGlvbi5tYXhXaWR0aCA8IHRoaXMuaW1hZ2UuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgIHNjYWxlWCA9IGltYWdlT3JpZW50YXRpb24ubWF4V2lkdGggLyB0aGlzLmltYWdlLmdldFdpZHRoKCk7XHJcbiAgICAgIH0gZWxzZSBpZihtYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XHJcbiAgICAgICAgc2NhbGVYID0gIG1heFdpZHRoIC8gY2FudmFzV2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH0gXHJcblxyXG4gICAgaWYgKG51bGwgIT09IG1heEhlaWdodCAmJiBtYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgc2NhbGVZID0gIG1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcclxuICAgIH1cclxuICAgIHNjYWxlTWluID0gTWF0aC5taW4oc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIHNjYWxlWCA9IDE7XHJcbiAgICBzY2FsZVkgPSAxO1xyXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xyXG4gICAgICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1pbldpZHRoIC8gY2FudmFzV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWluSGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XHJcblxyXG4gICAgdmFyIHNjYWxlID0gc2NhbGVNYXggKiBzY2FsZU1pbjsgLy8gb25lIHNob3VsZCBiZSBlcXVhbHMgdG8gMVxyXG5cclxuICAgIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xyXG4gICAgY2FudmFzSGVpZ2h0ICo9IHNjYWxlO1xyXG5cclxuICAgIC8vIEZpbmFsbHkgcGxhY2UgdGhlIGltYWdlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xyXG4gICAgLy90aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xyXG4gICAgLy90aGlzLmltYWdlLnNldFNjYWxlWSgxICogc2NhbGUpO1xyXG4gICAgdGhpcy5pbWFnZS5maWx0ZXJzLnB1c2gobmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlJlc2l6ZSh7XHJcbiAgICAgIHJlc2l6ZVR5cGU6ICdzbGljZUhhY2snLFxyXG4gICAgICBzY2FsZVg6IHNjYWxlLFxyXG4gICAgICBzY2FsZVk6IHNjYWxlXHJcbiAgICB9KSk7XHJcbiAgICB0aGlzLmltYWdlLmFwcGx5RmlsdGVycyh0aGlzLmNhbnZhcy5yZW5kZXJBbGwuYmluZCh0aGlzLmNhbnZhcykpO1xyXG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xyXG4gICAgdGhpcy5jYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XHJcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XHJcbiAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEltYWdlIGhhcyBiZWVuIG1hZGUgZGlydHkgYW5kIGhhcyBub3QgYXBwbGllZCBpdHMgY2hhbmdlcywgcmVzZXQgb3JpZW50YXRpb24gYmVmb3JlIGFwcGx5aW5nXHJcbiAgX3Jlc2NhbGU6IGZ1bmN0aW9uKCkgeyAgICBcclxuICAgIGRlbGV0ZSB0aGlzLnNvdXJjZUltYWdlLmRpcnR5OyBcclxuICAgIGlmICh0aGlzLnNvdXJjZUltYWdlLmFuZ2xlICE9IHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbi5hbmdsZSkge1xyXG4gICAgICB2YXIgaW1hZ2VEYXRhID0gKGZ1bmN0aW9uKGltYWdlKSB7IFxyXG4gICAgICAgIHZhciB3aWR0aCA9IGltYWdlLmdldFdpZHRoKCk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmdldEhlaWdodCgpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhpbWFnZS5hbmdsZSkgPT0gOTAgfHwgTWF0aC5hYnMoaW1hZ2UuYW5nbGUpID09IDI3MCkgeyAvL3N3YXBcclxuICAgICAgICAgIHZhciB0ZW1wID0gd2lkdGg7XHJcbiAgICAgICAgICB3aWR0aCA9IGhlaWdodDtcclxuICAgICAgICAgIGhlaWdodCA9IHRlbXA7XHJcbiAgICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbigpIHsgcmV0dXJuIHdpZHRoOyAgfSxcclxuICAgICAgICBnZXRIZWlnaHQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gaGVpZ2h0OyB9LFxyXG4gICAgICAgIGFuZ2xlOiBpbWFnZS5hbmdsZSxcclxuICAgICAgfX0pKHRoaXMuc291cmNlSW1hZ2UpOyBcclxuICAgICAgdGhpcy5zb3VyY2VJbWFnZU9yaWVudGF0aW9uID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlT3JpZW50YXRpb24oaW1hZ2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5hY2NlcHRlZFJhdGlvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhQb3J0cmFpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24ubWF4V2lkdGhMYW5kc2NhcGUpO1xyXG4gICAgfSAgICBcclxuICB9LFxyXG5cclxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXHJcbiAgLy8gdHJhbnNmb3JtYXRpb25zIHN0YWNrIChpbiBvcmRlciB0byByZWNvbnN0aXR1dGUgdGhlIHByZXZpb3VzIHN0YXRlc1xyXG4gIC8vIG9mIHRoZSBpbWFnZSkuXHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcclxuICAgIHRoaXMudHJhbnNmb3JtYXRpb25zLnB1c2godHJhbnNmb3JtYXRpb24pO1xyXG5cclxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxyXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxyXG4gICAgKTtcclxuICB9LFxyXG5cclxuICBfcG9zdFRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihuZXdJbWFnZSkge1xyXG4gICAgaWYgKG5ld0ltYWdlKVxyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XHJcblxyXG4gICAgaWYgKHRoaXMuc291cmNlSW1hZ2UuZGlydHkpIHtcclxuICAgICAgdGhpcy5fcmVzY2FsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVmcmVzaChmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnRyYW5zZm9ybWF0aW9uJyk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcclxuICAvLyB0cmFuc2Zvcm1hdGlvbnMuXHJcbiAgcmVpbml0aWFsaXplSW1hZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2luaXRpYWxpemVJbWFnZSgpO1xyXG4gICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odGhpcy50cmFuc2Zvcm1hdGlvbnMuc2xpY2UoKSlcclxuICB9LFxyXG5cclxuICBfcG9wVHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKHRyYW5zZm9ybWF0aW9ucykge1xyXG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb3JlOnJlaW5pdGlhbGl6ZWQnKTtcclxuICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcclxuXHJcbiAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XHJcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xyXG4gICAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0cmFuc2Zvcm1hdGlvbnMpXHJcbiAgICB9O1xyXG5cclxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIHRoaXMuc291cmNlQ2FudmFzLFxyXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxyXG4gICAgICBuZXh0LmJpbmQodGhpcylcclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBET00gZWxlbWVudHMgYW5kIGluc3RhbmNpYXRlIHRoZSBGYWJyaWMgY2FudmFzLlxyXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXHJcbiAgLy8gSG93ZXZlciB0aGUgb3JpZ2luYWwgaW1hZ2UgaXMgcmUtaW5qZWN0ZWQgaW4gb3JkZXIgdG8ga2VlcCBhIHRyYWNlIG9mIGl0LlxyXG4gIF9pbml0aWFsaXplRE9NOiBmdW5jdGlvbihpbWFnZUVsZW1lbnQpIHtcclxuICAgIC8vIENvbnRhaW5lclxyXG4gICAgdmFyIG1haW5Db250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tY29udGFpbmVyJztcclxuXHJcbiAgICAvLyBUb29sYmFyXHJcbiAgICB2YXIgdG9vbGJhckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcclxuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRvb2xiYXJFbGVtZW50KTtcclxuXHJcbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcclxuICAgIHZhciBjYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1pbWFnZS1jb250YWluZXInO1xyXG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoY2FudmFzRWxlbWVudCk7XHJcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjYW52YXNDb250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICAvLyBTb3VyY2UgY2FudmFzXHJcbiAgICB2YXIgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XHJcbiAgICBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB2YXIgc291cmNlQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcclxuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHNvdXJjZUNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xyXG5cclxuICAgIC8vIE9yaWdpbmFsIGltYWdlXHJcbiAgICBpbWFnZUVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWFpbkNvbnRhaW5lckVsZW1lbnQsIGltYWdlRWxlbWVudCk7XHJcbiAgICBpbWFnZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcblxyXG4gICAgLy8gSW5zdGFuY2lhdGUgb2JqZWN0IGZyb20gZWxlbWVudHNcclxuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xyXG4gICAgdGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCA9IGltYWdlRWxlbWVudDtcclxuXHJcbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5jYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhjYW52YXNFbGVtZW50LCB7XHJcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvcixcclxuICAgICAgaW1hZ2VTbW9vdGhpbmdFbmFibGVkOiBmYWxzZSxcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZUNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKHNvdXJjZUNhbnZhc0VsZW1lbnQsIHtcclxuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICAvLyBJbnN0YW5jaWF0ZSB0aGUgRmFicmljIGltYWdlIG9iamVjdC5cclxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcclxuICAvLyB0aGVuIGl0IGlzIGFkZCBpbiB0aGUgRmFicmljIGNhbnZhcyBvYmplY3QuXHJcbiAgX2luaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XHJcbiAgICAgIC8vIFNvbWUgb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxyXG4gICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc291cmNlSW1hZ2VPcmllbnRhdGlvbiA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZU9yaWVudGF0aW9uKHRoaXMuc291cmNlSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9yaWVudGF0aW9uLmFjY2VwdGVkUmF0aW9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5tYXhXaWR0aFBvcnRyYWl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vcmllbnRhdGlvbi5tYXhXaWR0aExhbmRzY2FwZSk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xyXG5cclxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XHJcbiAgICB2YXIgY2FudmFzV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xyXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XHJcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XHJcbiAgICB0aGlzLnNvdXJjZUltYWdlLnNldENvb3JkcygpO1xyXG4gIH0sXHJcblxyXG4gIC8vIEluaXRpYWxpemUgZXZlcnkgcGx1Z2lucy5cclxuICAvLyBOb3RlIHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFuY2lhdGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYW4gdGhleVxyXG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cclxuICBfaW5pdGlhbGl6ZVBsdWdpbnM6IGZ1bmN0aW9uKHBsdWdpbnMpIHtcclxuICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xyXG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcclxuICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2luc1tuYW1lXTtcclxuXHJcbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cclxuICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gQXZvaWQgYW55IGlzc3VlcyB3aXRoIF9wcm90b19cclxuICAgICAgaWYgKCFwbHVnaW5zLmhhc093blByb3BlcnR5KG5hbWUpKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICAvLyBjbGVhciBhbGwgYWN0aXZlIHRvb2xiYXIgcGx1Z2luc1xyXG4gIGNsZWFyRm9jdXM6IGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLnBsdWdpbnMpIHtcclxuICAgICAgaWYoa2V5ICE9IGluc3RhbmNlKSB7XHJcbiAgICAgICAgdGhpcy5wbHVnaW5zW2tleV0uY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5QbHVnaW4gPSBQbHVnaW47XHJcblxyXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxyXG4vLyBoYXMgdG8gYmUgZXh0ZW5kZWQgZm9yIGVhY2ggcGx1Z2luLlxyXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcclxuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XHJcbiAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xyXG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG59XHJcblxyXG5QbHVnaW4ucHJvdG90eXBlID0ge1xyXG4gIGRlZmF1bHRzOiB7fSxcclxuICBpbml0aWFsaXplOiBmdW5jdGlvbigpIHsgfSxcclxuICBjbGVhcjogZnVuY3Rpb24oKSB7IH0sXHJcbn1cclxuXHJcblxyXG4vLyBJbnNwaXJlZCBieSBCYWNrYm9uZS5qcyBleHRlbmQgY2FwYWJpbGl0eS5cclxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcclxuXHJcbmZ1bmN0aW9uIFRyYW5zZm9ybWF0aW9uKG9wdGlvbnMpIHtcclxuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG59XHJcblxyXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cclxufVxyXG5cclxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXHJcblRyYW5zZm9ybWF0aW9uLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcclxuICB2YXIgcGFyZW50ID0gdGhpcztcclxuICB2YXIgY2hpbGQ7XHJcblxyXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcclxuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcclxuICB9IGVsc2Uge1xyXG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XHJcbiAgfVxyXG5cclxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XHJcblxyXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XHJcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuICByZXR1cm4gY2hpbGQ7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20uVUkgPSB7XHJcbiAgVG9vbGJhcjogVG9vbGJhcixcclxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXHJcbiAgQnV0dG9uOiBCdXR0b24sXHJcbn07XHJcblxyXG4vLyBUb29sYmFyIG9iamVjdC5cclxuZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XHJcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxufVxyXG5cclxuVG9vbGJhci5wcm90b3R5cGUgPSB7XHJcbiAgY3JlYXRlQnV0dG9uR3JvdXA6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XHJcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApO1xyXG5cclxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEJ1dHRvbkdyb3VwIG9iamVjdC5cclxuZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcclxuICBjcmVhdGVCdXR0b246IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgIHZhciBkZWZhdWx0cyA9IHtcclxuICAgICAgaW1hZ2U6ICdoZWxwJyxcclxuICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICBoaWRlOiBmYWxzZSxcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICB0b29sdGlwOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIG9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgZGVmYXVsdHMpO1xyXG5cclxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25FbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcclxuICAgIGlmIChvcHRpb25zLnRvb2x0aXApIHtcclxuICAgICAgYnV0dG9uRWxlbWVudC50b29sdGlwID0gb3B0aW9ucy50b29sdGlwO1xyXG4gICAgICBidXR0b25FbGVtZW50LnRpdGxlID0gb3B0aW9ucy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uRWxlbWVudC5pbm5lckhUTUwgPSAnPHN2ZyBjbGFzcz1cImRhcmtyb29tLWljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjJyArIG9wdGlvbnMuaW1hZ2UgKyAnXCIgLz48L3N2Zz4nO1xyXG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG5cclxuICAgIHZhciBidXR0b24gPSBuZXcgQnV0dG9uKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcclxuICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCdXR0b24gb2JqZWN0LlxyXG5mdW5jdGlvbiBCdXR0b24oZWxlbWVudCkge1xyXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbn1cclxuXHJcbkJ1dHRvbi5wcm90b3R5cGUgPSB7XHJcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5hdHRhY2hFdmVudCkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcclxuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgfSxcclxuICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUpXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgfSxcclxuICBpc0FjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XHJcbiAgfSxcclxuICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlKVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xyXG4gIH0sXHJcbiAgZGlzYWJsZTogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59O1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5EYXJrcm9vbS5VdGlscyA9IHtcclxuICBleHRlbmQ6IGV4dGVuZCxcclxuICBjb21wdXRlSW1hZ2VWaWV3UG9ydDogY29tcHV0ZUltYWdlVmlld1BvcnQsXHJcbiAgY29tcHV0ZUltYWdlT3JpZW50YXRpb246IGNvbXB1dGVJbWFnZU9yaWVudGF0aW9uLFxyXG4gIGNvbnZlcnRSR0JUb0hleDogY29sb3JUb0hleCxcclxufTtcclxuXHJcbi8vIFV0aWxpdHkgbWV0aG9kIHRvIGVhc2lseSBleHRlbmQgb2JqZWN0cy5cclxuZnVuY3Rpb24gZXh0ZW5kKGIsIGEpIHtcclxuICB2YXIgcHJvcDtcclxuICBpZiAoYiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcbiAgZm9yIChwcm9wIGluIGEpIHtcclxuICAgIGlmIChhLmhhc093blByb3BlcnR5KHByb3ApICYmIGIuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYjtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVJbWFnZU9yaWVudGF0aW9uKGltYWdlLCByYXRpb3MsIHBvcnRyYWl0VywgbGFuZHNjYXBlVywgZm9yY2VPcmllbnRhdGlvbiA9IG51bGwpIHtcclxuICB2YXIgd2lkdGggPSBpbWFnZS5nZXRXaWR0aCgpO1xyXG4gIHZhciBoZWlnaHQgPSBpbWFnZS5nZXRIZWlnaHQoKTtcclxuICB2YXIgcmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuICB2YXIgb3JpZW50YXRpb24gPSBmb3JjZU9yaWVudGF0aW9uIHx8IChyYXRpbyA+IDEgPyAnbGFuZHNjYXBlJyA6ICdwb3J0cmFpdCcpO1xyXG4gIHZhciBiZXN0TWF0Y2hSYXRpbyA9IHsgcmF0aW86ICcxOjEnLCB2YWx1ZTogMS4wIH07XHJcbiAgdmFyIGltYWdlV2lkdGggPSB3aWR0aCxcclxuICAgICAgaW1hZ2VIZWlnaHQgPSBoZWlnaHQ7XHJcbiAgXHJcbiAgaWYgKHJhdGlvcyAmJiByYXRpb3Nbb3JpZW50YXRpb25dKSB7XHJcbiAgICB2YXIgbG93ZXN0RGlmZiA9IDk5OTk5OTk5O1xyXG4gICAgdmFyIGxvd2VzdFJhdGlvID0gJzE6MSc7XHJcbiAgICB2YXIgbG93ZXN0VmFsdWUgPSAxLjA7XHJcblxyXG4gICAgZm9yKHZhciB4PTA7IHg8cmF0aW9zW29yaWVudGF0aW9uXS5sZW5ndGg7IHgrKykge1xyXG4gICAgICB2YXIgciA9IHJhdGlvc1tvcmllbnRhdGlvbl1beF07XHJcbiAgICAgIHZhciBkaWZmID0gTWF0aC5hYnMoci52YWx1ZSAtIHJhdGlvKTtcclxuICAgICAgaWYoZGlmZiA8IGxvd2VzdERpZmYpIHtcclxuICAgICAgICBsb3dlc3REaWZmID0gZGlmZjtcclxuICAgICAgICBsb3dlc3RSYXRpbyA9IHIucmF0aW87XHJcbiAgICAgICAgbG93ZXN0VmFsdWUgPSByLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmVzdE1hdGNoUmF0aW8ucmF0aW8gPSBsb3dlc3RSYXRpbztcclxuICAgIGJlc3RNYXRjaFJhdGlvLnZhbHVlID0gbG93ZXN0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBpZiAob3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgJiYgcG9ydHJhaXRXICYmIGJlc3RNYXRjaFJhdGlvLnZhbHVlICE9IDEuMCkge1xyXG4gICAgICBpbWFnZVdpZHRoID0gX25lYXJlc3RXaWR0aChpbWFnZVdpZHRoLCBwb3J0cmFpdFcsIGJlc3RNYXRjaFJhdGlvLnZhbHVlKTtcclxuICB9IGVsc2UgaWYgKGxhbmRzY2FwZVcgJiYgYmVzdE1hdGNoUmF0aW8udmFsdWUgIT0gMS4wKSB7XHJcbiAgICAgIGltYWdlV2lkdGggPSBfbmVhcmVzdFdpZHRoKGltYWdlV2lkdGgsIGxhbmRzY2FwZVcsIGJlc3RNYXRjaFJhdGlvLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXHJcbiAgICBhc3BlY3RSYXRpbzogYmVzdE1hdGNoUmF0aW8ucmF0aW8sXHJcbiAgICBhc3BlY3RWYWx1ZTogYmVzdE1hdGNoUmF0aW8udmFsdWUsXHJcbiAgICBiZXN0Rml0V2lkdGg6IE1hdGgucm91bmQoaW1hZ2VXaWR0aCksXHJcbiAgICBtYXhXaWR0aDogb3JpZW50YXRpb24gPT09ICdwb3J0cmFpdCcgPyBwb3J0cmFpdFcgOiBsYW5kc2NhcGVXLFxyXG4gICAgYW5nbGU6IGltYWdlLmFuZ2xlIHx8IDBcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xvclRvSGV4KHIsZyxiKSB7XHJcbiAgdmFyIHJoID0gci50b1N0cmluZygxNik7XHJcbiAgdmFyIGdoID0gZy50b1N0cmluZygxNik7XHJcbiAgdmFyIGJoID0gYi50b1N0cmluZygxNik7XHJcbiAgcmV0dXJuIFwiI1wiICsgKHJoLmxlbmd0aCA9PSAxID8gXCIwXCIgKyByaCA6IHJoKSArIChnaC5sZW5ndGggPT0gMSA/IFwiMFwiICsgZ2ggOiBnaCkgKyAoYmgubGVuZ3RoID09IDEgPyBcIjBcIiArIGJoIDogYmgpOyBcclxufVxyXG5cclxuZnVuY3Rpb24gX25lYXJlc3RXaWR0aCh3aWR0aCwgYmFycmllciwgcmF0aW8pIHtcclxuICBpZiAod2lkdGggPT09IG51bGwpIHtcclxuICAgIHJldHVybiBiYXJyaWVyO1xyXG4gIH1cclxuXHJcbiAgdmFyIF93aWR0aCA9IHJhdGlvID4gMSA/IHdpZHRoIC8gcmF0aW8gOiB3aWR0aCAqIHJhdGlvO1xyXG4gIGlmIChfd2lkdGggPiBiYXJyaWVyKSB7XHJcbiAgICB3aWR0aCA9IF9uZWFyZXN0V2lkdGgoX3dpZHRoLCBiYXJyaWVyLCByYXRpbyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2lkdGg7XHJcbn1cclxuXHJcbn0pKCk7XHJcbiIsIjsoZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYykge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgRGFya3Jvb20ucGx1Z2luc1snaGlzdG9yeSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21IaXN0b3J5UGx1Z2luKCkge1xyXG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb3JlOnRyYW5zZm9ybWF0aW9uJywgdGhpcy5fb25UcmFuZm9ybWF0aW9uQXBwbGllZC5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgdW5kbzogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBsYXN0VHJhbnNmb3JtYXRpb24gPSB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wb3AoKTtcclxuICAgICAgdGhpcy51bmRvVHJhbnNmb3JtYXRpb25zLnVuc2hpZnQobGFzdFRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWRvOiBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW5jZWxUcmFuc2Zvcm1hdGlvbiA9IHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5zaGlmdCgpO1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5wdXNoKGNhbmNlbFRyYW5zZm9ybWF0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20ucmVpbml0aWFsaXplSW1hZ2UoKTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfaW5pdEJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdyZWRvJyxcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWRvLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5iYWNrQnV0dG9uLmRpc2FibGUoKHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLmxlbmd0aCA9PT0gMCkpXHJcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5kaXNhYmxlKCh0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMubGVuZ3RoID09PSAwKSlcclxuICAgIH0sXHJcblxyXG4gICAgX29uVHJhbmZvcm1hdGlvbkFwcGxpZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5fdXBkYXRlQnV0dG9ucygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgUm90YXRpb24gPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgIHZhciBhbmdsZSA9IChpbWFnZS5nZXRBbmdsZSgpICsgdGhpcy5vcHRpb25zLmFuZ2xlKSAlIDM2MDtcclxuICAgIGltYWdlLnJvdGF0ZShhbmdsZSk7XHJcbiAgICBpbWFnZS5kaXJ0eSA9IHRydWU7XHJcblxyXG4gICAgdmFyIHdpZHRoLCBoZWlnaHQ7XHJcbiAgICBoZWlnaHQgPSBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSooTWF0aC5jb3MoYW5nbGUqTWF0aC5QSS8xODApKSk7XHJcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcclxuXHJcbiAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xyXG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xyXG5cclxuICAgIGNhbnZhcy5jZW50ZXJPYmplY3QoaW1hZ2UpO1xyXG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XHJcbiAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcblxyXG4gICAgbmV4dCgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5EYXJrcm9vbS5wbHVnaW5zWydyb3RhdGUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XHJcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAncm90YXRlLWxlZnQnXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ3JvdGF0ZS1yaWdodCdcclxuICAgIH0pO1xyXG5cclxuICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJvdGF0ZUxlZnQuYmluZCh0aGlzKSk7XHJcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XHJcbiAgfSxcclxuXHJcbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcclxuICAgIHRoaXMucm90YXRlKC05MCk7XHJcbiAgfSxcclxuXHJcbiAgcm90YXRlUmlnaHQ6IGZ1bmN0aW9uIHJvdGF0ZVJpZ2h0KCkge1xyXG4gICAgdGhpcy5yb3RhdGUoOTApO1xyXG4gIH0sXHJcblxyXG4gIHJvdGF0ZTogZnVuY3Rpb24gcm90YXRlKGFuZ2xlKSB7XHJcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXHJcbiAgICAgIG5ldyBSb3RhdGlvbih7YW5nbGU6IGFuZ2xlfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBQZW5jaWwgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xyXG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgIC8vIFNuYXBzaG90IHRoZSBpbWFnZSBkZWxpbWl0ZWQgYnkgdGhlIGNyb3Agem9uZVxyXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XHJcbiAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gVmFsaWRhdGUgaW1hZ2VcclxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXHJcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcclxuICAgICAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHZhciB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIC8vIEFkZCBpbWFnZVxyXG4gICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcclxuXHJcbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XHJcbiAgICB2YXIgd2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zLnBlbmNpbFpvbmUuX2FwcGx5U2NhbGluZyhjYW52YXMuZ2V0V2lkdGgoKSwgY2FudmFzLmdldEhlaWdodCgpKTsgICAgICAgIFxyXG4gICAgY2FudmFzLmFkZCh0aGlzLm9wdGlvbnMucGVuY2lsWm9uZSk7XHJcbiAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBQZW5jaWxab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLk9iamVjdCwge1xyXG4gICAgdHlwZTogJ3BlbmNpbE9iamVjdCcsXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHsgfTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcclxuICAgICAgICB0aGlzLnRvcCA9IG9wdGlvbnMudG9wIHx8IDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsV2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IG9wdGlvbnMuc3Ryb2tlO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcclxuICAgICAgICB0aGlzLnBhdGggPSBudWxsOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuY1ggPSAtdGhpcy5nZXRXaWR0aCgpLzI7XHJcbiAgICAgICAgdGhpcy5jWSA9IC10aGlzLmdldEhlaWdodCgpLzI7XHJcbiAgICAgICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcclxuICAgIH0sXHJcblxyXG4gICAgX2FwcGx5U2NhbGluZzogZnVuY3Rpb24gKHcsaCkge1xyXG4gICAgICAgIHZhciBzY2FsZVggPSB0aGlzLmdldFdpZHRoKCkgLyB3O1xyXG4gICAgICAgIHZhciBzY2FsZVkgPSB0aGlzLmdldEhlaWdodCgpIC8gaDtcclxuICAgICAgICB0aGlzLnNldCh7IHNjYWxlWDogdGhpcy5zY2FsZVgvc2NhbGVYLCBzY2FsZVk6IHRoaXMuc2NhbGVZL3NjYWxlWSB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX2RyYXcoY3R4KTtcclxuICAgIH0sXHJcblxyXG4gICAgX2RyYXc6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgICAgIGlmKGN0eCAmJiB0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY3R4LmxpbmVKb2luID0gXCJyb3VuZFwiO1xyXG4gICAgICAgICAgICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjdHgubW92ZVRvKCh0aGlzLmNYICsgdGhpcy5wYXRoWzBdLngpICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY1kgKyB0aGlzLnBhdGhbMF0ueSkgKTtcclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgeD0wOyB4PHRoaXMucGF0aC5sZW5ndGg7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRyYXdYID0gKHRoaXMuY1ggKyB0aGlzLnBhdGhbeF0ueCkgO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRyYXdZID0gICh0aGlzLmNZICsgdGhpcy5wYXRoW3hdLnkpIDtcclxuICAgICAgICAgICAgICAgIGN0eC5saW5lVG8oIGRyYXdYLCBkcmF3WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0cm9rZTtcclxuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgX2Nsb25lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFBlbmNpbFpvbmUoe1xyXG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlLFxyXG4gICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5EYXJrcm9vbS5wbHVnaW5zWydwZW5jaWwnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgcGVuY2lsTW9kZTogZmFsc2UsXHJcbiAgICBwZW5jaWxab25lOiBudWxsLFxyXG4gICAgbW91c2VEb3duOiBmYWxzZSxcclxuICAgIHNpemU6IDIwLFxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgICBzdHJva2U6ICcjMDAwJyxcclxuICAgICAgICBzaXplOiAyMCxcclxuICAgICAgICBzaXplRG91YmxlOiA0MCxcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tUGVuY2lsUGx1Z2luKCkge1xyXG4gICAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgICB0aGlzLnBlbmNpbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgICAgIGltYWdlOiAncGVuY2lsJyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0RyYXcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kb3VibGVTaXplID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICAgICAgaW1hZ2U6ICdwZW5jaWwyeCcsXHJcbiAgICAgICAgICAgIGhpZGU6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGF0aCA9IFtdO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmRhcmtyb29tLmNhbnZhcy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLm9wdGlvbnMuc2l6ZTtcclxuICAgICAgICB0aGlzLnN0cm9rZSA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5jb2xvci5oZXggfHwgdGhpcy5vcHRpb25zLnN0cm9rZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTpkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCdjb2xvcjp1cGRhdGUnLCB0aGlzLnVwZGF0ZUNvbG9yLmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5kb3VibGVTaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVTdHJva2VTaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGVuY2lsWm9uZSAhPT0gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQ29sb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlID0gdGhpcy5kYXJrcm9vbS5vcHRpb25zLmNvbG9yLmhleDtcclxuICAgICAgICBpZih0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25DbGljazogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGb2N1cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighdGhpcy5oYXNGb2N1cygpKSBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDpiZWdpbicpO1xyXG4gICAgICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdGgucHVzaCh0aGlzLmdldE1vdXNlUG9zaXRpb24odGhpcy5jYW52YXMsIGV2ZW50KSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZighdGhpcy5oYXNGb2N1cygpKSBcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZih0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDplbmQnKTtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlQZW5jaWxQYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFzRm9jdXMoKSkgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdmFyIG1vdXNlUG9zID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY2FudmFzLCBldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5wdXNoKG1vdXNlUG9zKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJab25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVTdHJva2VTaXplOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmRvdWJsZVNpemUuYWN0aXZlKCF0aGlzLmRvdWJsZVNpemUuaXNBY3RpdmUoKSk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kb3VibGVTaXplLmlzQWN0aXZlKCkgPyB0aGlzLm9wdGlvbnMuc2l6ZURvdWJsZSA6IHRoaXMub3B0aW9ucy5zaXplO1xyXG4gICAgICAgIHRoaXMucGVuY2lsWm9uZS5zaXplID0gdGhpcy5zaXplO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmVGb2N1czogZnVuY3Rpb24oKSB7ICAgICAgICBcclxuICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3BlbmNpbDpkaXNhYmxlZCcpO1xyXG4gICAgICAgIHRoaXMucGVuY2lsQnV0dG9uLmFjdGl2ZShmYWxzZSk7ICAgICAgICBcclxuICAgICAgICB0aGlzLmRvdWJsZVNpemUuaGlkZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnBlbmNpbE1vZGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wZW5jaWxab25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuY2lsWm9uZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wZW5jaWxab25lID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5jbGVhckZvY3VzKCdwZW5jaWwnKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6ZW5hYmxlZCcpO1xyXG4gICAgICAgIHRoaXMucGVuY2lsTW9kZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wZW5jaWxCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuZG91YmxlU2l6ZS5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZG91YmxlU2l6ZS5oaWRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wZW5jaWxab25lID0gdGhpcy5uZXdab25lKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZ2V0TW91c2VQb3NpdGlvbjogZnVuY3Rpb24oY2FudmFzLCBldmVudCkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICB2YXIgcmVjdCA9IGNhbnZhcy5sb3dlckNhbnZhc0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgICAgdmFyIHNjYWxlID0gNzIwLzEyODBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiBwb2ludGVyLngsXHJcbiAgICAgICAgICAgIHk6IHBvaW50ZXIueSxcclxuICAgICAgICAgICAgY3g6IGV2ZW50LmUuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICAgICAgY3k6IGV2ZW50LmUuY2xpZW50WSAtIHJlY3QudG9wLFxyXG4gICAgICAgICAgICBzeDogZXZlbnQuZS5zY3JlZW5YLFxyXG4gICAgICAgICAgICBzeTogZXZlbnQuZS5zY3JlZW5ZXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgbmV3Wm9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wYXRoID0gW107XHJcbiAgICAgICAgdmFyIHN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xyXG4gICAgICAgIHZhciBzaXplID0gdGhpcy5zaXplO1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZGFya3Jvb20uY2FudmFzLmdldEhlaWdodCgpO1xyXG4gICAgICAgIHZhciB6b25lID0gbmV3IFBlbmNpbFpvbmUoe1xyXG4gICAgICAgICAgICBzdHJva2U6IHN0cm9rZSxcclxuICAgICAgICAgICAgc2l6ZTogc2l6ZSxcclxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgZXZlbnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICAgICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gem9uZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXBwbHlQZW5jaWxQYXRoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcclxuICAgICAgICBpZiAodGhpcy5wYXRoID09PSBudWxsIHx8IHRoaXMucGF0aC5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxyXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxyXG4gICAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgICAgdmFyIHpvbmUgPSB0aGlzLnBlbmNpbFpvbmUuX2Nsb25lKCk7XHJcbiAgICAgICAgem9uZS5wYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUGVuY2lsKHtcclxuICAgICAgICAgICAgcGVuY2lsWm9uZTogem9uZSxcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5wZW5jaWxab25lLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMucGVuY2lsWm9uZSA9IHRoaXMubmV3Wm9uZSgpO1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLnBlbmNpbFpvbmUpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXJab25lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZih0aGlzLnBhdGggJiYgdGhpcy5wYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdwZW5jaWw6dXBkYXRlJyk7XHJcbiAgICAgICAgICAgIHRoaXMucGVuY2lsWm9uZS5wYXRoID0gdGhpcy5wYXRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5wZW5jaWxab25lKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG52YXIgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XHJcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xyXG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHNuYXBzaG90Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgLy8gb3B0aW9ucyB0byBtYWtlIHRoZSBpbWFnZSBzdGF0aWNcclxuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcclxuICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICBsb2NrTW92ZW1lbnRYOiB0cnVlLFxyXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXHJcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgIGxvY2tTY2FsaW5nWDogdHJ1ZSxcclxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXHJcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgaGFzQ29udHJvbHM6IGZhbHNlLFxyXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXHJcbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XHJcbiAgICAgIGNhbnZhcy5zZXRIZWlnaHQoaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIEFkZCBpbWFnZVxyXG4gICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XHJcblxyXG4gICAgICBuZXh0KGltZ0luc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcclxuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcclxuXHJcbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XHJcbiAgICB2YXIgd2lkdGggPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMud2lkdGggKiBpbWFnZVdpZHRoLCBpbWFnZVdpZHRoIC0gbGVmdCk7XHJcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcblxyXG4gICAgc25hcHNob3Quc3JjID0gY2FudmFzLnRvRGF0YVVSTCh7XHJcbiAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgIHRvcDogdG9wLFxyXG4gICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBDcm9wWm9uZSA9IGZhYnJpYy51dGlsLmNyZWF0ZUNsYXNzKGZhYnJpYy5SZWN0LCB7XHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gICAgdGhpcy5jYWxsU3VwZXIoJ2luaXRpYWxpemUnLCBvcHRpb25zKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHRoaXMuY2FsbFN1cGVyKCdfcmVuZGVyJywgY3R4KTtcclxuXHJcbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhczsgXHJcbiAgICB2YXIgZGFzaFdpZHRoID0gNztcclxuXHJcbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XHJcbiAgICB2YXIgZmxpcFkgPSB0aGlzLmZsaXBZID8gLTEgOiAxO1xyXG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcclxuXHJcbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG5cclxuICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXHJcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7IFxyXG4gICAgLy9jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjM1LCA3MCwgNzAsIDAuNSknO1xyXG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xyXG5cclxuICAgIC8vIFNldCBkYXNoZWQgYm9yZGVyc1xyXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICBlbHNlIGlmIChjdHgubW96RGFzaCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XHJcblxyXG4gICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xyXG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xyXG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxyXG4gICAgY3R4LmxpbmVEYXNoT2Zmc2V0ID0gZGFzaFdpZHRoO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XHJcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XHJcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XHJcblxyXG4gICAgLy8gUmVzZXQgc2NhbGVcclxuICAgIGN0eC5zY2FsZSgxL3NjYWxlWCwgMS9zY2FsZVkpO1xyXG4gIH0sXHJcblxyXG4gIF9yZW5kZXJPdmVybGF5OiBmdW5jdGlvbihjdHgpIHtcclxuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xyXG4gICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcclxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkyICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXHJcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcclxuICAgIC8vIHkzICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAgICAvL1xyXG4gICAgXHJcbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XHJcbiAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcclxuXHJcbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgIHZhciB5MiA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgXHJcbiAgICAvLyBEcmF3IG91dGVyIHJlY3RhbmdsZS5cclxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXHJcbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDMgKyAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XHJcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcclxuICAgIGN0eC5saW5lVG8oeDAgLSAxLCB5MCAtIDEpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIC8vIERyYXcgaW5uZXIgcmVjdGFuZ2xlLlxyXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xyXG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xyXG5cclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkgeyAgXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciByaWdodFxyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgfSxcclxuXHJcbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xyXG4gICAgLy8gVmVydGljYWwgbGluZXNcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcclxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xyXG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkvMik7XHJcbiAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xyXG4gICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgLy8gSW5pdCBwb2ludFxyXG4gIHN0YXJ0WDogbnVsbCxcclxuICBzdGFydFk6IG51bGwsXHJcblxyXG4gIC8vIEtleWNyb3BcclxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxyXG4gIGlzS2V5TGVmdDogZmFsc2UsXHJcbiAgaXNLZXlVcDogZmFsc2UsXHJcblxyXG4gIGRlZmF1bHRzOiB7XHJcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cclxuICAgIG1pbkhlaWdodDogMSxcclxuICAgIG1pbldpZHRoOiAxLFxyXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cclxuICAgIHJhdGlvOiBudWxsLFxyXG4gICAgLy8gcXVpY2sgY3JvcCBmZWF0dXJlIChzZXQgYSBrZXkgY29kZSB0byBlbmFibGUgaXQpXHJcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY3JvcCcsXHJcbiAgICAgIHRvb2x0aXA6ICdDcm9wJ1xyXG4gICAgfSk7ICAgIFxyXG4gICAgdGhpcy5mdWxsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgaW1hZ2U6ICdmdWxsJyxcclxuICAgICAgdG9vbHRpcDogJ1NlbGVjdCBmdWxsIGFyZWEnLFxyXG4gICAgICBoaWRlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIHRvb2x0aXA6ICdBcHBseSBjaGFuZ2VzJyxcclxuICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcclxuICAgICAgdG9vbHRpcDogJ0NhbmNlbCcsXHJcbiAgICAgIGhpZGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcclxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNyb3BDdXJyZW50Wm9uZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmZ1bGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZ1bGxDcm9wWm9uZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAvLyBDYW52YXMgZXZlbnRzXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6bW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6c2NhbGluZycsIHRoaXMub25PYmplY3RTY2FsaW5nLmJpbmQodGhpcykpO1xyXG5cclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcclxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleXVwJywgdGhpcy5vbktleVVwLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIGNsZWFyOiBmdW5jdGlvbigpIHtcclxuICAgIGlmKHRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcclxuICB9LFxyXG5cclxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcclxuICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKSwgeSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCk7XHJcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcbiAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcclxuICAgIHZhciBtYXhZID0gY2FudmFzLmdldEhlaWdodCgpIC0gaDtcclxuXHJcbiAgICBpZiAoeCA8IDApXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgMCk7XHJcbiAgICBpZiAoeSA8IDApXHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcclxuICAgIGlmICh4ID4gbWF4WClcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcclxuICAgIGlmICh5ID4gbWF4WSlcclxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ3RvcCcsIG1heFkpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcclxuICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XHJcbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XHJcblxyXG4gICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcclxuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcclxuICAgIHZhciBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XHJcbiAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG5cclxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcclxuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBtaW5ZIDwgMCB8fCBtYXhZID4gY2FudmFzLmdldEhlaWdodCgpKSB7XHJcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICB2YXIgbGFzdFNjYWxlWCA9IHRoaXMubGFzdFNjYWxlWCB8fCAxO1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcclxuICAgIH1cclxuICAgIGlmIChtaW5YIDwgMCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcclxuICAgICAgdmFyIGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XHJcbiAgICB9XHJcbiAgICBpZiAobWluWSA8IDApIHtcclxuICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCkgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xyXG4gICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gSW5pdCBjcm9wIHpvbmVcclxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcblxyXG4gICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcclxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XHJcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xyXG4gICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuICAgIHZhciBwb2ludCA9IG5ldyBmYWJyaWMuUG9pbnQoeCwgeSk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cclxuICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XHJcbiAgICBpZiAoYWN0aXZlT2JqZWN0ID09PSB0aGlzLmNyb3Bab25lIHx8IHRoaXMuY3JvcFpvbmUuY29udGFpbnNQb2ludChwb2ludCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgIHRoaXMuc3RhcnRZID0geTtcclxuICB9LFxyXG5cclxuICAvLyBFeHRlbmQgY3JvcCB6b25lXHJcbiAgb25Nb3VzZU1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcclxuICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZylcclxuICAgICAgcmV0dXJuIHRoaXMub25Nb3VzZU1vdmVLZXlDcm9wKGV2ZW50KTtcclxuXHJcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XHJcbiAgfSxcclxuXHJcbiAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgdmFyIHpvbmUgPSB0aGlzLmNyb3Bab25lO1xyXG5cclxuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcclxuICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xyXG4gICAgICB6b25lLnNldFRvcCh5KTtcclxuICAgICAgem9uZS5zZXRMZWZ0KHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNLZXlMZWZ0ID0gIHggPCB6b25lLmxlZnQgKyB6b25lLndpZHRoIC8gMiA7XHJcbiAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDIgO1xyXG5cclxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKFxyXG4gICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxyXG4gICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXHJcbiAgICAgIE1hdGgubWF4KHpvbmUubGVmdCt6b25lLndpZHRoLCB4KSxcclxuICAgICAgTWF0aC5tYXgoem9uZS50b3Arem9uZS5oZWlnaHQsIHkpXHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIC8vIEZpbmlzaCBjcm9wIHpvbmVcclxuICBvbk1vdXNlVXA6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgdGhpcy5pc0tleUNyb3BpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBBY3RpdmUgcXVpY2sgY3JvcCBmbG93XHJcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWUgO1xyXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XHJcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcclxuICAgIHRoaXMuY3JvcFpvbmUuc2V0VG9wKDApO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRMZWZ0KDApO1xyXG4gIH0sXHJcblxyXG4gIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCAhdGhpcy5pc0tleUNyb3BpbmcpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBVbmFjdGl2ZSBxdWljayBjcm9wIGZsb3dcclxuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLnN0YXJ0WCA9IDE7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IDE7XHJcbiAgICB0aGlzLm9uTW91c2VVcCgpO1xyXG4gIH0sXHJcblxyXG4gIHNlbGVjdFpvbmU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XHJcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuXHJcbiAgICBpZiAoIWZvcmNlRGltZW5zaW9uKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHgsIHksIHgrd2lkdGgsIHkraGVpZ2h0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcclxuICAgICAgICAnbGVmdCc6IHgsXHJcbiAgICAgICAgJ3RvcCc6IHksXHJcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgsXHJcbiAgICAgICAgJ2hlaWdodCc6IGhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xyXG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcclxuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XHJcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVDcm9wOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xyXG4gIH0sXHJcblxyXG4gIGZ1bGxDcm9wWm9uZTogZnVuY3Rpb24oKSB7XHJcbiAgICBpZighdGhpcy5oYXNGb2N1cygpKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgdGhpcy5zZWxlY3Rab25lKDAsIDAsIHRoaXMuZGFya3Jvb20uY2FudmFzLndpZHRoLCB0aGlzLmRhcmtyb29tLmNhbnZhcy5oZWlnaHQsIGZhbHNlKTtcclxuICB9LFxyXG5cclxuICBjcm9wQ3VycmVudFpvbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcclxuICAgIGlmICh0aGlzLmNyb3Bab25lLndpZHRoIDwgMSAmJiB0aGlzLmNyb3Bab25lLmhlaWdodCA8IDEpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xyXG5cclxuICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcclxuICAgIHZhciB0b3AgPSB0aGlzLmNyb3Bab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XHJcbiAgICB2YXIgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xyXG4gICAgdmFyIHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xyXG4gICAgdmFyIGhlaWdodCA9IHRoaXMuY3JvcFpvbmUuZ2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxyXG4gICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgaGVpZ2h0ICs9IHRvcDtcclxuICAgICAgdG9wID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgd2lkdGggKz0gbGVmdDtcclxuICAgICAgbGVmdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cclxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxyXG4gICAgLy8gb24gdGhlIHNvdXJjZSBpbWFnZS5cclxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XHJcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXHJcbiAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgfSkpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFRlc3Qgd2V0aGVyIGNyb3Agem9uZSBpcyBzZXRcclxuICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xyXG4gIH0sXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXHJcbiAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cygnY3JvcCcpO1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XHJcbiAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxyXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxyXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAvL2JvcmRlckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXHJcbiAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgIHRyYW5zcGFyZW50Q29ybmVyczogZmFsc2UsXHJcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcclxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KCdsb2NrVW5pU2NhbGluZycsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmFkZCh0aGlzLmNyb3Bab25lKTtcclxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgdGhpcy5mdWxsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gIH0sXHJcblxyXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXHJcbiAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbigpIHtcclxuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xyXG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICB0aGlzLmZ1bGxCdXR0b24uaGlkZSh0cnVlKTtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG5cclxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcclxuICB9LFxyXG5cclxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcclxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XHJcbiAgICB2YXIgaXNMZWZ0ID0gIWlzUmlnaHQ7XHJcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgIHZhciBpc1VwID0gIWlzRG93bjtcclxuXHJcbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblxyXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xyXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XHJcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xyXG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcclxuXHJcbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcclxuICAgIHJpZ2h0WCA9IE1hdGgubWluKGNhbnZhcy5nZXRXaWR0aCgpLCByaWdodFgpO1xyXG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXHJcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuXHJcbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xyXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcclxuICAgICAgaWYgKGlzUmlnaHQpXHJcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcclxuICAgICAgaWYgKGlzRG93bilcclxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcclxuICAgICAgZWxzZVxyXG4gICAgICAgIHRvcFkgPSBib3R0b21ZIC0gbWluSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRydW5jYXRlIHRydW5jYXRlIGFjY29yZGluZyB0byBjYW52YXMgZGltZW5zaW9uc1xyXG4gICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcclxuICAgICAgcmlnaHRYICs9IE1hdGguYWJzKGxlZnRYKTtcclxuICAgICAgbGVmdFggPSAwXHJcbiAgICB9XHJcbiAgICBpZiAocmlnaHRYID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICByaWdodFggPSBjYW52YXMuZ2V0V2lkdGgoKTtcclxuICAgIH1cclxuICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGJvdHRvbVxyXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xyXG4gICAgICB0b3BZID0gMFxyXG4gICAgfVxyXG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICB0b3BZIC09IChib3R0b21ZIC0gY2FudmFzLmdldEhlaWdodCgpKTtcclxuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcclxuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcclxuICAgIHZhciBjdXJyZW50UmF0aW8gPSB3aWR0aCAvIGhlaWdodDtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xyXG4gICAgICB2YXIgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG5cclxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcclxuICAgICAgICBpc0xlZnQgPSB0aGlzLmlzS2V5TGVmdDtcclxuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcclxuICAgICAgICBpZiAoaXNMZWZ0KSB7XHJcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XHJcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobGVmdFggPCAwKSB7XHJcbiAgICAgICAgbGVmdFggPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgIHRvcFkgPSAwO1xyXG4gICAgICAgIC8vVE9ET1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcclxuICAgICAgICB2YXIgbmV3V2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIGxlZnRYO1xyXG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XHJcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcclxuICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xyXG4gICAgICAgIHdpZHRoID0gd2lkdGggKiBuZXdIZWlnaHQgLyBoZWlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIGlmIChpc0xlZnQpIHtcclxuICAgICAgICAgIGxlZnRYID0gZnJvbVggLSB3aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xyXG4gICAgdGhpcy5jcm9wWm9uZS5sZWZ0ID0gbGVmdFg7XHJcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XHJcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNyb3Bab25lLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XHJcblxyXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCIoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbkRhcmtyb29tLnBsdWdpbnNbJ3NhdmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG5cclxuICBkZWZhdWx0czoge1xyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcclxuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgIGltYWdlOiAnc2F2ZSdcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3B0aW9ucy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG59KTtcclxuXHJcbn0pKCk7XHJcbiIsIihmdW5jdGlvbigpIHtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuRGFya3Jvb20ucGx1Z2luc1snY29sb3InXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgbW91c2VEb3duOiBmYWxzZSxcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgYm9yZGVyOiAxLFxyXG4gICAgZGVmYXVsdHM6IHtcclxuICAgICAgICByZWQ6IDAsXHJcbiAgICAgICAgZ3JlZW46IDAsXHJcbiAgICAgICAgYmx1ZTogMFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0aWFsaXplRGFya3Jvb21Db2xvclBsdWdpbigpIHtcclxuICAgICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclBpY2tlckJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgICAgIGltYWdlOiAnY29sb3InXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGluaXRDb2xvciA9ICdyZ2IoJyArIFxyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucmVkICsgJywnICtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmdyZWVuICsgJywnICsgXHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ibHVlICsgJyknO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbkNvbG9yKGluaXRDb2xvcik7XHJcbiAgICAgICAgdGhpcy5kYXJrcm9vbS5vcHRpb25zLmNvbG9yID0geyBcclxuICAgICAgICAgICAgcmdiOiBpbml0Q29sb3IsIFxyXG4gICAgICAgICAgICByZWQ6IHRoaXMub3B0aW9ucy5yZWQsIGdyZWVuOiB0aGlzLm9wdGlvbnMuZ3JlZW4sIGJsdWU6IHRoaXMub3B0aW9ucy5ibHVlLFxyXG4gICAgICAgICAgICBoZXg6IERhcmtyb29tLlV0aWxzLmNvbnZlcnRSR0JUb0hleCh0aGlzLm9wdGlvbnMucmVkLCB0aGlzLm9wdGlvbnMuZ3JlZW4sIHRoaXMub3B0aW9ucy5ibHVlKSBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUltYWdlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMud2lkdGggPSAyNzY7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMuaGVpZ2h0ID0gMjc2O1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLnN0eWxlLnpJbmRleCAgID0gODtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5ib3JkZXIgICA9IFwiMXB4IHNvbGlkXCI7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkud2lkdGggPSAyNTY7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LmhlaWdodCA9IDI1NjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuekluZGV4ICAgPSA5O1xyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5zdHlsZS5ib3JkZXIgICA9IFwiMXB4IHNvbGlkICMzMzNcIjtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LnN0eWxlLnRvcCA9ICcxMHB4JztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUubGVmdCA9ICcxMHB4JztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29sb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbG9yQ29udGFpbmVyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJzsgXHJcbiAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJzAnO1xyXG5cclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVJbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICcjNDQ0JztcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEsMSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMuY29sb3JQYWxldHRlSW1hZ2UsIDAsMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29sb3JQYWxldHRlQ2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5jb2xvckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb2xvckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXJrcm9vbS5jb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29sb3JQYWxldHRlQ2FudmFzKTtcclxuICAgICAgICAgICAgLy90aGlzLmRhcmtyb29tLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb2xvclBhbGV0dGVPdmVybGF5KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlSW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL2NvbG9ycy5wbmcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jb2xvclBpY2tlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2NvbG9yOnN0YXJ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2NvbG9yOmVuZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheSwgZXZlbnQpO1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IodGhpcy5jb2xvclBhbGV0dGVDYW52YXMsIG1vdXNlUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9uQ29sb3IoY29sb3IucmdiKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBvaW50ZXIobW91c2VQb3NpdGlvbiwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20ub3B0aW9ucy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY29sb3I6dXBkYXRlJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIHZhciBtb3VzZVBvcyA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbih0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXksIGV2ZW50KTtcclxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd24gJiYgdGhpcy5jb2xvclBhbGV0dGVJbWFnZSkge1xyXG4gICAgICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKHRoaXMuY29sb3JQYWxldHRlQ2FudmFzLCBtb3VzZVBvcyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnV0dG9uQ29sb3IoY29sb3IucmdiKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb2ludGVyKG1vdXNlUG9zLCBjb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZUNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgdGhpcy5jb2xvclBhbGV0dGVDYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldE1vdXNlUG9zaXRpb246IGZ1bmN0aW9uKGNhbnZhcywgZXZlbnQpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgcGFkZGluZyA9dGhpcy5wYWRkaW5nIHx8IDA7XHJcbiAgICAgICAgdmFyIGJvcmRlciA9IHRoaXMuYm9yZGVyIHx8IDA7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcclxuICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wLFxyXG4gICAgICAgICAgICBkYXRhWDogZXZlbnQubGF5ZXJYIC0gKGJvcmRlciArIDEpLFxyXG4gICAgICAgICAgICBkYXRhWTogZXZlbnQubGF5ZXJZIC0gKGJvcmRlciArIDEpLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIGdldENvbG9yOiBmdW5jdGlvbihjYW52YXMsIG1vdXNlUG9zaXRpb24pIHtcclxuICAgICAgICB2YXIgaW1nT2JqID0gdGhpcy5jb2xvclBhbGV0dGVJbWFnZTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh0aGlzLnBhZGRpbmcsIHRoaXMucGFkZGluZywgaW1nT2JqLndpZHRoLCBpbWdPYmoud2lkdGgpO1xyXG4gICAgICAgIHZhciBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XHJcbiAgICAgICAgdmFyIHggPSBtb3VzZVBvc2l0aW9uLmRhdGFYIDwgMCA/IDAgOiBtb3VzZVBvc2l0aW9uLmRhdGFYO1xyXG4gICAgICAgIHZhciB5ID0gbW91c2VQb3NpdGlvbi5kYXRhWSA8IDAgPyAwIDogbW91c2VQb3NpdGlvbi5kYXRhWTtcclxuICAgICAgICB2YXIgcmVkID0gZGF0YVsoKGltZ09iai53aWR0aCAqIHkpICsgeCkgKiA0XTtcclxuICAgICAgICB2YXIgZ3JlZW4gPSBkYXRhWygoaW1nT2JqLndpZHRoICogeSkgKyB4KSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgYmx1ZSA9IGRhdGFbKChpbWdPYmoud2lkdGggKiB5KSArIHgpICogNCArIDJdO1xyXG4gICAgICAgIHZhciBjb2xvciA9ICdyZ2IoJyArIHJlZCArICcsJyArIGdyZWVuICsgJywnICsgYmx1ZSArICcpJztcclxuICAgICAgICB2YXIgaGV4ID0gRGFya3Jvb20uVXRpbHMuY29udmVydFJHQlRvSGV4KHJlZCwgZ3JlZW4sIGJsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZ2I6IGNvbG9yLFxyXG4gICAgICAgICAgICByZWQ6IHJlZCwgXHJcbiAgICAgICAgICAgIGdyZWVuOiBncmVlbiwgXHJcbiAgICAgICAgICAgIGJsdWU6IGJsdWUsXHJcbiAgICAgICAgICAgIGhleDogaGV4XHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlQnV0dG9uQ29sb3I6IGZ1bmN0aW9uKHJnYikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbG9yUGlja2VyQnV0dG9uICE9PSBudWxsICYmIHRoaXMuY29sb3JQaWNrZXJCdXR0b24uZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yUGlja2VyQnV0dG9uLmVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuc3R5bGUuZmlsbCA9IHJnYjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uKG1vdXNlUG9zaXRpb24sIGNvbG9yKSB7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IDU7XHJcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY29sb3JQYWxldHRlT3ZlcmxheS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jb2xvclBhbGV0dGVPdmVybGF5LndpZHRoLCB0aGlzLmNvbG9yUGFsZXR0ZU92ZXJsYXkuaGVpZ2h0KTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyhtb3VzZVBvc2l0aW9uLngsIG1vdXNlUG9zaXRpb24ueSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgIGlmKGNvbG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKGNvbG9yLnJlZCA8IDYwICYmIGNvbG9yLmdyZWVuIDwgNjAgJiYgY29sb3IuYmx1ZSA8IDYwKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG59KSgpO1xyXG4iLCI7KGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICB2YXIgUmVkYWN0ID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcclxuICAgIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcclxuICAgICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpO1xyXG4gICAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xyXG4gICAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XHJcblxyXG4gICAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcclxuICAgICAgdmFyIHRvcCA9IHRoaXMub3B0aW9ucy50b3AgKiBpbWFnZUhlaWdodDtcclxuICAgICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xyXG4gICAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XHJcbiAgICAgIHZhciBjb2xvciA9IHRoaXMub3B0aW9ucy5jb2xvcjtcclxuICAgICAgdmFyIHBpeGVsID0gdGhpcy5vcHRpb25zLnBpeGVsO1xyXG5cclxuICAgICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXHJcbiAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxyXG4gICAgICAgIGlmIChoZWlnaHQgPCAxIHx8IHdpZHRoIDwgMSlcclxuICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XHJcbiAgICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xyXG4gICAgICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICBldmVudGVkOiBmYWxzZSxcclxuICAgICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXHJcbiAgICAgICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxyXG4gICAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXHJcbiAgICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXHJcbiAgICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcmVkYWN0RmlsdGVyID0gbmV3IGZhYnJpYy5JbWFnZS5maWx0ZXJzLlJlZGFjdCh7XHJcbiAgICAgICAgICBsZWZ0OiAgIGxlZnQsXHJcbiAgICAgICAgICB0b3A6ICAgIHRvcCxcclxuICAgICAgICAgIHdpZHRoOiAgd2lkdGgsXHJcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgIGNvbG9yOiBjb2xvcixcclxuICAgICAgICAgIHBpeGVsOiBwaXhlbFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbWdJbnN0YW5jZS5hcHBseUZpbHRlcnMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gQWRkIGltYWdlXHJcbiAgICAgICAgICBpbWFnZS5yZW1vdmUoKTtcclxuICAgICAgICAgIGNhbnZhcy5hZGQoaW1nSW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xyXG4gICAgICAgIH0sIFtyZWRhY3RGaWx0ZXJdKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgdmFyIFJlZGFjdFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xyXG4gICAgX3JlbmRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgICAgdmFyIGRhc2hXaWR0aCA9IDc7XHJcblxyXG4gICAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcclxuICAgICAgdmFyIGZsaXBYID0gdGhpcy5mbGlwWCA/IC0xIDogMTtcclxuICAgICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcclxuICAgICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XHJcbiAgICAgIHZhciBzY2FsZVkgPSBmbGlwWSAvIHRoaXMuc2NhbGVZO1xyXG5cclxuICAgICAgY3R4LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuXHJcbiAgICAgIC8vIE92ZXJsYXkgcmVuZGVyaW5nXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcclxuICAgICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xyXG5cclxuICAgICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXHJcbiAgICAgIGlmIChjdHguc2V0TGluZURhc2ggIT09IHVuZGVmaW5lZClcclxuICAgICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XHJcbiAgICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgY3R4Lm1vekRhc2ggPSBbZGFzaFdpZHRoLCBkYXNoV2lkdGhdO1xyXG5cclxuICAgICAgLy8gRmlyc3QgbGluZXMgcmVuZGVyaW5nIHdpdGggYmxhY2tcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgICAgLy8gUmUgcmVuZGVyIGxpbmVzIGluIHdoaXRlXHJcbiAgICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XHJcbiAgICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcclxuICAgICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xyXG5cclxuICAgICAgLy8gUmVzZXQgc2NhbGVcclxuICAgICAgY3R4LnNjYWxlKDEgLyBzY2FsZVgsIDEgLyBzY2FsZVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcclxuICAgICAgdmFyIGJvcmRlck9mZnNldCA9IDA7XHJcblxyXG4gICAgICAvL1xyXG4gICAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xyXG4gICAgICAvLyB5MCArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MSArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcclxuICAgICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XHJcbiAgICAgIC8vICAgIHxcXFxcXFxcXFxcXFx8ICAgICAgICAgfFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxyXG4gICAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gICAgICAvL1xyXG5cclxuICAgICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xyXG4gICAgICB2YXIgeDEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xyXG4gICAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XHJcbiAgICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XHJcblxyXG4gICAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XHJcbiAgICAgIHZhciB5MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICB2YXIgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XHJcblxyXG4gICAgICAvLyBVcHBlciByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTAsIHgzIC0geDAsIHkxIC0geTAgKyBib3JkZXJPZmZzZXQpO1xyXG5cclxuICAgICAgLy8gTGVmdCByZWN0XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4MCwgeTEsIHgxIC0geDAsIHkyIC0geTEgKyBib3JkZXJPZmZzZXQpO1xyXG5cclxuICAgICAgLy8gUmlnaHQgcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDIsIHkxLCB4MyAtIHgyLCB5MiAtIHkxICsgYm9yZGVyT2Zmc2V0KTtcclxuXHJcbiAgICAgIC8vIERvd24gcmVjdFxyXG4gICAgICBjdHguZmlsbFJlY3QoeDAsIHkyLCB4MyAtIHgwLCB5MyAtIHkyKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyB1cHBlciBsZWZ0XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkgLyAyLCB0aGlzLmdldEhlaWdodCgpIC8gMik7IC8vIGRvd24gcmlnaHRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgdGhpcy5nZXRIZWlnaHQoKSAvIDIpOyAvLyBkb3duIGxlZnRcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTsgLy8gdXBwZXIgbGVmdFxyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIF9yZW5kZXJHcmlkOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgIC8vIFZlcnRpY2FsIGxpbmVzXHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xyXG4gICAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldFdpZHRoKCksIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAyIC8gMyAqIHRoaXMuZ2V0V2lkdGgoKSwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcclxuICAgICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpIC8gMik7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDEgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMSAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKSAvIDIsIC10aGlzLmdldEhlaWdodCgpIC8gMiArIDIgLyAzICogdGhpcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpIC8gMiwgLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyICsgMiAvIDMgKiB0aGlzLmdldEhlaWdodCgpKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBEYXJrcm9vbS5wbHVnaW5zWydyZWRhY3QnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xyXG4gICAgLy8gSW5pdCBwb2ludFxyXG4gICAgc3RhcnRYOiBudWxsLFxyXG4gICAgc3RhcnRZOiBudWxsLFxyXG5cclxuICAgIGRlZmF1bHRzOiB7XHJcbiAgICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxyXG4gICAgICBtaW5IZWlnaHQ6IDEsXHJcbiAgICAgIG1pbldpZHRoOiAxLFxyXG4gICAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xyXG4gICAgICByYXRpbzogbnVsbFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3RCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnbWFzaycsXHJcbiAgICAgICAgdG9vbHRpcDogJ1JlZGFjdCdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XHJcbiAgICAgICAgaW1hZ2U6ICdwaXhlbGF0ZScsXHJcbiAgICAgICAgaGlkZTogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwOiAnUGl4ZWxhdGUnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcclxuICAgICAgICBpbWFnZTogJ2RvbmUnLFxyXG4gICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICB0b29sdGlwOiAnQXBwbHkgY2hhbmdlcycsXHJcbiAgICAgICAgaGlkZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xyXG4gICAgICAgIGltYWdlOiAnY2xvc2UnLFxyXG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgIHRvb2x0aXA6ICdDYW5jZWwnLFxyXG4gICAgICAgIGhpZGU6IHRydWVcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCdXR0b25zIGNsaWNrXHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVSZWRhY3QuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0UGl4ZWwuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlZGFjdEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xyXG4gICAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgLy8gQ2FudmFzIGV2ZW50c1xyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOnVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQXZvaWQgY3JvcCB6b25lIHRvIGdvIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzXHJcbiAgICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMucmVkYWN0Wm9uZSlcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIHZhciBtYXhYID0gY2FudmFzLmdldFdpZHRoKCkgLSB3O1xyXG4gICAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XHJcblxyXG4gICAgICBpZiAoeCA8IDApXHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcclxuICAgICAgaWYgKHkgPCAwKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcclxuICAgICAgaWYgKHggPiBtYXhYKVxyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCdsZWZ0JywgbWF4WCk7XHJcbiAgICAgIGlmICh5ID4gbWF4WSlcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXHJcbiAgICBvbk9iamVjdFNjYWxpbmc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XHJcbiAgICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5yZWRhY3Rab25lKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG5cclxuICAgICAgdmFyIG1pblggPSBjdXJyZW50T2JqZWN0LmdldExlZnQoKTtcclxuICAgICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xyXG4gICAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xyXG4gICAgICB2YXIgbWF4WSA9IGN1cnJlbnRPYmplY3QuZ2V0VG9wKCkgKyBjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpO1xyXG5cclxuICAgICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xyXG4gICAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVgobGFzdFNjYWxlWCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1pblggPCAwKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRMZWZ0KDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xyXG4gICAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRTY2FsZVkobGFzdFNjYWxlWSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1pblkgPCAwKSB7XHJcbiAgICAgICAgY3VycmVudE9iamVjdC5zZXRUb3AoMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcclxuICAgICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xyXG4gICAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5sYXN0U2NhbGVYID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVgoKTtcclxuICAgICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBJbml0IGNyb3Agem9uZVxyXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xyXG5cclxuICAgICAgLy8gcmVjYWxjdWxhdGUgb2Zmc2V0LCBpbiBjYXNlIGNhbnZhcyB3YXMgbWFuaXB1bGF0ZWQgc2luY2UgbGFzdCBgY2FsY09mZnNldGBcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuICAgICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcclxuICAgICAgdmFyIHggPSBwb2ludGVyLng7XHJcbiAgICAgIHZhciB5ID0gcG9pbnRlci55O1xyXG4gICAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xyXG5cclxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cclxuICAgICAgdmFyIGFjdGl2ZU9iamVjdCA9IGNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5yZWRhY3Rab25lIHx8IHRoaXMucmVkYWN0Wm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLnNldFdpZHRoKDApO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0SGVpZ2h0KDApO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0U2NhbGVYKDEpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0U2NhbGVZKDEpO1xyXG5cclxuICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIEV4dGVuZCBjcm9wIHpvbmVcclxuICAgIG9uTW91c2VNb3ZlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XHJcbiAgICAgIHZhciB4ID0gcG9pbnRlci54O1xyXG4gICAgICB2YXIgeSA9IHBvaW50ZXIueTtcclxuXHJcbiAgICAgIHRoaXMuX3JlbmRlclJlZGFjdFpvbmUodGhpcy5zdGFydFgsIHRoaXMuc3RhcnRZLCB4LCB5KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gRmluaXNoIGNyb3Agem9uZVxyXG4gICAgb25Nb3VzZVVwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5zZXRDb29yZHMoKTtcclxuICAgICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICBjYW52YXMuY2FsY09mZnNldCgpO1xyXG5cclxuICAgICAgdGhpcy5zdGFydFggPSBudWxsO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlbGVjdFpvbmU6IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmb3JjZURpbWVuc2lvbikge1xyXG4gICAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcclxuICAgICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xyXG5cclxuICAgICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlclJlZGFjdFpvbmUoeCwgeSwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0KHtcclxuICAgICAgICAgICdsZWZ0JzogeCxcclxuICAgICAgICAgICd0b3AnOiB5LFxyXG4gICAgICAgICAgJ3dpZHRoJzogd2lkdGgsXHJcbiAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLnJlZGFjdFpvbmUpO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUuc2V0Q29vcmRzKCk7XHJcbiAgICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5yZWRhY3Rab25lKTtcclxuICAgICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRQaXhlbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5waXhlbCA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5hY3RpdmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMucmVkYWN0QnV0dG9uLmFjdGl2ZShmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFJlZGFjdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWRhY3RCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgdGhpcy5waXhlbCA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICB0b2dnbGVSZWRhY3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXHJcbiAgICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaWYodGhpcy5yZWRhY3RCbHVyQnV0dG9uLmlzQWN0aXZlKCkpIHtcclxuICAgICAgICAgIHRoaXMuc2V0UmVkYWN0KCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVsZWFzZUZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVkYWN0Q3VycmVudFpvbmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEF2b2lkIHJlZGFjdGluZyBlbXB0eSB6b25lXHJcbiAgICAgIGlmICh0aGlzLnJlZGFjdFpvbmUud2lkdGggPCAxICYmIHRoaXMucmVkYWN0Wm9uZS5oZWlnaHQgPCAxKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBkYXJrcm9vbSA9IHRoaXMuZGFya3Jvb207XHJcbiAgICAgIHZhciBjYW52YXMgPSBkYXJrcm9vbS5jYW52YXM7XHJcbiAgICAgIHZhciBpbWFnZSA9IGRhcmtyb29tLmltYWdlO1xyXG5cclxuICAgICAgLy8gQ29tcHV0ZSBjcm9wIHpvbmUgZGltZW5zaW9uc1xyXG4gICAgICB2YXIgdG9wID0gdGhpcy5yZWRhY3Rab25lLmdldFRvcCgpIC0gaW1hZ2UuZ2V0VG9wKCk7XHJcbiAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWRhY3Rab25lLmdldExlZnQoKSAtIGltYWdlLmdldExlZnQoKTtcclxuICAgICAgdmFyIHdpZHRoID0gdGhpcy5yZWRhY3Rab25lLmdldFdpZHRoKCk7XHJcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLnJlZGFjdFpvbmUuZ2V0SGVpZ2h0KCk7XHJcbiAgICAgIHZhciBjb2xvciA9IHRoaXMuZGFya3Jvb20ub3B0aW9ucy5jb2xvciB8fCBudWxsO1xyXG4gICAgICB2YXIgcGl4ZWwgPSB0aGlzLnBpeGVsIHx8IGZhbHNlO1xyXG5cclxuICAgICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxyXG4gICAgICBpZiAodG9wIDwgMCkge1xyXG4gICAgICAgIGhlaWdodCArPSB0b3A7XHJcbiAgICAgICAgdG9wID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxlZnQgPCAwKSB7XHJcbiAgICAgICAgd2lkdGggKz0gbGVmdDtcclxuICAgICAgICBsZWZ0ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cclxuICAgICAgLy8gTWFrZSBzdXJlIHRvIHVzZSByZWxhdGl2ZSBkaW1lbnNpb24gc2luY2UgdGhlIGNyb3Agd2lsbCBiZSBhcHBsaWVkXHJcbiAgICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgUmVkYWN0KHtcclxuICAgICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxyXG4gICAgICAgIGxlZnQ6IGxlZnQgLyBpbWFnZS5nZXRXaWR0aCgpLFxyXG4gICAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXHJcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcclxuICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgcGl4ZWw6IHBpeGVsXHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gVGVzdCB3aGV0aGVyIHJlZGFjdCB6b25lIGlzIHNldFxyXG4gICAgaGFzRm9jdXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucmVkYWN0Wm9uZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbGVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmKHRoaXMuaGFzRm9jdXMoKSkgXHJcbiAgICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSByZWRhY3Qgem9uZVxyXG4gICAgcmVxdWlyZUZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2xlYXJGb2N1cygncmVkYWN0Jyk7XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUgPSBuZXcgUmVkYWN0Wm9uZSh7XHJcbiAgICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcclxuICAgICAgICBvcmlnaW5YOiAnbGVmdCcsXHJcbiAgICAgICAgb3JpZ2luWTogJ3RvcCcsXHJcbiAgICAgICAgLy9zdHJva2U6ICcjNDQ0JyxcclxuICAgICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxyXG4gICAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgICBjb3JuZXJDb2xvcjogJyM0NDQnLFxyXG4gICAgICAgIGNvcm5lclNpemU6IDgsXHJcbiAgICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcclxuICAgICAgICBsb2NrUm90YXRpb246IHRydWUsXHJcbiAgICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2VcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3Rab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMucmVkYWN0Wm9uZSk7XHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgIGlmKHRoaXMucGl4ZWwpIHtcclxuICAgICAgICB0aGlzLnJlZGFjdEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5hY3RpdmUodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yZWRhY3RCdXR0b24uYWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVkYWN0Qmx1ckJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlZGFjdEJsdXJCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZShmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIHJlZGFjdCB6b25lXHJcbiAgICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5yZWRhY3Rab25lKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5yZW1vdmUoKTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy5yZWRhY3RCdXR0b24uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgdGhpcy5yZWRhY3RCbHVyQnV0dG9uLmhpZGUodHJ1ZSk7XHJcbiAgICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcclxuICAgICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ3JlZGFjdDp1cGRhdGUnKTtcclxuICAgIH0sXHJcblxyXG4gICAgX3JlbmRlclJlZGFjdFpvbmU6IGZ1bmN0aW9uIChmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcclxuXHJcbiAgICAgIHZhciBpc1JpZ2h0ID0gKHRvWCA+IGZyb21YKTtcclxuICAgICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xyXG4gICAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcclxuICAgICAgdmFyIGlzVXAgPSAhaXNEb3duO1xyXG5cclxuICAgICAgdmFyIG1pbldpZHRoID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5XaWR0aCwgY2FudmFzLmdldFdpZHRoKCkpO1xyXG4gICAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcblxyXG4gICAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXHJcbiAgICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xyXG4gICAgICB2YXIgcmlnaHRYID0gTWF0aC5tYXgoZnJvbVgsIHRvWCk7XHJcbiAgICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XHJcbiAgICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XHJcblxyXG4gICAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXHJcbiAgICAgIGxlZnRYID0gTWF0aC5tYXgoMCwgbGVmdFgpO1xyXG4gICAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcclxuICAgICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpO1xyXG4gICAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcclxuXHJcbiAgICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXHJcbiAgICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XHJcbiAgICAgICAgaWYgKGlzUmlnaHQpXHJcbiAgICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIGxlZnRYID0gcmlnaHRYIC0gbWluV2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XHJcbiAgICAgICAgaWYgKGlzRG93bilcclxuICAgICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgIHRvcFkgPSBib3R0b21ZIC0gbWluSGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcclxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgbGVmdFxyXG4gICAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XHJcbiAgICAgICAgbGVmdFggPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxyXG4gICAgICAgIGxlZnRYIC09IChyaWdodFggLSBjYW52YXMuZ2V0V2lkdGgoKSk7XHJcbiAgICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRvcFkgPCAwKSB7XHJcbiAgICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cclxuICAgICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xyXG4gICAgICAgIHRvcFkgPSAwXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcclxuICAgICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XHJcbiAgICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdpZHRoID0gcmlnaHRYIC0gbGVmdFg7XHJcbiAgICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcclxuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcclxuICAgICAgICB2YXIgcmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdXaWR0aCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcclxuICAgICAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgLyAocmF0aW8gKiBoZWlnaHQgLyB3aWR0aCk7XHJcbiAgICAgICAgICBpZiAoaXNVcCkge1xyXG4gICAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxlZnRYIDwgMCkge1xyXG4gICAgICAgICAgbGVmdFggPSAwO1xyXG4gICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3BZIDwgMCkge1xyXG4gICAgICAgICAgdG9wWSA9IDA7XHJcbiAgICAgICAgICAvL1RPRE9cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlZnRYICsgd2lkdGggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xyXG4gICAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcclxuICAgICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XHJcbiAgICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xyXG4gICAgICAgICAgaWYgKGlzVXApIHtcclxuICAgICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xyXG4gICAgICAgICAgdmFyIG5ld0hlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIHRvcFk7XHJcbiAgICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xyXG4gICAgICAgICAgaWYgKGlzTGVmdCkge1xyXG4gICAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBBcHBseSBjb29yZGluYXRlc1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUubGVmdCA9IGxlZnRYO1xyXG4gICAgICB0aGlzLnJlZGFjdFpvbmUudG9wID0gdG9wWTtcclxuICAgICAgdGhpcy5yZWRhY3Rab25lLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMucmVkYWN0Wm9uZS5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5yZWRhY3Rab25lKTtcclxuXHJcbiAgICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncmVkYWN0OnVwZGF0ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKTtcclxuIiwiKGZ1bmN0aW9uIChEYXJrcm9vbSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgZnVuY3Rpb24gZ2V0SW1wbGVtZW50YXRpb24oX3RoaXMpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIZWxwZXIgbWV0aG9kIHVwZGF0ZXMgc3RhdGUgb2YgYnV0dG9ucyByZWxhdGl2ZSB0byBpbWFnZSBzaXplIHYgY2FudmFzIHNpemVcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBfdXBkYXRlQnV0dG9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcywgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZSwgcGFuQnV0dG9uID0gX3RoaXMuYnV0dG9ucy5wYW4sIHpvb21PdXRCdXR0b24gPSBfdGhpcy5idXR0b25zLnpvb21PdXQsIHNob3VsZERpc2FibGUgPSAoKGltYWdlLmdldFdpZHRoKCkgPD0gY2FudmFzLmdldFdpZHRoKCkpICYmIChpbWFnZS5nZXRIZWlnaHQoKSA8PSBjYW52YXMuZ2V0SGVpZ2h0KCkpKTtcclxuICAgICAgICAgICAgcGFuQnV0dG9uLmRpc2FibGUoc2hvdWxkRGlzYWJsZSk7XHJcbiAgICAgICAgICAgIHpvb21PdXRCdXR0b24uZGlzYWJsZShzaG91bGREaXNhYmxlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEhlbHBlciBtZXRob2QgZW5zdXJlcyBib3R0b20gZWRnZSBhbmQgcmlnaHQgZWRnZSBvZiBpbWFnZSBuZXZlciBtb3ZlIHRvIGEgcG9zaXRpb24gbGVzcyB0aGFuIHRoZSBjYW52YXNcclxuICAgICAgICAgKiBib3R0b20gZWRnZSBhbmQgcmlnaHQgZWRnZSByZXNwZWN0aXZlbHlcclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBfcmVmaXRJbWFnZUluQ2FudmFzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzLCBtaW5YID0gY2FudmFzLmdldFdpZHRoKCksIG1pblkgPSBjYW52YXMuZ2V0SGVpZ2h0KCksIGltYWdlID0gX3RoaXMuZGFya3Jvb20uaW1hZ2UsIGJvdHRvbVJpZ2h0ID0gaW1hZ2Uub0Nvb3Jkcy5icjtcclxuICAgICAgICAgICAgaWYgKGJvdHRvbVJpZ2h0LnggPCBtaW5YKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5sZWZ0ID0gaW1hZ2UubGVmdCArIChtaW5YIC0gYm90dG9tUmlnaHQueCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UubGVmdCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5sZWZ0ID0gMDtcclxuICAgICAgICAgICAgICAgIH0gLy8gYnV0IG5vdCBiZXlvbmQgbGVmdCBlZGdlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGJvdHRvbVJpZ2h0LnkgPCBtaW5ZKSB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZS50b3AgPSBpbWFnZS50b3AgKyAobWluWSAtIGJvdHRvbVJpZ2h0LnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLnRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS50b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSAvLyBidXQgbm90IGJleW9uZCB0b3AgZWRnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgem9vbSA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBfdGhpcy5kYXJrcm9vbS5pbWFnZTtcclxuICAgICAgICAgICAgaW1hZ2Uuc2NhbGUoaW1hZ2Uuc2NhbGVYICogZGVsdGEpO1xyXG4gICAgICAgICAgICBfdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCd6b29tOmNoYW5nZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIF9pbml0UGFuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdGF0ZXMucGFuQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9ucy5wYW4uYWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzO1xyXG4gICAgICAgICAgICBjYW52YXMub24oJ21vdXNlOmRvd24nLCBldmVudExpc3RlbmVycy5wYW5FbnRlcik7XHJcbiAgICAgICAgICAgIGNhbnZhcy5vbignbW91c2U6dXAnLCBldmVudExpc3RlbmVycy5wYW5FeGl0KTtcclxuICAgICAgICAgICAgY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgZXZlbnRMaXN0ZW5lcnMucGFuKTtcclxuICAgICAgICAgICAgY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnbW92ZSc7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgX2V4aXRQYW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHN0YXRlcy5wYW5BY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3RoaXMuYnV0dG9ucy5wYW4uYWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6ZG93bicsIGV2ZW50TGlzdGVuZXJzLnBhbkVudGVyKTtcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6dXAnLCBldmVudExpc3RlbmVycy5wYW5FeGl0KTtcclxuICAgICAgICAgICAgY2FudmFzLm9mZignbW91c2U6bW92ZScsIGV2ZW50TGlzdGVuZXJzLnBhbik7XHJcbiAgICAgICAgICAgIGlmIChjYW52YXMuZGVmYXVsdEN1cnNvciA9PSAnbW92ZScpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5kZWZhdWx0Q3Vyc29yID0gJ2RlZmF1bHQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBMaW1pdHMgcGFuIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGltYWdlIHJlbGF0aXZlIHRvIGNhbnZhcyBkaW1lbnNpb25zXHJcbiAgICAgICAgICogQHBhcmFtIGRlbHRhXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgX2NvbnN0cmFpblBhbiA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgICAgICB2YXIgY2FudmFzID0gX3RoaXMuZGFya3Jvb20uY2FudmFzLCBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLCB0bCA9IGltYWdlLm9Db29yZHMudGwsIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgICBiciA9IGltYWdlLm9Db29yZHMuYnI7IC8vIGJvdHRvbSByaWdodCBjb3JuZXJcclxuICAgICAgICAgICAgaWYgKGRlbHRhLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS54ID0gKCh0bC54ICsgZGVsdGEueCkgPiAwKSA/IDAgOiBNYXRoLmZsb29yKGRlbHRhLngpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsdGEueCA9IE1hdGguY2VpbChkZWx0YS54KTtcclxuICAgICAgICAgICAgICAgIGlmICgoTWF0aC5jZWlsKGJyLngpICsgZGVsdGEueCkgPCBjYW52YXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YS54ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGVsdGEueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRlbHRhLnkgPSAoKHRsLnkgKyBkZWx0YS55KSA+IDApID8gMCA6IE1hdGguZmxvb3IoZGVsdGEueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZWx0YS55ID0gTWF0aC5jZWlsKGRlbHRhLnkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChNYXRoLmNlaWwoYnIueSkgKyBkZWx0YS55KSA8IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YS55ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGVsdGE7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgX2RvUGFuID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgICAgIHZhciBpbWFnZSA9IF90aGlzLmRhcmtyb29tLmltYWdlO1xyXG4gICAgICAgICAgICBkZWx0YSA9IF9jb25zdHJhaW5QYW4oZGVsdGEpO1xyXG4gICAgICAgICAgICBpbWFnZS5sZWZ0ID0gaW1hZ2UubGVmdCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIGltYWdlLnRvcCA9IGltYWdlLnRvcCArIGRlbHRhLnk7XHJcbiAgICAgICAgICAgIGltYWdlLnNldENvb3JkcygpO1xyXG4gICAgICAgICAgICBzdGF0ZXMucmVhbFBhbiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGltYWdlLm9Db29yZHMudGwueCxcclxuICAgICAgICAgICAgICAgIHk6IGltYWdlLm9Db29yZHMudGwueVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGV2ZW50TGlzdGVuZXJzID0ge1xyXG4gICAgICAgICAgICB6b29tSW46IGZ1bmN0aW9uICgpIHsgem9vbSgxLjA1KTsgfSxcclxuICAgICAgICAgICAgem9vbU91dDogZnVuY3Rpb24gKCkgeyB6b29tKDAuOTUpOyB9LFxyXG4gICAgICAgICAgICBhYm9ydFBhbjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFuQnV0dG9uID0gX3RoaXMuYnV0dG9ucy5wYW47XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09ICdzdmcnXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQgPT0gcGFuQnV0dG9uLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT0gJ3VzZSdcclxuICAgICAgICAgICAgICAgICAgICAmJiBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50ID09IHBhbkJ1dHRvbi5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5wYW5BY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfZXhpdFBhbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b2dnbGVQYW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2V4aXRQYW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF9pbml0UGFuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbkVudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLnBhbkFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5wYW5uaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGFuOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFubmluZyAmJiBldmVudCAmJiBldmVudC5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbnZhcyA9IF90aGlzLmRhcmtyb29tLmNhbnZhcztcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGV2ZW50LmUubW92ZW1lbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5lLm1vdmVtZW50WVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgX2RvUGFuKGRlbHRhKTtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMucmVuZGVyQWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhbkV4aXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZXMucGFuQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVzLnBhbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgem9vbUNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVzLmxhc3RTY2FsZSA9IF90aGlzLmRhcmtyb29tLmltYWdlLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIF91cGRhdGVCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICBfcmVmaXRJbWFnZUluQ2FudmFzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3RvcmVab29tUGFuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVzLmxhc3RTY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGFya3Jvb20uaW1hZ2Uuc2NhbGUoc3RhdGVzLmxhc3RTY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlcy5yZWFsUGFuICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RvUGFuKHN0YXRlcy5yZWFsUGFuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3VwZGF0ZUJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICBfcmVmaXRJbWFnZUluQ2FudmFzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzdGF0ZXMgPSB7XHJcbiAgICAgICAgICAgIHBhbkFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhbm5pbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYXN0U2NhbGU6IG51bGwsXHJcbiAgICAgICAgICAgIHJlYWxQYW46IG51bGxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJzOiBldmVudExpc3RlbmVycyxcclxuICAgICAgICAgICAgc3RhdGVzOiBzdGF0ZXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgRGFya3Jvb20ucGx1Z2luc1snem9vbSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XHJcbiAgICAgICAgZGVmYXVsdHM6IHt9LFxyXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XHJcbiAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25zID0ge307XHJcbiAgICAgICAgICAgIGJ1dHRvbnMuem9vbUluID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHsgaW1hZ2U6ICd6b29tLWluJyB9KTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tT3V0ID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHsgaW1hZ2U6ICd6b29tLW91dCcsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBidXR0b25zLnBhbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7IGltYWdlOiAnaGFuZCcsIGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB2YXIgaW1wbGVtZW50YXRpb24gPSBnZXRJbXBsZW1lbnRhdGlvbih0aGlzKTtcclxuICAgICAgICAgICAgYnV0dG9ucy56b29tSW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tSW4pO1xyXG4gICAgICAgICAgICBidXR0b25zLnpvb21PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy56b29tT3V0KTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy50b2dnbGVQYW4pO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLnRvb2xiYXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLmFib3J0UGFuKTtcclxuICAgICAgICAgICAgdGhpcy5kYXJrcm9vbS5hZGRFdmVudExpc3RlbmVyKCd6b29tOmNoYW5nZScsIGltcGxlbWVudGF0aW9uLmV2ZW50TGlzdGVuZXJzLnpvb21DaGFuZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCBpbXBsZW1lbnRhdGlvbi5ldmVudExpc3RlbmVycy5yZXN0b3JlWm9vbVBhbik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKERhcmtyb29tKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9em9vbS5qcy5tYXAiXX0=
