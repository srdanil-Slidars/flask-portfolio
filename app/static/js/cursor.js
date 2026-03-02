/**
 * Кастомный курсор для desktop-устройств.
 * Делает сайт визуально "живее" и дороже по ощущению.
 */

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");
    const ring = document.querySelector(".custom-cursor-ring");

    if (!cursor || !ring) {
        return;
    }

    const isDesktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktopPointer) {
        return;
    }

    document.body.classList.add("cursor-ready");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    const interactiveSelectors = [
        "a",
        "button",
        ".btn",
        ".hero-card",
        ".about-feature-card",
        ".about-chip",
        ".nav a"
    ];

    const updateCursorPosition = (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", updateCursorPosition);
    animateRing();

    document.addEventListener("mouseenter", () => {
        document.body.classList.add("cursor-ready");
    });

    document.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-ready");
        document.body.classList.remove("cursor-hover");
    });

    interactiveSelectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
            element.addEventListener("mouseenter", () => {
                document.body.classList.add("cursor-hover");
            });

            element.addEventListener("mouseleave", () => {
                document.body.classList.remove("cursor-hover");
            });
        });
    });
});