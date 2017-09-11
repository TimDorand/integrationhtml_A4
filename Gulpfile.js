"use strict";

let gulp = require("gulp")
let del = require("gulp-clean")
let p = require("gulp-load-plugins")()
const production = !!p.util.env.production

console.log(production);


gulp.task("script", function() {
    return gulp.src("./js/**/*.js")
        .pipe(p.concat('app.js'))
        .pipe(p.uglify())
        .pipe(gulp.dest('./js'));
})
gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        // .pipe(p.sourcemaps.init())
        // .pipe(p.sass().on('error', p.sass.logError))
        // .pipe(p.sourcemaps.write())
        .pipe(p.compass({
            css: 'css',
            sass: 'sass',
            sourcemap: !production,
            environment: production ? "production" : "development"
        }))
        .pipe(p.if(production, p.cleanCss({compatibility: 'ie8'})))
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass'])
    gulp.watch('./js/**/*.js', ['script'])
})

gulp.task('clean', function () {
    return del([
        'dist/*',
        'css/*',
    ])
})

gulp.task("default", ["sass", "script"], function(){

})