// ------------------------------
// -- ./config.js
// ------------------------------

'use strict';


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

    scss: {
        src: [
            '/components/**/scss' + '/**/[^_]*.{sass,scss}'
        ]
    },

    js: {
        src: [
            '/components/**/js' + '/**/[^_]*.js'
        ]
    },

    fonts: {
        src: [
            '/components/**/assets/fonts' + '/**/[^_]*.{eot,svg,ttf,woff,woff2}'
        ]
    },

    images: {
        src: [
            '/components/**/assets/images' + '/**/[^_]*.{jpg,jpeg,png,gif,svg}'
        ]
    },

    json: {
        src: [
            '/components/**/assets/raw' + '/**/[^_]*.json'
        ]
    },

    css: {
        src: [
            '/components/**/assets/raw' + '/**/[^_]*.css'
        ]
    },

    html: {
        src: [
            '/components/**/assets/raw' + '/**/[^_]*.html'
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
// Exports
//

module.exports = config;
