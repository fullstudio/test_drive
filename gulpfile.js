'use strict';

var runSequence = require('run-sequence');
var gulp = require('gulp');
var gutil = require('gulp-util');
require('require-dir')('./gulp/utils', {recurse: true});
// var prefix = require('./gulp/utils/config').prefix;
module.exports = {
	prefix: false
}


console.log(gutil.colors.green.inverse('                                FULLSTUDIO.RU                            '));
console.log(gutil.colors.red.bold('Запуск проекта:'));
console.log(gutil.colors.cyan('" gulp "') + '- старт проекта с default задачами, после запуска пишем http://localhost:3000/');
console.log(gutil.colors.cyan('" gulp build "') + ' - старт билдовой части');
console.log(gutil.colors.cyan('" gulp danger "') + ' - ');
console.log(gutil.colors.red.bold('Запуск проекта с флагами:'));
console.log(' gulp ' + gutil.colors.cyan('"--open"') + ' - старт проекта с открытием localhost в браузере');
console.log(' gulp ' + gutil.colors.cyan('"--live"') + ' - старт проекта с livereload(автоматическое обновление при изменении файла)');
console.log(' gulp ' + gutil.colors.cyan('"--prefix"') + ' - старт проекта с автопрефиксом (gulp build - запускается с автопрефиксом)');
console.info('More info: https://github.com/fullstudio');
console.log(gutil.colors.yellow.inverse('                                                                          '));

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
			'webp',
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
	module.exports.prefix = true;
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
			'watchBuild',
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