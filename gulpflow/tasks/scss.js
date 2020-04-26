const cssnano = require('cssnano');
const filenameLog = require('../util/filenameLog');

const scss = (gulp, $, config) => {
    gulp.task('scss', () => gulp
        .src(config.root.src + config.sources.scss)
        .pipe($.plumber())
        .pipe($.if(
            config.ifs.doSourcemaps,
            $.sourcemaps.init()
        ))
        .pipe($.stylelint({
            configFile: config.root.yaml + config.yaml.stylelint,
            syntax: 'scss',
            failAfterError: false,
            reporters: [
                {
                    formatter: 'string',
                    console: true
                }
            ]
        }))
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
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = scss;
