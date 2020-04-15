const colors = require('colors/safe');
const log = require('fancy-log');

const errorLog = error => {
    log.error(colors.red(`# [Error] ${error.plugin}`));
    log.error(colors.red(`# ${error.toString()}`));

    // Keep gulp from hanging on this task
    this.emit('end');
};

module.exports = errorLog;
