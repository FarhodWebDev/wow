// Main module
import gulp from "gulp";

// Paths import
import { path } from "./gulp/config/path.js";

// Common plugins import
import { plugins } from "./gulp/config/plugins.js";

// Global variable
global.app = {
	isBuild: process.argv.includes("--build"),
	isDev: !process.argv.includes("--build"),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

// Tasks import
import { clean } from "./gulp/tasks/clean.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { copyJs, copyVendorCss, copyVendorJs } from "./gulp/tasks/copy.js";
import { images } from "./gulp/tasks/images.js";
import { spriteSVG } from "./gulp/tasks/spriteSVG.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { archive } from "./gulp/tasks/archive.js";

// Watcher
function watch() {
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, copyJs);
	gulp.watch(path.watch.vendor, gulp.parallel(copyVendorCss, copyVendorJs));
	gulp.watch(path.watch.images, gulp.parallel(spriteSVG, images));
}

// Preprocessing the fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Tasks series
const zip = gulp.parallel(archive);
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, copyJs, copyVendorCss, copyVendorJs, images, spriteSVG));
const dev = gulp.series(clean, mainTasks, gulp.parallel(watch, server));
const build = gulp.series(clean, mainTasks);

// Exporting scripts
export { dev };
export { build };
export { zip };

// Default task
gulp.task("default", dev);
