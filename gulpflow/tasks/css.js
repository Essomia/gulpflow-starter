// ------------------------------
// -- ./tasks/css.js
// ------------------------------

'use strict';

const config      = require('../config');
const errorLog    = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const gulp         = require('gulp');
const gulpif       = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('cssnano');         // minifyCSS
const plumber      = require('gulp-plumber');
const postcss      = require('gulp-postcss');    // minifyCSS


//
// Defined
//

function css() {

    gulp.task('css', () => {
        return gulp.src(config.root.src + config.sources.css)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 2 versions', '> 2%'],
                cascade: false
            }))
            .pipe(gulpif(
                config.ifs.doMinify,
                postcss([cssnano()])
            ))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog())
        ;
    });

}


//
// Exports
//

module.exports = css;
