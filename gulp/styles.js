'use strict';

module.exports = (gulp, $, paths, env) => {

  const cssnano      = require('cssnano');
  const autoprefixer = require('autoprefixer')({browsers: ['last 2 versions']});

  // build all css
  gulp.task('css', ['app-css', 'vendor-css']);

  // build app css
  gulp.task('app-css', () => {
    const sassOptions = {
      style: 'nested',
      precision: 10,
      includePaths: [
        '.'
      ]
    };

    return gulp.src(paths.src.root + '/assets/css/app.scss')
      .pipe($.if(!env.prod, $.sourcemaps.init()))
        .pipe($.sass(sassOptions))
        .pipe($.if(!env.prod, $.postcss([autoprefixer]), $.postcss([autoprefixer, cssnano])))
      .pipe($.if(!env.prod, $.sourcemaps.write()))
      .pipe($.if(env.prod, $.rename('app.min.css')))
      .pipe($.size({title: 'APP CSS', showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.css), gulp.dest(paths.prod.css)));
  });

  // build vendor css
  gulp.task('vendor-css', () => {
    return gulp.src($.mainBowerFiles({filter: '**/*.css'}))
      .pipe($.concat('vendor.css'))
      .pipe($.if(env.prod, $.postcss([cssnano])))
      .pipe($.if(env.prod, $.rename('vendor.min.css')))
      .pipe($.size({title: 'VENDOR CSS', showFiles: true}))
      .pipe($.if(!env.prod, gulp.dest(paths.dev.css), gulp.dest(paths.prod.css)));
  });
};
