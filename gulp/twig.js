'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('twig-reload', ['twig'], function () {
    browserSync.reload();
});

gulp.task('twig', function () {
    return gulp.src([
            path.join(conf.paths.src, '/*.twig')
        ])
        .pipe($.twig({base: conf.paths.src}))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});