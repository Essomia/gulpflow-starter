const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // optimizeIMAGE
const plumber = require('gulp-plumber');

const config = require('../config');
const errorLog = require('../util/errorLog');
const filenameLog = require('../util/filenameLog');

const images = () => {
    gulp.task('images', () => {
        return gulp
            .src(config.root.src + config.sources.images)
            .pipe(plumber({ errorHandler: errorLog }))
            .pipe(
                imagemin(
                    [
                        imagemin.optipng({ optimizationLevel: 5 }),
                        imagemin.gifsicle({ interlaced: true }),
                        imagemin.mozjpeg({ quality: 75, progressive: true }),
                        imagemin.svgo({
                            plugins: [
                                { removeViewBox: true },
                                { removeUnknownsAndDefaults: true },
                                { cleanupIDs: true },
                            ],
                        }),
                    ],
                    {
                        verbose: true,
                    }
                )
            )
            .pipe(gulp.dest(config.root.dest))
            .pipe(filenameLog());
    });
};

module.exports = images;
