---
title: "Listen"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

# Listen

Wenn ein Programm mehrere Werte verwalten soll, sind einzelne Variablen oft unpraktisch. In diesem Kapitel lernst du Listen kennen und erfährst, wie du ihre Elemente lesen, verändern und mit Schleifen verarbeiten kannst.

## Worum geht es?

Stell dir vor, du möchtest deine Mathematiknoten speichern:

```python
note1 = 4.5
note2 = 5
note3 = 3.5
note4 = 5.5
```

Das funktioniert, wird aber schnell unübersichtlich. Was passiert bei 20 Noten? Und wie berechnet man den Durchschnitt, ohne jede Variable einzeln aufzuschreiben?

Mit einer **Liste** speichern wir alle Noten in einer einzigen Variablen:

```python
noten = [4.5, 5, 3.5, 5.5]
```

## Lernziele

Nach diesem Kapitel kannst du …

- Listen erstellen und über einen **Index** auf einzelne Elemente zugreifen,
- Elemente ändern, hinzufügen und entfernen,
- Listen mit einer `for`-Schleife durchlaufen,
- typische Aufgaben mit Listen lösen: Summe, Durchschnitt, Maximum, Zählen und Filtern,
- Listen mit Verzweigungen, `while`-Schleifen und Funktionen kombinieren.

---

## 1. Listen erstellen

Eine Liste steht in eckigen Klammern. Die **Elemente** werden durch Kommas getrennt:

```python
noten = [4.5, 5, 3.5, 5.5]
namen = ["Mia", "Luca", "Noah", "Elena"]
farben = ["red", "orange", "green"]
leer = []
```

Eine Liste kann Zahlen, Texte oder andere Werte enthalten. Die Liste `leer` enthält noch keine Elemente.

Mit `len()` erhält man die **Länge** einer Liste, also die Anzahl Elemente:

```python
print(len(namen))    # 4
print(len(leer))     # 0
```

## 2. Auf Elemente zugreifen

Jedes Element hat eine Position, den **Index**. Die Zählung beginnt bei **0**:

```python
namen = ["Mia", "Luca", "Noah", "Elena"]
```

| Index | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Element | `"Mia"` | `"Luca"` | `"Noah"` | `"Elena"` |
| negativer Index | -4 | -3 | -2 | -1 |

```python
print(namen[0])     # Mia
print(namen[2])     # Noah
print(namen[-1])    # Elena (das letzte Element)
```

!!! warning "Achtung"
    Der letzte gültige Index ist `len(liste) - 1`. Bei vier Elementen ist das der Index 3. Der Zugriff `namen[4]` führt zu einem `IndexError`.

## 3. Listen verändern

### Ein Element ersetzen

```python
noten = [4.5, 5, 3.5, 5.5]
noten[2] = 4        # die dritte Note wird korrigiert
print(noten)        # [4.5, 5, 4, 5.5]
```

### Elemente hinzufügen

Mit `append()` wird ein Element **am Ende** angehängt:

```python
noten.append(6)
print(noten)        # [4.5, 5, 4, 5.5, 6]
```

### Elemente entfernen

```python
einkauf = ["Brot", "Milch", "Äpfel", "Käse"]

einkauf.remove("Milch")     # entfernt das Element "Milch"
print(einkauf)              # ['Brot', 'Äpfel', 'Käse']

letztes = einkauf.pop()     # entfernt das letzte Element und gibt es zurück
print(letztes)              # Käse
print(einkauf)              # ['Brot', 'Äpfel']
```

### Prüfen, ob ein Element vorkommt

Mit `in` erhält man eine Bedingung, die `True` oder `False` ergibt. Sie lässt sich direkt in einer Verzweigung verwenden:

```python
einkauf = ["Brot", "Äpfel"]
produkt = input("Was brauchst du noch? ")

if produkt in einkauf:
    print(produkt, "steht schon auf der Liste.")
else:
    einkauf.append(produkt)
    print(produkt, "wurde hinzugefügt.")
```

