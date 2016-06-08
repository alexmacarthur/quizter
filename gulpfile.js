var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var babel = require('gulp-babel');

gulp.task('build', ['babel', 'jshint', 'uglify', 'sass']);

gulp.task('browserSync', ['build'], function() {
  browserSync({
    server: {
      baseDir: ''
    }
  });
});

gulp.task('rebuild', ['build'], function () {
  browserSync.reload();
});
 
gulp.task('babel', function(){
  return gulp.src('assets/js/scripts.js')
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(rename('scripts-compiled.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('jshint',function(){
  return gulp.src('assets/js/scripts-compiled.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
  return gulp.src('assets/js/scripts-compiled.js')
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('assets/js'));
});

gulp.task('sass',function(){
  return gulp.src('assets/sass/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefix('last 3 versions'))
    .pipe(gulp.dest('../css'));
});

gulp.task('default', ['browserSync'], function() {
  gulp.watch('assets/js/*.js', ['rebuild']);
  gulp.watch('assets/scss/**/*.scss', ['rebuild']);
});
