// ------------------------------
// -- ./core/clean.js
// ------------------------------

'use strict';

const config = require('../config');
const gulp   = require('gulp');
const colors = require('colors/safe');
const del    = require('del');
const log    = require('fancy-log');


//
// Defined
//

function msgClean() {
    log(colors.bgYellow(`##############################`));
    log(colors.bgYellow(`#### CLEAN PROJECT ###########`));
    log(colors.bgYellow(`##############################`));
}

function clean() {

    gulp.task('clean', () => {
        msgClean();

        return del([ config.root.dest ]);
    });

}


//
// Exports
//

module.exports = clean;
