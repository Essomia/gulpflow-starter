// ------------------------------
// -- ./core/watch.js
// ------------------------------

'use strict';

const config  = require('../config');
const gulp    = require('gulp');


//
// Defined
//

function watch() {

    gulp.task('watch', () => {
        config.tasks.watch.forEach((task) => {
            gulp.watch(config.sources.[task], gulp.series(task));
        });
    });

}


//
// Exports
//

module.exports = watch;
