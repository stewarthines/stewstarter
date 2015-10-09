var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

// gulp.task('styles', function() {
//     return gulp.src('./app/sass/*.sass')
//         .pipe(sass())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer('last 4 versions'))
//         .pipe(gulp.dest('./app/css/'));
//
// });

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("./app/sass/*.sass", ['sass']);
    gulp.watch("./app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("./app/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./app/css"))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
