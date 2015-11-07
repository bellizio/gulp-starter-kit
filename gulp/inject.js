'use strict';

module.exports = function(gulp, $, paths) {
  // inject css and js into index.html for dev build
  gulp.task('inject:dev', function() {
    var css = gulp.src([
      // order is important here
      paths.dev.css + '/vendor.css',
      paths.dev.css + '/app.css'
    ], {read: false});

    var js = gulp.src([
      // order is important here
      paths.dev.js + '/vendor.js',
      paths.dev.js + '/app.js'
    ], {read: false});

    var cssOptions = {
      ignorePath: paths.dev.root,
      addRootSlash: false
    };

    var jsOptions = {
      ignorePath: paths.dev.root,
      addRootSlash: false
    };

    return gulp.src(paths.src.root + '/index.html')
      .pipe($.inject(css, cssOptions))
      .pipe($.inject(js, jsOptions))
      .pipe(gulp.dest(paths.dev.root));
  });

  // inject js and css into index.html for prod build
  gulp.task('inject:prod', function() {
    var css = gulp.src([
      // order is important here
      paths.prod.css + '/app.min.css'
    ], {read: false});

    var js = gulp.src([
      // order is important here
      paths.prod.js + '/app.min.js'
    ], {read: false});

    var cssOptions = {
      ignorePath: paths.prod.root,
      addRootSlash: false
    };

    var jsOptions = {
      ignorePath: paths.prod.root,
      addRootSlash: false
    };

    return gulp.src(paths.src.root + '/index.html')
      .pipe($.inject(css, cssOptions))
      .pipe($.inject(js, jsOptions))
      .pipe(gulp.dest(paths.prod.root));
  });
};
