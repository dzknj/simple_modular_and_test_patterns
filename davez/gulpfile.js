const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'gulpfile.js'];

gulp.task('mochatest', function() {
  return gulp.src('test/*.js')
    .pipe(mocha());
});

gulp.task('lint:test', function() {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: {
        'indent': ['error', 2]
      },
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:notest', function() {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'indent': ['error', 2]
      },
      envs: [
        'mocha',
        'es6'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint', ['lint:notest', 'lint:test']);

gulp.task('default', ['lint','mochatest'], function() {
  gulp.watch(['test/*.js', files, './test/**/*test.js'], function() {
    gulp.run('lint', 'mochatest');
  });
});
