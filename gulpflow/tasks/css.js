// ------------------------------
// -- ./tasks/css.js
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
const sourcemaps   = require('gulp-sourcemaps');


//
// Defined
//

function css() {

    gulp.task('css', () => {
        return gulp.src(config.css.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(autoprefixer(config.css.autoprefixer))
            .pipe(gulpif(
                config.ifs.doMinify,
                cssnano(config.css.cssnano)
            ))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = css;
