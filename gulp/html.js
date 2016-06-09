'use strict';

module.exports = (gulp, $, paths, env) => {
  // minify html for prod
  gulp.task('html:prod', () => {
    const options = {
      removeComments: true,
      collapseWhitespace: true
    };

    return gulp.src(`${paths.prod.root}/index.html`)
      .pipe($.htmlmin(options))
      .pipe($.size({title: 'HTML'}))
      .pipe(gulp.dest(paths.prod.root));
  });
};
