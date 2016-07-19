const gulp = require('gulp');
const del = require('del');
const ts = require('gulp-typescript');
const rollup = require('rollup');
const closureCompiler = require('google-closure-compiler').gulp();

const CLOSURE_OPTS = {
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

gulp.task('clean', del.bind(null, ['build']));

gulp.task('ts', function() {
  return gulp.src('ts/*.ts')
    .pipe(ts(Object.assign(require('./tsconfig.json').compilerOptions, {
      typescript: require('typescript'),
    })))
    .pipe(gulp.dest('build/es6'));
});

gulp.task('js:bundle:simple', ['ts'], function(done) {
  return rollup.rollup({
    format: 'es6',
    entry: 'build/es6/simple.js',
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
      format: 'es',
      dest: 'build/simple.es6.js'
    });
  });
});

gulp.task('js:bundle:advanced', ['ts'], function(done) {
  return rollup.rollup({
    format: 'es6',
    entry: 'build/es6/advanced.js',
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
      format: 'es',
      dest: 'build/advanced.es6.js'
    });
  });
});

gulp.task('js:optimize:simple', ['js:bundle:simple'], function() {
  return gulp.src(['build/simple.es6.js'])
    .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
      js_output_file: 'simple.js',
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('js:optimize:advanced', ['js:bundle:advanced'], function() {
  return gulp.src(['build/advanced.es6.js'])
    .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
      js_output_file: 'advanced.js',
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('js', ['js:optimize:simple', 'js:optimize:advanced']);

gulp.task('default', ['js']);
