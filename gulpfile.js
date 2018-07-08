var gulp = require('gulp')
var watch = require('gulp-watch')
var babel = require('gulp-babel')

gulp.task("builddev", () => {
  return watch('./node-server/**/*.js', { ignoreInitial: false }, () => {
      gulp.src('./node-server/**/*.js').pipe(babel({
          babelrc: false,
          "plugins": [
              "transform-es2015-modules-commonjs"
          ]
      }))
          .pipe(gulp.dest('dist'));
  })
});

console.log(11);
gulp.task('default', ['builddev'])
