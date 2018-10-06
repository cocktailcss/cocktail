const gulp = require("gulp");
const runSequence = require("run-sequence");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const gcmq = require("gulp-group-css-media-queries");
const rename = require("gulp-rename");
const size = require("gulp-size");

const scssTask = () =>
  gulp
    .src("scss/cocktail.scss")
    .pipe(
      sass({
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["> 1%"]
      })
    )
    .pipe(gcmq())
    .pipe(gulp.dest("./"));

const cleanTask = () =>
  gulp
    .src("cocktail.css")
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(gulp.dest("./"));

const buildTask = () => runSequence("scss", "clean");

const sizeTask = () =>
  gulp
    .src("cocktail.min.css")
    .pipe(size({ gzip: true }))
    .pipe(gulp.dest("./"));

const watchTask = () => gulp.watch(["scss/**/*.scss"], ["build"]);

gulp.task("scss", scssTask);
gulp.task("clean", cleanTask);
gulp.task("build", buildTask);
gulp.task("size", sizeTask);
gulp.task("default", ["build"], watchTask);
