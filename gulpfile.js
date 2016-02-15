'use strict';

const gulp   = require('gulp'),
    $        = require('gulp-load-plugins')({
      pattern: ['gulp-*', 'main-bower-files', 'del', 'run-sequence', 'browser-sync']
    }),
    taskPath = './gulp/',
    taskList = require('fs').readdirSync(taskPath),
    env      = {};

const paths = {
  bower:   'bower_components',
  src: {
    root:  'app/source',
    html:  'app/source/**/*.html',
    css:   'app/source/assets/css/**/*.scss',
    js:    ['app/source/**/*.js', '!app/source/**/*.test.js'],
    img:   'app/source/assets/images/**/*',
    fonts: ['app/source/assets/fonts/**/*', '!app/source/assets/fonts/**/*.json']
  },
  dev: {
    root:  'app/dev',
    css:   'app/dev/assets/css',
    js:    'app/dev/assets/js',
    img:   'app/dev/assets/images',
    fonts: 'app/dev/assets/fonts'
  },
  prod: {
    root:  'app/prod',
    css:   'app/prod/assets/css',
    js:    'app/prod/assets/js',
    img:   'app/prod/assets/images',
    fonts: 'app/prod/assets/fonts'
  }
};

taskList.forEach((taskFile) => {
  try {
    require(taskPath + taskFile)(gulp, $, paths, env);
  } catch(error) {
    console.error(taskFile + ' could not be loaded: ' + error);
  }
});
