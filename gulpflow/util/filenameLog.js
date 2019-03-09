// ------------------------------
// -- ./util/filenameLog.js
// ------------------------------

'use strict';

const colors  = require('colors/safe');
const log     = require('fancy-log');
const through = require('through2');


//
// Defined
//

function filenameLog() {

    return through.obj((file, encodage, cb) => {
        var filename = file.path.split(file.cwd)[1];

        log.info(colors.yellow(`> .${filename}`));

        cb(null, file);
    });

}


//
// Exports
//

module.exports = filenameLog;
