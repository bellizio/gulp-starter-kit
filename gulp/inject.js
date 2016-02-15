'use strict';

module.exports = (gulp, $, paths, env) => {
  // inject css and js into index.html for dev build
  gulp.task('inject:dev', () => {
    const css = gulp.src([
      // order is important here
      paths.dev.css + '/vendor.css',
      paths.dev.css + '/app.css'
    ], {read: false});

    const js = gulp.src([
      // order is important here
      paths.dev.js + '/vendor.js',
      paths.dev.js + '/app.js'
    ], {read: false});

    const cssOptions = {
      ignorePath: paths.dev.root,
      addRootSlash: false
    };

    const jsOptions = {
      ignorePath: paths.dev.root,
      addRootSlash: false
    };

    return gulp.src(paths.src.root + '/index.html')
      .pipe($.inject(css, cssOptions))
      .pipe($.inject(js, jsOptions))
      .pipe(gulp.dest(paths.dev.root));
  });

  // inject js and css into index.html for prod build
  gulp.task('inject:prod', () => {
    const css = gulp.src([
      // order is important here
      paths.prod.css + '/app.min.css'
    ], {read: false});

    const js = gulp.src([
      // order is important here
      paths.prod.js + '/app.min.js'
    ], {read: false});

    const cssOptions = {
      ignorePath: paths.prod.root,
      addRootSlash: false
    };

    const jsOptions = {
      ignorePath: paths.prod.root,
      addRootSlash: false
    };

    return gulp.src(paths.src.root + '/index.html')
      .pipe($.inject(css, cssOptions))
      .pipe($.inject(js, jsOptions))
      .pipe(gulp.dest(paths.prod.root));
  });
};
