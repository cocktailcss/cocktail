"use strict";

import gulp from "gulp";
import scss from "./gulptask/scss";
import clean from "./gulptask/clean";

const build = gulp.series(scss, clean);
const watch = () => gulp.watch("scss/**/*.scss", build);

export default gulp.series(build, watch);
