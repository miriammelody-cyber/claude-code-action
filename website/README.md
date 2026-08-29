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

## Status

Alle Angaben (Name, Anschrift, Telefon, E-Mail, WhatsApp, Instagram,
Öffnungszeiten, alle Behandlungen, Hosting) sind ausgefüllt und bestätigt.
Kein offener TODO mehr. Hosting ist auf **GitHub Pages** (kostenlos)
ausgelegt – siehe Abschnitt "Deployment" unten.

## Fotos & Videos hinzufügen

Eigene Bilder oder kurze Videos vom Studio landen im Ordner `assets/`.
Danach in `content/studio-content.js` im Abschnitt `gallery` einen Eintrag
ergänzen (Beispiel steht direkt daneben als Kommentar). Der Galerie-Bereich
auf der Startseite erscheint automatisch, sobald dort mindestens ein Eintrag
steht – vorher bleibt er unsichtbar. Fotos (jpg/png/webp) und kurze, stumme
Video-Loops (mp4) werden unterstützt.

Die Seite blendet Inhalte beim Scrollen sanft ein (dezente Animation) und
hat leichte Hover-Effekte auf den Behandlungskarten – ganz ohne zusätzliche
Bibliotheken, und mit automatischem Sicherheitsnetz, falls bei jemandem die
Animation aus irgendeinem Grund nicht auslöst.

Zwischen Hero und "Über mich" liegt funkelndes, sanft bewegtes Wasser
(Karibisches Meer) als optischer Übergang – animierte Lichtreflexionen und
Glanzpunkte, reines CSS/SVG, keine Bilder.

## Signature Song

Oben rechts in der Navigation gibt es einen kleinen Musik-Button (♪). Der
Song liegt in `assets/signature-song.mp3` und wird in `content/studio-
content.js` im Abschnitt `music` eingetragen. Aus Browser-Richtlinien
startet Musik mit Ton nie von selbst – der Button startet/stoppt sie bewusst
per Klick. Wird `music.src` geleert, verschwindet der Button automatisch.

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
