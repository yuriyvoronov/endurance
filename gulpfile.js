'use strict';
 
var gulp = require('gulp');
const wiredep = require('gulp-wiredep');
var sass = require('gulp-sass'),
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-clean-css');
 
gulp.task('html', function () {
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});


gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./'))
})

 
gulp.task('sass', function () {
  return gulp.src('./layouts/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./layouts/**/*.scss', ['sass']);
});

gulp.task('images',function(){
	gulp.src('img/**/*.JPG')
		.pipe(gulp.dest('dist/img'));
	gulp.src('img/**/*.jpg')
		.pipe(gulp.dest('dist/img'));
	gulp.src('img/**/*.png')
		.pipe(gulp.dest('dist/img'));
	gulp.src('img/**/*.svg')
		.pipe(gulp.dest('dist/img'));
});

gulp.task('video',function(){
	gulp.src('video/**/*.mp4')
		.pipe(gulp.dest('dist/video'));
});

gulp.task('fonts',function(){
	gulp.src('fonts/**/*.eot)')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('fonts/**/*.ttf)')
		.pipe(gulp.dest('dist/fonts'));
	gulp.src('fonts/**/*.woff)')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('webfonts',function(){
	gulp.src('webfonts/**/**)')
		.pipe(gulp.dest('dist/webfonts'));
});

gulp.task('build', [
    'html',
    'images',
    'fonts',
	'video',
	'webfonts',
]);