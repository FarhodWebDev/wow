import svgSprite from "gulp-svg-sprite";

const svgspriteConfig = {
	mode: {
		stack: {
			sprite: "../sprite.svg",
		},
	},
	transform: [
		{
			svgo: {
				plugins: [{ removeViewBox: false }, { removeUselessStrokeAndFill: false }, { cleanupIDs: false }, { prefixIds: false }, { mergePaths: false }, { removeUnknownsAndDefaults: false }, { minifyStyles: false }],
			},
		},
	],
	svg: {
		xmlDeclaration: false,
		doctypeDeclaration: false,
		namespaceIDs: false,
	},
};

export const spriteSVG = () => {
	return app.gulp.src(app.path.src.icons).pipe(svgSprite(svgspriteConfig)).pipe(app.gulp.dest(app.path.build.images)).pipe(app.plugins.browsersync.stream());
};
