const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['index.js', 'lib/**/*.js', 'gulpfile.js'];

gulp.task('lint:test', function() {
  return gulp.src('./test/**/*test.js')
    .pipe(eslint({
      rules: {
        'indent': ['error', 2],
        'semi': 0,
        'strict': 0,
        'quotes': [1, 'single', 'avoid-escape'],
        'no-use-before-define': 0,
        'curly': 0,
        'no-underscore-dangle': 0,
        'no-lonely-if': 1,
        'no-unused-vars': [2, {'vars' : 'all', 'args' : 'after-used'}],
        'no-mixed-requires': 0,
        'space-infix-ops': 0
      },
      envs: [
        'mocha',
        'es6',
        'node'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('lint:notest', function() {
  return gulp.src(files)
    .pipe(eslint({
      rules: {
        'indent': ['error', 2],
        'semi': 0,
        'strict': 0,
        'quotes': [1, 'single', 'avoid-escape'],
        'no-use-before-define': 0,
        'curly': 0,
        'no-underscore-dangle': 0,
        'no-lonely-if': 1,
        'no-unused-vars': [2, {'vars' : 'all', 'args' : 'after-used'}],
        'no-mixed-requires': 0,
        'space-infix-ops': 0
      },
      envs: [
        'mocha',
        'es6',
        'node'
      ]
    }))
    .pipe(eslint.format());
});

gulp.task('mochatest', function() {
  return gulp.src('test/*.js')
    .pipe(mocha());
});

gulp.task('lint', ['lint:notest', 'lint:test']);

gulp.task('default', ['lint','mochatest'], function() {
  gulp.watch(['test/*.js', files, './test/**/*test.js'], function() {
    gulp.run('lint', 'mochatest');
  });
});
