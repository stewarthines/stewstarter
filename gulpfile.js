var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 versions'))
    .pipe(gulp.dest('./css'))
});

gulp.task('serve', function(){
  gulp.watch("./sass/*.sass",['styles']);
})

gulp.task('default',['serve']);
