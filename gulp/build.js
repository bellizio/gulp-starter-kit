'use strict';

module.exports = function(gulp, $, paths, env) {
  // build app for dev
  gulp.task('build:dev', ['clean:dev'], function(cb) {
    env.prod = false;
    $.runSequence(['js:dev', 'css', 'img', 'fonts'], 'inject:dev', cb);
  });

  // build app for prod
  gulp.task('build:prod', ['clean:prod'], function(cb) {
    env.prod = true;
    $.runSequence(['js:prod', 'css', 'img', 'fonts'], 'inject:prod', 'html:prod', cb);
  });
};
