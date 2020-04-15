const gulp = require('gulp');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin'); // minifyHTML
const plumber = require('gulp-plumber');

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const html = () => {
    gulp.task('html', () => {
        return gulp
            .src(config.root.src + config.sources.html)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(
                gulpif(
                    config.ifs.doMinify,
                    htmlmin({
                        keepClosingSlash: true,
                        quoteCharacter: '"',
                        removeComments: true,
                        collapseWhitespace: true,
                    })
                )
            )
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = html;
