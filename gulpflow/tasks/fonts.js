const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const fonts = (gulp, $, config) => {
    gulp.task('fonts', () => gulp
        .src(config.root.src + config.sources.fonts)
        .pipe($.plumber())
        .pipe($.if(
            Boolean(config.destinations.fonts),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.fonts +
                    renameDirPath(path.dirname, config.sources.fonts)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = fonts;
