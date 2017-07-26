
/*var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function(){
  gulp.src('./src/*.jade')
  .pipe(jade({
    pretty: true
  }));
  .pipe(gulp.dest('./dist'))

});
gulp.task('watch',function(){
  gulp.watch('./src/*.jade', ['jade'])
});

gulp.task)('default', ['jade', 'watch'])*/

var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function(){
   gulp.src('./src/*.jade')
   .pipe(jade({
       pretty: true
   }))
   .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function(){
   gulp.watch('./src/*.jade', ['jade'])
});

gulp.task('default', ['jade', 'watch'])
