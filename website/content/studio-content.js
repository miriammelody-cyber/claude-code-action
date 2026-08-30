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
      "M Beauty Studio in Krefeld: Facials, Microneedling, Diamond Glow und individuelle Skin Journeys. Informiere dich über unsere Behandlungen und Preise – Kontakt gerne per WhatsApp oder Instagram.",
  },

  // -------------------------------------------------------------
  // Studio / Hero-Bereich
  // -------------------------------------------------------------
  studio: {
    name: "M Beauty",
    slogan: "Beauty Studio",
    tagline: "Your Moment. Your Glow.",
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
      id: "basic-facials",
      name: "Basic Facials",
      treatments: [
        {
          name: "M Essential Facial",
          price: "69 €",
          duration: "ca. 60 Minuten",
          description:
            "Individuelle klassische Gesichtsbehandlung für Pflege, Feuchtigkeit und ein gepflegtes Hautgefühl.",
          whatToExpect:
            "Die Behandlung wird an den aktuellen Hautzustand angepasst und kann unter anderem Reinigung, geeignetes Peeling, Wirkstoffpflege, Massage, Maske und Abschlusspflege enthalten. Bei Bedarf kann eine leichte Ausreinigung integriert werden.",
          besonderheiten:
            "Für eine intensivere Ausreinigung empfehlen wir M Deep Clean.",
        },
        {
          name: "M Deep Clean",
          price: "85 €",
          duration: "ca. 75 Minuten",
          description:
            "Intensive Gesichtsreinigung für Haut mit verstopften Poren, Komedonen oder stärkerem Ausreinigungsbedarf.",
          hautziel:
            "Haut mit verstopften Poren, Komedonen oder stärkerem Ausreinigungsbedarf.",
          whatToExpect:
            "Im Mittelpunkt stehen die Vorbereitung der Haut und die sorgfältige manuelle Ausreinigung. Die Behandlung wird anschließend mit hautzustandsgerechter Wirkstoffpflege und Maske abgeschlossen.",
          besonderheiten:
            "Vapozon wird nur eingesetzt, wenn der Hautzustand dafür geeignet ist.",
        },
      ],
    },
    {
      id: "advanced-facials",
      name: "Advanced Facials",
      treatments: [
        {
          name: "M Ultrasound Glow",
          price: "85 €",
          duration: "ca. 60 Minuten",
          description:
            "Apparative Wirkstoffbehandlung mit professionellem Ultraschall und integrierter LED.",
          hautziel:
            "Geeignet beispielsweise bei Feuchtigkeitsmangel, fahlem Hautbild, regenerationsbedürftiger Haut oder – entsprechend angepasst – unreiner Haut.",
          whatToExpect:
            "Wirkstoffe, Ultraschallparameter und LED werden entsprechend dem Hautzustand ausgewählt.",
          kuren: [
            {
              name: "6er Ultrasound Intensivkur",
              price: "479 €",
              regularValue: "510 €",
              regularValueNote: "Regulärer Einzelwert: 6 × 85 €",
              info: "Die Behandlungstermine werden entsprechend dem individuellen Hautziel geplant und der Hautverlauf regelmäßig beurteilt.",
            },
          ],
        },
        {
          name: "M Diamond Glow",
          price: "89 €",
          duration: "ca. 60 Minuten",
          description:
            "Professionelle Diamond Microdermabrasion zur kontrollierten Abtragung oberflächlicher Verhornungen.",
          hautziel:
            "Für ein glatteres, verfeinertes und frischer wirkendes Hautbild.",
          whatToExpect:
            "Die Behandlung wird mit individuell ausgewählten Wirkstoffen, Maske und Abschlusspflege kombiniert.",
          kuren: [
            {
              name: "6er Diamond Intensivkur",
              price: "499 €",
              regularValue: "534 €",
              regularValueNote: "Regulärer Einzelwert: 6 × 89 €",
              info: "Bei einer problemorientierten Intensivkur können die Behandlungen – sofern der Hautzustand dies zulässt – im Abstand von etwa 7–10 Tagen durchgeführt werden. Nach sechs Sitzungen erfolgt eine erneute Beurteilung des Hautzustands.",
            },
          ],
        },
        {
          name: "M Diamond Ultrasound",
          price: "109 €",
          duration: "ca. 75 Minuten",
          description:
            "Premium-Kombination aus Diamond Microdermabrasion und professionellem Ultraschall mit integrierter LED.",
          hautziel:
            "Ideal für Kundinnen, die Hautbildverfeinerung, Glow und intensive Wirkstoffpflege in einer Behandlung kombinieren möchten.",
          whatToExpect:
            "Die Diamond Microdermabrasion verfeinert zunächst die Hautoberfläche. Anschließend erfolgt eine individuell abgestimmte Ultraschall-Wirkstoffbehandlung.",
          besonderheiten:
            "Für diese Behandlung gibt es bewusst keine eigene starre Kur.",
        },
      ],
    },
    {
      id: "pro-facial",
      name: "Pro Facial",
      treatments: [
        {
          name: "M Microneedling PRO",
          price: "159 €",
          duration: "",
          description:
            "Professionelles kosmetisches Microneedling für intensive Hautregeneration und Hautbildoptimierung.",
          hautziel: "Intensive Hautregeneration und Hautbildoptimierung.",
          whatToExpect:
            "Die Behandlung wird individuell an Hautzustand und Behandlungsziel angepasst.",
          besonderheiten:
            "Bei einer normalen Einzelbuchung ist ein kleines CNC MED HYAL Nachsorge-Kit für zuhause inklusive.",
          kuren: [
            {
              name: "Microneedling 3er-Kur",
              price: "449 €",
              regularValue: "477 €",
              regularValueNote: "Regulärer Einzelwert: 3 × 159 €",
            },
            {
              name: "Microneedling 6er-Kur",
              price: "849 €",
              regularValue: "954 €",
              regularValueNote: "Regulärer Einzelwert: 6 × 159 €",
            },
          ],
          kurenHinweis:
            "Für intensive Behandlungskonzepte können mehrere Microneedling-Sitzungen sinnvoll sein. Anzahl und Abstände werden individuell anhand des Hautzustands und Behandlungsziels geplant.",
        },
      ],
    },
    {
      id: "seasonal-facials",
      name: "Seasonal & Special Facials",
      treatments: [
        {
          name: "M Summer Glow",
          price: "79 €",
          duration: "ca. 60 Minuten",
          description:
            "Saisonale Feuchtigkeits- und Glow-Behandlung für die Sommermonate.",
          hautziel: "Feuchtigkeit, Beruhigung und frischer Glow.",
          whatToExpect:
            "Mit Aloe-Vera- und Hyaluron-Komponenten sowie intensiver Feuchtigkeitsmaske.",
          besonderheiten: "Kein Vapozon als Standardbestandteil.",
        },
        {
          name: "M Autumn & Winter Glow",
          price: "89 €",
          duration: "ca. 70 Minuten",
          description:
            "Regenerierendes saisonales Spa-Ritual für die kühlere Jahreszeit.",
          hautziel:
            "Feuchtigkeit, Pflege, Entspannung, Regeneration und Hautkomfort.",
          whatToExpect: "Mit Wirkstoffpflege, Massage und intensiver Maske.",
          besonderheiten:
            "Wärme bzw. Vapozon wird nur bei geeignetem Hautzustand eingesetzt.",
        },
        {
          name: "M Pearls Ritual",
          price: "99 €",
          duration: "ca. 70 Minuten",
          description:
            "Luxuriöses Wellness- und Regenerationsritual mit der CNC Moments of Pearls Pflegelinie.",
          hautziel:
            "Pflege, Regeneration, Entspannung und ein besonders gepflegtes, strahlendes Hautgefühl.",
          whatToExpect:
            "Ein Premium-Ritual für Wohlbefinden und Ausstrahlung – bewusst als Wellness-Erlebnis und nicht als apparative Problemlösung gedacht.",
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
  // M Ultimate Skin Journeys
  // -------------------------------------------------------------
  // Jede Journey läuft über ca. 12 Wochen mit 6 individuell geplanten
  // Terminen. "complete" enthält passende Fullsize-Homecare, "treatmentOnly"
  // nur die Behandlungen. Der Beispiel-Ablauf ("plan") ist nur zur
  // Orientierung – die tatsächlichen Termine werden individuell geplant.
  skinJourneys: {
    heading: "M Ultimate Skin Journey",
    subheading:
      "12 Wochen. 6 individuelle Behandlungstermine. Ein gemeinsames Hautziel.",
    intro:
      "Die M Ultimate Skin Journey ist kein starres Behandlungspaket. Über etwa zwölf Wochen wird ein individueller Hautplan erstellt. Der Hautzustand wird zu Beginn analysiert und während der Journey regelmäßig neu beurteilt. Die vorgesehenen Behandlungen können entsprechend der Hautentwicklung angepasst oder durch eine geeignetere Behandlung ersetzt werden. Startanalyse, Verlaufskontrollen und Abschlussanalyse gehören zum Konzept.",
    homecareHinweis:
      "Für bestmögliche Behandlungsergebnisse empfehlen wir die auf die Skin Journey abgestimmte Homecare. Professionelle Studiobehandlungen und die tägliche Pflege zuhause ergänzen sich. Die Journey kann auf Wunsch auch ohne das empfohlene Homecare-Paket gebucht werden. In diesem Fall können Verlauf und Ergebnis von der ursprünglichen Behandlungsplanung abweichen, insbesondere wenn die vorhandene Heimpflege nicht optimal zum Hautziel passt. Bei Treatment Only wird deshalb die bereits vorhandene Pflegeroutine gemeinsam geprüft. Ist diese bereits geeignet, muss sie selbstverständlich nicht ersetzt werden.",
    journeys: [
      {
        id: "hydration",
        name: "Hydration",
        hautziel:
          "Feuchtigkeitsarme, fahle oder spannende Haut ohne ausgeprägte entzündliche Problematik.",
        fokus: "Hydration + Glow + apparative Wirkstoffversorgung",
        plan: [
          { week: "0", treatment: "M Essential Facial" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Diamond Glow" },
          { week: "6", treatment: "M Ultrasound Glow" },
          { week: "9", treatment: "M Diamond Ultrasound" },
          { week: "12", treatment: "M Essential Facial" },
        ],
        regulaererBehandlungswert: "506 €",
        treatmentOnly: "459 €",
        complete: "569 €",
        homecare: {
          items: ["MED HYAL serum 30 ml", "MED HYAL cream 50 ml"],
          setName: "CNC MED HYAL Set groß",
          wert: "110 €",
        },
        regulaererGesamtwert: "616 €",
      },
      {
        id: "comfort",
        name: "Comfort",
        hautziel:
          "Trockene, lipidarme bzw. pflegebedürftige Haut mit Spannungsgefühl und reduziertem Hautkomfort.",
        fokus: "Feuchtigkeit + Lipide + Barriere + Regeneration",
        plan: [
          { week: "0", treatment: "M Essential Facial" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Essential Facial" },
          { week: "6", treatment: "M Ultrasound Glow" },
          { week: "9", treatment: "regenerative saisonal passende Behandlung" },
          { week: "12", treatment: "M Essential Facial" },
        ],
        regulaererBehandlungswert: "466 €",
        treatmentOnly: "425 €",
        complete: "509 €",
        homecare: {
          items: ["MED HYAL serum 30 ml", "DiHyal Soft Creme 50 ml"],
          wert: "88,80 €",
        },
        regulaererGesamtwert: "554,80 €",
      },
      {
        id: "age-firm-pro",
        name: "Age & Firm PRO",
        hautziel:
          "Reife bzw. regenerationsbedürftige Haut mit Linien sowie Elastizitäts- und Festigkeitsverlust.",
        fokus: "Regeneration + Anti-Aging + Wirkstoffversorgung",
        plan: [
          { week: "0", treatment: "M Essential Facial" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Microneedling PRO" },
          { week: "6", treatment: "M Essential Facial" },
          { week: "8", treatment: "M Ultrasound Glow" },
          { week: "12", treatment: "M Microneedling PRO" },
        ],
        regulaererBehandlungswert: "626 €",
        treatmentOnly: "569 €",
        complete: "749 €",
        homecare: {
          items: [
            "MED HYAL serum 30 ml",
            "MED HYAL cream 50 ml",
            "MED HYAL collagen manager 30 ml",
          ],
          wert: "181,90 €",
        },
        regulaererGesamtwert: "807,90 €",
        hinweis:
          "Innerhalb der Complete Journey wird bei den enthaltenen Microneedling-Terminen nicht zusätzlich pro Termin das kleine MED-HYAL-Kit ausgegeben, da bereits die Fullsize-Homecare enthalten ist.",
      },
      {
        id: "clear-skin",
        name: "Clear Skin",
        hautziel:
          "Unreine/ölige Haut, Komedonen, verstopfte Poren, stärkere Verhornung oder ungleichmäßiges Hautbild.",
        fokus: "Ausreinigung + Regulation + Hautbildverfeinerung",
        plan: [
          { week: "0", treatment: "M Deep Clean" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Diamond Glow" },
          { week: "6", treatment: "M Deep Clean" },
          { week: "9", treatment: "M Ultrasound Glow" },
          { week: "12", treatment: "M Diamond Ultrasound" },
        ],
        regulaererBehandlungswert: "538 €",
        treatmentOnly: "489 €",
        complete: "599 €",
        homecare: {
          items: [
            "MicroSilver BG Face Wash 100 ml",
            "MED HYAL clear & refine 30 ml",
            "MicroSilver BG Face Cream Soft 50 ml",
          ],
          wert: "115,70 €",
        },
        regulaererGesamtwert: "653,70 €",
        hinweis:
          "Bei entzündlicher oder anderweitig für Diamond ungeeigneter Haut wird die vorgesehene Behandlung entsprechend angepasst.",
      },
      {
        id: "clear-age-pro",
        name: "Clear & Age PRO",
        hautziel:
          "Reifere Haut mit gleichzeitiger Neigung zu Unreinheiten, Komedonen oder vergrößerten Poren.",
        fokus: "Regulation + Hautbild + Anti-Aging",
        plan: [
          { week: "0", treatment: "M Deep Clean" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Diamond Glow" },
          { week: "6", treatment: "M Microneedling PRO" },
          { week: "9", treatment: "M Ultrasound Glow" },
          { week: "12", treatment: "M Diamond Ultrasound" },
        ],
        regulaererBehandlungswert: "612 €",
        treatmentOnly: "559 €",
        complete: "659 €",
        homecare: {
          items: [
            "MicroSilver BG Face Wash 100 ml",
            "DiHyal Effect Gel 30 ml",
            "MicroSilver BG Face Cream Soft 50 ml",
          ],
          wert: "105,70 €",
        },
        regulaererGesamtwert: "717,70 €",
        hinweis:
          "Bei Complete kein zusätzliches kleines MED-HYAL-Kit für den enthaltenen Microneedling-Termin.",
      },
      {
        id: "calm-balance",
        name: "Calm & Balance",
        hautziel: "Sensible, gestresste, reaktive bzw. gefäßlabile Haut.",
        fokus: "Beruhigung + Feuchtigkeit + Barrierestabilisierung",
        plan: [
          { week: "0", treatment: "M Essential Facial" },
          { week: "2", treatment: "M Ultrasound Glow" },
          { week: "4", treatment: "M Essential Facial" },
          { week: "6", treatment: "M Ultrasound Glow" },
          { week: "9", treatment: "M Essential Facial" },
          { week: "12", treatment: "M Essential Facial" },
        ],
        regulaererBehandlungswert: "446 €",
        treatmentOnly: "409 €",
        complete: "469 €",
        homecare: {
          items: ["Aloe Vera Gel 50 ml", "DiHyal Sensitive Fluid 30 ml"],
          wert: "63,80 €",
        },
        regulaererGesamtwert: "509,80 €",
        hinweis: "Kein Vapozon als Bestandteil dieser Journey.",
      },
    ],
  },

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
