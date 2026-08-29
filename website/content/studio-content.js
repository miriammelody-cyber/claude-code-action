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
  // Signature Song
  // -------------------------------------------------------------
  // Browser verbieten grundsätzlich automatisch startende Musik mit Ton –
  // deshalb gibt es einen dezenten Button, den Besucher:innen bewusst
  // antippen. Läuft danach in Dauerschleife, bis man ihn erneut antippt.
  // Leer lassen ("" bei src), um den Button auszublenden.
  music: {
    src: "assets/signature-song.mp3",
    label: "Musik",
  },

  // -------------------------------------------------------------
  // Über mich / Über das Studio
  // -------------------------------------------------------------
  about: {
    ownerName: "Miriam Melody Hilgeland",

    intro: {
      heading:
        "Hallo, ich bin Miri – Gründerin und das Gesicht hinter M Beauty.",
      paragraphs: [
        "Ich bin Mama von zwei Jungs, ehemalige OP-Schwester und seit 2014 im Beautybereich tätig. Was damals mit Nageldesign als Nebentätigkeit begann, entwickelte sich über die Jahre zu meiner großen Leidenschaft.",
        "Meine Erfahrung aus dem medizinischen Bereich prägt meine Arbeit bis heute: Präzision, Hygiene und ein geschulter Blick für Ästhetik sind für mich selbstverständlich.",
        "Mit M Beauty habe ich einen Ort geschaffen, an dem professionelle Beautybehandlungen und persönliche Auszeit zusammenkommen. In meinem Homestudio erwartet dich eine ruhige, entspannte Atmosphäre mit individueller Beratung und viel Liebe zum Detail.",
        "Mein Ziel ist es, deine natürliche Schönheit zu unterstreichen und dir eine kleine Pause vom Alltag zu schenken.",
        "Ich freue mich darauf, dich bei M Beauty willkommen zu heißen.",
      ],
      signature: "Deine Miri",
      tagline: "Natürlich. Gepflegt. Mit Liebe zum Detail.",
    },

    werdegang: {
      heading: "Mein Werdegang",
      paragraphs: [
        "2014 begann meine Reise im Beautybereich mit dem Nageldesign und meinem eigenen Nebengewerbe.",
        "Parallel dazu war ich viele Jahre im medizinischen Bereich und als OP-Schwester tätig. Diese Zeit hat meine Arbeitsweise nachhaltig geprägt – insbesondere meinen Anspruch an Hygiene, Präzision und sorgfältiges Arbeiten.",
        "Mit der Zeit wuchs der Wunsch, meine Leidenschaft für Beauty wieder stärker in den Mittelpunkt zu stellen. Heute widme ich mich mit M Beauty meinem Herzensprojekt und entwickle mein Wissen durch regelmäßige Fort- und Weiterbildungen kontinuierlich weiter.",
        "Aus einer Nebentätigkeit wurde eine Leidenschaft – und schließlich M Beauty.",
      ],
    },

    qualifications: {
      heading: "Qualifikationen",
      items: [
        "Langjährige Erfahrung im medizinischen Bereich und als OP-Schwester",
        "Zertifizierte in Nageldesign seit 2014",
        "Zertifiziertes Lash Lift",
        "Zertifiziertes Brow Lift",
        "Zertifiziertes Korean Lash Lift",
        "Zertifizierung Fruchtsäurepeeling",
        "Zertifizierung Diamant-Microdermabrasion",
        "Zertifizierung Microneedling",
        "Zertifizierung Ultraschall (NISV frei)",
        "Weiterbildung zur geprüften Kosmetikerin",
        "Fachgerechte Hygiene- und Desinfektionsstandards",
        "Regelmäßige Fort- und Weiterbildungen im Beautybereich",
      ],
    },

    philosophy: {
      heading: "Meine Philosophie",
      paragraphs: [
        "Schönheit bedeutet für mich nicht, sich zu verändern, sondern die eigene natürliche Schönheit hervorzuheben.",
        "Bei M Beauty stehen Qualität, Wohlbefinden und persönliche Betreuung im Mittelpunkt. Jede Behandlung soll nicht nur ein schönes Ergebnis schaffen, sondern auch eine kleine Auszeit vom Alltag sein.",
        "Durch meinen medizinischen Hintergrund lege ich besonderen Wert auf Hygiene, Präzision und sorgfältiges Arbeiten. Gleichzeitig möchte ich eine Atmosphäre schaffen, in der du dich willkommen, entspannt und gut aufgehoben fühlst.",
        "Mein Anspruch sind natürliche, typgerechte Ergebnisse, die zu dir passen – professionell umgesetzt und mit Liebe zum Detail.",
      ],
      closingTagline: "Natürlich. Schön. Du.",
    },
  },

  // -------------------------------------------------------------
  // Studio-Galerie (Fotos & kurze Videos)
  // -------------------------------------------------------------
  // So fügst du eigene Fotos/Videos hinzu:
  //  1. Datei (z. B. "studio-1.jpg" oder "eindruecke.mp4") in den
  //     Ordner "assets/" legen.
  //  2. Hier unten einen neuen Eintrag hinzufügen, z. B.:
  //     { type: "image", src: "assets/studio-1.jpg", alt: "Empfangsbereich im Studio" },
  //     { type: "video", src: "assets/eindruecke.mp4", alt: "Kurzer Rundgang durchs Studio" },
  //  Bilder: jpg/png/webp. Videos: mp4 (werden stumm & in Dauerschleife
  //  abgespielt, wie ein kurzes animiertes Bild/Reel – ohne Ton).
  //  Der ganze Bereich bleibt automatisch ausgeblendet, solange diese
  //  Liste leer ist.
  gallery: [
    {
      type: "video",
      src: "assets/studio-eindruecke.mp4",
      alt: "Kurzer Rundgang durchs M Beauty Studio",
    },
    {
      type: "image",
      src: "assets/studio-2.jpg",
      alt: "Behandlungsraum mit Liege und Dachfenster",
    },
    {
      type: "image",
      src: "assets/studio-1.jpg",
      alt: "Arbeitsplatz im Studio",
    },
    {
      type: "image",
      src: "assets/studio-3.jpg",
      alt: "M Beauty Logo an der Studiowand",
    },
  ],

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

    email: "infombeautysuite@gmail.com",

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
          name: "Gel Auffüllen mit Verlängerung",
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
          name: "Augenbrauen zupfen/waxen",
          price: "10 €",
          duration: "ca. 15 Minuten",
          description: "In Form gezupfte oder gewaxte Augenbrauen.",
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

    email: "infombeautysuite@gmail.com",
    phone: "0176 23695948",
  },
};

// Wird von main.js / legal.js gelesen – bitte diese Zeile nicht löschen.
window.STUDIO_CONTENT = STUDIO_CONTENT;
