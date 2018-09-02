// ------------------------------
// -- ./tasks/js.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const include = require('gulp-include'); // for //=require files from /www/src/
const plumber = require('gulp-plumber');
const uglify  = require('gulp-uglify'); // minifyJS


//
// Defined
//

function js() {

    gulp.task('js', () => {
        return gulp.src(config.js.src)
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(include(config.js.include))
            .pipe(gulpif(
                config.ifs.doMinify,
                uglify(config.js.uglify)
            ))
            .pipe(utilsRename(config.js.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = js;
