'use strict';

module.exports = (gulp, $, paths, env) => {

  const browserSync = require('browser-sync').get('app-server');

  // watch for app-related changes
  gulp.task('watch', ['build:dev'], () => {
    gulp.watch(paths.src.css, () => {
      $.runSequence('app-css', browserSync.reload);
    });

    gulp.watch(paths.src.js, () => {
      $.runSequence('app-js', browserSync.reload);
    });
  });
};
