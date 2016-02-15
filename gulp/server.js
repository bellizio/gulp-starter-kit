'use strict';

module.exports = (gulp, $, paths, env) => {

  const browserSync = require('browser-sync').create('app-server');

  const browserSyncInit = (dir) => {
    browserSync.init({
      server: {
        baseDir: dir
      },
      port: 8000
    });
  };

  gulp.task('serve', ['watch'], () => {
    browserSyncInit(paths.dev.root);
  });

  gulp.task('serve:prod', ['build:prod'], () => {
    browserSyncInit(paths.prod.root);
  });
};
