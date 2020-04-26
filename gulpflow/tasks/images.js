const filenameLog = require('../util/filenameLog');

const images = (gulp, $, config) => {
    gulp.task('images', () => gulp
        .src(config.root.src + config.sources.images)
        .pipe($.plumber())
        .pipe($.imagemin([
            $.imagemin.optipng({ optimizationLevel: 5 }),
            $.imagemin.gifsicle({ interlaced: true }),
            $.imagemin.mozjpeg({ quality: 75, progressive: true }),
            $.imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { removeUnknownsAndDefaults: true },
                    { cleanupIDs: true }
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = images;
