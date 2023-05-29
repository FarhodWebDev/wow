export const copyJs = () => {
  return app.gulp.src(app.path.src.js)
    .pipe(app.gulp.dest(app.path.build.js))
}

export const copyVendorCss = () => {
  return app.gulp.src(app.path.src.vendorCss)
    .pipe(app.gulp.dest(app.path.build.vendorCss))
}

export const copyVendorJs = () => {
  return app.gulp.src(app.path.src.vendorJs)
  .pipe(app.gulp.dest(app.path.build.vendorJs))
}