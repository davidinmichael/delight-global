import { siteConfig } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  /* ========================================
NAVBAR
======================================== */

  const initNavbar = () => {
    const navbarLogo = document.getElementById("navbar-logo");
    const navbarLinks = document.getElementById("navbar-links");
    const navbarCta = document.getElementById("navbar-cta");
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    // Render company logo
    if (navbarLogo) {
      navbarLogo.src = siteConfig.company.logo;
      navbarLogo.alt = siteConfig.company.logoAlt;
    }

    // Render navigation links
    if (navbarLinks) {
      navbarLinks.innerHTML = siteConfig.navigation.links
        .map(
          (link) => `
                <li>
                    <a href="${link.href}">${link.label}</a>
                </li>
            `,
        )
        .join("");
    }

    // Render call-to-action
    if (navbarCta) {
      navbarCta.href = siteConfig.navigation.cta.href;
      navbarCta.textContent = siteConfig.navigation.cta.label;
    }

    // Toggle mobile menu
    if (navbarToggle && navbarMenu) {
      navbarToggle.addEventListener("click", () => {
        const isOpen = navbarMenu.classList.toggle("is-open");

        navbarToggle.setAttribute("aria-expanded", String(isOpen));

        navbarToggle.setAttribute(
          "aria-label",
          isOpen ? "Close navigation menu" : "Open navigation menu",
        );

        navbarToggle.innerHTML = isOpen
          ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
          : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      });

      // Close menu when a navigation link is clicked
      navbarMenu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
          navbarMenu.classList.remove("is-open");

          navbarToggle.setAttribute("aria-expanded", "false");
          navbarToggle.setAttribute("aria-label", "Open navigation menu");

          navbarToggle.innerHTML =
            '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        }
      });

      // Close menu when switching back to desktop layout
      window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
          navbarMenu.classList.remove("is-open");

          navbarToggle.setAttribute("aria-expanded", "false");
          navbarToggle.setAttribute("aria-label", "Open navigation menu");

          navbarToggle.innerHTML =
            '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
        }
      });
    }
  };

  // Initialize navbar
  initNavbar();

  // ========================================
  // HERO SECTION
  // ========================================

  const initHero = () => {
    const heroSection = document.querySelector(".hero");
    const heroEyebrow = document.getElementById("hero-eyebrow");
    const heroHeading = document.getElementById("hero-heading");
    const heroDescription = document.getElementById("hero-description");
    const heroActions = document.getElementById("hero-actions");
    const heroImage = document.getElementById("hero-image");

    const hero = siteConfig.hero;

    if (!hero) return;

    // Set section ID
    if (heroSection && hero.id) {
      heroSection.id = hero.id;
    }

    // Render eyebrow
    if (heroEyebrow) {
      heroEyebrow.textContent = hero.eyebrow;
    }

    // Render heading
    if (heroHeading) {
      heroHeading.textContent = hero.heading;
    }

    // Render description
    if (heroDescription) {
      heroDescription.textContent = hero.description;
    }

    // Render buttons
    if (heroActions && Array.isArray(hero.buttons)) {
      heroActions.innerHTML = hero.buttons
        .map((button) => {
          const styleClass =
            button.style === "secondary"
              ? "hero__button--secondary"
              : "hero__button--primary";

          return `
                <a
                    href="${button.href}"
                    class="hero__button ${styleClass}"
                >
                    ${button.label}
                </a>
            `;
        })
        .join("");
    }

    // Render image
    if (heroImage && hero.image) {
      heroImage.src = hero.image.src;
      heroImage.alt = hero.image.alt || "";
    }
  };

  initHero();
});
