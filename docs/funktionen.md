---
title: "Flussdiagramme"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

Funktionen mit Parametern

Die Funktion `quadrat()` zeichnet immer ein Quadrat mit der Seitenlänge 50:

```python
def quadrat():
    for i in range(4):
        t.forward(50)
        t.left(90)
```

Möchten wir verschieden grosse Quadrate zeichnen, könnten wir mehrere fast gleiche Funktionen schreiben. Das wäre jedoch unnötig:

```python
def kleines_quadrat():
    # ...


def grosses_quadrat():
    # ...
```

Besser ist eine einzige Funktion, der wir die gewünschte Seitenlänge beim Aufruf mitteilen.

```python
def quadrat(seitenlaenge):
    for i in range(4):
        t.forward(seitenlaenge)
        t.left(90)
```

Die Variable `seitenlaenge` in der Funktionsdefinition heisst **Parameter**.

### Parameter und Argument

```python
def quadrat(seitenlaenge):
    #           ^ Parameter
    for i in range(4):
        t.forward(seitenlaenge)
        t.left(90)


quadrat(60)
#       ^ Argument
```

- Ein **Parameter** ist ein Platzhalter in der Funktionsdefinition.
- Ein **Argument** ist der konkrete Wert, der beim Funktionsaufruf übergeben wird.

Beim Aufruf `quadrat(60)` erhält der Parameter `seitenlaenge` den Wert `60`.

```python
quadrat(60)    # zeichnet ein Quadrat mit Seitenlänge 60
quadrat(100)   # zeichnet ein Quadrat mit Seitenlänge 100
```

!!! tip "Merke"
    Parameter machen eine Funktion flexibel. Derselbe Programmcode kann mit verschiedenen Werten verwendet werden.

### Was geschieht beim Aufruf?

Beim Aufruf

```python
quadrat(60)
```

geschieht Folgendes:

1. Der Wert `60` wird an die Funktion übergeben.
2. Der Parameter `seitenlaenge` erhält für diesen Aufruf den Wert `60`.
3. Die Funktion verwendet den Wert im Funktionskörper.
4. Nach dem Funktionsaufruf ist der lokale Parameter `seitenlaenge` ausserhalb der Funktion nicht verfügbar.

Der nächste Aufruf kann einen anderen Wert verwenden:

```python
quadrat(100)
```

Nun hat `seitenlaenge` während dieses Aufrufs den Wert `100`.

### Mehrere Parameter

Eine Funktion kann mehrere Parameter besitzen. Sie werden in den runden Klammern durch Kommas getrennt:

```python
def rechteck(breite, hoehe):
    for i in range(2):
        t.forward(breite)
        t.left(90)
        t.forward(hoehe)
        t.left(90)
```

Beim Aufruf muss für jeden Parameter ein Argument angegeben werden:

```python
rechteck(100, 50)
```

Die Zuordnung erfolgt von links nach rechts:

| Parameter | Argument |
|---|---:|
| `breite` | `100` |
| `hoehe` | `50` |

Die Reihenfolge ist deshalb wichtig:

```python
rechteck(100, 50)
rechteck(50, 100)
```

Diese beiden Aufrufe verwenden vertauschte Werte für Breite und Höhe.

### Parameter für Farbe und Stiftdicke

Parameter können nicht nur Zahlen, sondern auch andere Werte erhalten:

```python
def quadrat(seite, farbe, dicke):
    t.pencolor(farbe)
    t.width(dicke)

    for i in range(4):
        t.forward(seite)
        t.left(90)
```

Aufruf:

```python
quadrat(50, "red", 4)
```

Die Argumente werden von links nach rechts zugeordnet:

| Parameter | Argument |
|---|---|
| `seite` | `50` |
| `farbe` | `"red"` |
| `dicke` | `4` |

!!! warning "Anzahl und Reihenfolge"
    Beim Aufruf müssen Anzahl und Reihenfolge der Argumente zur Funktionsdefinition passen.

---

## Übungen: Funktionen mit Parametern

### Aufgabe 1: Parameter und Argument erkennen

```python
def quadrat(seite):
    for i in range(4):
        t.forward(seite)
        t.left(90)


quadrat(50)
```

a) Wie heisst der Parameter?  
b) Welches Argument wird beim Aufruf übergeben?  
c) Wo wird der Wert innerhalb der Funktion verwendet?  
d) Was müsste geändert werden, damit ein Quadrat mit Seitenlänge 80 entsteht?

### Aufgabe 2: Verschiedene Aufrufe

Gegeben ist:

```python
def linie(laenge):
    t.forward(laenge)
```

Schreibe drei Funktionsaufrufe, die eine kurze, eine mittlere und eine lange Linie zeichnen.

### Aufgabe 3: Zuordnung verstehen

```python
def bewegung(laenge, winkel):
    t.forward(laenge)
    t.left(winkel)


bewegung(100, 90)
```

a) Welchen Wert erhält `laenge`?  
b) Welchen Wert erhält `winkel`?  
c) Was macht die Turtle zuerst?  
d) Was geschieht bei `bewegung(90, 100)`?

### Aufgabe 4: Fehler finden

```python
def quadrat(seite, farbe):
    t.pencolor(farbe)
    for i in range(4):
        t.forward(seite)
        t.left(90)


quadrat(50)
```

a) Weshalb führt der Aufruf zu einem Fehler?  
b) Korrigiere den Aufruf.  
c) Formuliere die Fehlermeldung in eigenen Worten.

### Aufgabe 5: Argumente vertauscht

