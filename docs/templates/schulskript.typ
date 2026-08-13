#set page(
  paper: "a4",
  margin: (
    top: 2.3cm,
    bottom: 2.2cm,
    left: 2.2cm,
    right: 2.2cm,
  ),
  numbering: "1",
  header: context {
    if counter(page).get().first() > 1 [
      #set text(size: 8pt, fill: rgb("#666666"))
      Python | Informatik | Kantonsschule Uster
      #h(1fr)
      Programmieren mit Python
    ]
  },
  footer: context [
    #set text(size: 8pt, fill: rgb("#777777"))
    Kantonsschule Uster
    #h(1fr)
    Seite #counter(page).display()
  ],
)

#set text(
  font: "Arial",
  size: 10.5pt,
)

#set par(
  justify: true,
  leading: 0.65em,
)

#set heading(numbering: none)

#show heading.where(level: 1): it => block(
  above: 1.2em,
  below: 0.6em,
  [
    #text(
      size: 22pt,
      weight: "bold",
      fill: rgb("#16697A"),
      it.body
    )
  ]
)

#show heading.where(level: 2): it => block(
  above: 1em,
  below: 0.4em,
  [
    #text(
      size: 15pt,
      weight: "bold",
      fill: rgb("#16697A"),
      it.body
    )
  ]
)

#show heading.where(level: 3): it => block(
  above: 0.8em,
  below: 0.3em,
  [
    #text(
      size: 12pt,
      weight: "bold",
      it.body
    )
  ]
)

#show raw.where(block: true): it => block(
  fill: rgb("#F4F6F8"),
  stroke: 0.6pt + rgb("#D9DEE3"),
  radius: 4pt,
  inset: 10pt,
  above: 0.6em,
  below: 0.8em,
  it,
)

#show quote: it => block(
  fill: rgb("#EEF7FA"),
  stroke: (
    left: 3pt + rgb("#16697A"),
  ),
  inset: (
    left: 10pt,
    right: 8pt,
    top: 7pt,
    bottom: 7pt,
  ),
  above: 0.7em,
  below: 0.7em,
  it.body,
)

$if(title)$
#align(center)[
  #v(2cm)

  #text(
    size: 28pt,
    weight: "bold",
    fill: rgb("#16697A"),
  )[
    $title$
  ]

  $if(subtitle)$
  #v(0.4cm)
  #text(size: 15pt, fill: rgb("#555555"))[
    $subtitle$
  ]
  $endif$

  #v(1.2cm)

  $if(author)$
  #text(size: 11pt)[
    $for(author)$$author$$sep$, $endfor$
  ]
  $endif$

  $if(date)$
  #v(0.3cm)
  #text(size: 10pt, fill: rgb("#666666"))[
    $date$
  ]
  $endif$

  #v(1.5cm)
]

#pagebreak()
$endif$

$if(toc)$
#outline(
  title: [Inhaltsverzeichnis],
  depth: 3,
)

#pagebreak()
$endif$

$body$