const build = (gulp, $, config) => gulp.task('build', gulp.series(config.tasks.build));

module.exports = build;
