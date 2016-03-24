var gulp       = require('gulp'),
  sass         = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename       = require('gulp-rename'),
  minifycss    = require('gulp-minify-css'),
  notify       = require('gulp-notify'),
  sourcemaps   = require('gulp-sourcemaps');

// Gulp Sass Task 
gulp.task('styles', function() {
  return sass('scss/main.scss', { sourcemap: true })
    .pipe(sourcemaps.init())
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
});