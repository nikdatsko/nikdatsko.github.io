'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var filter = require('gulp-filter');
var mainBowerFiles = require('main-bower-files');
var order = require('gulp-order');
var cssmin = require('gulp-cssmin');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var notify = require('gulp-notify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var modRewrite  = require('connect-modrewrite');
//var del = require('del');
//var usemin = require('gulp-usemin');
//var rev = require('gulp-rev');


var config = {
    jsFiles: [
        './js/app/**/*.js'
    ],
    lessFiles: [
        './css/less/*.less'
    ],
    images: [
        './img/**'
    ],
    dest: {
        js: './js/',
        css: './css/',
        img: './img/'
    }
};

gulp.task('run', function (cb) {
    runSequence('start', 'browser-sync', 'watch', cb);
});

gulp.task('start', function (cb) {
    runSequence('less', 'scripts', cb);
});

gulp.task('scripts', function() {
    return gulp.src(config.jsFiles)
        .pipe(order([
            '**/js/app/**/configs/*.js',
            '**/js/app/**/*.js'
        ]))
        .pipe(concat('nik.js'))
        .pipe(gulp.dest(config.dest.js))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest(config.dest.js))
        .pipe(reload({stream: true}));
});

gulp.task('bower', function () {
    var vendors = mainBowerFiles();

    return gulp.src(vendors)
        .pipe(filter('**/*.js'))
        .pipe(concat('vendor' + '.js'))
        .pipe(gulp.dest(config.dest.js))
        .pipe(rename({suffix: ".min"}))
        .pipe(uglify())
        .pipe(gulp.dest(config.dest.js));
});

gulp.task('less', function () {
    return gulp.src(['./css/less/style.less'])
        .pipe(less())
        .on("error", notify.onError({
            message: 'LESS compile error: <%= error.message %>'
        }))
        .pipe(cssmin())
        .pipe(gulp.dest(config.dest.css))
        .pipe(reload({stream: true}));
});

gulp.task('images', function() {
    return gulp.src(config.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest.img))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                modRewrite([
                    '^[^\\.]*$ /index.html [L]'
                ])
            ]
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['js/app/**/*.*', 'index.html'], ['scripts']);
    gulp.watch([config.lessFiles], ['less']);
});

// Default Task
gulp.task('default', ['run']);