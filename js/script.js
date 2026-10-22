
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript do Hotel Pet carregado!");

    // Seleciona os links do menu lateral
    const links = document.querySelectorAll(".menu-lateral nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const destino = link.getAttribute("href");

            // Verifica se o link possui um destino válido
            if (!destino || destino === "#") {
                event.preventDefault();
                return;
            }

            console.log("Navegando para:", destino);

            // A navegação será realizada pelo próprio HTML
        });
    });
});
