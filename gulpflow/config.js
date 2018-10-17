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
    src: './demo/src',
    dest: './demo/build'
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
    //   Statics
    // -------------------------------------

    fonts: {
        src: [
            pathRoot.src + regexFolder + '/assets/fonts' + regexFile + '.{eot,svg,ttf,woff,woff2}'
        ],
        dest: '/assets/fonts'
    },

    images: {
        src: [
            pathRoot.src + regexFolder + '/assets/images' + regexFile + '.{jpg,jpeg,png,gif,svg}'
        ],
        imagemin: {
            options: {
                jpegtran: { progressive: true },
                optipng: { optimizationLevel: 5 },
                gifsicle: { interlaced: true },
                svgo: {
                    plugins: [{
                        removeViewBox: true,
                        removeUnknownsAndDefaults: true,
                        cleanupIDs: true
                    }]
                }
            },
            verbose: { verbose: true }
        },
        dest: '/assets/images'
    },

    json: {
        src: [
            pathRoot.src + regexFolder + '/assets/raw' + regexFile + '.json'
        ],
        jsonminify: {},
        dest: '/assets/raw'
    },

    css: {
        src: [
            pathRoot.src + regexFolder + '/assets/raw' + regexFile + '.css'
        ],
        autoprefixer: {
            browsers: ['last 2 versions', '> 2%'],
            cascade: false
        },
        cssnano: {
            reduceIdents: false
        },
        dest: '/assets/raw'
    },

    html: {
        src: [
            pathRoot.src + regexFolder + '/assets/raw' + regexFile + '.html'
        ],
        htmlmin: {
            keepClosingSlash: true,
            quoteCharacter: '\"',
            removeComments: true,
            collapseWhitespace: true
        },
        dest: '/assets/raw'
    },


    // -------------------------------------
    //   Global
    // -------------------------------------

    ifs: {
        doMinify: true,
        doSourcemaps: false
    },

    tasks: {
        watch: ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js'],
        assets:['images', 'fonts', 'html', 'json', 'css'],
        prod:  ['images', 'fonts', 'html', 'json', 'css', 'scss', 'js']
    },

    root: pathRoot

};


//
// Exports
//

module.exports = config;
