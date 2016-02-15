'use strict';

module.exports = function(gulp, $, paths, env) {
  // minify html for prod
  gulp.task('html:prod', function() {
    var options = {
      empty: true,
      spare: true,
      quotes: true
    };

    return gulp.src(paths.prod.root + '/index.html')
      .pipe($.minifyHtml(options))
      .pipe($.size({title: 'HTML'}))
      .pipe(gulp.dest(paths.prod.root));
  });
};
