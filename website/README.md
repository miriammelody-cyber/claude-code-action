# M Beauty – Informationsseite

Eine schlanke, statische Informationsseite (kein Buchungssystem) für M Beauty:
Studio, Behandlungen & Preise, Kontakt ausschließlich über WhatsApp/Instagram,
Impressum und Datenschutz.

## Inhalte ändern

Alle Preise, Texte, Kontaktdaten und rechtlichen Angaben stehen zentral in
einer Datei:

```
content/studio-content.js
```

Dort einfach den Text zwischen den Anführungszeichen `"..."` anpassen und
speichern – keine Programmierkenntnisse nötig. Felder, die noch fehlen, sind
mit `// TODO` kommentiert; solange sie leer sind, blendet die Seite die
betroffenen Buttons/Zeilen automatisch aus bzw. zeigt im Impressum/Datenschutz
eine rot markierte "TODO"-Markierung, statt falsche Angaben zu zeigen.

## Offene TODOs (noch von dir auszufüllen)

- **Offizieller Name**: "M Beauty" oder "M Beauty Nails Lashes Brows"? (`studio.name` / `legal.businessName`)
- **Anschrift**: Straße, Hausnummer, PLZ (`legal.street`, `legal.houseNumber`, `legal.postalCode`)
- **Telefon** (`legal.phone`)
- **E-Mail**: vermutlich `hallo@m-beauty.de` – bitte bestätigen (`contact.email` / `legal.email`)
- **WhatsApp-Nummer** im Format `4915123456789` (`contact.whatsappNumber`)
- **Instagram-Link** (`contact.instagramUrl`, `contact.instagramHandle`)
- **Öffnungszeiten** (`contact.openingHours`)
- Weitere Behandlungen (Nails, Lash Lift/Brow Lift, Waxing/Sugaring) inkl. Preis & Dauer
- **Hosting**: Sobald klar ist, wo die Seite gehostet wird, bitte Abschnitt 3
  in `datenschutz.html` ("Hosting / Server-Logfiles") um Name/Anschrift des
  Anbieters ergänzen.

## Lokal ansehen

Kein Build-Schritt nötig. Einfach im Ordner `website/` einen kleinen lokalen
Server starten und im Browser öffnen:

```bash
python3 -m http.server 8080
# dann im Browser: http://localhost:8080
```

(Direktes Doppelklicken der `index.html` funktioniert ebenfalls, ein lokaler
Server ist nur etwas zuverlässiger.)

## Struktur

```
website/
├── index.html              Startseite (Hero, Über uns, Behandlungen, Kontakt)
├── impressum.html           Impressum
├── datenschutz.html         Datenschutzerklärung
├── content/studio-content.js  Zentrale Inhalte – hier änderst du Texte/Preise
├── css/style.css            Design (Soft-Luxury-Farbwelt, responsive)
└── js/
    ├── main.js               Rendering der Startseite
    └── legal.js              Rendering von Impressum & Datenschutz
```

## Deployment

Die Seite besteht nur aus statischem HTML/CSS/JS ohne Abhängigkeiten und kann
z. B. kostenlos über GitHub Pages gehostet werden (Repo-Einstellungen →
Pages → Ordner `/website` als Quelle wählen), oder auf jeden anderen
Webspace hochgeladen werden.
