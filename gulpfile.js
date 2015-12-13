var gulp = require('gulp');
var inject = require('gulp-inject');
 
gulp.task('inject', function () {
    var target = gulp.src(['./index.html', './aboutus.html', './contactus.html']);
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src(
        ['./bower_components/**/*.min.css', 
        './bower_components/**/*.min.js', 
        './bower_components/bootstrap-social/*.css'], 
        {read: false}
    );
 
    return target.pipe(inject(sources))
        .pipe(gulp.dest('.'));
});
