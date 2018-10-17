// ------------------------------
// -- ./core/assets.js
// ------------------------------

'use strict';

const config  = require('../config');
const gulp    = require('gulp');


//
// Defined
//

function assets() {

    return gulp.task('assets', gulp.series(config.tasks.assets));

}


//
// Exports
//

module.exports = assets;
