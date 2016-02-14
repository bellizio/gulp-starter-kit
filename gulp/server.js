'use strict';

module.exports = function(gulp, $, paths, env) {

  var browserSync = require('browser-sync').create('app-server');

  var browserSyncInit = function(dir) {
    browserSync.init({
      server: {
        baseDir: dir
      },
      port: 8000
    });
  };

  gulp.task('serve', ['watch'], function() {
    browserSyncInit(paths.dev.root);
  });

  gulp.task('serve:prod', ['build:prod'], function() {
    browserSyncInit(paths.prod.root);
  });
};
