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

    // -------------------------------------
    //   Global
    // -------------------------------------

    root: {
        src: './demo/src',
        dest: './demo/build'
    },

    ifs: {
        doSourcemaps: false,
        doMinify: true
    },


    // -------------------------------------
    //   Sources
    // -------------------------------------

    sources: {
        js: [
            '/components/**/js' + '/**/[^_]*.js'
        ],
        scss: [
            '/components/**/scss' + '/**/[^_]*.{sass,scss}'
        ],
        css: [
            '/components/**/assets/raw' + '/**/[^_]*.css'
        ],
        fonts: [
            '/components/**/assets/fonts' + '/**/[^_]*.{eot,svg,ttf,woff,woff2}'
        ],
        html: [
            '/components/**/assets/raw' + '/**/[^_]*.html'
        ],
        images: [
            '/components/**/assets/images' + '/**/[^_]*.{jpg,jpeg,png,gif,svg}'
        ],
        json: [
            '/components/**/assets/raw' + '/**/[^_]*.json'
        ]
    },


    // -------------------------------------
    //   Tasks
    // -------------------------------------

    tasks: {
        watch: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js'],
        assets:['images', 'fonts', 'html', 'json', 'css'],
        prod:  ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js']
    }

};


//
// Import project configurations when exist
//

if (fs.existsSync('./gulpflow.json')) {
    var projectConfig = JSON.parse(fs.readFileSync('./gulpflow.json'));

    config = merge(config, projectConfig);
}


//
// Exports
//

module.exports = config;
