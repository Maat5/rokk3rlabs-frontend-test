var gulp = require('gulp');
var clean = require('gulp-clean');
var stylus = require('gulp-stylus');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var autoprefixer = require('autoprefixer-stylus');
var browserSync = require('browser-sync');

/* App build config */
var build = require('./build.config');

/* Clean task*/
gulp.task('clean', function() {
  return gulp.src(build.buildSrc, { read: false })
    .pipe(clean());
});

/* Build CSS */
gulp.task('stylus', function() {
  return gulp.src(build.cssSrc + 'app.styl')
    .pipe(stylus({
      use: [autoprefixer({ browsers: ['last 2 versions'] })]
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    // .pipe(minify())
    .pipe(gulp.dest(build.buildCss))
});

/* Concat repo JS*/
gulp.task('appScripts', function() {
  return gulp.src(build.src + '**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build.buildJs));
});

/* Static JSON files */
gulp.task('dataJson', function() {
  return gulp.src(build.src + '**/*.json')
    .pipe(gulp.dest(build.buildSrc));
});


/* External JS libs*/
gulp.task('libsScipts', function() {
  return gulp.src([
      build.bowerSrc + 'Chart.js/dist/Chart.min.js',
      build.bowerSrc + 'angular/angular.js',
      build.bowerSrc + 'angular-ui-router/release/angular-ui-router.min.js',
      build.bowerSrc + 'ng-chartjs/dist/angular-chartjs.js',
      build.bowerSrc + 'lodash/dist/lodash.min.js',
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify({ mangle: false }))
    .pipe(gulp.dest(build.buildJs))
});

gulp.task('libsStyle', function() {
  return gulp.src([
      build.bowerSrc + 'angular-chart.js/dist/angular-chart.min.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(minify())
    .pipe(gulp.dest(build.buildCss))

});

/* Load templates */
gulp.task('templates', function() {
  return gulp.src(build.src + '*/*.html')
    .pipe(gulp.dest(build.buildHtml))
});

gulp.task('images', function() {
  return gulp.src(build.imgSrc + '*')
    .pipe(gulp.dest(build.buildImg))
});

/* Load index.html */
gulp.task('index', function() {
  return gulp.src(build.src + '*.html')
    .pipe(gulp.dest(build.buildSrc))
});

/* Server init */
gulp.task('browserSync', function() {
  browserSync({
    host: build.host,
    port: build.port,
    server: {
      baseDir: build.buildSrc
    }
  })
});

/* Watch files */
gulp.task('watch', function() {
  browserSync.reload();
  gulp.watch([build.src + '**/*'], ['build']);
  // gulp.watch([build.src + '**/*'], ['build', browserSync.reload]);
  // comment the first one and uncomment next one to enable autorealod
});

/* Build */
gulp.task('build', [
  'stylus',
  'images',
  'appScripts',
  'libsScipts',
  'libsStyle',
  'dataJson',
  'templates',
  'index'
]);

/* Init app*/
gulp.task('default', ['clean'], function() {
  gulp.start('build');
  gulp.start('browserSync');
  gulp.start('watch');
});
