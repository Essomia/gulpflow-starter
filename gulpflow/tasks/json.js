const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const json = (gulp, $, config) => {
    gulp.task('json', () => gulp
        .src(config.root.src + config.sources.json)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doMinify,
            $.jsonminify()
        ))
        .pipe($.if(
            Boolean(config.destinations.json),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.json +
                    renameDirPath(path.dirname, config.sources.json)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = json;
