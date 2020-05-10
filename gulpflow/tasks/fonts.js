const filenameLog = require('../util/filenameLog');

const fonts = (gulp, $, config) => {
    gulp.task('fonts', () => gulp
        .src(config.root.src + config.sources.fonts)
        .pipe($.plumber())
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = fonts;
