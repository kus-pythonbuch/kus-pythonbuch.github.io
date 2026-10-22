
/* Unterrichtsboxen für MkDocs Material.
   Die Markdown-Dateien und PDFs bleiben unverändert. */

function decorateLessonBoxes() {
  const root = document.querySelector(".md-content__inner");
  if (!root) return;

  // -----------------------------------------
  // 1. Aufgabenboxen
  // -----------------------------------------

  for (const heading of Array.from(root.querySelectorAll("h3"))) {
    if (
      heading.closest(".lesson-box") ||
      !/^Aufgabe\s+\d+\b/i.test(heading.textContent.trim())
    ) continue;

    const box = document.createElement("section");
    box.className = "lesson-box lesson-box--aufgabe";

    const title = document.createElement("div");
    title.className = "lesson-box__title";

    const icon = document.createElement("span");
    icon.className = "lesson-box__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "✎";

    const label = document.createElement("span");
    label.textContent = heading.textContent.trim();

    title.append(icon, label);

    const body = document.createElement("div");
    body.className = "lesson-box__body";

    heading.before(box);
    box.append(title, body);

    // Anker für Inhaltsverzeichnis behalten
    heading.textContent = "";
    heading.classList.add("lesson-box__anchor");
    heading.style.cssText =
      "position:absolute;visibility:hidden;" +
      "margin:0;padding:0;height:0";

    box.before(heading);

    let next = box.nextSibling;

    while (next) {
      if (
        next.nodeType === Node.ELEMENT_NODE &&
        /^H[1-6]$/.test(next.tagName)
      ) break;

      const current = next;
      next = next.nextSibling;
      body.append(current);
    }
  }

  // -----------------------------------------
  // 2. Merke-, Tipp- und Achtung-Boxen
  // -----------------------------------------

  const patterns = {
    merke: /^Merke\b\s*:?\s*/i,
    tipp: /^Tipp\b\s*:?\s*/i,
    achtung: /^Achtung\b\s*:?\s*/i
  };

  const icons = {
    merke: "💡",
    tipp: "✎",
    achtung: "⚠"
  };

  for (const quote of Array.from(root.querySelectorAll("blockquote"))) {
    if (quote.closest(".lesson-box")) continue;

    const first = quote.querySelector(":scope > p:first-child");
    if (!first) continue;

    // Text normalisieren: optionale Emojis entfernen
    const raw = first.textContent
      .trim()
      .replace(/^(?:💡|⚠️?|✏️?|📝)\s*/u, "");

    let type = null;
    let match = null;

    for (const [key, pattern] of Object.entries(patterns)) {
      match = raw.match(pattern);

      if (match) {
        type = key;
        break;
      }
    }

    if (!type) continue;

    // ---------------------------------------
    // Titel bestimmen
    // ---------------------------------------

    const strong = first.querySelector("strong");
    const hasBoldTitle =
      strong &&
      patterns[type].test(
        strong.textContent.trim().replace(
          /^(?:💡|⚠️?|✏️?|📝)\s*/u, ""
        )
      );

    let titleText = type.charAt(0).toUpperCase() + type.slice(1);

    if (hasBoldTitle) {
      // Beispiel: **Achtung: Endlosschleife**
      titleText = strong.textContent
        .trim()
        .replace(/^(?:💡|⚠️?|✏️?|📝)\s*/u, "")
        .replace(/:\s*$/, "");

      // Fett formatierten Titel entfernen
      strong.remove();

      // Emoji vor dem Titel entfernen
      for (const node of Array.from(first.childNodes)) {
        if (node.nodeType !== Node.TEXT_NODE) break;

        node.textContent = node.textContent.replace(
          /^\s*(?:💡|⚠️?|✏️?|📝)?\s*/u,
          ""
        );

        if (!node.textContent.trim()) node.remove();
        else break;
      }
    } else {
      // Beispiel: > Achtung: Hier steht ein Hinweis.
      // Nur das Anfangslabel entfernen.
      const original = first.textContent.trim();

      first.textContent = original
        .replace(/^(?:💡|⚠️?|✏️?|📝)\s*/u, "")
        .replace(patterns[type], "")
        .trim();
    }

    // ---------------------------------------
    // Box erstellen
    // ---------------------------------------

    const box = document.createElement("section");
    box.className = `lesson-box lesson-box--${type}`;

    const title = document.createElement("div");
    title.className = "lesson-box__title";

    const icon = document.createElement("span");
    icon.className = "lesson-box__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = icons[type];

    const label = document.createElement("span");
    label.textContent = titleText;

    title.append(icon, label);

    const body = document.createElement("div");
    body.className = "lesson-box__body";

    // Inhalt aus dem ursprünglichen Blockquote übernehmen
    while (quote.firstChild) {
      body.append(quote.firstChild);
    }

    // ---------------------------------------
    // Leere Absätze und Zeilenumbrüche
    // entfernen
    // ---------------------------------------

    while (body.firstElementChild?.tagName === "P") {
      const p = body.firstElementChild;

      if (
        !p.textContent.trim() &&
        !p.querySelector("img, svg, code, input")
      ) {
        p.remove();
      } else {
        break;
      }
    }

    const firstParagraph =
      body.querySelector(":scope > p:first-child");

    if (firstParagraph) {
      while (firstParagraph.firstChild) {
        const node = firstParagraph.firstChild;

        const isBreak =
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "BR";

        const isWhitespace =
          node.nodeType === Node.TEXT_NODE &&
          !node.textContent.trim();

        if (isBreak || isWhitespace) {
          node.remove();
        } else {
          break;
        }
      }
    }

    box.append(title, body);
    quote.replaceWith(box);
  }
}

// MkDocs Material: auch bei interner Navigation ausführen
if (typeof document$ !== "undefined") {
  document$.subscribe(decorateLessonBoxes);
} else {
  document.addEventListener(
    "DOMContentLoaded",
    decorateLessonBoxes
  );
}
