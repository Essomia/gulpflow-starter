// ------------------------------
// -- ./tasks/fonts.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const plumber = require('gulp-plumber');


//
// Defined
//

function fonts() {

    gulp.task('fonts', () => {
        return gulp.src(config.fonts.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = fonts;
