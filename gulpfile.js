// ------------------------------
// -- Front-end boilerplate
// ------------------------------

const plugins = require('gulp-load-plugins')();

//
// Set default config
//

const config = {
    root: {
        yaml: './',
        src: './example/src',
        dest: './example/app'
    },
    ifs: {
        doSourcemaps: false,
        doMinify: true
    },
    yaml: {
        eslint: '.eslintrc.yaml',
        stylelint: '.stylelintrc.yaml'
    },
    // Object of {key}:{value}
    // - {key} is the taskname
    // - {value} is all path to watch for files
    sources: {
        js: '/components/**/js' + '/**/*.js',
        scss: '/components/**/scss' + '/**/*.{sass,scss}',
        images: '/components/**/assets/images' + '/**/*.{jpg,jpeg,png,gif,svg}',
        fonts: '/components/**/assets/fonts' + '/**/*.{eot,svg,ttf,woff,woff2}',
        html: '/components/**/assets/raw' + '/**/*.html',
        css: '/components/**/assets/raw' + '/**/*.css',
        json: '/components/**/assets/raw' + '/**/*.json'
    },
    // Object of {key}:{value}
    // - {key} is the taskname
    // - {value} is an array of tasks to run (see sources for tasks list)
    tasks: {
        watch: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js'],
        build: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js']
    }
};


//
// Load Gulp Tasks
//

plugins.loadSubtasks(`${__dirname}/gulpflow/tasks/*.js`, plugins, config);
plugins.loadSubtasks(`${__dirname}/gulpflow/core/*.js`, plugins, config);
