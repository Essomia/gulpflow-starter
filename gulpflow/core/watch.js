const gulp = require('gulp');

const config = require('../config');

const watch = () => {
    gulp.task('watch', () => {
        config.tasks.watch.forEach(task => {
            gulp.watch(config.root.src + config.sources[task], gulp.parallel(task));
        });
    });
};

module.exports = watch;
