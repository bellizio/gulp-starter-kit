'use strict';

module.exports = (gulp, $, paths, env) => {
  // copy fonts to dev/prod
  gulp.task('fonts', () => {
    return gulp.src(paths.src.fonts)
      .pipe($.size({title: 'FONTS'}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.fonts), gulp.dest(paths.prod.fonts)));
  });
};
