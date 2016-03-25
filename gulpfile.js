var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var vueify = require('vueify');
var stylus = require('gulp-stylus');

var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');

var uglify = require('gulp-uglify');
var insert = require('gulp-insert');
var rename = require('gulp-rename');

var template =
"/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)\n\
* Licensed Under MIT (http://opensource.org/licenses/MIT)\n\
*\n\
* Vue Mini Shop - Version@1.0.0\n\
*\n\
*/"

function scripts() {

	var b = browserify({
		entries: ['./assets/js/main.js'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true,
		transform: [babelify, vueify],
		plugin: [watchify]
	});

	function bundling() {
		b.bundle()
			.pipe(source('build.js'))
			.pipe(gulp.dest('./assets/js/build/'));
	}

	b.on('update', function () {
		gutil.log('bundling~');
		bundling();
    return gulp.src('./assets/js/build/build.js')
      .pipe(uglify('min'))
      .pipe(insert.prepend(template))
      .pipe(rename('build.min.js'))
      .pipe(gulp.dest('./assets/js/build/'));
	});

	b.on('time', function (time) {
		if(time >= 1000){
			time = time/1000+' ms';
		}else{
			time = time+' μs';
		}
		gutil.log('bundled! in '+time);
	});
	bundling();

}

gulp.task('build-css',function () {
	return gulp.src('./assets/stylus/main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({
				compress: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./assets/css/'));
});


gulp.task('dev', function () {
  gulp.watch('./assets/stylus/**/*.styl',['build-css']);
	return scripts();
});


gulp.task('default', ['dev']);
