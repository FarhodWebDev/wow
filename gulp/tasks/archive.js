import zip from "gulp-zip";

export const archive = () => {
	return app.gulp.src(["**/*", "!node_modules/**", "!/.DS_Store/**/", "!/__MACOSX/**/", "!./package-lock.json"]).pipe(zip("nft2-light-archive.zip")).pipe(app.gulp.dest("./dist/"));
};
