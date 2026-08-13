#let primary = rgb("#176B87")
#let primary-dark = rgb("#124E66")
#let light-blue = rgb("#EAF5F8")
#let light-gray = rgb("#F5F7F8")
#let border-gray = rgb("#DDE3E6")
#let text-gray = rgb("#53616A")

#set page(
  paper: "a4",
  margin: (
    top: 2.2cm,
    bottom: 2.0cm,
    left: 2.3cm,
    right: 2.3cm,
  ),

  header: context {
    if counter(page).get().first() > 1 [
      #set text(
        font: "Source Sans 3",
        size: 8pt,
        fill: text-gray,
      )

      Python · Informatik · KUS
      #h(1fr)
      Programmieren mit Python
    ]
  },

  footer: context [
    #set text(
      font: "Source Sans 3",
      size: 8pt,
      fill: text-gray,
    )

    Kantonsschule Uster
    #h(1fr)
    #counter(page).display()
  ],
)

#set text(
  font: "Source Sans 3",
  size: 10.5pt,
  fill: rgb("#263238"),
)

#set par(
  justify: true,
  leading: 0.7em,
)

#set heading(numbering: none)


// ========================================
// Überschrift Ebene 1
// ========================================

#show heading.where(level: 1): it => block(
  above: 1.5em,
  below: 1em,
  breakable: false,
  [
    #text(
      size: 24pt,
      weight: "bold",
      fill: primary-dark,
      it.body
    )

    #v(5pt)

    #line(
      length: 100%,
      stroke: 1.2pt + primary,
    )
  ]
)


// ========================================
// Überschrift Ebene 2
// ========================================

#show heading.where(level: 2): it => block(
  above: 1.25em,
  below: 0.5em,
  breakable: false,
  [
    #text(
      size: 16pt,
      weight: "semibold",
      fill: primary,
      it.body
    )
  ]
)


// ========================================
// Überschrift Ebene 3
// ========================================

#show heading.where(level: 3): it => block(
  above: 1em,
  below: 0.35em,
  breakable: false,
  [
    #text(
      size: 12.5pt,
      weight: "bold",
      fill: primary-dark,
      it.body
    )
  ]
)


// ========================================
// Code
// ========================================

#show raw.where(block: true): it => block(
  width: 100%,
  fill: light-gray,
  stroke: 0.6pt + border-gray,
  radius: 6pt,
  inset: 12pt,
  above: 0.7em,
  below: 0.9em,
  [
    #set text(
      font: "JetBrains Mono",
      size: 9pt,
    )
    #it
  ]
)


// Inline-Code
#show raw.where(block: false): it => box(
  fill: light-gray,
  radius: 3pt,
  inset: (
    x: 4pt,
    y: 2pt,
  ),
  [
    #set text(
      font: "JetBrains Mono",
      size: 9pt,
    )
    #it
  ]
)


// ========================================
// Blockquotes / Merke-Boxen
// ========================================

#show quote: it => block(
  width: 100%,
  fill: light-blue,
  stroke: (
    left: 3pt + primary,
  ),
  radius: 5pt,
  inset: (
    left: 12pt,
    right: 12pt,
    top: 9pt,
    bottom: 9pt,
  ),
  above: 0.8em,
  below: 0.8em,
  it.body,
)


// ========================================
// Tabellen
// ========================================

#set table(
  stroke: 0.5pt + border-gray,
  inset: 6pt,
)

#show table.cell.where(y: 0): set text(
  weight: "bold",
  fill: primary-dark,
)


// ========================================
// Listen
// ========================================

#set list(
  indent: 1.2em,
  body-indent: 0.5em,
)

#set enum(
  indent: 1.2em,
  body-indent: 0.5em,
)


// ========================================
// Links
// ========================================

#show link: it => text(
  fill: primary,
  it
)


// ========================================
// Titelblatt
// ========================================

$if(title)$

#align(center)[
  #v(2.4cm)

  #text(
    size: 11pt,
    weight: "semibold",
    fill: primary,
  )[
    PYTHON · INFORMATIK
  ]

  #v(0.5cm)

  #text(
    size: 30pt,
    weight: "bold",
    fill: primary-dark,
  )[
    $title$
  ]

  $if(subtitle)$

  #v(0.4cm)

  #text(
    size: 16pt,
    fill: text-gray,
  )[
    $subtitle$
  ]

  $endif$

  #v(0.8cm)

  #line(
    length: 4cm,
    stroke: 2pt + primary,
  )

  #v(1.5cm)

  $if(author)$

  #text(
    size: 11pt,
    fill: text-gray,
  )[
    $for(author)$$author$$sep$ · $endfor$
  ]

  $endif$

  $if(date)$

  #v(0.35cm)

  #text(
    size: 10pt,
    fill: text-gray,
  )[
    $date$
  ]

  $endif$

  #v(1cm)

  #text(
    size: 10pt,
    fill: text-gray,
  )[
    Kantonsschule Uster
  ]
]

#pagebreak()

$endif$




// ========================================
// Dokumentinhalt
// ========================================


#let blockquote(body) = block(
  width: 100%,
  fill: light-blue,
  stroke: (
    left: 3pt + primary,
  ),
  radius: 5pt,
  inset: (
    left: 12pt,
    right: 12pt,
    top: 9pt,
    bottom: 9pt,
  ),
  above: 0.8em,
  below: 0.8em,
  body,
)

#let horizontalrule = line(
  length: 100%,
  stroke: 0.6pt + border-gray,
)
$body$