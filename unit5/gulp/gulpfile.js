// gulpfile.js
const gulp = require('gulp');
const uglify = require('gulp-uglify');

// Task to minify JavaScript files
gulp.task('minify-js', () => {
    return gulp.src('public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/js/min'));
});

// Watch for changes in JS files and trigger the minify task
gulp.task('watch', () => {
    gulp.watch('public/js/*.js', gulp.series('minify-js'));
});

// Default task: run 'watch' task
gulp.task('default', gulp.series('watch'));
