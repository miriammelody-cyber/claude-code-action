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

## Offene Punkte

Alle wesentlichen Angaben (Name, Anschrift, Telefon, E-Mail, WhatsApp,
Instagram, Öffnungszeiten, Hosting) sind ausgefüllt. Nur noch zum
Gegenchecken:

- **E-Mail-Adresse**: `infombeaitysuite@gmail.com` – bitte prüfen, ob das
  wirklich so geschrieben ist (wirkt wie ein Tippfehler von "beauty").
- Zwei Behandlungsnamen waren im Katalog-Screenshot abgeschnitten und wurden
  sinngemäß ergänzt (in `content/studio-content.js` als Kommentar markiert):
  "Auffüllen mit Verlängerung" und "Neumodellage Gel mit Verlängerung", sowie
  "Augenbrauen zupfen" (hier unklar, ob noch etwas ergänzt werden soll).
- Hosting ist auf **GitHub Pages** (kostenlos) ausgelegt – siehe Abschnitt
  "Deployment" unten.

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
