const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const js = (gulp, $, config) => {
    gulp.task('js', () => gulp
        .src(config.root.src + config.sources.js)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doSourcemaps,
            $.sourcemaps.init()
        ))
        .pipe($.if(
            config.ifs.doLinter,
            $.eslint({
                configFile: config.linters.eslint
            })
        ))
        .pipe($.if(
            config.ifs.doLinter,
            $.eslint.format('stylish')
        ))
        .pipe($.if(
            config.ifs.doLinter,
            $.eslint.failAfterError()
        ))
        .pipe($.ignore.exclude('!**/[^_]*.js'))
        .pipe($.include({
            extensions: 'js',
            includePaths: [config.root.src],
            separateInputs: true
        }))
        .pipe($.babel({
            presets: ['@babel/env'],
            only: [config.root.src + config.sources.js],
            compact: false
        }))
        .pipe($.if(
            config.ifs.doMinify,
            $.uglify()
        ))
        .pipe($.if(
            config.ifs.doSourcemaps,
            $.sourcemaps.write('.')
        ))
        .pipe($.if(
            Boolean(config.destinations.js),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.js +
                    renameDirPath(path.dirname, config.sources.js)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = js;
