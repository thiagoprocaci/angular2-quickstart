var gulp = require('gulp');
var ts = require('gulp-typescript');
var exec = require('gulp-exec');   
var del = require('del');


// starting server from npm
gulp.task('start', function() {
  var options = {
    continueOnError: false, // default = false, true means don't emit error event 
    pipeStdout: false, // default = false, true means stdout is written to file.contents 
    customTemplatingThing: "test" // content passed to gutil.template() 
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err 
  	stderr: true, // default = true, false means don't write stderr 
  	stdout: true // default = true, false means don't write stdout 
  }
  gulp.src('./**/**')
    .pipe(exec('npm start', options))
    .pipe(exec.reporter(reportOptions));
});

// copy html to dist folder
gulp.task('copyHtml', function() {
    gulp.src(['app/modules/hero/html/*.html'])
        .pipe(gulp.dest('dist/modules/hero/html'))
    
});

// copy css to dist folder
gulp.task('copyCss', function() {
    gulp.src(['app/modules/hero/css/*.css'])
        .pipe(gulp.dest('dist/modules/hero/css'))
    
});

// watch html
gulp.task('watch', function() {
    gulp.watch('app/**/*.html', ['copyHtml']);
    gulp.watch('app/**/*.css', ['copyCss']);
});


// clean dist 
gulp.task('clean', function(cb) {
    del(['dist/**/*']);
});


gulp.task('default', ['copyHtml', 'copyCss', 'watch', 'start']);