var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var closureCompiler = require('google-closure-compiler').gulp();
var ghPages = require('gulp-gh-pages');

var DEST = './build';

gulp.task('clean', del.bind(null, [DEST]));

gulp.task('scripts', function() {
  return gulp.src(['web/**/*.js', 'node_modules/kivi/src/**/*.js', 'node_modules/uibench-base/lib/*.js'])
    .pipe(closureCompiler({
      js_output_file: 'main.js',
      define: [
        'kivi.DEBUG=false',
        //'kivi.ENABLE_COMPONENT_RECYCLING=true'
      ],
      dependency_mode: 'STRICT',
      entry_point: 'goog:app.main',
      compilation_level: 'ADVANCED_OPTIMIZATIONS',
      language_in: 'ECMASCRIPT6_STRICT',
      language_out: 'ECMASCRIPT5_STRICT',
      output_wrapper: '(function(){%output%}).call();',
      warning_level: 'VERBOSE',
      jscomp_warning: 'reportUnknownTypes',
      summary_detail_level: 3
    }))
    .pipe(gulp.dest(DEST))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src('./web/*.html')
    .pipe(gulp.dest(DEST))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', ['default'], function() {
  browserSync({
    open: false,
    port: 3000,
    notify: false,
    server: 'build'
  });

  gulp.watch('./web/js/**/*.js', ['scripts']);
  gulp.watch('./web/**/*.html', ['html']);
});

gulp.task('deploy', ['default'], function () {
  return gulp.src(DEST + '/**/*')
    .pipe(ghPages());
});

gulp.task('default', ['scripts', 'html']);
