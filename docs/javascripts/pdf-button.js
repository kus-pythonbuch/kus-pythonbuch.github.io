/* PDF-Button automatisch auf Kapitelseiten; nicht in exportierten PDFs. */
function addChapterPdfButton() {
  const content = document.querySelector('.md-content__inner');
  if (!content || content.querySelector('.chapter-pdf')) return;
  const page = location.pathname.split('/').filter(Boolean).pop() || '';
  const chapter = page.endsWith('.html') ? page.slice(0, -5) : page;
  if (!chapter || chapter === 'index' || chapter === '404') return;
  const title = content.querySelector('h1');
  if (!title) return;
  const existing = Array.from(content.querySelectorAll('a[href$=".pdf"]')).find(a => a.getAttribute('href').includes(chapter + '.pdf'));
  const link = document.createElement('a');
  link.className = 'chapter-pdf';
  link.href = existing ? existing.href : new URL('../assets/pdf/' + chapter + '.pdf', location.href).href;
  link.setAttribute('download', '');
  link.setAttribute('aria-label', 'Kapitel als PDF herunterladen');
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 20h14"/></svg><span>PDF</span>';
  title.before(link);
  if (existing) {
    const paragraph = existing.closest('p');
    if (paragraph && paragraph.textContent.trim() === existing.textContent.trim()) paragraph.remove();
  }
}
if (typeof document$ !== 'undefined') document$.subscribe(addChapterPdfButton);
else document.addEventListener('DOMContentLoaded', addChapterPdfButton);
