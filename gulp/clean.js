'use strict';

module.exports = function(gulp, $, paths) {
  // clean all the things
  gulp.task('clean', ['clean:dev', 'clean:prod']);

  // clean dev build directory
  gulp.task('clean:dev', function(cb) {
    $.del([paths.dev.root], cb);
  });

  // clean prod build directory
  gulp.task('clean:prod', function(cb) {
    $.del([paths.prod.root], cb);
  });
};
