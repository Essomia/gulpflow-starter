// ------------------------------
// -- ./config.js
// ------------------------------

'use strict';

const fs    = require('fs');
const merge = require('merge-objects');


//
// Default configurations
//

let config = {

    root: {
        yaml: './',
        src: './demo/src',
        dest: './demo/build'
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
        js:     '/components/**/js' + '/**/*.js',
        scss:   '/components/**/scss' + '/**/*.{sass,scss}',
        images: '/components/**/assets/images' + '/**/*.{jpg,jpeg,png,gif,svg}',
        fonts:  '/components/**/assets/fonts' + '/**/*.{eot,svg,ttf,woff,woff2}',
        html:   '/components/**/assets/raw' + '/**/*.html',
        css:    '/components/**/assets/raw' + '/**/*.css',
        json:   '/components/**/assets/raw' + '/**/*.json'
    },

    // Object of {key}:{value}
    // - {key} is the taskname
    // - {value} is an array of tasks to run (see sources for tasks list)
    tasks: {
        watch: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js'],
        assets:['images', 'fonts', 'html', 'json', 'css'],
        build: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js']
    }

};


//
// Import project configurations when exist
//

if (fs.existsSync('./gulpflow.json')) {
    var projectConfig = JSON.parse(fs.readFileSync('./gulpflow.json'));

    // Remove default values if key in projectConfig ...
    if (projectConfig.root) { config.root = {}; }
    if (projectConfig.ifs) { config.ifs = {}; }
    if (projectConfig.yaml) { config.yaml = {}; }
    if (projectConfig.sources) { config.sources = {}; }
    if (projectConfig.tasks) { config.tasks = {}; }

    config = merge(config, projectConfig);
}


//
// Exports
//

module.exports = config;
