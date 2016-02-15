'use strict';

module.exports = function(gulp, $, paths, env) {
  // copy fonts to dev/prod
  gulp.task('fonts', function() {
    return gulp.src(paths.src.fonts)
      .pipe($.size({title: 'FONTS'}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.fonts), gulp.dest(paths.prod.fonts)));
  });
};
