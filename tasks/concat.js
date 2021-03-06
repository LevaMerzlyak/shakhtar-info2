'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const multipipe = require('multipipe');

module.exports = function (options) {
	return function () {
		return multipipe(
			gulp.src(options.src),
			$.concat(options.name),
			gulp.dest(options.dst)
		);
	};
};