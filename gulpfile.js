var gulp = require('gulp')
var watch = require('gulp-watch')
var babel = require('gulp-babel')

gulp.task('builddev', function() {
  return watch('./node-server/**/*.js', function() {
    gulp
      .src('./node-server/**/*.js')
      .pipe(
        babel({
          babelrc: false,
          plugins: ['transform-es2015-modules-commonjs']
        })
      )
      .pipe(gulp.dest('dist'))
  })
})

gulp.task('default', ['builddev'])
