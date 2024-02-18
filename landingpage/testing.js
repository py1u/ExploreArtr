document.addEventListener("DOMContentLoaded", function() {
    SplitTextIntoSpans(".logo p");
    SplitTextIntoSpans(".hero-copy h1");

   
});

function SplitTextIntoSpans(selector) {
    var element = document.querySelector(selector);
    if (element) {
        var text = element.innerText;
        var splitText = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
        element.innerHTML = splitText;
    }
}

function startLoader() {
    var counterElement = document.querySelector(".counter p");
    var logoElement = document.querySelector(".logo p");
    var currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            animateText();
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;
        currentValue = currentValue > 100 ? 100 : currentValue;
        counterElement.innerHTML =
            currentValue
                .toString()
                .split("")
                .map((char) => `<span>${char}</span>`)
                .join("") + "<span>%</span>";

        var delay = Math.floor(Math.random() * 200) + 100;
        setTimeout(updateCounter, delay);
    }

    


    function animateText() {
        setTimeout(() => {
            gsap.to(".counter p span", {
                top: "-400px",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1,
            });

            gsap.to(".logo p span", {
                top: "0",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1,
            });

            gsap.to(".logo p span", {
                top: "-400px",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 1,
                delay: 3,
            });

            gsap.to(".overlay", {
                opacity: 0,
                ease: "power3.inOut",
                duration: 1,
                delay: 4,
            });

            gsap.to(".hero img", {
                scale: 1,
                ease: "power3.inOut",
                duration: 4,
                delay: 4,
            });

            gsap.to(".hero-copy h1 span", { 
                top: "0",
                stagger: 0.1,
                ease: "power3.inOut",
                duration: 2,
                delay: 5,
            });

            gsap.to("nav", {
                top: "0",
                ease: "power3.inOut",
                duration: 4,
                delay: 5,
            });
        }, 300);
    }
    updateCounter();
}

startLoader();
