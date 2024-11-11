window.onload = function () {
    let hamburguer = document.getElementById("hamburguesa");
    let cerrar = document.getElementById("x");
    let contenedor = document.getElementById("container");

    hamburguer.addEventListener("click", () => {
        hamburguer.style.display = "none";
        contenedor.style.left = "0"; 
    });

    cerrar.addEventListener("click", () => {
        hamburguer.style.display = "flex";
        contenedor.style.left = "-100%";
    });
};
