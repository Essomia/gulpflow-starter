const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const images = (gulp, $, config) => {
    gulp.task('images', () => gulp
        .src(config.root.src + config.sources.images)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doMinify,
            $.imagemin([
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
            })
        ))
        .pipe($.if(
            Boolean(config.destinations.images),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.images +
                    renameDirPath(path.dirname, config.sources.images)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = images;
