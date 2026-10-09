"use strict";

document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navigationLinks = navigation.querySelectorAll("a");

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    document.querySelectorAll(".filter-button").forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = selectedFilter !== "all" && card.dataset.category !== selectedFilter;
    });
  });
});

const projects = [
  {
    title: "Fieldnotes",
    category: "Brand world · E-commerce",
    summary: "A slower, more considered corner of the internet for everyday botanical goods.",
    approach: "An earthy visual identity and calm storefront put the products first. A considered reading rhythm and warm editorial language make browsing feel like taking a breath.",
    craft: "Art direction, brand world, responsive storefront design, semantic HTML and CSS."
  },
  {
    title: "Forma Office",
    category: "Digital flagship · Architecture",
    summary: "A digital home for an imagined architecture practice exploring how we live and work.",
    approach: "A precise, typographic framework makes room for the studio's ideas and images, with a modular project presentation that stays composed on smaller screens.",
    craft: "Information architecture, responsive web design, interactive details, vanilla JavaScript."
  },
  {
    title: "Still",
    category: "Digital product · Wellness",
    summary: "A gentle digital companion for building a more personal, less pressured wellness ritual.",
    approach: "Soft contrast, an unhurried interface, and reassuring microcopy put ease ahead of streaks or scores. Every action is designed to stay simple and clear.",
    craft: "Product concept, interaction design, accessible interface patterns, clickable prototype."
  },
  {
    title: "Common Ground",
    category: "Identity system · Hospitality",
    summary: "A neighborhood coffee concept with a friendly identity built for a real-world ritual.",
    approach: "Oversized type, warm materials, and adaptable packaging bring the idea of a shared daily pause to life across both cups and screens.",
    craft: "Brand identity, packaging concept, art direction, digital touchpoints."
  }
];

const projectDialog = document.querySelector("#project-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogCategory = document.querySelector("#dialog-category");
const dialogSummary = document.querySelector("#dialog-summary");
const dialogApproach = document.querySelector("#dialog-approach");
const dialogCraft = document.querySelector("#dialog-craft");
let lastProjectTrigger = null;

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projects[Number(button.dataset.project)];
    if (!project) return;

    lastProjectTrigger = button;
    dialogTitle.textContent = project.title;
    dialogCategory.textContent = project.category;
    dialogSummary.textContent = project.summary;
    dialogApproach.textContent = project.approach;
    dialogCraft.textContent = project.craft;
    projectDialog.showModal();
    projectDialog.querySelector(".dialog-close").focus();
  });
});

projectDialog.querySelector(".dialog-close").addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

projectDialog.addEventListener("close", () => {
  if (lastProjectTrigger) lastProjectTrigger.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectDialog.open) {
    event.preventDefault();
    projectDialog.close();
  }
});

projectDialog.querySelector("[data-dialog-contact]").addEventListener("click", () => {
  projectDialog.close();
  closeNavigation();
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const validationFields = [
  { input: document.querySelector("#name"), error: document.querySelector("#name-error"), message: "Please enter at least two characters for your name." },
  { input: document.querySelector("#email"), error: document.querySelector("#email-error"), message: "Please enter a valid email address." },
  { input: document.querySelector("#message"), error: document.querySelector("#message-error"), message: "Please add a little more detail (at least 10 characters)." }
];

function validateField(field) {
  const valid = field.input.validity.valid;
  field.input.setAttribute("aria-invalid", String(!valid));
  field.error.textContent = valid ? "" : field.message;
  return valid;
}

validationFields.forEach((field) => {
  field.input.addEventListener("input", () => {
    if (field.input.hasAttribute("aria-invalid")) validateField(field);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.replaceChildren();

  const valid = validationFields.map(validateField).every(Boolean);
  if (!valid) {
    formStatus.textContent = "Please check the highlighted fields and try again.";
    contactForm.querySelector('[aria-invalid="true"]').focus();
    return;
  }

  const formData = new FormData(contactForm);
  const projectType = formData.get("projectType") || "Not specified";
  const subject = `Project enquiry from ${formData.get("name")}`;
  const body = [
    `Name: ${formData.get("name")}`,
    `Email: ${formData.get("email")}`,
    `Project type: ${projectType}`,
    "",
    String(formData.get("message"))
  ].join("\n");
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:hello@peaklyy.studio?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailLink.textContent = "Open your email app with this draft";

  formStatus.append("Your details are ready. This demo does not send or store messages. ");
  formStatus.append(emailLink);
  formStatus.focus();
});

document.querySelector("#copyright-year").textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
