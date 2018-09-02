// ------------------------------
// -- ./config.js
// ------------------------------

'use strict';

//
// Configurations
//

const regexFile   = '/**/[^_]*';      // to ignore partial files
const regexFolder = '/components/**';

const pathRoot = {
    src: './example/src',
    dest: './example/dest'
};

const config = {

    // -------------------------------------
    //   Stylesheets
    // -------------------------------------

    scss: {
        src: [
            pathRoot.src + regexFolder + '/scss' + regexFile + '.{sass,scss}'
        ],
        sass: {
            outputStyle: 'expanded',
            precision: 5,
            includePaths: [
                pathRoot.src
            ]
        },
        autoprefixer: {
            browsers: ['last 2 versions', '> 2%'],
            cascade: false
        },
        cssnano: {
            reduceIdents: false
        },
        dest: '/styles'
    },

    // -------------------------------------
    //   Scripts
    // -------------------------------------

    js: {
        src: [
            pathRoot.src + regexFolder + '/js' + regexFile + '.js'
        ],
        include: {
            extensions: 'js',
            includePaths: [
                pathRoot.src
            ],
            hardFail: false
        },
        uglify: {},
        dest: '/scripts'
    },


    // -------------------------------------
    //   Global
    // -------------------------------------

    ifs: {
        doMinify: true,
        doSourcemaps: false
    },

    root: pathRoot

};


//
// Exports
//

module.exports = config;
