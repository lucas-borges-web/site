const mix = require('laravel-mix');

mix.autoload({
	jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
});

// ARQUIVOS SITE
mix.sass('./assets/sass/style.scss',  './style.css').options({ processCssUrls: false })
.js('./assets/js/main.js', './script.js')

.sourceMaps();
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'public/site/webfonts')

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