```python
def linie(laenge, farbe, dicke):
    t.pencolor(farbe)
    t.width(dicke)
    t.forward(laenge)


linie(80, 5, "blue")
```

a) Welche Argumente wurden vertauscht?  
b) Schreibe den korrekten Aufruf.  
c) Weshalb kann Python nicht selbst erkennen, welche Reihenfolge gemeint war?

### Aufgabe 6: Eine Funktion erweitern

Gegeben ist:

```python
def dreieck(seite):
    for i in range(3):
        t.forward(seite)
        t.left(120)
```

Erweitere die Funktion um die Parameter `farbe` und `dicke`. Teste sie mit mindestens zwei unterschiedlichen Aufrufen.

### Aufgabe 7: Rechteck programmieren

Definiere eine Funktion

```python
rechteck(breite, hoehe)
```

die ein vollständiges Rechteck zeichnet. Teste die Funktion mit folgenden Aufrufen:

```python
rechteck(100, 50)
rechteck(40, 90)
```

### Aufgabe 8: Quadratreihe

Definiere eine Funktion `quadrat(seite)`. Zeichne danach mithilfe mehrerer Funktionsaufrufe Quadrate mit den Seitenlängen 20, 40, 60 und 80.

Überlege, wie die Turtle zwischen den Quadraten verschoben werden muss, damit sie sich nicht überdecken.

### Aufgabe 9: Muster aus Funktionen

Definiere zuerst:

```python
def quadrat(seite):
    # dein Code
```

Definiere danach eine zweite Funktion:

```python
def quadratmuster(seite, anzahl):
    # dein Code
```

Die Funktion `quadratmuster()` soll mehrere Quadrate zeichnen und die Turtle nach jedem Quadrat etwas drehen.

Teste zum Beispiel:

```python
quadratmuster(60, 12)
```

### Aufgabe 10: Transfer – Haus mit Parametern

Entwickle eine Funktion

```python
def haus(groesse):
```

die ein Haus zeichnet. Das Haus soll mindestens aus einem Quadrat und einem dreieckigen Dach bestehen. Verwende innerhalb von `haus()` kleinere Funktionen mit Parametern.

Mögliche Struktur:

```python
def quadrat(seite):
    # ...


def dreieck(seite):
    # ...


def haus(groesse):
    # quadrat(...) und dreieck(...) aufrufen
```

!!! question "Denkfrage"
    Warum ist es für diese Aufgabe besser, `quadrat(seite)` und `dreieck(seite)` zu programmieren, statt die Seitenlängen direkt als feste Zahlen in die Funktionen zu schreiben?

---

## Typische Fehler

### Fehler 1: Doppelpunkt vergessen

```python
def quadrat()
    # Doppelpunkt fehlt
```

Korrekt:

```python
def quadrat():
    # ...
```

### Fehler 2: Funktionskörper nicht eingerückt

```python
def quadrat():
t.forward(50)
```

Korrekt:

```python
def quadrat():
    t.forward(50)
```

### Fehler 3: Klammern beim Aufruf vergessen

```python
quadrat
```

Korrekt:

```python
quadrat()
```

### Fehler 4: Falsche Anzahl Argumente

```python
def rechteck(breite, hoehe):
    # ...


rechteck(80)
```

Die Funktion erwartet zwei Argumente, beim Aufruf wird aber nur eines angegeben.

### Fehler 5: Funktion zu spät definiert

```python
quadrat()


def quadrat():
    # ...
```

Wenn Python den Aufruf erreicht, kennt es die Funktion noch nicht. Die Definition muss vor dem Aufruf ausgeführt werden.

### Fehler 6: Funktion nur definiert, aber nicht aufgerufen

```python
def quadrat():
    for i in range(4):
        t.forward(50)
        t.left(90)
```

Dieses Programm merkt sich die Funktion, zeichnet aber noch nichts. Es fehlt der Aufruf:

```python
quadrat()
```

---

## Zusammenfassung

!!! summary "Das Wichtigste in Kürze"
    - Eine **Funktion** ist ein benannter Programmbaustein.
    - Mit `def` wird eine Funktion **definiert**.
    - Mit `funktionsname()` wird eine Funktion **aufgerufen**.
    - Die Anweisungen im Funktionskörper müssen eingerückt sein.
    - Funktionen ohne Parameter führen bei jedem Aufruf dieselben Anweisungen aus.
    - **Parameter** sind Platzhalter in der Funktionsdefinition.
    - **Argumente** sind konkrete Werte im Funktionsaufruf.
    - Parameter machen Funktionen flexibel und wiederverwendbar.
    - Beim modularen Entwurf wird eine grosse Aufgabe in kleinere Funktionen zerlegt.
    - Die hier verwendeten Funktionen führen Tätigkeiten aus und besitzen keinen für uns wichtigen Rückgabewert.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| Funktion | Benannter Programmbaustein, der eine bestimmte Aufgabe ausführt |
| Funktionsdefinition | Festlegung des Namens, der Parameter und des Funktionskörpers mit `def` |
| Funktionsaufruf | Ausführung einer Funktion durch ihren Namen und runde Klammern |
| Funktionskörper | Eingerückte Anweisungen innerhalb einer Funktion |
| Parameter | Platzhalter in der Funktionsdefinition |
| Argument | Konkreter Wert, der beim Aufruf übergeben wird |
| Rückgabewert | Ergebnis, das eine Funktion an die aufrufende Stelle zurückgibt |
| Modularer Entwurf | Zerlegung eines Programms in kleinere, verständliche Funktionen |
