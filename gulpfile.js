var concat = require('gulp-concat')
var connect = require('gulp-connect')
var gulp = require('gulp')
var gutil = require('gulp-util')
var inject = require('gulp-inject')
var plumber = require('gulp-plumber')
var rimraf = require('rimraf')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')
var svgmin = require('gulp-svgmin')
var svgstore = require('gulp-svgstore')
var uglify = require('gulp-uglify')
var st = require('st')
var versionNumber = require('gulp-version-number')


//
// Variables
//
var demoDir = './demo';
var srcDir = './lib';
var distDir = './build';
var isDebug = !gutil.env.prod;
var versionConfig = {
  'value': '%MDS%',
  'append': {
    'key': 'v',
    'to': ['css', 'js'],
  }
}

//
// Default
//
gulp.task('default', ['build'], function() {
  gulp.start('watch');
});

//
// Clean
//
gulp.task('clean', function(cb) {
  rimraf(distDir, cb);
});

//
// Build
//
gulp.task('build', ['clean'], function() {
  gulp.start('scripts', 'styles');
});

//
// Watch
//
gulp.task('watch', ['server'], function() {
  gulp.watch(srcDir + '/js/**/*.js', ['scripts']);
  gulp.watch(srcDir + '/*.html', ['scripts']);
  gulp.watch(srcDir + '/css/**/*.scss', ['styles']);
});

//
// Server
//
gulp.task('server', function() {
  connect.server({
    root: './demo',
    port: 2222,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        st({ path: './build', url: '/build' })
      ];
    }
  });
});

//
// Javascript
//
gulp.task('scripts', function () {
  var svgs = gulp.src(srcDir + '/icons/*.svg')
    .pipe(svgmin())
    .pipe(svgstore({inlineSvg: true}))
    // .pipe(gulp.dest(distDir));

  function fileContents (filePath, file) {
    return file.contents.toString();
  }

  var files = [
    srcDir + '/js/core/bootstrap.js',
    srcDir + '/js/core/darkroom.js',
    srcDir + '/js/core/*.js',
    // srcDir + '/js/plugins/*.js',
    srcDir + '/js/plugins/darkroom.history.js',
    srcDir + '/js/plugins/darkroom.rotate.js',
    srcDir + '/js/plugins/darkroom.crop.js',
    srcDir + '/js/plugins/darkroom.save.js',
    srcDir + '/js/plugins/darkroom.color.js',
    srcDir + '/js/filters/redact.js',
    srcDir + '/js/plugins/redact.js',
    srcDir + '/js/plugins/zoom.js',
  ];

  gulp.src(files)
    .pipe(plumber())
    .pipe(isDebug ? sourcemaps.init() : gutil.noop())
      .pipe(concat('darkroom.js', {newLine: ';'}))
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(isDebug ? gutil.noop() : uglify({mangle: false}))
    .pipe(isDebug ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(distDir));

  
/*
  gulp.src(srcDir + '/js/core/bootstrap.js')
    .pipe(plumber())
    .pipe(isDebug ? sourcemaps.init() : gutil.noop())
      .pipe(concat('bootstrap.js', {newLine: ';'}))
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(isDebug ? gutil.noop() : uglify({mangle: false}))
    .pipe(isDebug ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(distDir));
*/
   gulp.src(srcDir + '/index.html')
    .pipe(versionNumber(versionConfig))
    .pipe(gulp.dest(demoDir));
/*
    gulp.src(files)
    .pipe(gulp.dest(distDir));
    */
})

//
// Stylesheet
//
gulp.task('styles', function () {
  gulp.src(srcDir + '/css/darkroom.scss')
    .pipe(plumber())
    .pipe(isDebug ? sourcemaps.init() : gutil.noop())
      .pipe(sass({
        outputStyle: isDebug ? 'nested' : 'compressed'
      }))
    .pipe(isDebug ? sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(distDir))
})

//
// HTML
//


// var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var merge = require('merge2');  // Requires separate installation

// gulp.task('scripts', function() {
//     var tsResult = gulp.src('lib/**/*.ts')
//         .pipe(ts({
//             declaration: true
//         }));

//     return merge([
//         tsResult.dts.pipe(gulp.dest('release/definitions')),
//         tsResult.js.pipe(gulp.dest('release/js'))
//     ]);
// });