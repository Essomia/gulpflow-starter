const cssnano = require('cssnano');
const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const css = (gulp, $, config) => {
    gulp.task('css', () => gulp
        .src(config.root.src + config.sources.css)
        .pipe($.plumber())
        .pipe($.autoprefixer({
            overrideBrowserslist: ['last 2 versions', '> 2%'],
            cascade: false
        }))
        .pipe($.if(
            config.ifs.doMinify,
            $.postcss([cssnano()])
        ))
        .pipe($.if(
            Boolean(config.destinations.css),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.css +
                    renameDirPath(path.dirname, config.sources.css)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = css;
