// indicar que voy a usar gulp
require("gulp");
const {series, parallel}=require("gulp");
//declaracion tareas
function holamundo(cb){
    console.log(" Hola mundo");
    cb();
}

function adiosmundo(cb){
    console.log("Adios mundo");
    cb();
}

//publicar la tarea
exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;
exports.serie = series(adiosmundo, holamundo);
exports.paralelo = parallel(holamundo, adiosmundo);