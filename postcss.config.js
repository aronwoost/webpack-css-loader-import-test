module.exports = {
  plugins: [
    require('postcss-import'),
    // Note: you must set postcss-mixins before simple-vars and nested
    require('postcss-mixins')({
      mixinsDir: 'app/css/mixins',
    }),
    require('postcss-simple-vars'),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'IE > 8'],
    }),
    // Unwrap nested rules like how Sass does it
    require('postcss-nested')(),
    require('postcss-inline-svg')(),
    // add fixes for flexbox browser bugs
    require('postcss-flexbugs-fixes')(),
    require('postcss-assets'),
    require('postcss-conditionals'),
    // A PostCSS plugin to console.log() the messages registered by other PostCSS plugins
    require('postcss-reporter')({
      clearMessages: true,
    }),
  ],
};
