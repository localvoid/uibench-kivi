'use strict';

var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var rollup = require('rollup');
var closureCompiler = require('google-closure-compiler').gulp();
var ghPages = require('gulp-gh-pages');

var CLOSURE_OPTS = {
  externs: 'externs/uibench.js',
  compilation_level: 'ADVANCED',
  language_in: 'ECMASCRIPT6_STRICT',
  language_out: 'ECMASCRIPT5_STRICT',
  use_types_for_optimization: true,
  assume_function_wrapper: true,
  output_wrapper: '(function(){%output%}).call();',
  summary_detail_level: 3,
  warning_level: 'QUIET'
};

gulp.task('clean', del.bind(null, ['dist', 'build']));

gulp.task('ts', function() {
  return gulp.src('web/**/*.ts')
    .pipe(ts(require('./tsconfig.json').compilerOptions))
    .pipe(gulp.dest('build/es6'));
});

gulp.task('js:bundle:simple', ['ts'], function(done) {
  return rollup.rollup({
    format: 'es6',
    entry: 'build/es6/ts/simple/main.js',
    plugins: [
      require('rollup-plugin-replace')({
        delimiters: ['<@', '@>'],
        values: {
          KIVI_DEBUG: 'DEBUG_DISABLED'
        }
      }),
      require('rollup-plugin-node-resolve')({
        jsnext: true,
      })
    ]
  }).then(function(bundle) {
    return bundle.write({
      format: 'es6',
      dest: 'build/simple.es6.js'
    });
  });
});

gulp.task('js:bundle:advanced', ['ts'], function(done) {
  return rollup.rollup({
    format: 'es6',
    entry: 'build/es6/ts/advanced/main.js',
    plugins: [
      require('rollup-plugin-replace')({
        delimiters: ['<@', '@>'],
        values: {
          KIVI_DEBUG: 'DEBUG_DISABLED'
        }
      }),
      require('rollup-plugin-node-resolve')({
        jsnext: true,
      })
    ]
  }).then(function(bundle) {
    return bundle.write({
      format: 'es6',
      dest: 'build/advanced.es6.js'
    });
  });
});

gulp.task('js:optimize:simple', ['js:bundle:simple'], function() {
  var opts = Object.create(CLOSURE_OPTS);
  opts['js_output_file'] = 'simple.js';

  return gulp.src(['build/simple.es6.js'])
      .pipe(closureCompiler(opts))
      .pipe(gulp.dest('dist'));
});

gulp.task('js:optimize:advanced', ['js:bundle:advanced'], function() {
  var opts = Object.create(CLOSURE_OPTS);
  opts['js_output_file'] = 'advanced.js';

  return gulp.src(['build/advanced.es6.js'])
      .pipe(closureCompiler(opts))
      .pipe(gulp.dest('dist'));
});

gulp.task('js', ['js:optimize:simple', 'js:optimize:advanced']);

gulp.task('statics', function() {
  gulp.src(['./web/*.html'])
    .pipe(gulp.dest('dist'));
});

gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['statics', 'js']);
