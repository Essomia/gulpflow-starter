// ------------------------------
// -- ./tasks/images.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp     = require('gulp');
const gulpif   = require('gulp-if');
const imagemin = require('gulp-imagemin'); // optimizeIMAGE
const plumber  = require('gulp-plumber');


//
// Defined
//

function images() {

    gulp.task('images', () => {
        return gulp.src(config.images.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(
                config.ifs.doMinify,
                imagemin(config.images.imagemin)
            ))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = images;
