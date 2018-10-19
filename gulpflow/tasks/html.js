// ------------------------------
// -- ./tasks/html.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const htmlmin = require('gulp-htmlmin'); // minifyHTML
const plumber = require('gulp-plumber');


//
// Defined
//

function html() {

    gulp.task('html', () => {
        return gulp.src(config.html.src)
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(gulpif(
                config.ifs.doMinify,
                htmlmin(config.html.htmlmin)
            ))
            .pipe(utilsRename(config.html.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = html;
