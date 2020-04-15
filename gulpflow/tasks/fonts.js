const gulp = require('gulp');
const plumber = require('gulp-plumber');

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const fonts = () => {
    gulp.task('fonts', () => {
        return gulp
            .src(config.root.src + config.sources.fonts)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = fonts;
