// ------------------------------
// -- ./tasks/css.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

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
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(autoprefixer(config.css.autoprefixer))
            .pipe(gulpif(
                config.ifs.doMinify,
                cssnano(config.css.cssnano)
            ))
            .pipe(utilsRename(config.css.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = css;
