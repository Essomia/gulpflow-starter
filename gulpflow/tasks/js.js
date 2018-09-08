// ------------------------------
// -- ./tasks/js.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

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
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(include(config.js.include))
            .pipe(gulpif(
                config.ifs.doMinify,
                uglify(config.js.uglify)
            ))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = js;
