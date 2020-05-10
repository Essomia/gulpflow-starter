const { info } = require('fancy-log');
const { obj } = require('through2');
const { yellow: cYellow } = require('colors/safe');

const filenameLog = () => obj((file, encodage, cb) => {
    const filename = file.path.split(file.cwd)[1];

    info(cYellow(`> .${filename}`));

    cb(null, file);
});

module.exports = filenameLog;
