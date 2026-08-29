/**
 * ================================================================
 *  M BEAUTY – ZENTRALE INHALTSDATEI
 * ================================================================
 *
 *  HIER kannst du Preise, Texte, Behandlungen und Kontaktdaten
 *  ändern – ohne Programmierkenntnisse. Einfach den Text zwischen
 *  den Anführungszeichen "..." ersetzen und die Datei speichern.
 *
 *  WICHTIG:
 *  - Anführungszeichen " " nicht löschen.
 *  - Nach jedem Eintrag muss ein Komma , stehen (außer beim
 *    allerletzten Eintrag einer Liste).
 *  - Felder, die mit "" (leer) markiert oder als TODO
 *    gekennzeichnet sind, fehlen noch und werden auf der Seite
 *    automatisch ausgeblendet, bis du sie ausfüllst.
 * ================================================================
 */

const STUDIO_CONTENT = {
  // -------------------------------------------------------------
  // SEO / Browsertitel
  // -------------------------------------------------------------
  meta: {
    title: "M Beauty – Beauty Studio in Krefeld",
    description:
      "M Beauty Studio in Krefeld: Gesichtsbehandlungen, Microneedling, Diamond Glow und mehr. Informiere dich über unsere Behandlungen und Preise – Kontakt gerne per WhatsApp oder Instagram.",
  },

  // -------------------------------------------------------------
  // Studio / Hero-Bereich
  // -------------------------------------------------------------
  studio: {
    name: "M Beauty",
    slogan: "Beauty Studio",
    city: "Krefeld",
    region: "Nordrhein-Westfalen",

    // Kurzer Einleitungstext im Hero-Bereich (oben auf der Seite)
    heroText:
      "Herzlich willkommen bei M Beauty in Krefeld. Hier findest du alle Informationen zu unseren Behandlungen, Preisen und wie du uns erreichst.",
  },

  // -------------------------------------------------------------
  // Über mich / Über das Studio
  // -------------------------------------------------------------
  about: {
    ownerName: "Miriam Melody Hilgeland",

    // TODO: Dein eigener Text über dich und das Studio.
    // Der folgende Text ist nur ein Platzhalter-Entwurf.
    text:
      "Mein Name ist Miriam Melody Hilgeland und ich bin die Inhaberin von M Beauty in Krefeld. " +
      "In meinem Studio dreht sich alles um hochwertige Gesichtsbehandlungen und individuelle Beauty-Pflege – " +
      "persönlich, aufmerksam und auf deine Haut abgestimmt. Ich freue mich, dich bei mir im Studio begrüßen zu dürfen.",
  },

  // -------------------------------------------------------------
  // Kontakt – AUSSCHLIESSLICH WhatsApp & Instagram, keine Buchung
  // -------------------------------------------------------------
  contact: {
    // Internationales Format ohne Leerzeichen/"+" (0176... -> 4917623695948)
    whatsappNumber: "4917623695948",

    // Vorausgefüllter Text, der beim Öffnen von WhatsApp erscheint
    whatsappPrefillMessage:
      "Hallo M Beauty, ich interessiere mich für eine Behandlung und würde gerne mehr erfahren.",

    instagramUrl: "https://www.instagram.com/m.beauty.beauty.studio.krefeld/",
    instagramHandle: "@m.beauty.beauty.studio.krefeld",

    // Bitte Schreibweise selbst nochmal prüfen (wirkt wie "beaity" statt "beauty")
    email: "infombeaitysuite@gmail.com",

    // "Nach Vereinbarung" statt fester Öffnungszeiten
    openingHours: [{ days: "Termine", hours: "nach Vereinbarung" }],
  },

  // -------------------------------------------------------------
  // Behandlungen nach Kategorien
  // -------------------------------------------------------------
  // Jede Kategorie mit leerem "treatments"-Array wird auf der
  // Seite automatisch übersprungen, bis du dort Behandlungen
  // einträgst. So kannst du später einfach weitere Kategorien
  // (Nails, Lash Lift, Waxing, ...) ergänzen, ohne dass falsche
  // oder unbestätigte Preise angezeigt werden.
  // -------------------------------------------------------------
  categories: [
    {
      id: "gesichtsbehandlungen",
      name: "Gesichtsbehandlungen",
      treatments: [
        {
          name: "M Essential Facial",
          price: "75 €",
          duration: "ca. 60 Minuten",
          // Kurzbeschreibung (Entwurf – bitte von dir prüfen/anpassen,
          // im Ausgangsmaterial war kein Beschreibungstext vorhanden)
          description:
            "Klassische Gesichtsbehandlung zur gründlichen Reinigung und Pflege deiner Haut – ideal als Einstieg oder regelmäßige Pflegeroutine.",
          suitableFor: "Alle Hauttypen",
        },
        {
          name: "M Deep Clean",
          price: "85 €",
          duration: "ca. 70–75 Minuten",
          description:
            "Intensive Tiefenreinigung zur Entfernung von Unreinheiten und zur Verfeinerung des Hautbilds.",
          suitableFor: "Unreine oder verstopfte Haut",
        },
        {
          name: "M Ultrasound Glow",
          price: "89 €",
          duration: "ca. 60 Minuten",
          description:
            "Gesichtsbehandlung mit Ultraschalltechnologie zur sanften Reinigung und für einen frischen, strahlenden Teint.",
          suitableFor: "Alle Hauttypen",
        },
        {
          name: "M Diamond Glow",
          price: "89 €",
          duration: "ca. 60 Minuten",
          description:
            "Mechanisches Diamant-Peeling zur Hautverfeinerung, das abgestorbene Hautschüppchen entfernt und die Haut geschmeidiger macht.",
          suitableFor: "Alle Hauttypen",
        },
        {
          name: "M Diamond Ultrasound",
          price: "109 €",
          duration: "ca. 75 Minuten",
          description:
            "Kombinationsbehandlung aus Diamant-Peeling und Ultraschall für ein besonders intensives Pflegeergebnis.",
          suitableFor: "Alle Hauttypen",
        },
        {
          name: "M Microneedling PRO",
          price: "139 €",
          duration: "ca. 60–75 Minuten",
          description:
            "Professionelles Microneedling zur Anregung der Hauterneuerung – für ein feineres Hautbild.",
          suitableFor: "Nach individueller Beratung",
        },
      ],
    },
    {
      id: "nails",
      name: "Nageldesign / Gelmodellage",
      treatments: [
        {
          name: "Auffüllen Gel",
          price: "40 €",
          duration: "ca. 90 Minuten",
          description: "Auffüllen deiner bestehenden Gelmodellage.",
        },
        {
          // Name im Katalog abgeschnitten als "Auffüllen mit Verläng…" –
          // hier zu "Auffüllen mit Verlängerung" ergänzt, bitte prüfen.
          name: "Auffüllen mit Verlängerung",
          price: "50 €",
          duration: "ca. 120 Minuten",
          description: "Auffüllen inklusive Verlängerung der Nägel.",
        },
        {
          name: "Neumodellage Gel",
          price: "40 €",
          duration: "ca. 90 Minuten",
          description: "Komplett neue Gelmodellage.",
        },
        {
          // Name im Katalog abgeschnitten als "Neumodellage Gel mi…" –
          // hier zu "Neumodellage Gel mit Verlängerung" ergänzt, bitte prüfen.
          name: "Neumodellage Gel mit Verlängerung",
          price: "60 €",
          duration: "ca. 120 Minuten",
          description: "Komplett neue Gelmodellage inklusive Verlängerung.",
        },
      ],
    },
    {
      id: "wimpern",
      name: "Wimpern",
      treatments: [
        {
          name: "Lash-Lift",
          price: "45 €",
          duration: "ca. 60 Minuten",
          description:
            "Wimpernwelle für einen natürlich geschwungenen Blick ohne Extensions.",
        },
        {
          name: "Korean-Lash-Lift",
          price: "69 €",
          duration: "ca. 60 Minuten",
          description:
            "Aufwendigere Lash-Lift-Technik für ein besonders volumigeres Ergebnis.",
        },
        {
          name: "Wimpern Färben",
          price: "12 €",
          duration: "ca. 15 Minuten",
          description: "Färben der Wimpern für einen betonten Blick.",
        },
      ],
    },
    {
      id: "augenbrauen",
      name: "Augenbrauen",
      treatments: [
        {
          name: "Augenbrauen färben",
          price: "10 €",
          duration: "ca. 10 Minuten",
          description: "Farbauffrischung für definierte Augenbrauen.",
        },
        {
          // Name im Katalog abgeschnitten als "Augenbrauen zupfen…" – bitte
          // prüfen, ob noch etwas ergänzt werden soll (z. B. "& Formen").
          name: "Augenbrauen zupfen",
          price: "10 €",
          duration: "ca. 15 Minuten",
          description: "In Form gezupfte Augenbrauen.",
        },
        {
          name: "Brow Lift",
          price: "40 €",
          duration: "ca. 60 Minuten",
          description:
            "Brow Lift für einen aufgerichteten, definierten Augenbrauenschwung.",
        },
        {
          name: "Korean Brow Lift",
          price: "59 €",
          duration: "ca. 60 Minuten",
          description:
            "Aufwendigere Brow-Lift-Technik für ein besonders natürliches Ergebnis.",
        },
      ],
    },
    {
      id: "haende",
      name: "Hände",
      treatments: [
        {
          name: "Handmassage",
          price: "10 €",
          duration: "ca. 10 Minuten",
          description: "Entspannende Handmassage.",
        },
        {
          name: "Paraffinbad Hände",
          price: "30 €",
          duration: "ca. 60 Minuten",
          description: "Pflegendes Paraffinbad für geschmeidige Hände.",
        },
      ],
    },
    {
      id: "waxing",
      name: "Waxing / Sugaring",
      treatments: [
        {
          name: "Oberlippe waxen",
          price: "8 €",
          duration: "ca. 5 Minuten",
          description: "Waxing der Oberlippe.",
        },
      ],
    },
  ],

  // -------------------------------------------------------------
  // Rechtliche Angaben (Impressum & Datenschutz)
  // -------------------------------------------------------------
  legal: {
    ownerFullName: "Miriam Melody Hilgeland",
    businessName: "M Beauty - Beauty Studio",
    legalForm: "Einzelunternehmen",
    kleinunternehmer: true, // Kleinunternehmerregelung gem. § 19 UStG

    street: "Winnertzweg",
    houseNumber: "10",
    postalCode: "47803",
    city: "Krefeld",
    country: "Deutschland",

    email: "infombeaitysuite@gmail.com", // siehe Hinweis bei contact.email
    phone: "0176 23695948",
  },
};

// Wird von main.js / legal.js gelesen – bitte diese Zeile nicht löschen.
window.STUDIO_CONTENT = STUDIO_CONTENT;
