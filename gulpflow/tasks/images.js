// ------------------------------
// -- ./tasks/images.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp     = require('gulp');
const imagemin = require('gulp-imagemin'); // optimizeIMAGE
const plumber  = require('gulp-plumber');


//
// Defined
//

function images() {

    gulp.task('images', () => {
        return gulp.src(config.root.src + config.sources.images)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(imagemin([
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.gifsicle({ interlaced: true }),
                imagemin.svgo({
                    plugins: [
                        { removeViewBox: true },
                        { removeUnknownsAndDefaults: true },
                        { cleanupIDs: true }
                    ]
                })], { verbose: true }))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = images;
