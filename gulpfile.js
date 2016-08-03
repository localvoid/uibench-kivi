const gulp = require('gulp');
const ts = require('gulp-typescript');
const rollup = require('rollup');
const closureCompiler = require('google-closure-compiler').gulp();

const VERSION = 'dev';

const CLOSURE_OPTS = {
  externs: 'externs/uibench.js',
  compilation_level: 'ADVANCED',
  language_in: 'ECMASCRIPT6_STRICT',
  language_out: 'ECMASCRIPT5_STRICT',
  use_types_for_optimization: true,
  assume_function_wrapper: true,
  output_wrapper: '(function(){%output%}).call();',
  summary_detail_level: 3,
  warning_level: 'QUIET',
};

function clean() {
  const del = require('del');
  return del('build');
}

function html() {
  return gulp.src('html/*.html')
    .pipe(gulp.dest('dist/' + VERSION));
}

function buildTS() {
  return gulp.src('ts/*.ts')
    .pipe(ts(Object.assign(require('./tsconfig.json').compilerOptions, {
      typescript: require('typescript'),
    })))
    .pipe(gulp.dest('build/es6'));
}

function bundleSimple(done) {
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
      require('rollup-plugin-node-resolve')()
    ]
  }).then(function(bundle) {
    return bundle.write({
      format: 'es',
      dest: 'build/simple.es6.js'
    });
  });
}

function bundleAdvanced(done) {
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
      require('rollup-plugin-node-resolve')()
    ]
  }).then(function(bundle) {
    return bundle.write({
      format: 'es',
      dest: 'build/advanced.es6.js'
    });
  });
}

function bundleNokeys(done) {
  return rollup.rollup({
    format: 'es6',
    entry: 'build/es6/nokeys.js',
    plugins: [
      require('rollup-plugin-replace')({
        delimiters: ['<@', '@>'],
        values: {
          KIVI_DEBUG: 'DEBUG_DISABLED'
        }
      }),
      require('rollup-plugin-node-resolve')()
    ]
  }).then(function(bundle) {
    return bundle.write({
      format: 'es',
      dest: 'build/nokeys.es6.js'
    });
  });
}

function compileSimple() {
  return gulp.src(['build/simple.es6.js'])
    .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
      js_output_file: 'simple.js',
    })))
    .pipe(gulp.dest('dist/' + VERSION));
}

function compileAdvanced() {
  return gulp.src(['build/advanced.es6.js'])
    .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
      js_output_file: 'advanced.js',
    })))
    .pipe(gulp.dest('dist/' + VERSION));
}

function compileNokeys() {
  return gulp.src(['build/nokeys.es6.js'])
    .pipe(closureCompiler(Object.assign({}, CLOSURE_OPTS, {
      js_output_file: 'nokeys.js',
    })))
    .pipe(gulp.dest('dist/' + VERSION));
}

function deploy() {
  const ghPages = require('gulp-gh-pages');
  return gulp.src('dist/**/*')
    .pipe(ghPages());
}

const build = gulp.series(
  clean,
  gulp.parallel(html, buildTS),
  gulp.parallel(bundleSimple, bundleAdvanced, bundleNokeys),
  compileSimple,
  compileAdvanced,
  compileNokeys);

exports.build = build;
exports.deploy = deploy;
