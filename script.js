/* =========================================
   AGIFT — TEACHERS' DAY 2026
   ========================================= */


/* =========================================
   GIFT OPENING
   ========================================= */

const openGift = document.getElementById("openGift");

const closeGift = document.getElementById("closeGift");

const giftOverlay = document.getElementById("giftOverlay");

const giftSection = document.getElementById("gift");


openGift.addEventListener("click", () => {

    giftOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

});


closeGift.addEventListener("click", () => {

    giftOverlay.classList.remove("active");

    document.body.style.overflow = "";


    setTimeout(() => {

        giftSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 350);

});



/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        giftOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }

});



/* =========================================
   CLICK OUTSIDE POPUP
   ========================================= */

giftOverlay.addEventListener("click", (event) => {

    if (event.target === giftOverlay) {

        giftOverlay.classList.remove("active");

        document.body.style.overflow = "";

    }

});



/* =========================================
   SCROLL REVEAL
   ========================================= */

const revealElements = document.querySelectorAll(
    ".message-card, .teacher-card-wrapper, .skill-card, .code-window, .final-content"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});



/* =========================================
   MOUSE PARALLAX
   ========================================= */

const glowOne = document.querySelector(".glow-one");

const glowTwo = document.querySelector(".glow-two");


document.addEventListener("mousemove", (event) => {

    const x = event.clientX / window.innerWidth;

    const y = event.clientY / window.innerHeight;


    glowOne.style.transform =
        `translate(${x * 40}px, ${y * 30}px)`;


    glowTwo.style.transform =
        `translate(${-x * 35}px, ${-y * 25}px)`;

});



/* =========================================
   TYPING EFFECT
   ========================================= */

const typingElement =
    document.querySelector(".typing-text");


if (typingElement) {

    const originalText =
        typingElement.textContent.trim();


    typingElement.textContent = "";


    let character = 0;


    const typeText = () => {

        if (character < originalText.length) {

            typingElement.textContent +=
                originalText.charAt(character);

            character++;

            setTimeout(typeText, 45);

        }

    };


    const typingObserver =
        new IntersectionObserver(

            (entries) => {

                if (entries[0].isIntersecting) {

                    typeText();

                    typingObserver.disconnect();

                }

            },

            {
                threshold: 0.5
            }

        );


    typingObserver.observe(typingElement);

}



/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
    "%cThank you, Sir.",
    "font-size:20px;font-weight:bold;"
);


console.log(
    "%cBuilt with HTML, CSS & JavaScript.",
    "font-size:12px;"
);
