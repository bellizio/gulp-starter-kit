'use strict';

module.exports = function(gulp, $, paths) {
  // build app for dev
  gulp.task('build:dev', ['clean:dev'], function(cb) {
    global.prod = false;
    $.runSequence(['js:dev', 'css', 'img', 'fonts'], 'inject:dev', cb);
  });

  // build app for prod
  gulp.task('build:prod', ['clean:prod'], function(cb) {
    global.prod = true;
    $.runSequence(['js:prod', 'css', 'img', 'fonts'], 'inject:prod', 'html:prod', cb);
  });
};
