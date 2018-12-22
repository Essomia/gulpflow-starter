// ------------------------------
// -- ./core/build.js
// ------------------------------

'use strict';

const config  = require('../config');
const gulp    = require('gulp');


//
// Defined
//

function build() {

    return gulp.task('build', gulp.series(config.tasks.prod));

}


//
// Exports
//

module.exports = build;
