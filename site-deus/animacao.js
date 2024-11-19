document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
    const title = document.querySelector("h1");
    
    // Animação do título
    title.classList.add("fade-in");

    // Adiciona a classe appear a todos os parágrafos após um pequeno atraso
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("appear");
        }, index * 300); // Atraso de 300ms entre cada parágrafo
    });

    function onScroll() {
        animatedElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (position < windowHeight - 100) {
                element.classList.add("appear");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Chama a função uma vez para animar elementos que estão visíveis na carga da página
});
