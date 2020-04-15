const gulp = require('gulp');

const config = require('../config');

const assets = () => {
    return gulp.task('assets', gulp.series(config.tasks.assets));
};

module.exports = assets;
