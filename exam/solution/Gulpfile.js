var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '.'
        },
    })
});

//Watch task
gulp.task('default', ['browser-sync', 'styles'],function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('index.html', browserSync.reload);
});