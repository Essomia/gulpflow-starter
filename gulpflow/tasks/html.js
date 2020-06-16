const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

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
        .pipe($.if(
            Boolean(config.destinations.html),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.html +
                    renameDirPath(path.dirname, config.sources.html)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = html;