!!! tip "Merke"
    | Anweisung | Wirkung |
    |---|---|
    | `liste[i]` | Element mit Index `i` lesen |
    | `liste[i] = wert` | Element mit Index `i` ersetzen |
    | `liste.append(wert)` | `wert` am Ende anhängen |
    | `liste.remove(wert)` | erstes Vorkommen von `wert` entfernen |
    | `liste.pop()` | letztes Element entfernen und zurückgeben |
    | `wert in liste` | prüfen, ob `wert` vorkommt |
    | `len(liste)` | Anzahl Elemente |

## 4. Listen durchlaufen

### Elemente direkt durchlaufen

Mit einer `for`-Schleife kann man jedes Element einer Liste nacheinander verwenden:

```python
namen = ["Mia", "Luca", "Noah", "Elena"]

for name in namen:
    print("Hallo", name)
```

Die Variable `name` erhält bei jedem Durchlauf das nächste Element der Liste.

### Über den Index durchlaufen

Braucht man auch die Position, verwendet man `range(len(liste))`:

```python
for i in range(len(namen)):
    print(i + 1, namen[i])
```

Ausgabe:

```text
1 Mia
2 Luca
3 Noah
4 Elena
```

!!! tip "Welche Variante?"
    - Werden nur die **Elemente** gebraucht: `for element in liste:`
    - Wird auch der **Index** gebraucht, z. B. um Elemente zu ändern: `for i in range(len(liste)):`

## 5. Typische Aufgaben mit Listen

Viele Probleme mit Listen lassen sich mit demselben Muster lösen: Eine Variable erhält einen **Startwert**, danach wird die Liste durchlaufen und die Variable bei jedem Element angepasst.

### Summe und Durchschnitt

```python
noten = [4.5, 5, 3.5, 5.5, 4]

summe = 0
for note in noten:
    summe = summe + note

durchschnitt = summe / len(noten)
print("Durchschnitt:", durchschnitt)    # 4.5
```

### Zählen mit Bedingung

Wie viele Noten sind ungenügend?

```python
anzahl_ungenuegend = 0

for note in noten:
    if note < 4:
        anzahl_ungenuegend = anzahl_ungenuegend + 1

print("Ungenügende Noten:", anzahl_ungenuegend)    # 1
```

### Das Maximum finden

```python
temperaturen = [12, 17, 15, 21, 19, 14]

hoechste = temperaturen[0]
for temp in temperaturen:
    if temp > hoechste:
        hoechste = temp

print("Höchste Temperatur:", hoechste)    # 21
```

Die Variable `hoechste` startet mit dem ersten Element. Ist ein Element grösser, wird es zum neuen Maximum.

### Filtern: eine neue Liste erstellen

```python
temperaturen = [12, 17, 15, 21, 19, 14]
warme_tage = []

for temp in temperaturen:
    if temp >= 18:
        warme_tage.append(temp)

print(warme_tage)    # [21, 19]
```

!!! info "Genauer betrachtet"
    Python stellt für einige dieser Aufgaben bereits Funktionen zur Verfügung: `sum(liste)`, `max(liste)`, `min(liste)` und `sorted(liste)`. Es lohnt sich trotzdem, die Muster selbst zu programmieren. Nur so kann man sie anpassen, zum Beispiel um nur bestimmte Elemente zu zählen.

## 6. Listen und Funktionen

Listen können als Argument an Funktionen übergeben und als Rückgabewert zurückgegeben werden:

```python
def durchschnitt(zahlen):
    summe = 0
    for zahl in zahlen:
        summe = summe + zahl
    return summe / len(zahlen)


def genuegende(noten):
    ergebnis = []
    for note in noten:
        if note >= 4:
            ergebnis.append(note)
    return ergebnis


meine_noten = [4.5, 3, 5, 3.5, 6]
print(durchschnitt(meine_noten))                # 4.4
print(genuegende(meine_noten))                  # [4.5, 5, 6]
print(durchschnitt(genuegende(meine_noten)))    # 5.166...
```

## 7. Listen und while

Mit einer `while`-Schleife kann man eine Liste füllen, ohne vorher zu wissen, wie viele Elemente es werden:

