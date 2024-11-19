document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
    const title = document.querySelector("h1");
    
    title.classList.add("fade-in");

    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("appear");
        }, index * 300); 
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
    onScroll();
});
