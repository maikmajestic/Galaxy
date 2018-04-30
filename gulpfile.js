
var gulp = require('gulp');
var connect = require('gulp-connect');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var minify = require('gulp-minify')

var ignorefolder=['!dev/**/complements/**/*.pug','!dev/**/commons/**/*.pug','!dev/**/modals/*.pug',,'!dev/**/components/**/*.pug',,'!dev/**/modal/**/*.pug','!dev/**/config.pug']

gulp.task('connect', function(){
	connect.server({
	host: 'localhost',
		root: ['dest/'],
		livereload: false,
		port:6060
	});
});

gulp.task('pug', function () {

	var pugs = ['dev/**/*.pug'];
	 gulp.src(pugs.concat(ignorefolder))
	.pipe(pug({pretty:true}))
	.pipe(gulp.dest("dest/"))
	.pipe(connect.reload());
});

gulp.task('stylus',function(){
	gulp.src('dev/**/*.styl')
	.pipe(stylus())
	.pipe(autoprefixer({
			browsers: ['IE 8','> 5%','last 2 versions','Firefox <= 20']
		}))
	.pipe(gulp.dest('dest/'))

	.pipe(connect.reload())
});

gulp.task('transportOthersFiles', [], function() {
	console.log("Moving others files From dev/ to dest/ folder");
	gulp.src(['dev/assets/*lib/**','dev/assets/*js/**','dev/assets/*css/fonts/**','dev/assets/*images/**']).pipe(gulp.dest('dest/assets/'));
});

gulp.task('watch', function () {
	gulp.watch(['dev/**/*.pug', 'dev/*.pug'] , ['pug']);
	gulp.watch('dev/**/*.styl',['stylus']);
	gulp.watch('dev/**/*.*', ['transportOthersFiles']);
});

gulp.task('default', ['pug','stylus','connect','transportOthersFiles','watch']);