var gulp = require('gulp');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');
var pipeline = require('readable-stream').pipeline;


gulp.task('scss', function () {
    return gulp.src('src/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
    gulp.watch( 'src/**/*.scss', gulp.series(['scss']));
});

/*gulp.task('tinypng', function () {
    gulp.src('src/!**!/!*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'jWncWp7QkjTt22LnFmT0YKHRXtmLmC7W',
            sigFile: 'images/.tinypng-sigs',
            log: true
        }))
        .pipe(gulp.dest('dist/img'));
});*/

gulp.task('default', gulp.series(['scss']));