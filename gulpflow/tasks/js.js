const filenameLog = require('../util/filenameLog');

const js = (gulp, $, config) => {
    gulp.task('js', () => gulp
        .src(config.root.src + config.sources.js)
        .pipe($.plumber())
        .pipe($.eslint({
            configFile: config.root.yaml + config.yaml.eslint
        }))
        .pipe($.eslint.format('stylish'))
        .pipe($.eslint.failAfterError())
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
        .pipe(gulp.dest(config.root.dest))
        .pipe(filenameLog()));
};

module.exports = js;
