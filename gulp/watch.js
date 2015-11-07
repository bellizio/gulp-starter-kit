'use strict';

module.exports = function(gulp, $, paths) {

  var browserSync = require('browser-sync').get('app-server');

  // watch for app-related changes
  gulp.task('watch', ['build:dev'], function() {
    gulp.watch(paths.src.css, function() {
      $.runSequence('app-css', browserSync.reload);
    });

    gulp.watch(paths.src.js, function() {
      $.runSequence('app-js', browserSync.reload);
    });
  });
};
