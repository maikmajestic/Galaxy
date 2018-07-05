var gulp = require('gulp');
//var connect = require('gulp-connect');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var minify = require('gulp-minify')
/*
gulp.task('connect', function(){
	connect.server({
	host: '127.0.0.1',
		root: ['dest/'],
		livereload: false,
		port:6060
	});
});
*/
gulp.task('pug', function () {
	gulp.src('dev/**/*.pug')
	.pipe(pug({ pretty: true }))
	.pipe(gulp.dest("dest/"))
	//.pipe(connect.reload());
});

gulp.task('stylus',function(){
	gulp.src('dev/**/*.styl')
	.pipe(stylus())
	.pipe(autoprefixer({
			browsers: ['IE 8','> 5%','last 2 versions','Firefox <= 20']
		}))
	.pipe(gulp.dest('dest/'))
	//.pipe(connect.reload())
});
gulp.task('compressJS', function() {
	gulp.src('dev/assets/js/**/*.js')
		//.pipe(minify({
				//ext:{
						//dev:'.js',
						//min:'.min.js'
				//},
				//noSource: true,
				//preserveCooments: 'some',
		//}))
	.pipe(gulp.dest('dest/assets/js/'))
});

gulp.task('transportOthersFiles', [], function () {
	console.log("Moving others files From dev/ to dest/ folder");
	gulp.src(['dev/assets/lib/**'], { base: './dev/assets/lib/' }).pipe(gulp.dest('dest/assets/lib/'));
	gulp.src(['dev/assets/images/**'], { base: './dev/assets/images/' }).pipe(gulp.dest('dest/assets/images/'));
	gulp.src(['dev/assets/videos/**'], { base: './dev/assets/videos/' }).pipe(gulp.dest('dest/assets/videos/'));
	gulp.src(['dev/assets/css/fonts/**'], { base: './dev/assets/css/fonts/' }).pipe(gulp.dest('dest/assets/css/fonts/'));
});


gulp.task('watch', function () {
	gulp.watch(['dev/**/*.pug', 'dev/*.pug'], ['pug']);
	gulp.watch('dev/**/*.styl', ['stylus']);
	gulp.watch('dev/**/*.js', ['compressJS']);
	gulp.watch('dev/assets/lib/**.*', ['transportOthersFiles']);
});

gulp.task('default', ['pug','stylus','compressJS','transportOthersFiles','watch']); // 'compressJsWap', 'connect'
