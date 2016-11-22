var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './node_modules/bootstrap',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/scss'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});
