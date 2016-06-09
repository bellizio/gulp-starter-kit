'use strict';

module.exports = (gulp, $, paths, env) => {
  // copy images to dev/prod
  gulp.task('img', () => {
    return gulp.src(paths.src.img)
      .pipe($.imagemin())
      .pipe($.size({title: 'IMAGES'}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.img), gulp.dest(paths.prod.img)));
  });
};
