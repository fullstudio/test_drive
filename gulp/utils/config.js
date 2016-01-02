// 'bower_components/jquery/dist/jquery.min.js',
module.exports = {
	bundles: [
		{
			name: 'libs',
			css: [
				'bower_components/bootstrap/dist/css/bootstrap.min.css',
				'bower_components/foundation-sites/dist/foundation.min.css',
				'public/app/vendor/owl-carousel/owl.carousel.css',
				'public/app/vendor/*.css'
			],
			js: [
				'public/app/vendor/owl-carousel/jquery-1.9.1.min.js',
				'bower_components/jquery.browser/dist/jquery.browser.min.js',
				'bower_components/picturefill/dist/picturefill.min.js',
				'bower_components/foundation-sites/dist/foundation.min.js',
				'public/app/vendor/owl-carousel/owl.carousel.min.js'
			],
			pages: [
				'public/*.html',
				'!public/i.html'
			],
			build: [
				'public/app/libs.min.js',
				'public/app/libs.min.css'
			],
			buildTo: 'public/app',
			uncss: true,
			async: true
		},
		{
			name: 'app',
			css: [
				'public/font/**/*.css',
				'public/app/animate.css',
				'public/app/app.css',
				'public/blocks/**/*.css'
			],
			js: [
				'public/app/modernizr.js',
				'public/app/vendor/svg.js',
				'public/app/vendor/**.js',
				'public/blocks/**/*.js'
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
			uncss: false,
			async: false
		}
	]
}