// ------------------------------
// -- ./tasks/images.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

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
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(gulpif(
                config.ifs.doMinify,
                imagemin(config.images.imagemin)
            ))
            .pipe(utilsRename(config.images.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = images;
