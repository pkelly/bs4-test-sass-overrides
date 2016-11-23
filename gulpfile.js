'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './node_modules/bootstrap',
    publicDir: './stylesheets',
    srcFile: './css/app.scss'
};

gulp.task('css', function() {
    return gulp.src(config.srcFile)
    .pipe(sass({
      includePaths: [config.bootstrapDir + '/scss'],
      outputStyle: 'nested',
    }).on('error', sass.logError))
    .pipe(gulp.dest(config.publicDir));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('default', function() {
  gulp.watch('./css/**/*.scss', ['css']);
});
