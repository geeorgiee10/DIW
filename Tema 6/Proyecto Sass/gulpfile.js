
const {serie, paralelo, src, dest, swtch } = require ('gulp');

//require('gulp');
/*

function holamundo(cb){
    console.log('Hola Mundo');
    cb();
}

function adios(cb){
    console.log('Adios Mundo');
    cb();
}

exports.holamundo = holamundo;  //nombre de la tarea fuera, y nonombre de la tarea dentro
exports.adios = adios; 
exports.default = holamundo;  //nombre de la tarea fuera, y nonombre de la tarea dentro
exports.serie = adios,holamundo;
exports.paralelo = holamundo, adios;

*/

const rename=require('gulp-rename'); // npm install gulp-rename
//const pleeease=require('gulp-pleeease'); //Obsoleto
const mincss=require('cssmin');  // npm i cssmin
const sass = require('gulp-dart-scss'); // npm i gulp-dart-sass
const sassDoc = require('sassdoc'); // npm i gulp-sass ??

//processhtml para procesas los comentarios

function minimiza_y_renombrar(){
    return src('./subir/css/style.css')
        .pipe(pleeease())
        .pipe(rename({suffix:".min", sxtname:".css"
    }))
        .pipe(dest('./subir/css'));
}

function compilar(){
    return src('scss/style.scss')
    .pipe(sass())
    .pipe(dest('./subir/css'));
}

function html(){
    return src('*.html')
    .pipe(processhtml())
    .pipe(dest('./subir/'));
}