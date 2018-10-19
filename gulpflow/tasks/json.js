// ------------------------------
// -- ./tasks/json.js
// ------------------------------

'use strict';

const config              = require('../config');
const utilsFilenameHint   = require('../util/filenameHint');
const utilsOnErrorHandler = require('../util/onErrorHandler');
const utilsRename         = require('../util/renamePath');

const gulp       = require('gulp');
const gulpif     = require('gulp-if');
const jsonminify = require('gulp-jsonminify'); // minifyJSON
const plumber    = require('gulp-plumber');


//
// Defined
//

function json() {

    gulp.task('json', () => {
        return gulp.src(config.json.src)
            .pipe(utilsFilenameHint())
            .pipe(plumber({ errorHandler: utilsOnErrorHandler }))
            .pipe(gulpif(
                config.ifs.doMinify,
                jsonminify(config.json.jsonminify)
            ))
            .pipe(utilsRename(config.json.dest))
            .pipe(gulp.dest(config.root.dest))
            .pipe(utilsFilenameHint(true))
        ;
    });

}


//
// Exports
//

module.exports = json;
