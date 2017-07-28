const gulp = require("gulp");
const minify = require('gulp-minify');

gulp.task("default", [ "js", "watch"]);

//Compiling_JS_task

gulp.task('js', function() {
    gulp.src('./src/scripts/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./public/js/'))
});

//Watch_task

gulp.task("watch", function () {
    gulp.watch(['src/scripts/*.js'], ['js']);
});

