import gulp from "gulp";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import size from "gulp-size";

const clean = () =>
  gulp
    .src("cocktail.css")
    .pipe(cleanCSS())
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .pipe(
      size({
        showFiles: true,
        gzip: true
      })
    )
    .pipe(gulp.dest("./"));

export default clean;
