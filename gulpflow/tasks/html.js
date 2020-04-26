const filenameLog = require('../util/filenameLog');

const html = (gulp, $, config) => {
    gulp.task('html', () => gulp
        .src(config.root.src + config.sources.html)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doMinify,
            $.htmlmin({
                keepClosingSlash: true,
                quoteCharacter: '"',
                removeComments: true,
                collapseWhitespace: true
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = html;
