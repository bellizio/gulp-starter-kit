'use strict';

module.exports = function(gulp, $, paths) {
  // copy images to dev/prod
  gulp.task('img', function() {
    return gulp.src(paths.src.img)
      .pipe($.imagemin())
      .pipe($.size({title: "IMAGES"}))
      .pipe($.if(!global.prod, gulp.dest(paths.dev.img), gulp.dest(paths.prod.img)));
  });
};
