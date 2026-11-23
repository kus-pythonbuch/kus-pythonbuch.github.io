
/* Einheitlicher Kapiteleinstieg für alle Python-Kapitel */

function decorateChapterHero() {
  const root = document.querySelector(".md-content__inner");
  if (!root || root.querySelector(".chapter-hero")) return;

  // Kapitel und Nummern entsprechend der Navigation
  const chapters = {
    "einfuehrung": 1,
    "variablen-und-datentypen": 2,
    "schleifen": 3,
    "funktionen-ohne-rueckgabewert": 4,
    "funktionen": 5,
    "funktionen_return": 6,
    "bedingungen": 7,
    "verzweigung": 8,
    "flussdiagramme": 9,
    "while-schleife": 10,
    "listen": 11,
    "dictionaries": 12
  };

  const parts = location.pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1] || "";
  const slug = last.endsWith(".html") ? last.slice(0, -5) : last;

  if (!Object.hasOwn(chapters, slug)) return;

  const heading = root.querySelector("h1");
  if (!heading) return;

  const hero = document.createElement("header");
  hero.className = "chapter-hero";

  const eyebrow = document.createElement("p");
  eyebrow.className = "chapter-eyebrow";
  eyebrow.textContent =
    `KAPITEL ${String(chapters[slug]).padStart(2, "0")} · PYTHON`;

  // Vorhandenen h1 behalten, damit Ankerlinks funktionieren.
  // Kopfzeile mit Kapitelbezeichnung und PDF-Button
const topRow = document.createElement("div");
topRow.className = "chapter-hero__top";

topRow.append(eyebrow);

// Der PDF-Button wurde von pdf-button.js bereits erstellt.
const pdfButton = root.querySelector(".chapter-pdf");

if (pdfButton) {
  topRow.append(pdfButton);
}

heading.before(hero);
hero.append(topRow, heading);

  // Optional: ersten Einleitungsabsatz übernehmen,
  // sofern er unmittelbar nach dem Titel steht.
  const next = hero.nextElementSibling;

  if (next?.tagName === "P" && !next.querySelector(".chapter-pdf")) {
    next.classList.add("chapter-intro");
    hero.append(next);
  }
}

if (typeof document$ !== "undefined") {
  document$.subscribe(decorateChapterHero);
} else {
  document.addEventListener("DOMContentLoaded", decorateChapterHero);
}
