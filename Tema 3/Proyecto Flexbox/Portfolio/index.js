window.onload = function () {
    const hamburguer = document.getElementById("hamburguesa");
    const cerrar = document.getElementById("x");
    const header = document.getElementsByClassName("header")[0];

    const testimonio = document.getElementsByClassName("testimonials__card");
    const numTestimonios = testimonio.length;

    let indice = 0;

    hamburguer.addEventListener("click", () => {
        header.style.left = 0;
        hamburguer.style.left = "-100%";
    });

    cerrar.addEventListener("click", () => {
        header.style.left = "-100%"; 
        hamburguer.style.left = "0";
    });

    // Ocultar todos los  inicialmente
    for (let i = 0; i < numTestimonios; i++) {
        testimonio[i].style.display = "none";
        testimonio[i].style.opacity = 0;
    }

    testimonio[indice].style.display = "flex";
    setTimeout(() => {
        testimonio[indice].style.opacity = 1;
    }, 10);

    function moverDerecha() {
        testimonio[indice].style.opacity = 0;

        setTimeout(() => {
            testimonio[indice].style.display = "none";
            indice = (indice + 1) % numTestimonios;
            testimonio[indice].style.display = "flex";

            setTimeout(() => {
                testimonio[indice].style.opacity = 1;
            }, 700);
        }, 1000);
    }

    function movimientoAutomatico() {
        setInterval(moverDerecha, 20000);
    }

    movimientoAutomatico();
};
