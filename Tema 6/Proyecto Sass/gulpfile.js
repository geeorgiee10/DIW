const { src, dest } = require('gulp');
const rename = require('gulp-rename'); // npm install gulp-rename
const cleanCSS = require('gulp-clean-css'); 
const sass = require('gulp-dart-sass'); // npm i gulp-dart-sass
const processhtml = require('gulp-useref'); 

function procesarCSS() {
    return src('scss/style.scss') // Origen del archivo SCSS
        .pipe(sass()) // Compilar SASS a CSS
        .pipe(cleanCSS()) // Minimizar CSS
        .pipe(rename({ suffix: '.min', extname: '.css' })) // Renombrar archivo
        .pipe(dest('dist/assets/css')); // Guardar en la carpeta destino
};

function procesaHTML(){
    return src('*.html')
        .pipe(processhtml())
        .pipe(dest('./dist/'));
};

function procesarImagenes(){
    return src('./img/*')
        .pipe(dest('./dist/img'));
}

function procesarJS() {
    return src('./js/*.js')
        .pipe(dest('./dist/assets/js'));
}

exports.procesarCSS = procesarCSS;
exports.procesaHTML = procesaHTML;
exports.procesarImagenes = procesarImagenes;
exports.procesarJS = procesarJS;
exports.default = procesarCSS;

