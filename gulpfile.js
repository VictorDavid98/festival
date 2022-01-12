const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    //Identificar el archivo .scss a compilar
    src('src/scss/**/*.scss')
    .pipe( plumber())
    .pipe( sass())//Compilarlo
    .pipe( dest('build/css'))//Almacenarla
    
    done();
}

function dev(done ){
    watch('src/scss/**/*.scss', css);
    done();
}
exports.css = css;
exports.dev = dev;