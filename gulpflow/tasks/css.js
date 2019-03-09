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
        return gulp.src(config.root.src + config.sources.css)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions', '> 2%'],
                cascade: false
            }))
            .pipe(gulpif(
                config.ifs.doMinify,
                cssnano({
                    reduceIdents: false
                })
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
