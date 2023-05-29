// Get the name of the project folder from Node modules
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		vendorCss: `${buildFolder}/css/vendor/`,
		vendorJs: `${buildFolder}/js/vendor/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
	},
	src: {
		html: `${srcFolder}/*.html`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/**/*.js`,
		vendorCss: `${srcFolder}/vendor/css/*.*`,
		vendorJs: `${srcFolder}/vendor/js/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		icons: `${srcFolder}/img/icons/**/*.svg`,
		fontsOTF: `${srcFolder}/fonts/**/*.otf`,
		fontsTTF: `${srcFolder}/fonts/**/*.ttf`,
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`,
		js: `${srcFolder}/js/**/*.js`,
		vendor: `${srcFolder}/vendor/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``,
};
