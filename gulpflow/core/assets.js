// ------------------------------
// -- ./core/assets.js
// ------------------------------

'use strict';

const config = require('../config');
const gulp   = require('gulp');
const colors = require('colors/safe');
const log    = require('fancy-log');


//
// Defined
//

function assets() {

    gulp.task('assets', gulp.series(config.tasks.assets));

}


//
// Exports
//

module.exports = assets;
