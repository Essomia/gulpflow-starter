const filenameLog = require('../util/filenameLog');

const json = (gulp, $, config) => {
    gulp.task('json', () => gulp
        .src(config.root.src + config.sources.json)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doMinify,
            $.jsonminify()
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = json;
