const gulp = require('gulp');

const config = require('../config');

const build = () => {
    return gulp.task('build', gulp.series(config.tasks.build));
};

module.exports = build;
