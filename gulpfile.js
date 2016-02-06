var gulp			= require('gulp'),
	browserify		= require('gulp-browserify')
	rename			= require('gulp-rename');

var distName = 'fsm-plugin.js';

gulp.task('scripts', function(){
	// Single entry point to browserify
	gulp.src('scripts/main.js')
		.pipe(browserify({
			insertGlobals : true,
			debug : !gulp.env.production
		}))
		.pipe(rename(distName))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);
