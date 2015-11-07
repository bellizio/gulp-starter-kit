'use strict';

module.exports = function(gulp, $, paths) {
  // lint js
  gulp.task('lint:js', function() {
    return gulp.src(paths.src.js)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'));
  });
};
