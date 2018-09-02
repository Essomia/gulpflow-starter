// ------------------------------
// -- ./core/watch.js
// ------------------------------

'use strict';

const config = require('../config');
const gulp   = require('gulp');
const colors = require('colors/safe');
const log    = require('fancy-log');


//
// Defined
//

function msgWatch() {
    log(colors.bgYellow(`##############################`));
    log(colors.bgYellow(`#### START WATCHING TASKS ####`));
    log(colors.bgYellow(`##############################`));
}

function watch() {

    gulp.task('watch', () => {
        msgWatch();

        config.tasks.watch.forEach((task) => {
            gulp.watch(config[task].src, gulp.series(task));
        });
    });

}


//
// Exports
//

module.exports = watch;
