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
  // ========================================
  // ABOUT US SECTION
  // ========================================

  const initAbout = () => {
    const aboutSection = document.querySelector(".about");
    const aboutImage = document.getElementById("about-image");
    const aboutEyebrow = document.getElementById("about-eyebrow");
    const aboutHeading = document.getElementById("about-heading");
    const aboutDescription = document.getElementById("about-description");
    const aboutSupportingText = document.getElementById(
      "about-supporting-text",
    );
    const aboutActions = document.getElementById("about-actions");

    const about = siteConfig.about;

    if (!about) return;

    // Set section ID
    if (aboutSection && about.id) {
      aboutSection.id = about.id;
    }

    // Render eyebrow
    if (aboutEyebrow) {
      aboutEyebrow.textContent = about.eyebrow;
    }

    // Render heading
    if (aboutHeading) {
      aboutHeading.textContent = about.heading;
    }

    // Render description
    if (aboutDescription) {
      aboutDescription.textContent = about.description;
    }

    // Render supporting text
    if (aboutSupportingText) {
      aboutSupportingText.textContent = about.supportingText;
    }

    // Render CTA
    if (aboutActions && about.cta) {
      aboutActions.innerHTML = `
        <a href="${about.cta.href}" class="about__cta">
            ${about.cta.label}
        </a>
    `;
    }

    // Render image
    if (aboutImage && about.image) {
      aboutImage.src = about.image.src;
      aboutImage.alt = about.image.alt || "";
    }
  };

  initAbout();
  // ========================================
  // SERVICES SECTION
  // ========================================

  const initServices = () => {
    const servicesSection = document.querySelector(".services");
    const servicesEyebrow = document.getElementById("services-eyebrow");
    const servicesHeading = document.getElementById("services-heading");
    const servicesDescription = document.getElementById("services-description");
    const servicesGrid = document.getElementById("services-grid");

    const services = siteConfig.services;

    if (!services) return;

    // Set section ID
    if (servicesSection && services.id) {
      servicesSection.id = services.id;
    }

    // Render section heading and description
    if (servicesEyebrow) {
      servicesEyebrow.textContent = services.eyebrow;
    }

    if (servicesHeading) {
      servicesHeading.textContent = services.heading;
    }

    if (servicesDescription) {
      servicesDescription.textContent = services.description;
    }

    // Render service cards
    if (servicesGrid && Array.isArray(services.items)) {
      servicesGrid.innerHTML = services.items
        .map(
          (service) => `
        <article class="services__card" id="${service.id}">
            <div class="services__card-visual">
                <img
                    class="services__card-image"
                    src="${service.image.src}"
                    alt="${service.image.alt || service.title}"
                    loading="lazy"
                >
            </div>

            <div class="services__card-content">
                <h3 class="services__card-title">
                    ${service.title}
                </h3>

                <p class="services__card-description">
                    ${service.description}
                </p>
            </div>
        </article>
    `,
        )
        .join("");
    }
  };

  initServices();
  // ========================================
  // INDUSTRIES SECTION
  // ========================================

  const initIndustries = () => {
    const industriesSection = document.querySelector(".industries");
    const industriesEyebrow = document.getElementById("industries-eyebrow");
    const industriesHeading = document.getElementById("industries-heading");
    const industriesDescription = document.getElementById(
      "industries-description",
    );
    const industriesGrid = document.getElementById("industries-grid");
    const industriesActions = document.getElementById("industries-actions");

    const industries = siteConfig.industries;

    if (!industries) return;

    // Set section ID
    if (industriesSection && industries.id) {
      industriesSection.id = industries.id;
    }

    // Render section heading and description
    if (industriesEyebrow) {
      industriesEyebrow.textContent = industries.eyebrow;
    }

    if (industriesHeading) {
      industriesHeading.textContent = industries.heading;
    }

    if (industriesDescription) {
      industriesDescription.textContent = industries.description;
    }

    // Render industry cards
    if (industriesGrid && Array.isArray(industries.items)) {
      industriesGrid.innerHTML = industries.items
        .map(
          (industry) => `
        <article class="industries__card" id="${industry.id}">
            <div class="industries__card-visual">
                <img
                    class="industries__card-image"
                    src="${industry.image.src}"
                    alt="${industry.image.alt || industry.title}"
                    loading="lazy"
                >
            </div>

            <div class="industries__card-content">
                <h3 class="industries__card-title">
                    ${industry.title}
                </h3>

                <p class="industries__card-description">
                    ${industry.description}
                </p>
            </div>
        </article>
    `,
        )
        .join("");
    }

    // Render section CTA
    if (industriesActions && industries.cta) {
      industriesActions.innerHTML = `
        <a
            href="${industries.cta.href}"
            class="industries__cta"
        >
            ${industries.cta.label}
        </a>
    `;
    }
  };

  initIndustries();
  // ========================================
  // PAST PROJECTS SECTION
  // ========================================

  const initProjects = () => {
    const projectsSection = document.querySelector(".projects");
    const projectsEyebrow = document.getElementById("projects-eyebrow");
    const projectsHeading = document.getElementById("projects-heading");
    const projectsDescription = document.getElementById("projects-description");
    const projectsGrid = document.getElementById("projects-grid");
    const projectsActions = document.getElementById("projects-actions");

    const projects = siteConfig.projects;

    if (!projects) return;

    // Set section ID
    if (projectsSection && projects.id) {
      projectsSection.id = projects.id;
    }

    // Render section heading and description
    if (projectsEyebrow) {
      projectsEyebrow.textContent = projects.eyebrow;
    }

    if (projectsHeading) {
      projectsHeading.textContent = projects.heading;
    }

    if (projectsDescription) {
      projectsDescription.textContent = projects.description;
    }

    // Render project cards
    if (projectsGrid && Array.isArray(projects.items)) {
      projectsGrid.innerHTML = projects.items
        .map(
          (project) => `
        <article class="projects__card" id="${project.id}">
            <div class="projects__card-visual">
                <img
                    class="projects__card-image"
                    src="${project.image.src}"
                    alt="${project.image.alt || project.title}"
                    loading="lazy"
                >
            </div>

            <div class="projects__card-content">
                <span class="projects__card-category">
                    ${project.category}
                </span>

                <h3 class="projects__card-title">
                    ${project.title}
                </h3>

                <p class="projects__card-description">
                    ${project.description}
                </p>
            </div>
        </article>
    `,
        )
        .join("");
    }

    // Render section CTA
    if (projectsActions && projects.cta) {
      projectsActions.innerHTML = `
        <a
            href="${projects.cta.href}"
            class="projects__cta"
        >
            ${projects.cta.label}
        </a>
    `;
    }
  };

  initProjects();
});
