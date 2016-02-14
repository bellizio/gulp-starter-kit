'use strict';

module.exports = function(gulp, $, paths, env) {
  // build all css
  gulp.task('css', ['app-css', 'vendor-css']);

  // build app css
  gulp.task('app-css', function() {
    var sassOptions = {
      style: 'nested',
      precision: 10,
      includePaths: [
        '.'
      ]
    };

    var processors = [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ];

    return gulp.src(paths.src.root + '/assets/css/app.scss')
      .pipe($.if(!env.prod, $.sourcemaps.init()))
        .pipe($.sass(sassOptions))
        .pipe($.postcss(processors))
      .pipe($.if(!env.prod, $.sourcemaps.write()))
      .pipe($.if(env.prod, $.rename('app.min.css')))
      .pipe($.if(env.prod, $.minifyCss()))
      .pipe($.size({title: "APP CSS", showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.css), gulp.dest(paths.prod.css)));
  });

  // build vendor css
  gulp.task('vendor-css', function() {
    return gulp.src($.mainBowerFiles({filter: '**/*.css'}))
      .pipe($.concat('vendor.css'))
      .pipe($.if(env.prod, $.rename('vendor.min.css')))
      .pipe($.if(env.prod, $.minifyCss()))
      .pipe($.size({title: "VENDOR CSS", showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.css), gulp.dest(paths.prod.css)));
  });
};
