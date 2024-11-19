const instituicoesCarousel = document.querySelector('.carousel-redondo');
let scrollInstituicoes = 0;

function autoScrollInstituicoes() {
    scrollInstituicoes += 1; 
    instituicoesCarousel.scrollLeft = scrollInstituicoes;

    if (scrollInstituicoes >= instituicoesCarousel.scrollWidth - instituicoesCarousel.clientWidth) {
        scrollInstituicoes = 0;
    }

    requestAnimationFrame(autoScrollInstituicoes); 
}

autoScrollInstituicoes(); 

