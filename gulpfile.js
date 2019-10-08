'use strict';

const gulp = require('gulp');

function lazyRequireTask(taskName, path, options) {
	options = options || {};
	options.taskName = taskName;
	gulp.task(taskName, function (callback) {
		let task = require(path).call(this, options);

		return task(callback);
	});
}

lazyRequireTask('sass', './tasks/sass', {
	src: 'src/styles/scss/*.scss',
	dst: 'src/styles/css'
});

lazyRequireTask('mincss', './tasks/mincss', {
	src: 'src/styles/css/*.css',
	dst: 'dist/css'
});

lazyRequireTask('clean', './tasks/clean', {
	dst: 'dist'
});

lazyRequireTask('page', './tasks/page', {
	src: 'src/pages/**/*.html',
	dst: 'dist'
});

lazyRequireTask('images', './tasks/move', {
    src: 'src/images/**/*.{png,jpg,svg,ico}',
    dst: 'dist/images'
});

lazyRequireTask('scripts', './tasks/move', {
    src: 'src/js/**/*.js',
    dst: 'dist/js/'
});

/*lazyRequireTask('scripts-desktop', './tasks/concat', {
    src: 'src/js/desktop/*.js',
    name: 'fex-desktop.bundle.js',
    dst: 'dist/js/bundle'
});
lazyRequireTask('scripts-uglify', './tasks/uglify', {
    src: 'dist/js/bundle/*.js',
    dst: 'dist/js/'
});

lazyRequireTask('scripts-move', './tasks/move', {
    src: 'src/js/libs/*.js',
    dst: 'dist/js/'
});*/

lazyRequireTask('fonts', './tasks/move', {
    src: 'src/fonts/**/*.*',
    dst: 'dist/fonts'
});

/*gulp.task('scripts', gulp.series(
	gulp.parallel('scripts-common', 'scripts-desktop', 'scripts-mobile', 'scripts-mobile-onready'),
	'scripts-uglify', 'scripts-move'
	)
);*/

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('page', 'scripts', 'images', 'fonts',	gulp.series('sass', 'mincss'))
	)
);

gulp.task('watch', function () {
	gulp.watch('src/**/*.scss', gulp.series('sass'));

	gulp.watch('src/**/*.css', gulp.series('mincss'));

	gulp.watch('src/**/*.html', gulp.series('page'));

	gulp.watch('src/js/**/*.*', gulp.series('scripts'));

	gulp.watch('src/img/**/*.*', gulp.series('images'));

	gulp.watch('src/fonts/**/*.*', gulp.series('fonts'));
});

lazyRequireTask('serve', './tasks/serve', {
    src: 'dist'
});

gulp.task('dev', 
	gulp.series('build', gulp.parallel('watch', 'serve'))
);