// ------------------------------
// -- ./core/clean.js
// ------------------------------

'use strict';

const config  = require('../config');
const gulp    = require('gulp');
const del     = require('del');


//
// Defined
//

function clean() {

    gulp.task('clean', () => {
        return del([ config.root.dest ]);
    });

}


//
// Exports
//

module.exports = clean;
