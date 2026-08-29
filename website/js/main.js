/**
 * M Beauty – Rendering-Logik für die Startseite.
 * Liest alle Inhalte aus STUDIO_CONTENT (content/studio-content.js)
 * und baut daraus die sichtbaren Elemente. Preise/Texte werden
 * nirgends doppelt eingetragen – nur in der Content-Datei.
 */
(function () {
  const c = window.STUDIO_CONTENT;
  if (!c) return;

  document.title = c.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", c.meta.description);

  // ---- Branding text ----
  document.querySelectorAll("[data-studio-name]").forEach((el) => {
    el.textContent = c.studio.name;
  });
  document.querySelectorAll("[data-studio-slogan]").forEach((el) => {
    el.textContent = c.studio.slogan;
  });
  document.querySelectorAll("[data-hero-text]").forEach((el) => {
    el.textContent = c.studio.heroText;
  });
  document.querySelectorAll("[data-about-text]").forEach((el) => {
    el.textContent = c.about.text;
  });
  document.querySelectorAll("[data-owner-name]").forEach((el) => {
    el.textContent = c.about.ownerName;
  });
  document.querySelectorAll("[data-city]").forEach((el) => {
    el.textContent = c.studio.city;
  });

  // ---- WhatsApp / Instagram links ----
  const waNumber = (c.contact.whatsappNumber || "").replace(/[^0-9]/g, "");
  const waLink = waNumber
    ? "https://wa.me/" +
      waNumber +
      "?text=" +
      encodeURIComponent(c.contact.whatsappPrefillMessage || "")
    : null;
  const igLink = c.contact.instagramUrl || null;

  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    if (waLink) {
      el.href = waLink;
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "hidden");
    }
  });

  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    if (igLink) {
      el.href = igLink;
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "hidden");
    }
  });

  document.querySelectorAll("[data-instagram-handle]").forEach((el) => {
    if (igLink && c.contact.instagramHandle) {
      el.textContent = c.contact.instagramHandle;
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "hidden");
    }
  });

  const noContactYet = document.querySelector("[data-contact-fallback]");
  if (noContactYet && !waLink && !igLink) {
    noContactYet.removeAttribute("hidden");
  }

  // Sticky mobile contact bar only takes up space once a real contact
  // channel exists – otherwise it stays fully hidden (no empty strip).
  const stickyBar = document.querySelector("[data-sticky-contact]");
  if (stickyBar && (waLink || igLink)) {
    stickyBar.removeAttribute("hidden");
    document.body.classList.add("has-sticky-contact");
  }

  // ---- Opening hours ----
  const hoursList = document.querySelector("[data-opening-hours]");
  if (hoursList) {
    const hours = c.contact.openingHours || [];
    if (hours.length === 0) {
      hoursList.setAttribute("hidden", "hidden");
    } else {
      hoursList.removeAttribute("hidden");
      hoursList.innerHTML = hours
        .map(
          (h) =>
            "<li><span>" +
            escapeHtml(h.days) +
            "</span><span>" +
            escapeHtml(h.hours) +
            "</span></li>",
        )
        .join("");
    }
  }

  // ---- Treatment categories ----
  const wrapper = document.querySelector("[data-treatment-categories]");
  if (wrapper) {
    const categories = (c.categories || []).filter(
      (cat) => cat.treatments && cat.treatments.length > 0,
    );

    if (categories.length === 0) {
      wrapper.innerHTML =
        '<p class="notice-box">Die Behandlungsübersicht wird gerade aktualisiert. Schreib uns gerne per WhatsApp oder Instagram für aktuelle Preise.</p>';
    } else {
      wrapper.innerHTML = categories.map(renderCategory).join("");
    }
  }

  function renderCategory(cat) {
    return (
      '<div class="category">' +
      '<h3 class="category-title">' +
      escapeHtml(cat.name) +
      "</h3>" +
      '<div class="treatment-grid">' +
      cat.treatments.map(renderTreatment).join("") +
      "</div></div>"
    );
  }

  function renderTreatment(t) {
    return (
      '<article class="treatment-card">' +
      "<h4>" +
      escapeHtml(t.name) +
      "</h4>" +
      '<div class="treatment-meta">' +
      '<span class="pill">' +
      escapeHtml(t.price) +
      "</span>" +
      '<span class="pill pill-duration">' +
      escapeHtml(t.duration) +
      "</span>" +
      "</div>" +
      (t.description
        ? '<p class="treatment-desc">' + escapeHtml(t.description) + "</p>"
        : "") +
      (t.suitableFor
        ? '<p class="treatment-suitable"><strong>Geeignet für:</strong> ' +
          escapeHtml(t.suitableFor) +
          "</p>"
        : "") +
      "</article>"
    );
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, function (ch) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[ch];
    });
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const expanded = navLinks.classList.contains("open");
      navToggle.setAttribute("aria-expanded", String(expanded));
    });
    navLinks
      .querySelectorAll("a")
      .forEach((a) =>
        a.addEventListener("click", () => navLinks.classList.remove("open")),
      );
  }

  // ---- Footer year ----
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
