// Carrossel das instituições
const instituicoesCarousel = document.querySelector('.carousel-redondo');
let scrollInstituicoes = 0;

function autoScrollInstituicoes() {
    scrollInstituicoes += 1; // Incrementa a rolagem
    instituicoesCarousel.scrollLeft = scrollInstituicoes;

    // Reinicia a rolagem quando atinge o fim
    if (scrollInstituicoes >= instituicoesCarousel.scrollWidth - instituicoesCarousel.clientWidth) {
        scrollInstituicoes = 0;
    }

    requestAnimationFrame(autoScrollInstituicoes); // Animação contínua
}

autoScrollInstituicoes(); // Inicia o carrossel automático

