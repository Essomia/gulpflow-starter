// ------------------------------
// -- ./util/errorLog.js
// ------------------------------

'use strict';

const colors = require('colors/safe');
const log    = require('fancy-log');


//
// Defined
//

function errorLog(error) {

    log.error(colors.red(`# [Error] ${error.plugin}`));
    log.error(colors.red(`# ${error.toString()}`));

    // Keep gulp from hanging on this task
    this.emit('end');

}


//
// Exports
//

module.exports = errorLog;
