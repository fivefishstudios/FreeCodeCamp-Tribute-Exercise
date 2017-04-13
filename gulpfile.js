// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('./css-less/*.less')           // this is source directory of .less file
        .pipe(less())
        /* .pipe(gulp.dest(function(f) {
            return f.base;
        })) */
        .pipe(gulp.dest("./css/" )          // this is destination of compiled .css file
        )
});

gulp.task('default', ['less'], function() {
    gulp.watch('./css-less/*.less', ['less']);      // watchingall *.less files in subdirectory /css-less/
})