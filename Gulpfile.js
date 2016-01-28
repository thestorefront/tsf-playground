var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

var paths = {
    scss: './public/stylesheets/*.sass'
};

gulp.task('sass', function () {
    gulp.src('./public/stylesheets/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/stylesheets/*.scss', ['sass']);
});

gulp.task('default',function(){
    gulp.start('sass');
});
