'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['twig'], function () {

    gulp.watch([path.join(conf.paths.src, '/**/*.twig'), 'bower.json'], ['twig-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/app/**/*.css'),
        path.join(conf.paths.src, '/app/**/*.scss')
    ], function (event) {
        if (isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function (event) {
        if (isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    // gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function (event) {
    //     browserSync.reload(event.path);
    // });
});
