'use strict';

module.exports = function(gulp, $, paths, env) {
  // build js for dev
  gulp.task('js:dev', ['vendor-js', 'app-js']);

  // build vendor js
  gulp.task('vendor-js', function() {
    return gulp.src($.mainBowerFiles({filter: '**/*.js'}))
      .pipe($.concat('vendor.js'))
      .pipe($.size({title: "VENDOR JS", showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.js), gulp.dest(paths.prod.js)));
  });

  // build app js
  gulp.task('app-js', function() {
    return gulp.src(paths.src.js)
      .pipe($.if(!env.prod, $.sourcemaps.init()))
        .pipe($.concat('app.js'))
      .pipe($.if(!env.prod, $.sourcemaps.write()))
      .pipe($.size({title: "APP JS", showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.js), gulp.dest(paths.prod.js)));
  });

  // build js for prod
  gulp.task('js:prod', ['js:dev'], function() {
    var sourceFiles = [
      // order is important here
      paths.prod.js + '/vendor.js',
      paths.prod.js + '/app.js'
    ];

    return gulp.src(sourceFiles)
      .pipe($.concat('app.min.js'))
      .pipe($.uglify())
      .pipe($.size({title: "APP JS", showFiles: true}))
      .pipe(gulp.dest(paths.prod.js))
      .on('end', function() {
        return $.del(sourceFiles);
      });
  });
};
