var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('./app/sass/*.sass')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 versions'))
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('serve', function(){
  gulp.watch("./app/sass/*.sass",['styles']);
});

gulp.task('default',['serve']);
