/* Unterrichtsboxen auf der Website; Markdown und PDF-Quelle bleiben unverändert. */
function decorateLessonBoxes() {
  const root = document.querySelector('.md-content__inner');
  if (!root) return;
  // Aufgaben: h3 + zugehöriger Inhalt bis zur nächsten Überschrift.
  for (const heading of Array.from(root.querySelectorAll('h3'))) {
    if (heading.closest('.lesson-box') || !/^Aufgabe\s+\d+\b/i.test(heading.textContent.trim())) continue;
    const box = document.createElement('section');
    box.className = 'lesson-box lesson-box--aufgabe';
    const title = document.createElement('div');
    title.className = 'lesson-box__title';
    title.innerHTML = '<span class="lesson-box__icon" aria-hidden="true">✎</span>';
    const label = document.createElement('span');
    label.textContent = heading.textContent.trim();
    title.append(label);
    const body = document.createElement('div');
    body.className = 'lesson-box__body';
    heading.before(box);
    box.append(title, body);
    // Heading mit id behalten: Links aus Inhaltsverzeichnis funktionieren weiter.
    heading.textContent = '';
    heading.classList.add('lesson-box__anchor');
    heading.style.cssText = 'position:absolute;visibility:hidden;margin:0;padding:0;height:0';
    box.before(heading);
    let next = box.nextSibling;
    while (next) {
      if (next.nodeType === 1 && /^H[1-6]$/.test(next.tagName)) break;
      const current = next;
      next = next.nextSibling;
      body.append(current);
    }
  }
  // Bestehende Merke-/Tipp-/Achtung-Blockquotes als Boxen darstellen.
  for (const quote of Array.from(root.querySelectorAll('blockquote'))) {
    if (quote.closest('.lesson-box')) continue;
    const first = quote.querySelector(':scope > p:first-child');
    if (!first) continue;
    const raw = first.textContent.trim();
    const match = raw.match(/^(?:💡|⚠️|✏️)?\s*(Merke|Tipp|Achtung)\s*[:：]?/i);
    if (!match) continue;
    const type = match[1].toLowerCase();
    const box = document.createElement('section');
    box.className = 'lesson-box lesson-box--' + type;
    const title = document.createElement('div');
    title.className = 'lesson-box__title';
    const symbol = document.createElement('span');
    symbol.className = 'lesson-box__icon';
    symbol.setAttribute('aria-hidden','true');
    symbol.textContent = type === 'achtung' ? '⚠' : type === 'tipp' ? '✎' : '💡';
    title.append(symbol, document.createTextNode(match[1]));
    const body = document.createElement('div');
    body.className = 'lesson-box__body';
    // Entferne nur das hervorgehobene Anfangslabel, behalte allfälligen Resttext.
    const lead = first.querySelector('strong');
    if (lead && /^(?:💡|⚠️)?\s*(Merke|Tipp|Achtung)/i.test(lead.textContent.trim())) lead.remove();
    else first.textContent = raw.replace(match[0], '').trim();
    // Leere Label-Absätze (auch mit <br> oder Leerzeichen) entfernen.
    if (!first.textContent.trim() && !first.querySelector('img, svg, code, input')) first.remove();
    while (quote.firstChild) body.append(quote.firstChild);

    // Leere Absätze am Anfang entfernen
    while (
      body.firstElementChild &&
      body.firstElementChild.tagName === "P" &&
      !body.firstElementChild.textContent.trim()
    ) {
      body.firstElementChild.remove();
    }
        // Überflüssige Zeilenumbrüche am Anfang des Inhalts entfernen
    const firstParagraph = body.querySelector(':scope > p:first-child');

    if (firstParagraph) {
        while (
            firstParagraph.firstChild &&
            (
                (firstParagraph.firstChild.nodeType === Node.ELEMENT_NODE &&
                firstParagraph.firstChild.tagName === 'BR') ||
                (firstParagraph.firstChild.nodeType === Node.TEXT_NODE &&
                !firstParagraph.firstChild.textContent.trim())
            )
        ) {
            firstParagraph.firstChild.remove();
        }
    }
    box.append(title, body);
    quote.replaceWith(box);
  }
}
if (typeof document$ !== 'undefined') document$.subscribe(decorateLessonBoxes);
else document.addEventListener('DOMContentLoaded', decorateLessonBoxes);
