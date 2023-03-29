

const {src, dest } = require("gulp");


function css(done) {
    src("src/scss/app.scss")
    .pipe(sass())
    .pipe(dest("build/css"));
    done();
}





exports.css = css;