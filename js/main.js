import { siteConfig } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const favicon = document.querySelector('link[rel="shortcut icon"]');

  if (favicon && siteConfig.company.logo) {
    favicon.href = siteConfig.company.logo;
  }
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
  // ========================================
  // WHY CHOOSE US SECTION
  // ========================================

  const initWhyChooseUs = () => {
    const section = document.querySelector(".why-choose-us");
    const eyebrow = document.getElementById("why-choose-us-eyebrow");
    const heading = document.getElementById("why-choose-us-heading");
    const description = document.getElementById("why-choose-us-description");
    const grid = document.getElementById("why-choose-us-grid");
    const actions = document.getElementById("why-choose-us-actions");

    const whyChooseUs = siteConfig.whyChooseUs;

    if (!whyChooseUs) return;

    // Set section ID
    if (section && whyChooseUs.id) {
      section.id = whyChooseUs.id;
    }

    // Render section heading and description
    if (eyebrow) {
      eyebrow.textContent = whyChooseUs.eyebrow;
    }

    if (heading) {
      heading.textContent = whyChooseUs.heading;
    }

    if (description) {
      description.textContent = whyChooseUs.description;
    }

    // Render benefit cards
    if (grid && Array.isArray(whyChooseUs.items)) {
      grid.innerHTML = whyChooseUs.items
        .map(
          (item) => `
        <article class="why-choose-us__card" id="${item.id}">
            <div class="why-choose-us__icon" aria-hidden="true">
                <i class="${item.icon}"></i>
            </div>

            <h3 class="why-choose-us__card-title">
                ${item.title}
            </h3>

            <p class="why-choose-us__card-description">
                ${item.description}
            </p>
        </article>
    `,
        )
        .join("");
    }

    // Render section CTA
    if (actions && whyChooseUs.cta) {
      actions.innerHTML = `
        <a
            href="${whyChooseUs.cta.href}"
            class="why-choose-us__cta"
        >
            ${whyChooseUs.cta.label}
        </a>
    `;
    }
  };

  initWhyChooseUs();
  // ========================================
  // TESTIMONIALS SECTION
  // ========================================

  const initTestimonials = () => {
    const section = document.querySelector(".testimonials");
    const eyebrow = document.getElementById("testimonials-eyebrow");
    const heading = document.getElementById("testimonials-heading");
    const description = document.getElementById("testimonials-description");
    const grid = document.getElementById("testimonials-grid");
    const actions = document.getElementById("testimonials-actions");

    const testimonials = siteConfig.testimonials;

    if (!testimonials) return;

    // Set section ID
    if (section && testimonials.id) {
      section.id = testimonials.id;
    }

    // Render section heading and description
    if (eyebrow) {
      eyebrow.textContent = testimonials.eyebrow;
    }

    if (heading) {
      heading.textContent = testimonials.heading;
    }

    if (description) {
      description.textContent = testimonials.description;
    }

    // Render testimonial cards
    if (grid && Array.isArray(testimonials.items)) {
      grid.innerHTML = testimonials.items
        .map((item) => {
          const client = item.client || {};
          const image = client.image || {};

          return `
                <article class="testimonials__card" id="${item.id}">

                    <div class="testimonials__quote-icon" aria-hidden="true">
                        <i class="fa-solid fa-quote-left"></i>
                    </div>

                    <blockquote class="testimonials__quote">
                        ${item.quote}
                    </blockquote>

                    <div class="testimonials__client">
                        ${
                          image.src
                            ? `
                                    <img
                                        class="testimonials__client-image"
                                        src="${image.src}"
                                        alt="${image.alt || client.name || "Client"}"
                                        loading="lazy"
                                    >
                                `
                            : ""
                        }

                        <div class="testimonials__client-details">
                            <h3 class="testimonials__client-name">
                                ${client.name || ""}
                            </h3>

                            <p class="testimonials__client-role">
                                ${client.role || ""}
                            </p>

                            <p class="testimonials__client-company">
                                ${client.company || ""}
                            </p>
                        </div>
                    </div>

                </article>
            `;
        })
        .join("");
    }

    // Render section CTA
    if (actions && testimonials.cta) {
      actions.innerHTML = `
            <a
                href="${testimonials.cta.href}"
                class="testimonials__cta"
            >
                ${testimonials.cta.label}
            </a>
        `;
    }
  };

  initTestimonials();
  // ========================================
  // CONTACT SECTION
  // ========================================

  const initContact = () => {
    const section = document.querySelector(".contact");

    const eyebrow = document.getElementById("contact-eyebrow");
    const heading = document.getElementById("contact-heading");
    const description = document.getElementById("contact-description");

    const informationHeading = document.getElementById(
      "contact-information-heading",
    );

    const addressLabel = document.getElementById("contact-address-label");
    const addressValue = document.getElementById("contact-address-value");

    const phoneLabel = document.getElementById("contact-phone-label");
    const phoneValue = document.getElementById("contact-phone-value");

    const emailLabel = document.getElementById("contact-email-label");
    const emailValue = document.getElementById("contact-email-value");

    const hoursLabel = document.getElementById("contact-hours-label");
    const hoursValue = document.getElementById("contact-hours-value");

    const formHeading = document.getElementById("contact-form-heading");
    const formDescription = document.getElementById("contact-form-description");
    const form = document.getElementById("contact-form");
    const formFields = document.getElementById("contact-form-fields");
    const formFeedback = document.getElementById("contact-form-feedback");
    const submitButton = document.getElementById("contact-submit");
    const submitLabel = document.getElementById("contact-submit-label");

    const contact = siteConfig.contact;

    if (!contact) return;

    // ========================================
    // SECTION CONTENT
    // ========================================

    if (section && contact.id) {
      section.id = contact.id;
    }

    if (eyebrow) eyebrow.textContent = contact.eyebrow;
    if (heading) heading.textContent = contact.heading;
    if (description) description.textContent = contact.description;

    // ========================================
    // CONTACT INFORMATION
    // ========================================

    const information = contact.information;

    if (information) {
      if (informationHeading) {
        informationHeading.textContent = information.title;
      }

      if (addressLabel) {
        addressLabel.textContent = information.address.label;
      }

      if (addressValue) {
        addressValue.textContent = information.address.value;
      }

      if (phoneLabel) {
        phoneLabel.textContent = information.phone.label;
      }

      if (phoneValue) {
        phoneValue.textContent = information.phone.value;
        phoneValue.href = information.phone.href;
      }

      if (emailLabel) {
        emailLabel.textContent = information.email.label;
      }

      if (emailValue) {
        emailValue.textContent = information.email.value;
        emailValue.href = information.email.href;
      }

      if (hoursLabel) {
        hoursLabel.textContent = information.businessHours.label;
      }

      if (hoursValue) {
        hoursValue.textContent = information.businessHours.value;
      }
    }

    // ========================================
    // FORM CONTENT
    // ========================================

    const formConfig = contact.form;

    if (!formConfig || !form || !formFields) return;

    if (formHeading) {
      formHeading.textContent = formConfig.heading;
    }

    if (formDescription) {
      formDescription.textContent = formConfig.description;
    }

    if (submitLabel) {
      submitLabel.textContent = formConfig.submitLabel;
    }

    // ========================================
    // RENDER FORM FIELDS
    // ========================================

    if (Array.isArray(formConfig.fields)) {
      formFields.innerHTML = formConfig.fields
        .map((field) => {
          const requiredMark = field.required
            ? ' <span class="contact__required" aria-hidden="true">*</span>'
            : "";

          const requiredAttribute = field.required ? "required" : "";

          const autocompleteAttribute = field.autocomplete
            ? `autocomplete="${field.autocomplete}"`
            : "";

          const fieldId = `contact-${field.name}`;
          const errorId = `${fieldId}-error`;
          const fullWidthClass =
            field.type === "textarea" ? " contact__field--full" : "";

          let inputHTML = "";

          if (field.type === "select") {
            const options = (field.options || [])
              .map(
                (option) => `
                    <option value="${option.value}">
                        ${option.label}
                    </option>
                `,
              )
              .join("");

            inputHTML = `
                    <select
                        class="contact__select"
                        id="${fieldId}"
                        name="${field.name}"
                        ${requiredAttribute}
                        aria-describedby="${errorId}"
                    >
                        <option value="">${field.placeholder || "Select an option"}</option>
                        ${options}
                    </select>
                `;
          } else if (field.type === "textarea") {
            inputHTML = `
                    <textarea
                        class="contact__textarea"
                        id="${fieldId}"
                        name="${field.name}"
                        placeholder="${field.placeholder || ""}"
                        ${requiredAttribute}
                        aria-describedby="${errorId}"
                    ></textarea>
                `;
          } else {
            inputHTML = `
                    <input
                        class="contact__input"
                        type="${field.type}"
                        id="${fieldId}"
                        name="${field.name}"
                        placeholder="${field.placeholder || ""}"
                        ${requiredAttribute}
                        ${autocompleteAttribute}
                        aria-describedby="${errorId}"
                    >
                `;
          }

          return `
                <div class="contact__field${fullWidthClass}">
                    <label class="contact__label" for="${fieldId}">
                        ${field.label}${requiredMark}
                    </label>

                    ${inputHTML}

                    <p
                        class="contact__field-error"
                        id="${errorId}"
                        aria-live="polite"
                    ></p>
                </div>
            `;
        })
        .join("");
    }

    // ========================================
    // FORM FEEDBACK
    // ========================================

    const showFeedback = (message, type) => {
      if (!formFeedback) return;

      formFeedback.textContent = message;
      formFeedback.className = `contact__form-feedback contact__form-feedback--${type}`;

      formFeedback.hidden = false;
    };

    const clearFeedback = () => {
      if (!formFeedback) return;

      formFeedback.textContent = "";
      formFeedback.className = "contact__form-feedback";
      formFeedback.hidden = true;
    };

    // ========================================
    // FIELD VALIDATION
    // ========================================

    const validateField = (field) => {
      const input = form.elements.namedItem(field.name);

      if (!input) return true;

      const errorElement = document.getElementById(
        `contact-${field.name}-error`,
      );

      let errorMessage = "";

      if (field.required && !input.value.trim()) {
        errorMessage =
          field.validationMessage ||
          `Please complete the ${field.label.toLowerCase()} field.`;
      } else if (
        field.type === "email" &&
        input.value.trim() &&
        !input.validity.valid
      ) {
        errorMessage =
          field.validationMessage || "Please enter a valid email address.";
      } else if (
        field.type === "tel" &&
        input.value.trim() &&
        !/^[+\d\s().-]{7,25}$/.test(input.value.trim())
      ) {
        errorMessage = "Please enter a valid phone number.";
      }

      input.setAttribute("aria-invalid", String(Boolean(errorMessage)));

      if (errorElement) {
        errorElement.textContent = errorMessage;
      }

      return !errorMessage;
    };

    const clearFieldError = (input) => {
      input.removeAttribute("aria-invalid");

      const errorElement = document.getElementById(
        `contact-${input.name}-error`,
      );

      if (errorElement) {
        errorElement.textContent = "";
      }
    };

    formFields.addEventListener("input", (event) => {
      const input = event.target;

      if (input.matches("input, textarea, select")) {
        clearFieldError(input);
        clearFeedback();
      }
    });

    formFields.addEventListener("change", (event) => {
      const input = event.target;

      if (input.matches("input, textarea, select")) {
        clearFieldError(input);
        clearFeedback();
      }
    });

    // ========================================
    // WHATSAPP SUBMISSION
    // ========================================

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      clearFeedback();

      // Validate all configured fields.
      const validationResults = formConfig.fields.map(validateField);
      const isValid = validationResults.every(Boolean);

      if (!isValid) {
        showFeedback(formConfig.messages.validationError, "error");

        const firstInvalidField = form.querySelector('[aria-invalid="true"]');

        if (firstInvalidField) {
          firstInvalidField.focus();
        }

        return;
      }

      const whatsappNumber = contact.whatsapp?.number || "";

      // Only accept a configured international number containing digits.
      if (!/^\d{10,15}$/.test(whatsappNumber)) {
        showFeedback(formConfig.messages.error, "error");

        console.error(
          "Contact form: Configure a valid WhatsApp number in siteConfig.contact.whatsapp.number.",
        );

        return;
      }

      // Collect the form values.
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());

      // Convert the selected service value to its display label.
      const serviceField = formConfig.fields.find(
        (field) => field.name === "service",
      );

      const selectedService = serviceField?.options?.find(
        (option) => option.value === values.service,
      );

      if (selectedService) {
        values.service = selectedService.label;
      }

      // Build a readable WhatsApp message.
      const messageLabels = contact.whatsapp.messageLabels;

      const messageLines = [
        contact.whatsapp.messageIntro,
        "",
        ...formConfig.fields
          .map((field) => {
            const value = String(values[field.name] || "").trim();

            if (!value) return null;

            const label = messageLabels[field.name] || field.label;

            return `${label}: ${value}`;
          })
          .filter(Boolean),
      ];

      const message = messageLines.join("\n");

      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab/window.
      const whatsappWindow = window.open(whatsappURL, "_blank");

      if (whatsappWindow) {
        showFeedback(formConfig.messages.success, "success");
      } else {
        // If the browser blocks the new window, navigate in the current tab.
        showFeedback(
          "Opening WhatsApp. Please review your enquiry and tap Send to submit it.",
          "success",
        );

        // window.location.href = whatsappURL;
      }
    });
  };

  initContact();

  const initFooter = () => {
    const footer = siteConfig.footer;

    if (!footer) return;

    const company = siteConfig.company;

    // ========================================
    // COMPANY BRAND
    // ========================================

    const logoElement = document.getElementById("footer-logo");
    const descriptionElement = document.getElementById("footer-description");

    if (logoElement) {
      logoElement.replaceChildren();

      if (company.logo) {
        const logoImage = document.createElement("img");

        logoImage.src = company.logo;
        logoImage.alt = `${company.name} logo`;

        logoElement.appendChild(logoImage);
      } else {
        const logoText = document.createElement("span");

        logoText.className = "footer__logo-text";
        logoText.textContent = company.name;

        logoElement.appendChild(logoText);
      }
    }

    if (descriptionElement) {
      descriptionElement.textContent = footer.description;
    }

    // ========================================
    // QUICK LINKS
    // ========================================

    const quickLinksHeading = document.getElementById(
      "footer-quick-links-heading",
    );

    const quickLinksContainer = document.getElementById("footer-quick-links");

    if (quickLinksHeading) {
      quickLinksHeading.textContent = footer.quickLinks.heading;
    }

    renderLinks(quickLinksContainer, footer.quickLinks.items);

    // ========================================
    // SERVICES
    // ========================================

    const servicesHeading = document.getElementById("footer-services-heading");

    const servicesContainer = document.getElementById("footer-services-links");

    if (servicesHeading) {
      servicesHeading.textContent = footer.services.heading;
    }

    renderLinks(servicesContainer, footer.services.items);

    // ========================================
    // CONTACT INFORMATION
    // ========================================

    const contact = footer.contact;

    const contactHeading = document.getElementById("footer-contact-heading");

    if (contactHeading) {
      contactHeading.textContent = contact.heading;
    }

    // Address
    const addressElement = document.getElementById("footer-address");

    if (addressElement) {
      addressElement.textContent = contact.address.value;

      if (contact.address.href) {
        addressElement.href = contact.address.href;
        addressElement.hidden = false;
      } else {
        // Display the address without creating a misleading link.
        addressElement.removeAttribute("href");
        addressElement.hidden = false;
      }
    }

    // Phone
    const phoneElement = document.getElementById("footer-phone");

    if (phoneElement) {
      phoneElement.textContent = contact.phone.value;

      if (contact.phone.href) {
        phoneElement.href = contact.phone.href;
        phoneElement.hidden = false;
      } else {
        phoneElement.removeAttribute("href");
        phoneElement.hidden = false;
      }
    }

    // Email
    const emailElement = document.getElementById("footer-email");

    if (emailElement) {
      emailElement.textContent = contact.email.value;
      emailElement.href = contact.email.href;
    }

    // ========================================
    // SOCIAL MEDIA
    // ========================================

    const socialHeading = document.getElementById("footer-social-heading");

    const socialLinksContainer = document.getElementById("footer-social-links");

    if (socialHeading) {
      socialHeading.textContent = footer.socialMedia.heading;
    }

    if (socialLinksContainer) {
      socialLinksContainer.replaceChildren();

      footer.socialMedia.items
        .filter((social) => social.href)
        .forEach((social) => {
          const link = document.createElement("a");

          link.className = "footer__social-link";
          link.href = social.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.setAttribute("aria-label", social.platform);

          const icon = document.createElement("i");

          icon.className = social.icon;
          icon.setAttribute("aria-hidden", "true");

          link.appendChild(icon);
          socialLinksContainer.appendChild(link);
        });
    }

    // ========================================
    // COPYRIGHT
    // ========================================

    const yearElement = document.getElementById("footer-year");

    const companyNameElement = document.getElementById("footer-company-name");

    const copyrightElement = document.getElementById("footer-copyright-text");

    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    if (companyNameElement) {
      companyNameElement.textContent = company.name;
    }

    if (copyrightElement) {
      copyrightElement.textContent = footer.copyright;
    }

    // ========================================
    // BACK TO TOP
    // ========================================

    const backToTopElement = document.getElementById("footer-back-to-top");

    if (backToTopElement) {
      backToTopElement.href = footer.backToTop.href;

      const label = backToTopElement.querySelector("span");

      if (label) {
        label.textContent = footer.backToTop.label;
      }
    }
  };

  // ========================================
  // REUSABLE LINK RENDERER
  // ========================================

  function renderLinks(container, items) {
    if (!container || !Array.isArray(items)) return;

    container.replaceChildren();

    items.forEach((item) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");

      link.textContent = item.label;
      link.href = item.href;

      listItem.appendChild(link);
      container.appendChild(listItem);
    });
  }
  initFooter();
});
