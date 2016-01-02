module.exports = {
	bundles: [
		{
			name: 'app',
			css: [
				'bower_components/foundation-sites/dist/foundation.min.css',
				'public/app/vendor/owl-carousel/owl.carousel.css',
				'public/app/vendor/*.css',
				'public/font/**/*.css',
				'public/app/app.css',
				'public/blocks/**/*.css'
			],
			js: [
				'bower_components/foundation-sites/dist/foundation.js',
				'public/app/vendor/common.js',
				'public/app/vendor/owl-carousel/owl.carousel.min.js'
			],
			pages: [
				'public/*.html',
				'!public/i.html'
			],
			build: [
				'public/app/app.min.js',
				'public/app/app.min.css'
			],
			buildTo: 'public/app',
			destHtml: 'public',
			uncss: false,
			async: false
		}
	]
}