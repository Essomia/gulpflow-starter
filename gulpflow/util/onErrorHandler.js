// ------------------------------
// -- ./util/onErrorHandler.js
// ------------------------------

'use strict';

const colors   = require('colors/safe');
const log      = require('fancy-log');


//
// Defined
//

function onErrorHandler(error) {

    const args = Array.prototype.slice.call(arguments);

    if (args.relativePath) {
        log.error(colors.red(`# [${args.relativePath} Error!]`));
        log.error(colors.red(`# ${args.messageOriginal}`));
    } else {
        log.error(colors.red(`# [Error!]`));
        log.error(colors.red(`# ${error.toString()}`));
    }

    // Keep gulp from hanging on this task
    this.emit('end');

}


//
// Exports
//

module.exports = onErrorHandler;
