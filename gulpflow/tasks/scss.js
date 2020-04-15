const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('cssnano'); // minify CSS
const gulp = require('gulp');
const gulpif = require('gulp-if');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss'); // processor CSS
const sass = require('gulp-sass'); // compileSCSS
const sourcemaps = require('gulp-sourcemaps');
const stylelint = require('gulp-stylelint'); // linter CSS

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const scss = () => {
    gulp.task('scss', () => {
        return gulp
            .src(config.root.src + config.sources.scss)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(gulpif(config.ifs.doSourcemaps, sourcemaps.init()))
            .pipe(
                stylelint({
                    configFile: config.root.yaml + config.yaml.stylelint,
                    syntax: 'scss',
                    failAfterError: false,
                    reporters: [
                        {
                            formatter: 'string',
                            console: true,
                        },
                    ],
                })
            )
            .pipe(
                sass({
                    outputStyle: 'expanded',
                    precision: 5,
                    includePaths: [config.root.src],
                })
            )
            .pipe(
                autoprefixer({
                    overrideBrowserslist: ['last 2 versions', '> 2%'],
                    cascade: false,
                })
            )
            .pipe(gulpif(config.ifs.doMinify, postcss([cssnano()])))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = scss;
