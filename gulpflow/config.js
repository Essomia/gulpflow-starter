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
        doMinify: true
    },

    root: pathRoot

};


//
// Exports
//

module.exports = config;
