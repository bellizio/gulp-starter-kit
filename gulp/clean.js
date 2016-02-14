'use strict';

module.exports = function(gulp, $, paths, env) {
  // clean all the things
  gulp.task('clean', ['clean:dev', 'clean:prod']);

  // clean dev build directory
  gulp.task('clean:dev', function() {
    return $.del(paths.dev.root);
  });

  // clean prod build directory
  gulp.task('clean:prod', function() {
    return $.del(paths.prod.root);
  });
};
