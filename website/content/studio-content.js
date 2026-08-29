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
    name: "M Beauty", // TODO: Bitte bestätigen – im alten System auch "M Beauty Nails Lashes Brows" gefunden. Welcher Name soll überall stehen?
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
    // TODO: Deine WhatsApp-Nummer im internationalen Format ohne
    // Leerzeichen und ohne "+" eintragen, z. B. für 0151 23456789
    // würdest du hier "4915123456789" eintragen.
    whatsappNumber: "",

    // Vorausgefüllter Text, der beim Öffnen von WhatsApp erscheint
    whatsappPrefillMessage:
      "Hallo M Beauty, ich interessiere mich für eine Behandlung und würde gerne mehr erfahren.",

    // TODO: Link zu deinem Instagram-Profil, z. B. "https://instagram.com/deinprofil"
    instagramUrl: "",
    instagramHandle: "", // z. B. "@mbeauty.krefeld" – wird als Text auf der Seite angezeigt

    // TODO: E-Mail-Adresse. Im alten System wurde "hallo@m-beauty.de"
    // gefunden, aber bitte bestätigen, ob das aktuell noch stimmt.
    email: "",

    // TODO: Öffnungszeiten wurden im Datenexport nirgends gefunden.
    // Beispiel-Format zum Ausfüllen:
    // { days: "Di – Fr", hours: "10:00 – 18:00 Uhr" },
    // { days: "Sa", hours: "10:00 – 14:00 Uhr" },
    openingHours: [],
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
      // TODO: Preise & Dauer für Nageldesign/Gelmodellage ergänzen,
      // sobald bestätigt – Kategorie bleibt bis dahin ausgeblendet.
      id: "nails",
      name: "Nageldesign / Gelmodellage",
      treatments: [],
    },
    {
      // TODO: Preise & Dauer für Lash Lift, Brow Lift, Wimpern-/
      // Augenbrauenfärben ergänzen.
      id: "lashes-brows",
      name: "Lash Lift, Brow Lift & Färben",
      treatments: [],
    },
    {
      // TODO: Preise & Dauer für Waxing/Sugaring ergänzen.
      id: "waxing",
      name: "Waxing / Sugaring",
      treatments: [],
    },
  ],

  // -------------------------------------------------------------
  // Rechtliche Angaben (Impressum & Datenschutz)
  // -------------------------------------------------------------
  legal: {
    ownerFullName: "Miriam Melody Hilgeland",
    businessName: "", // TODO: siehe Hinweis oben bei "studio.name"
    legalForm: "Einzelunternehmen",
    kleinunternehmer: true, // Kleinunternehmerregelung gem. § 19 UStG

    street: "", // TODO
    houseNumber: "", // TODO
    postalCode: "", // TODO
    city: "Krefeld",
    country: "Deutschland",

    email: "", // TODO (siehe contact.email)
    phone: "", // TODO
  },
};

// Wird von main.js / legal.js gelesen – bitte diese Zeile nicht löschen.
window.STUDIO_CONTENT = STUDIO_CONTENT;
