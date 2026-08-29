/**
 * M Beauty – füllt Impressum & Datenschutz mit den zentralen
 * Angaben aus content/studio-content.js. Fehlt eine Angabe, wird
 * automatisch ein rot markiertes "TODO"-Label angezeigt, damit
 * nichts Falsches veröffentlicht wird.
 */
(function () {
  const c = window.STUDIO_CONTENT;
  if (!c) return;
  const legal = c.legal || {};

  document.title = document.title.replace("{{studio_name}}", c.studio.name);

  document.querySelectorAll("[data-studio-name]").forEach((el) => {
    el.textContent = c.studio.name;
  });
  document.querySelectorAll("[data-studio-slogan]").forEach((el) => {
    el.textContent = c.studio.slogan;
  });

  function fill(selector, value) {
    document.querySelectorAll(selector).forEach((el) => {
      if (value) {
        el.textContent = value;
        const flag =
          el.parentElement &&
          el.parentElement.querySelector(
            ".todo-flag[data-for='" + selector + "']",
          );
        if (flag) flag.remove();
      } else {
        el.textContent = "";
        el.insertAdjacentHTML(
          "afterend",
          '<span class="todo-flag">TODO: eintragen</span>',
        );
      }
    });
  }

  fill("[data-legal-studio-name]", legal.businessName || c.studio.name);
  fill("[data-legal-owner]", legal.ownerFullName);
  fill(
    "[data-legal-address-line1]",
    [legal.street, legal.houseNumber].filter(Boolean).join(" "),
  );
  fill(
    "[data-legal-address-line2]",
    [legal.postalCode, legal.city].filter(Boolean).join(" "),
  );
  fill("[data-legal-country]", legal.country);
  fill("[data-legal-email]", legal.email || c.contact.email);
  fill("[data-legal-phone]", legal.phone);

  document.querySelectorAll("[data-legal-email-link]").forEach((el) => {
    const email = legal.email || c.contact.email;
    if (email) {
      el.href = "mailto:" + email;
      el.textContent = email;
      el.removeAttribute("hidden");
    } else {
      el.setAttribute("hidden", "hidden");
      el.insertAdjacentHTML(
        "afterend",
        '<span class="todo-flag">TODO: eintragen</span>',
      );
    }
  });

  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
