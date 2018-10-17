// ------------------------------
// -- ./tasks/scss.js
// ------------------------------

'use strict';

const config      = require('../config');
const filenameLog = require('../util/filenameLog');
const errorLog    = require('../util/errorLog');

const gulp         = require('gulp');
const gulpif       = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const cssnano      = require('gulp-cssnano'); // minifyCSS
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass'); // compileSCSS
const sourcemaps   = require('gulp-sourcemaps');


//
// Defined
//

function scss() {

    gulp.task('scss', () => {
        return gulp.src(config.root.src + config.scss.src)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(
                config.ifs.doSourcemaps,
                sourcemaps.init()
            ))
            .pipe(sass({
                outputStyle: 'expanded',
                precision: 5,
                includePaths: [ config.root.src ]
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions', '> 2%'],
                cascade: false
            }))
            .pipe(gulpif(
                config.ifs.doMinify,
                cssnano({
                    reduceIdents: false
                })
            ))
            .pipe(sourcemaps.write('.'))
            .pipe(filenameLog())
            .pipe(gulp.dest(config.root.dest))
        ;
    });

}


//
// Exports
//

module.exports = scss;
