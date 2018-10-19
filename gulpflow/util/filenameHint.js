// ------------------------------
// -- ./util/filenameHint.js
// ------------------------------

'use strict';

const colors   = require('colors/safe');
const log      = require('fancy-log');
const through  = require('through2');


//
// Defined
//

function getFilename(file) {

    return file.path.split(file.cwd)[1];

}

function filenameHint(isFinal) {

    isFinal = isFinal || false;

    var stream = through.obj((file, encodage, cb) => {
        var filename = getFilename(file);

        if (isFinal) {
            log(colors.green(`> .${filename}`));
        } else {
            log(colors.yellow(`+ .${filename}`));
        }

        cb(null, file);
    });

    return stream;

}


//
// Exports
//

module.exports = filenameHint;
