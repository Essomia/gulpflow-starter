const cssnano = require('cssnano');
const filenameLog = require('../util/filenameLog');
const renameDirPath = require('../util/renameDirPath');

const scss = (gulp, $, config) => {
    gulp.task('scss', () => gulp
        .src(config.root.src + config.sources.scss)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doSourcemaps,
            $.sourcemaps.init()
        ))
        .pipe($.if(
            config.ifs.doLinter,
            $.stylelint({
                configFile: config.linters.stylelint,
                syntax: 'scss',
                failAfterError: false,
                reporters: [
                    {
                        formatter: 'string',
                        console: true
                    }
                ]
            })
        ))
        .pipe($.sass({
            outputStyle: 'expanded',
            precision: 5,
            includePaths: [config.root.src]
        }))
        .pipe($.autoprefixer({
            overrideBrowserslist: ['last 2 versions', '> 2%'],
            cascade: false
        }))
        .pipe($.if(
            config.ifs.doMinify,
            $.postcss([cssnano()])
        ))
        .pipe($.if(
            config.ifs.doSourcemaps,
            $.sourcemaps.write('.')
        ))
        .pipe($.if(
            Boolean(config.destinations.scss),
            $.rename((path) => {
                // eslint-disable-next-line no-param-reassign
                path.dirname =
                    config.destinations.scss +
                    renameDirPath(path.dirname, config.sources.scss)
                ;
            })
        ))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = scss;