```python
einkauf = []
eingabe = input("Produkt (leer lassen zum Beenden): ")

while eingabe != "":
    if eingabe in einkauf:
        print("Steht schon auf der Liste.")
    else:
        einkauf.append(eingabe)
    eingabe = input("Produkt (leer lassen zum Beenden): ")

print("Deine Einkaufsliste:", einkauf)
print("Anzahl Produkte:", len(einkauf))
```

## 8. Listen und Turtle

Listen eignen sich gut, um Zeichnungen zu steuern:

```python
import turtle

t = turtle.Turtle()

farben = ["red", "orange", "yellow", "green", "blue", "purple"]

for farbe in farben:
    t.pencolor(farbe)
    t.forward(100)
    t.left(60)
```

Die Turtle zeichnet ein Sechseck, jede Seite in einer anderen Farbe.

### Ein Balkendiagramm

```python
werte = [3, 7, 5, 9, 2]

for wert in werte:
    if wert >= 5:
        t.fillcolor("green")
    else:
        t.fillcolor("red")

    t.begin_fill()
    for i in range(2):
        t.forward(30)
        t.left(90)
        t.forward(wert * 20)
        t.left(90)
    t.end_fill()

    t.forward(40)
```

Jeder Wert wird zu einem Balken. Werte ab 5 werden grün, kleinere Werte rot.

---

## 9. Übungen: Listen

### Aufgabe 1: Index verstehen

```python
tiere = ["Hund", "Katze", "Maus", "Pferd", "Igel"]
```

a) Was ergeben `tiere[1]`, `tiere[-1]` und `tiere[len(tiere) - 2]`?  
b) Weshalb führt `tiere[5]` zu einem Fehler?  
c) Ersetze `"Maus"` durch `"Hamster"`.  
d) Füge `"Fisch"` am Ende hinzu und entferne `"Hund"`. Wie sieht die Liste danach aus?

### Aufgabe 2: Programmablauf nachvollziehen

```python
zahlen = [3, 8, 2, 7, 5]
ergebnis = 0

for z in zahlen:
    if z > 4:
        ergebnis = ergebnis + z
    else:
        ergebnis = ergebnis - z

print(ergebnis)
```

a) Erstelle eine Ablauftabelle mit `z` und `ergebnis`.  
b) Was wird ausgegeben?  
c) Beschreibe in einem Satz, was das Programm berechnet.

### Aufgabe 3: Notenauswertung

Gegeben ist `noten = [4.5, 3.5, 5, 6, 2.5, 4, 5.5]`.

a) Berechne den Durchschnitt.  
b) Bestimme die beste und die schlechteste Note, ohne `max()` und `min()` zu verwenden.  
c) Zähle, wie viele Noten genügend (mindestens 4) sind.  
d) Gib am Ende eine Bewertung aus: Durchschnitt ab 5 `"Sehr gut"`, ab 4 `"Bestanden"`, sonst `"Nicht bestanden"`.

### Aufgabe 4: Funktionen für Listen

Schreibe die folgenden Funktionen mit Rückgabewert und teste jede mit mindestens zwei Listen:

a) `anzahl_groesser(zahlen, grenze)` gibt zurück, wie viele Zahlen grösser als `grenze` sind.  
b) `nur_gerade(zahlen)` gibt eine neue Liste mit allen geraden Zahlen zurück.  
c) `position_maximum(zahlen)` gibt den **Index** des grössten Elements zurück.  
d) `umkehren(liste)` gibt eine neue Liste mit den Elementen in umgekehrter Reihenfolge zurück.

### Aufgabe 5: Klassenliste mit while

a) Lies so lange Namen ein, bis eine leere Eingabe erfolgt. Speichere sie in einer Liste.  
b) Doppelte Namen sollen nicht gespeichert werden. Gib stattdessen eine Meldung aus.  
c) Gib am Ende alle Namen nummeriert aus: `1. Mia`, `2. Luca`, …  
d) Gib aus, wie viele Namen mit dem Buchstaben `"L"` beginnen. Tipp: `name[0]` ist der erste Buchstabe eines Textes.

