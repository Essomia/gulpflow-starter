const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano'); // minifyCSS
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss'); // minifyCSS

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const css = () => {
    gulp.task('css', () => {
        return gulp
            .src(config.root.src + config.sources.css)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(
                autoprefixer({
                    overrideBrowserslist: ['last 2 versions', '> 2%'],
                    cascade: false,
                })
            )
            .pipe(gulpif(config.ifs.doMinify, postcss([cssnano()])))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = css;
