'use strict';

const Gulp = require('gulp');
const Sass = require('gulp-sass');
const Autoprefixer = require('gulp-autoprefixer');

// Build styles

Gulp.task('styles', function() {
    Gulp.src('./assets/styles/index.scss')
        .pipe(Sass().on('error', Sass.logError))
        .pipe(Autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(Gulp.dest('dest/css'));
});


Gulp.task('watch', ['build'], function() {
    Gulp.watch('./assets/styles/**/*', ['styles']);
});

Gulp.task('build', ['styles']);

Gulp.task('default', ['build', 'watch']);