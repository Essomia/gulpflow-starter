// ------------------------------
// -- Front-end boilerplate
// ------------------------------

const plugins = require('gulp-load-plugins')();

//
// Set default config
//

const config = {
    root: {
        src: './example/src',
        dest: './example/app'
    },
    ifs: {
        doLinter: false,
        doMinify: false,
        doSourcemaps: false
    },
    linters: {
        eslint: `${__dirname}/.eslintrc.yaml`,
        stylelint: `${__dirname}/.stylelintrc.yaml`
    },
    // Object of {key}:{value}
    // - {key} is the task name (from `./gulpflow/tasks/`).
    // - {value} is an string|array of all path to watch for files.
    sources: {
        css: '/components/**/assets/raw/**/*.css',
        fonts: '/components/**/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}',
        html: '/components/**/assets/raw/**/*.html',
        images: '/components/**/assets/images/**/*.{jpg,jpeg,png,gif,svg}',
        js: '/components/**/js/**/*.js',
        json: '/components/**/assets/raw/**/*.json',
        scss: '/components/**/scss/**/*.{sass,scss}'
    },
    // Object of {key}:{value}
    // - {key} is the task name (from `./gulpflow/core/`).
    // - {value} is an array of all task name (from `./gulpflow/tasks/`) to run.
    tasks: {
        watch: ['js', 'scss'],
        build: ['html', 'css', 'json', 'fonts', 'images', 'js', 'scss']
    }
};


//
// Load Gulp Tasks
//

plugins.loadSubtasks(`${__dirname}/gulpflow/tasks/*.js`, plugins, config);
plugins.loadSubtasks(`${__dirname}/gulpflow/core/*.js`, plugins, config);
