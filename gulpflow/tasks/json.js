const gulp = require('gulp');
const gulpif = require('gulp-if');
const jsonminify = require('gulp-jsonminify'); // minifyJSON
const plumber = require('gulp-plumber');

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const json = () => {
    gulp.task('json', () => {
        return gulp
            .src(config.root.src + config.sources.json)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(config.ifs.doMinify, jsonminify({})))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = json;
