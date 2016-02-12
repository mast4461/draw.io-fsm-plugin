var gulp			= require('gulp');
var rename			= require('gulp-rename');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var distName = 'fsm-plugin.js';

// Must make better error handling for the build...
gulp.task('build', function () {
    return browserify({
    		entries: './scripts/main.js',
    		extensions: ['.js'],
    		insertGlobals : true,
    		debug : !gulp.env.production
    	})
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename(distName))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('scripts/**/*.js', ['build']);
});

gulp.task('default', ['build']);