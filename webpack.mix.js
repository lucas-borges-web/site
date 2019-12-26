const mix = require('laravel-mix');

mix.autoload({
	jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
});

// ARQUIVOS SITE
mix.sass('./assets/sass/style.scss',  'public/css/style.css').options({ processCssUrls: false })
mix.sass('./assets/sass/vendor.scss',  'public/css/vendor.css').options({ processCssUrls: false })
.js('./assets/js/main.js', 'public/js/script.js')
.js('./assets/js/vendor.js', 'public/js/vendor.js')

.sourceMaps();
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/webfonts')
mix.copy('./assets/img', 'public/img')

if (mix.inProduction()) {
	mix.version()
	.options({
	  // optimize js minification process
	  terser: {
	  	cache: true,
	  	parallel: true,
	  	sourceMap: true
	  }
	});
} else {
  // Uses inline source-maps on development
  mix.webpackConfig({ devtool: 'inline-source-map' });
}