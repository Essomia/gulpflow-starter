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
        return gulp.src(config.root.src + config.sources.js)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(include({
                extensions: 'js',
                includePaths: [ config.root.src ],
                hardFail: false
            }))
            .pipe(gulpif(
                config.ifs.doMinify,
                uglify({})
            ))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog())
        ;
    });

}


//
// Exports
//

module.exports = js;
