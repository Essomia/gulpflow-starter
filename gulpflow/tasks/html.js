// ------------------------------
// -- ./tasks/html.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const htmlmin = require('gulp-htmlmin'); // minifyHTML
const plumber = require('gulp-plumber');


//
// Defined
//

function html() {

    gulp.task('html', () => {
        return gulp.src(config.root.src + config.html.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(
                config.ifs.doMinify,
                htmlmin({
                    keepClosingSlash: true,
                    quoteCharacter: '\"',
                    removeComments: true,
                    collapseWhitespace: true
                })
            ))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = html;
