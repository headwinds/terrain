// gulp
var gulp = require('gulp');

var commonPath = "../../../../../../common/";

gulp.task('copy-to-common', function () {
  gulp.src(['src/components/terrain/TerrainViewController.js'])
    .pipe(gulp.dest(commonPath));
});

// default task
gulp.task('default',
  ['copy-to-common']
);