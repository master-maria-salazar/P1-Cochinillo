const botonAbrir = document.getElementById("abrir-contacto");
const modal = document.getElementById("modal-contacto");
const botonCerrar = document.getElementById("cerrar-contacto");

botonAbrir.addEventListener("click", function () {
    modal.classList.add("abierto");
    modal.setAttribute("aria-hidden", "false");
});

botonCerrar.addEventListener("click", function () {
    modal.classList.remove("abierto");
    modal.setAttribute("aria-hidden", "true");
});

modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
        modal.classList.remove("abierto");
        modal.setAttribute("aria-hidden", "true");
    }
});