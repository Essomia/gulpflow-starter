const del = require('del');

const clean = (gulp, $, config) => {
    gulp.task('clean', () => del(config.root.dest));
};

module.exports = clean;
