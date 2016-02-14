'use strict';

module.exports = function(gulp, $, paths, env) {
  // lint all the things
  gulp.task('lint', ['lint:js', 'lint:css']);

  // lint js
  gulp.task('lint:js', function() {
    return gulp.src(paths.src.js)
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'));
  });

  // lint css
  gulp.task('lint:css', function() {
    return gulp.src(paths.src.css)
      .pipe($.sassLint())
      .pipe($.sassLint.format())
      .pipe($.sassLint.failOnError());
  });
};
