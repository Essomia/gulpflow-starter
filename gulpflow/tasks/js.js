// ------------------------------
// -- ./tasks/js.js
// ------------------------------

'use strict';

const config      = require('../config');
const errorLog    = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const gulp    = require('gulp');
const gulpif  = require('gulp-if');
const babel   = require('gulp-babel');   // ES6 compiler
const eslint  = require('gulp-eslint');  // linter for JS and JSX
const ignore  = require('gulp-ignore');
const include = require('gulp-include'); // for //=require files from /www/src/
const plumber = require('gulp-plumber');
const uglify  = require('gulp-uglify');  // minifyJS


//
// Defined
//

function js() {

    gulp.task('js', () => {
        return gulp.src(config.root.src + config.sources.js)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(eslint({
                configFile: config.root.yaml + config.yaml.eslint
            }))
            .pipe(eslint.format('stylish'))
            .pipe(eslint.failAfterError())
            .pipe(ignore.exclude('!**/[^_]*.js'))
            .pipe(include({
                extensions: 'js',
                includePaths: [ config.root.src ],
                separateInputs: true
            }))
            .pipe(babel({
                presets: [
                    '@babel/env'
                ],
                only: [
                    config.root.src + config.sources.js
                ],
                compact: false
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
