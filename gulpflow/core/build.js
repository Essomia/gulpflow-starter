// ------------------------------
// -- ./core/build.js
// ------------------------------

'use strict';

const config = require('../config');
const gulp   = require('gulp');
const colors = require('colors/safe');
const log    = require('fancy-log');


//
// Defined
//

function msgBuild(cb) {
    log(colors.bgYellow(`##############################`));
    log(colors.bgYellow(`#### BUILD PROJECT ###########`));
    log(colors.bgYellow(`##############################`));

    cb();
}

function build() {

    gulp.task('build', gulp.series(msgBuild, config.tasks.prod));

}


//
// Exports
//

module.exports = build;
