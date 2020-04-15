const del = require('del');
const gulp = require('gulp');

const config = require('../config');

const clean = () => {
    gulp.task('clean', () => {
        return del([config.root.dest]);
    });
};

module.exports = clean;