### Aufgabe 6: Würfelstatistik

Mit `random.randint(1, 6)` wird ein Würfel simuliert.

a) Würfle 100-mal und speichere alle Ergebnisse in einer Liste.  
b) Erstelle eine Liste `haeufigkeit = [0, 0, 0, 0, 0, 0]`. Durchlaufe die Würfe und erhöhe jeweils den passenden Zähler. Bei einer 1 wird `haeufigkeit[0]` erhöht, bei einer 6 `haeufigkeit[5]`.  
c) Gib aus, welche Augenzahl am häufigsten vorkam.  
d) Wiederhole das Experiment mit 10 000 Würfen. Was beobachtest du?

### Aufgabe 7: Turtle-Balkendiagramm

Erweitere das Balkendiagramm aus Abschnitt 8:

a) Schreibe eine Funktion `balken(hoehe, farbe)`, die einen einzelnen Balken zeichnet.  
b) Schreibe eine Funktion `diagramm(werte)`, die für jeden Wert einen Balken zeichnet.  
c) Der höchste Balken soll gold gefärbt werden, alle anderen grau. Bestimme dazu zuerst das Maximum der Liste.  
d) Teste mit den Temperaturen einer Woche: `[12, 17, 15, 21, 19, 14, 16]`.

### Aufgabe 8: Fehler finden

```python
zahlen = [4, 7, 1, 9]
summe = 0

for i in range(len(zahlen) + 1):
    summe = summe + zahlen[i]

zahlen.append[10]
print("Summe:", summe)
print("Letzte Zahl:", zahlen[4])
```

a) Finde die Fehler und erkläre, welche Fehlermeldung jeweils entsteht.  
b) Korrigiere das Programm.

---

## Typische Fehler

### Fehler 1: Index ausserhalb der Liste

```python
zahlen = [4, 7, 1]
print(zahlen[3])    # IndexError
```

Die Liste hat drei Elemente mit den Indizes 0, 1 und 2.

### Fehler 2: Zählung beginnt bei 1

```python
namen = ["Mia", "Luca", "Noah"]
print(namen[1])    # Luca, nicht Mia!
```

Das erste Element hat den Index 0.

### Fehler 3: append mit eckigen Klammern

```python
liste.append[5]    # Fehler
liste.append(5)    # korrekt
```

`append` ist eine Funktion und wird mit runden Klammern aufgerufen.

### Fehler 4: Startwert in der Schleife

```python
for note in noten:
    summe = 0
    summe = summe + note
```

`summe` wird bei jedem Durchlauf wieder auf 0 gesetzt. Der Startwert gehört **vor** die Schleife.

### Fehler 5: Ergebnis von append zuweisen

```python
noten = noten.append(5)
print(noten)    # None
```

`append()` verändert die Liste direkt und gibt nichts zurück. Korrekt ist nur `noten.append(5)`.

---

## Zusammenfassung

!!! summary "Das Wichtigste in Kürze"
    - Eine **Liste** speichert mehrere Werte in einer Variablen: `noten = [4.5, 5, 3.5]`.
    - Der **Index** beginnt bei 0. `liste[-1]` ist das letzte Element.
    - `len(liste)` gibt die Anzahl Elemente zurück.
    - Listen sind veränderbar: `liste[i] = wert`, `append()`, `remove()`, `pop()`.
    - Mit `in` prüft man, ob ein Wert in der Liste vorkommt.
    - Mit `for element in liste:` durchläuft man alle Elemente.
    - Summe, Zählen, Maximum und Filtern folgen dem Muster: **Startwert vor der Schleife, Anpassung in der Schleife**.
    - Listen können an Funktionen übergeben und von Funktionen zurückgegeben werden.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| Liste | Geordnete, veränderbare Sammlung von Werten |
| Element | Einzelner Wert in einer Liste |
| Index | Position eines Elements, beginnend bei 0 |
| `len()` | Funktion, welche die Anzahl Elemente zurückgibt |
| `append()` | Hängt ein Element am Ende der Liste an |
| `IndexError` | Fehler beim Zugriff auf einen Index, den es nicht gibt |
