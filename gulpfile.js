'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

gulp.task('default', function(cb) {
	require('require-dir')('./gulp/default', {recurse: true});
	runSequence(
		'del',
		[
			'stylus',
			'app',
			'jade',
			'font',
			'_images',
			'pagesList',
			'images'
		],
		[
			'injectDev'
		],
		[
			'watch',
			'server'
		],
		cb
	);
});

gulp.task('build', function(cb) {
	require('require-dir')('./gulp/default', {recurse: true});
	require('require-dir')('./gulp/build', {recurse: true});
	runSequence(
		'del',
		[
			'stylus',
			'app',
			'jade'
		],
		[
			'pagesList',
			'font',
			'_images',
			'images',
			'webp',
			'minCss',
			'minJs',
			'doc'
		],
		[
			'injectProd',
		],
		[
			'minHtml',
			'server'
		],
		cb
	);
});

gulp.task('danger', function(cb) {
	require('require-dir')('./gulp/default', {recurse: true});
	require('require-dir')('./gulp/build', {recurse: true});
	require('require-dir')('./gulp/danger', {recurse: true});
	runSequence(
		'del',
		[
			'stylus',
			'app',
			'jade'
		],
		[
			'pagesList',
			'font',
			'_images',
			'images',
			'webp',
			'minCss',
			'minJs',
			'doc'
		],
		[
			'injectProd',
			'imagemin',
			'imageminWebp',
		],
		[
			'minHtml',
			'server'
		],
		cb
	);
});