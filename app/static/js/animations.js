/**
 * Премиальные анимации интерфейса на GSAP.
 */

document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined") {
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Анимация hero-блока при загрузке
    const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (document.querySelector(".hero__subtitle")) {
        heroTimeline.from(".hero__subtitle", {
            y: 24,
            opacity: 0,
            duration: 0.7
        });
    }

    if (document.querySelector(".hero__title")) {
        heroTimeline.from(".hero__title", {
            y: 36,
            opacity: 0,
            duration: 0.9
        }, "-=0.35");
    }

    if (document.querySelector(".hero__description")) {
        heroTimeline.from(".hero__description", {
            y: 24,
            opacity: 0,
            duration: 0.75
        }, "-=0.45");
    }

    if (document.querySelector(".hero__actions")) {
        heroTimeline.from(".hero__actions", {
            y: 20,
            opacity: 0,
            duration: 0.7
        }, "-=0.4");
    }

    if (document.querySelector(".hero__panel")) {
        heroTimeline.from(".hero__panel", {
            x: 28,
            opacity: 0,
            duration: 0.85
        }, "-=0.65");
    }

    // Плавное появление секций при прокрутке
    if (typeof ScrollTrigger !== "undefined") {
        const revealSections = document.querySelectorAll(
            ".about-preview, .featured-projects, .skills-preview, .why-me, .projects-showcase, .projects-cta, .contact-page"
        );

        revealSections.forEach((section) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 82%",
                    toggleActions: "play none none none"
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out"
            });
        });

        // Анимация карточек группами
        const cardGroups = [
            ".about-feature-card",
            ".project-card",
            ".skill-info-card",
            ".why-card",
            ".showcase-card"
        ];

        cardGroups.forEach((selector) => {
            const elements = document.querySelectorAll(selector);

            if (elements.length > 0) {
                gsap.from(elements, {
                    scrollTrigger: {
                        trigger: elements[0].parentElement,
                        start: "top 84%",
                        toggleActions: "play none none none"
                    },
                    y: 26,
                    opacity: 0,
                    duration: 0.75,
                    ease: "power2.out",
                    stagger: 0.12
                });
            }
        });
    }
});