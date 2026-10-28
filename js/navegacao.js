
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. NAVEGAÇÃO ENTRE AS PÁGINAS
    // ==========================================

    const linksNavegacao = document.querySelectorAll(
        ".menu-lateral nav a, .perfil-topo, .breadcrumb a"
    );

    linksNavegacao.forEach(function (link) {

        link.addEventListener("click", function (evento) {

            const destino = link.getAttribute("href");

            if (destino && destino.endsWith(".html")) {
                evento.preventDefault();
                window.location.href = destino;
            }

        });

    });


    // ==========================================
    // 2. SALVAMENTO DAS CONFIGURAÇÕES
    // ==========================================

    const formulario = document.querySelector("form");
    const campoDiaria = document.getElementById("valor-diaria");
    const campoVagas = document.getElementById("vagas");

    const CHAVE_CONFIGURACOES = "hotelPetConfiguracoes";

    // Executa esta parte somente na página de configurações
    if (formulario && campoDiaria && campoVagas) {

        // Recupera os dados salvos no navegador
        const dadosSalvos = localStorage.getItem(CHAVE_CONFIGURACOES);

        if (dadosSalvos) {

            try {
                const configuracoes = JSON.parse(dadosSalvos);

                campoDiaria.value = configuracoes.valorDiaria;
                campoVagas.value = configuracoes.vagas;

            } catch (erro) {
                console.error("Erro ao recuperar as configurações:", erro);
            }

        }

        // Salva quando o formulário for enviado
        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const valorDiaria = Number(campoDiaria.value);
            const vagas = Number(campoVagas.value);

            if (
                campoDiaria.value.trim() === "" ||
                campoVagas.value.trim() === "" ||
                !Number.isFinite(valorDiaria) ||
                !Number.isInteger(vagas) ||
                valorDiaria < 0 ||
                vagas < 0
            ) {
                alert(
                    "Informe um valor de diária e uma quantidade de vagas válidos."
                );
                return;
            }

            const configuracoes = {
                valorDiaria: valorDiaria,
                vagas: vagas
            };

            localStorage.setItem(
                CHAVE_CONFIGURACOES,
                JSON.stringify(configuracoes)
            );

            alert("Configurações salvas com sucesso!");

        });

    }

});
