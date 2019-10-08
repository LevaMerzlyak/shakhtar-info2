'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const multipipe = require('multipipe');

module.exports = function (options) {
	return function () {
		return multipipe(
			gulp.src(options.src),
			$.twig(),
			/*$.htmlmin({
				collapseWhitespace: true,
				minifyCSS: true,
				minifyJs: true
			}),*/
			gulp.dest(options.dst)
		);
	};
};