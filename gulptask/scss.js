import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import groupCSSmediaQuery from "gulp-group-css-media-queries";

const scss = () =>
  gulp
    .src("scss/cocktail.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(groupCSSmediaQuery())
    .pipe(gulp.dest("./"));

export default scss;
