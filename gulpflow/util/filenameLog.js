const colors = require('colors/safe');
const log = require('fancy-log');
const through = require('through2');

const filenameLog = () => {
    return through.obj((file, encodage, cb) => {
        var filename = file.path.split(file.cwd)[1];

        log.info(colors.yellow(`> .${filename}`));

        cb(null, file);
    });
};

module.exports = filenameLog;
