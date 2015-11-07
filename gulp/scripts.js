'use strict';

module.exports = function(gulp, $, paths) {
  // build js for dev
  gulp.task('js:dev', ['vendor-js', 'app-js']);

  // build vendor js
  gulp.task('vendor-js', function() {
    return gulp.src($.mainBowerFiles({filter: '**/*.js'}))
      .pipe($.concat('vendor.js'))
      .pipe($.size({title: "VENDOR JS", showFiles: true}))
      .pipe($.if(!global.prod, gulp.dest(paths.dev.js), gulp.dest(paths.prod.js)));
  });

  // build app js
  gulp.task('app-js', function() {
    return gulp.src(paths.src.js)
      .pipe($.if(!global.prod, $.sourcemaps.init()))
        .pipe($.concat('app.js'))
      .pipe($.if(!global.prod, $.sourcemaps.write()))
      .pipe($.size({title: "APP JS", showFiles: true}))
      .pipe($.if(!global.prod, gulp.dest(paths.dev.js), gulp.dest(paths.prod.js)));
  });

  // build js for prod
  gulp.task('js:prod', ['js:dev'], function() {
    return gulp.src([
        // order is important here
        paths.prod.js + '/vendor.js',
        paths.prod.js + '/app.js'
      ])
      .pipe($.concat('app.min.js'))
      .pipe($.uglify())
      .pipe($.size({title: "APP JS", showFiles: true}))
      .pipe(gulp.dest(paths.prod.js));
  });
};
