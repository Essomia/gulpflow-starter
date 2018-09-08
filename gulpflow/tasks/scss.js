// ------------------------------
// -- ./tasks/scss.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp         = require('gulp');
const gulpif       = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano'); // minifyCSS
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass'); // compileSCSS
const sourcemaps   = require('gulp-sourcemaps');


//
// Defined
//

function scss() {

    gulp.task('scss', () => {
        return gulp.src(config.scss.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(
                config.ifs.doSourcemaps,
                sourcemaps.init()
            ))
            .pipe(sass(config.scss.sass))
            .pipe(autoprefixer(config.scss.autoprefixer))
            .pipe(gulpif(
                config.ifs.doMinify,
                cssnano(config.scss.cssnano)
            ))
            .pipe(sourcemaps.write('.'))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = scss;
