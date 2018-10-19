// ------------------------------
// -- ./tasks/fonts.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const plumber = require('gulp-plumber');


//
// Defined
//

function fonts() {

    gulp.task('fonts', () => {
        return gulp.src(config.fonts.src)
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(utilsRename(config.fonts.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = fonts;
