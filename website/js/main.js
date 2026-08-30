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

  // ---- Signature-Song-Button ----
  // Browser blockieren automatisch startende Musik mit Ton, deshalb
  // startet der Song nur, wenn jemand aktiv auf den Button tippt.
  const musicToggle = document.querySelector("[data-music-toggle]");
  const musicPlayer = document.querySelector("[data-music-player]");
  if (musicToggle && musicPlayer && c.music && c.music.src) {
    musicPlayer.src = c.music.src;
    musicToggle.removeAttribute("hidden");
    musicToggle.setAttribute(
      "aria-label",
      (c.music.label || "Musik") + " abspielen",
    );

    musicToggle.addEventListener("click", () => {
      if (musicPlayer.paused) {
        musicPlayer.play().catch(() => {});
      } else {
        musicPlayer.pause();
      }
    });

    musicPlayer.addEventListener("play", () => {
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.setAttribute(
        "aria-label",
        (c.music.label || "Musik") + " pausieren",
      );
    });

    musicPlayer.addEventListener("pause", () => {
      musicToggle.setAttribute("aria-pressed", "false");
      musicToggle.setAttribute(
        "aria-label",
        (c.music.label || "Musik") + " abspielen",
      );
    });
  }

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
  document.querySelectorAll("[data-studio-tagline]").forEach((el) => {
    if (c.studio.tagline) {
      el.textContent = c.studio.tagline;
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "hidden");
    }
  });
  document.querySelectorAll("[data-city]").forEach((el) => {
    el.textContent = c.studio.city;
  });

  // ---- Über mich (Vorstellung, Werdegang, Qualifikationen, Philosophie) ----
  function renderParagraphs(paragraphs) {
    return (paragraphs || [])
      .map((p) => "<p>" + escapeHtml(p) + "</p>")
      .join("");
  }

  const about = c.about || {};

  if (about.intro) {
    document.querySelectorAll("[data-about-intro-heading]").forEach((el) => {
      el.textContent = about.intro.heading || "";
    });
    document.querySelectorAll("[data-about-intro-paragraphs]").forEach((el) => {
      el.innerHTML = renderParagraphs(about.intro.paragraphs);
    });
    document.querySelectorAll("[data-about-signature]").forEach((el) => {
      el.textContent = about.intro.signature || "";
    });
    document.querySelectorAll("[data-about-tagline]").forEach((el) => {
      el.textContent = about.intro.tagline || "";
    });
  }

  if (about.werdegang) {
    document
      .querySelectorAll("[data-about-werdegang-heading]")
      .forEach((el) => {
        el.textContent = about.werdegang.heading || "";
      });
    document
      .querySelectorAll("[data-about-werdegang-paragraphs]")
      .forEach((el) => {
        el.innerHTML = renderParagraphs(about.werdegang.paragraphs);
      });
  }

  if (about.qualifications) {
    document
      .querySelectorAll("[data-about-qualifications-heading]")
      .forEach((el) => {
        el.textContent = about.qualifications.heading || "";
      });
    document.querySelectorAll("[data-about-qualifications]").forEach((el) => {
      el.innerHTML = (about.qualifications.items || [])
        .map((item) => "<li>" + escapeHtml(item) + "</li>")
        .join("");
    });
  }

  if (about.philosophy) {
    document
      .querySelectorAll("[data-about-philosophy-heading]")
      .forEach((el) => {
        el.textContent = about.philosophy.heading || "";
      });
    document
      .querySelectorAll("[data-about-philosophy-paragraphs]")
      .forEach((el) => {
        el.innerHTML = renderParagraphs(about.philosophy.paragraphs);
      });
    document
      .querySelectorAll("[data-about-philosophy-tagline]")
      .forEach((el) => {
        el.textContent = about.philosophy.closingTagline || "";
      });
  }

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

  // ---- Studio gallery (photos & short muted looping videos) ----
  const gallerySection = document.querySelector("[data-gallery-section]");
  const galleryGrid = document.querySelector("[data-gallery-grid]");
  const galleryNavItem = document.querySelector("[data-gallery-nav-item]");
  const gallery = c.gallery || [];
  if (gallerySection && galleryGrid && gallery.length > 0) {
    gallerySection.removeAttribute("hidden");
    if (galleryNavItem) galleryNavItem.removeAttribute("hidden");
    galleryGrid.innerHTML = gallery.map(renderGalleryItem).join("");
  }

  function renderGalleryItem(item) {
    const alt = escapeHtml(item.alt || "");
    if (item.type === "video") {
      return (
        '<div class="gallery-item" data-reveal>' +
        '<video src="' +
        escapeHtml(item.src) +
        '" autoplay muted loop playsinline preload="metadata" aria-label="' +
        alt +
        '"></video>' +
        "</div>"
      );
    }
    return (
      '<div class="gallery-item" data-reveal>' +
      '<img src="' +
      escapeHtml(item.src) +
      '" alt="' +
      alt +
      '" loading="lazy" />' +
      "</div>"
    );
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
    const hasRichDetails =
      t.hautziel ||
      t.whatToExpect ||
      t.besonderheiten ||
      (t.kuren && t.kuren.length);

    return (
      '<article class="treatment-card">' +
      "<h4>" +
      escapeHtml(t.name) +
      "</h4>" +
      '<div class="treatment-meta">' +
      '<span class="pill">' +
      escapeHtml(t.price) +
      "</span>" +
      (t.duration
        ? '<span class="pill pill-duration">' +
          escapeHtml(t.duration) +
          "</span>"
        : "") +
      "</div>" +
      (t.description
        ? '<p class="treatment-desc">' + escapeHtml(t.description) + "</p>"
        : "") +
      (t.suitableFor
        ? '<p class="treatment-suitable"><strong>Geeignet für:</strong> ' +
          escapeHtml(t.suitableFor) +
          "</p>"
        : "") +
      (hasRichDetails ? renderTreatmentDetails(t) : "") +
      "</article>"
    );
  }

  function renderTreatmentDetails(t) {
    let body = "";
    if (t.hautziel) {
      body +=
        '<div class="detail-block"><strong>Für wen / Hautziel</strong><p>' +
        escapeHtml(t.hautziel) +
        "</p></div>";
    }
    if (t.whatToExpect) {
      body +=
        '<div class="detail-block"><strong>Was erwartet mich?</strong><p>' +
        escapeHtml(t.whatToExpect) +
        "</p></div>";
    }
    if (t.besonderheiten) {
      body +=
        '<div class="detail-block"><strong>Besonderheiten</strong><p>' +
        escapeHtml(t.besonderheiten) +
        "</p></div>";
    }
    if (t.kuren && t.kuren.length) {
      body +=
        '<div class="detail-block"><strong>Kurmöglichkeiten</strong><ul class="kur-list">' +
        t.kuren
          .map(
            (k) =>
              "<li><span class='kur-name'>" +
              escapeHtml(k.name) +
              "</span><span class='kur-price'>" +
              escapeHtml(k.price) +
              "</span>" +
              (k.note
                ? "<span class='kur-note'>" + escapeHtml(k.note) + "</span>"
                : "") +
              (k.info
                ? "<span class='kur-info'>" + escapeHtml(k.info) + "</span>"
                : "") +
              "</li>",
          )
          .join("") +
        "</ul>" +
        (t.kurenHinweis
          ? '<p class="kur-hinweis">' + escapeHtml(t.kurenHinweis) + "</p>"
          : "") +
        "</div>";
    }
    body +=
      '<div class="detail-block detail-price"><strong>Preis</strong><p>' +
      escapeHtml(t.price) +
      (t.duration ? " · " + escapeHtml(t.duration) : "") +
      "</p></div>";

    return (
      '<details class="treatment-details">' +
      "<summary>Mehr erfahren</summary>" +
      '<div class="treatment-details-body">' +
      body +
      "</div></details>"
    );
  }

  // ---- M Ultimate Skin Journeys ----
  const journeysSection = document.querySelector("[data-journeys-section]");
  const journeysGrid = document.querySelector("[data-journeys-grid]");
  const journeysNavItem = document.querySelector("[data-journeys-nav-item]");
  const skinJourneys = c.skinJourneys;
  if (
    journeysSection &&
    journeysGrid &&
    skinJourneys &&
    skinJourneys.journeys &&
    skinJourneys.journeys.length > 0
  ) {
    journeysSection.removeAttribute("hidden");
    if (journeysNavItem) journeysNavItem.removeAttribute("hidden");

    document.querySelectorAll("[data-journeys-heading]").forEach((el) => {
      el.textContent = skinJourneys.heading || "";
    });
    document.querySelectorAll("[data-journeys-subheading]").forEach((el) => {
      el.textContent = skinJourneys.subheading || "";
    });
    document.querySelectorAll("[data-journeys-intro]").forEach((el) => {
      el.textContent = skinJourneys.intro || "";
    });
    document
      .querySelectorAll("[data-journeys-homecare-hinweis]")
      .forEach((el) => {
        el.textContent = skinJourneys.homecareHinweis || "";
      });

    journeysGrid.innerHTML = skinJourneys.journeys.map(renderJourney).join("");
  }

  function renderJourney(j) {
    return (
      '<article class="journey-card" data-reveal>' +
      '<div class="journey-card-head">' +
      "<h3>" +
      escapeHtml(j.name) +
      "</h3>" +
      '<p class="journey-hautziel">' +
      escapeHtml(j.hautziel) +
      "</p>" +
      '<span class="pill journey-duration-pill">12 Wochen · 6 Termine</span>' +
      "</div>" +
      '<div class="journey-pricing">' +
      '<div class="journey-price-block journey-price-complete">' +
      '<span class="journey-price-label">Complete</span>' +
      '<span class="journey-price-value">' +
      escapeHtml(j.complete) +
      "</span>" +
      '<span class="journey-price-note">inkl. Fullsize-Homecare</span>' +
      '<span class="journey-recommended">Empfohlen für eine optimal abgestimmte Begleitung</span>' +
      "</div>" +
      '<div class="journey-price-block">' +
      '<span class="journey-price-label">Treatment Only</span>' +
      '<span class="journey-price-value">' +
      escapeHtml(j.treatmentOnly) +
      "</span>" +
      "</div>" +
      "</div>" +
      '<details class="journey-details">' +
      "<summary>Journey ansehen</summary>" +
      '<div class="journey-details-body">' +
      '<h4 class="journey-details-subhead">Beispielhafter 12-Wochen-Plan</h4>' +
      '<ul class="journey-plan">' +
      j.plan
        .map(
          (p) =>
            "<li><span class='journey-plan-week'>Woche " +
            escapeHtml(p.week) +
            "</span><span>" +
            escapeHtml(p.treatment) +
            "</span></li>",
        )
        .join("") +
      "</ul>" +
      '<div class="journey-values">' +
      "<div><span>Regulärer Behandlungswert</span><span>" +
      escapeHtml(j.regulaererBehandlungswert) +
      "</span></div>" +
      "<div><span>Homecare-Wert" +
      (j.homecare && j.homecare.setName
        ? " (" + escapeHtml(j.homecare.setName) + ")"
        : "") +
      "</span><span>" +
      escapeHtml(j.homecare ? j.homecare.wert : "") +
      "</span></div>" +
      '<div class="journey-values-total"><span>Regulärer Gesamtwert</span><span>' +
      escapeHtml(j.regulaererGesamtwert) +
      "</span></div>" +
      "</div>" +
      (j.homecare && j.homecare.items && j.homecare.items.length
        ? '<div class="journey-homecare-items"><strong>Enthaltene Fullsize-Homecare (Complete)</strong><ul>' +
          j.homecare.items
            .map((i) => "<li>" + escapeHtml(i) + "</li>")
            .join("") +
          "</ul></div>"
        : "") +
      (j.hinweis
        ? '<p class="journey-hinweis">' + escapeHtml(j.hinweis) + "</p>"
        : "") +
      '<div class="journey-final-prices">' +
      "<div><span>Treatment Only</span><strong>" +
      escapeHtml(j.treatmentOnly) +
      "</strong></div>" +
      "<div><span>Complete</span><strong>" +
      escapeHtml(j.complete) +
      "</strong></div>" +
      "</div>" +
      "</div></details>" +
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

  // ---- Subtle scroll-reveal animation ----
  // Elements marked with data-reveal (in the HTML or rendered above)
  // fade/slide in once they enter the viewport. Respects users who
  // asked their system for reduced motion, and degrades gracefully
  // (content stays fully visible) if IntersectionObserver is missing.
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const revealTargets = document.querySelectorAll("[data-reveal]");
  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    revealTargets.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    // Safety net: content must never stay invisible. If something
    // wasn't revealed by scrolling within a few seconds (e.g. the
    // user jumped straight to a deep link, or a browser quirk), show
    // it anyway.
    setTimeout(() => {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }, 2500);
  }
})();
