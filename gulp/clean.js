'use strict';

module.exports = (gulp, $, paths, env) => {
  // clean all the things
  gulp.task('clean', ['clean:dev', 'clean:prod']);

  // clean dev build directory
  gulp.task('clean:dev', () => {
    return $.del(paths.dev.root);
  });

  // clean prod build directory
  gulp.task('clean:prod', () => {
    return $.del(paths.prod.root);
  });
};
