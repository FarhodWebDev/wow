import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleancss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQuieries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "SCSS",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      app.plugins.if(
        app.isBuild,
        groupCssMediaQuieries()
      )
    )
    // Uncomment if need to check the styles without minification
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 4 versions"],
          cascade: true
        })
      )
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        cleancss()
      )
    )
    .pipe(rename({
      extname: ".min.css"
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}
