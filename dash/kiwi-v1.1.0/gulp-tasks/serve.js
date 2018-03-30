const gulp = require('gulp');
const browserSync = require('browser-sync');
const PORT = 9000;

module.exports = function(options) {
  gulp.task('serve', ['watch'], function() {
    console.log(`running at: http://localhost:${PORT}`);
    browserSync({
      notify: false,
      port: PORT,
      server: {
        baseDir: [options.srcDir],
        routes: {'/bower_components': 'bower_components'}
      }
    });
  });

  gulp.task('serve:dist', function() {
    browserSync({
      notify: false,
      port: PORT,
      server: {
        baseDir: [options.distDir],
      }
    });
  });
};