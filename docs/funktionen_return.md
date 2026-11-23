---
title: "Funktionen mit Rückgabewert"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

# Funktionen mit Rückgabewert

Eine Funktion kann nicht nur Anweisungen ausführen, sondern auch ein Ergebnis liefern. Du lernst, wie du mit `return` Werte zurückgibst und diese in anderen Teilen deines Programms weiterverwendest.

## Worum geht es?

Bisher haben unsere Funktionen eine **Tätigkeit** ausgeführt: Sie haben die Turtle bewegt oder etwas gezeichnet. Viele Funktionen haben aber eine andere Aufgabe: Sie **berechnen** etwas und geben das Ergebnis zurück.

Du lernst,

- wie eine Funktion mit `return` ein Ergebnis zurückgibt,
- wie du den Rückgabewert speichern und weiterverwenden kannst,
- worin der Unterschied zwischen `print()` und `return` besteht,
- wie Funktionen mit Rückgabewert und Turtle-Funktionen zusammenarbeiten.

## Lernziele

Nach diesem Kapitel kannst du …

- erklären, was ein **Rückgabewert** ist,
- Funktionen mit `return` definieren und aufrufen,
- den Rückgabewert einer Funktion in einer Variablen speichern,
- Rückgabewerte in Berechnungen und weiteren Funktionsaufrufen verwenden,
- den Unterschied zwischen `print()` und `return` erklären,
- typische Fehler bei Funktionen mit Rückgabewert erkennen und korrigieren.

---

## 1. Von der Tätigkeit zum Ergebnis

Die folgende Funktion zeichnet ein Quadrat. Sie führt eine Tätigkeit aus:

```python
def quadrat(seite):
    for i in range(4):
        t.forward(seite)
        t.left(90)
```

Die nächste Funktion zeichnet nichts. Sie berechnet den Flächeninhalt eines Quadrats und gibt das Ergebnis zurück:

```python
def flaeche_quadrat(seite):
    return seite * seite
```

Das Schlüsselwort `return` bedeutet: **Gib diesen Wert an die Stelle zurück, an der die Funktion aufgerufen wurde.**

```python
flaeche = flaeche_quadrat(5)
print(flaeche)
```

Ausgabe:

```text
25
```

Der Aufruf `flaeche_quadrat(5)` wird durch das Ergebnis `25` ersetzt. Dieser Wert wird in der Variablen `flaeche` gespeichert.

!!! note "Vergleich"
    | Funktion ohne Rückgabewert | Funktion mit Rückgabewert |
    |---|---|
    | führt eine Tätigkeit aus | berechnet ein Ergebnis |
    | z. B. `quadrat(50)` zeichnet | z. B. `flaeche_quadrat(5)` liefert `25` |
    | kein `return` mit Ergebnis | `return ergebnis` |
    | Aufruf steht meist allein auf einer Zeile | Ergebnis wird gespeichert oder weiterverwendet |

## 2. Die return-Anweisung

### Aufbau einer Funktion mit Rückgabewert

```python
def funktionsname(parameter):
    anweisungen
    return ergebnis
```

Ein Beispiel mit zwei Parametern:

```python
def flaeche_rechteck(breite, hoehe):
    ergebnis = breite * hoehe
    return ergebnis
```

Die Funktion

1. erhält die Werte für `breite` und `hoehe`,
2. berechnet das Produkt und speichert es in der lokalen Variablen `ergebnis`,
3. gibt den Wert von `ergebnis` mit `return` zurück.

Man kann die Berechnung auch direkt hinter `return` schreiben:

```python
def flaeche_rechteck(breite, hoehe):
    return breite * hoehe
```

### Was geschieht beim Aufruf?

```python
def verdoppeln(zahl):
    return 2 * zahl


x = verdoppeln(7)
print(x)
```

Der Interpreter arbeitet dieses Programm in folgender Reihenfolge ab:

1. Python liest die Definition von `verdoppeln()` und merkt sich die Funktion.
2. Beim Aufruf `verdoppeln(7)` erhält der Parameter `zahl` den Wert `7`.
3. Die Funktion berechnet `2 * 7` und gibt `14` zurück.
4. Der Aufruf `verdoppeln(7)` wird durch den Wert `14` ersetzt.
5. Die Variable `x` erhält den Wert `14`.
6. `print(x)` gibt `14` aus.

!!! tip "Merke"
    Ein Funktionsaufruf mit Rückgabewert verhält sich wie ein Wert. Man kann ihn überall dort einsetzen, wo auch eine Zahl oder ein Text stehen könnte.

### return beendet die Funktion

Sobald Python eine `return`-Anweisung erreicht, wird die Funktion sofort verlassen. Anweisungen danach werden nicht mehr ausgeführt:

```python
def test():
    return 5
    print("Wird nie ausgegeben")
```

!!! warning "Achtung"
    Schreibe `return` deshalb normalerweise als letzte Anweisung in die Funktion.

## 3. Rückgabewerte weiterverwenden

### In einer Variablen speichern

```python
def umfang_quadrat(seite):
    return 4 * seite


u = umfang_quadrat(12)
print("Der Umfang beträgt", u)
```

Ausgabe:

```text
Der Umfang beträgt 48
```

### Direkt in einer Berechnung verwenden

```python
gesamt = flaeche_quadrat(3) + flaeche_quadrat(4)
print(gesamt)
```

Python berechnet zuerst beide Funktionsaufrufe: `9 + 16`. Die Variable `gesamt` erhält den Wert `25`.

### Als Argument einer anderen Funktion

Der Rückgabewert einer Funktion kann direkt an eine andere Funktion übergeben werden:

```python
print(verdoppeln(verdoppeln(3)))
```

Python arbeitet von innen nach aussen:

1. `verdoppeln(3)` ergibt `6`.
2. `verdoppeln(6)` ergibt `12`.
3. `print(12)` gibt `12` aus.

### Funktionen mit Rückgabewert in anderen Funktionen

Auch Funktionen mit Rückgabewert lassen sich als Bausteine zusammensetzen:

```python
def flaeche_rechteck(breite, hoehe):
    return breite * hoehe


def volumen_quader(laenge, breite, hoehe):
    grundflaeche = flaeche_rechteck(laenge, breite)
    return grundflaeche * hoehe


print(volumen_quader(2, 3, 4))
```

Ausgabe:

```text
24
```

Die Funktion `volumen_quader()` verwendet den kleineren Baustein `flaeche_rechteck()`. Das ist wieder **modularer Programmentwurf**.

## 4. print() oder return?

Die folgenden beiden Funktionen sehen ähnlich aus, verhalten sich aber unterschiedlich:

```python
def summe_print(a, b):
    print(a + b)


def summe_return(a, b):
    return a + b
```

- `summe_print(3, 4)` **zeigt** das Ergebnis `7` auf dem Bildschirm an. Das Programm kann mit dem Ergebnis aber nicht weiterrechnen.
- `summe_return(3, 4)` **gibt** das Ergebnis `7` an das Programm zurück. Das Programm kann damit weiterrechnen.

```python
x = summe_return(3, 4)
print(x * 10)    # 70


y = summe_print(3, 4)    # gibt 7 aus
print(y * 10)            # Fehler!
```

Die Funktion `summe_print()` hat kein `return`. Sie gibt deshalb automatisch den speziellen Wert `None` zurück. Mit `None` kann Python nicht rechnen, und es entsteht ein Fehler.

!!! tip "Merke"
    - `print()` ist für den **Menschen**: Ein Wert wird auf dem Bildschirm angezeigt.
    - `return` ist für das **Programm**: Ein Wert wird zurückgegeben und kann weiterverwendet werden.

## 5. Rückgabewerte und Turtle

Funktionen mit Rückgabewert und Turtle-Funktionen ergänzen sich gut. Eine Funktion berechnet einen Wert, eine andere zeichnet damit.

Für ein regelmässiges Vieleck muss sich die Turtle an jeder Ecke um `360 / ecken` Grad drehen:

```python
import turtle

t = turtle.Turtle()


def drehwinkel(ecken):
    return 360 / ecken


def vieleck(ecken, seite):
    winkel = drehwinkel(ecken)
    for i in range(ecken):
        t.forward(seite)
        t.left(winkel)


vieleck(3, 100)
vieleck(6, 60)
```

- `drehwinkel()` **berechnet** den Winkel und gibt ihn zurück.
- `vieleck()` **zeichnet** das Vieleck und verwendet dazu den berechneten Winkel.

!!! info "Genauer betrachtet"
    Der Operator `/` liefert immer eine Kommazahl. `drehwinkel(6)` gibt deshalb `60.0` zurück. Die Turtle kann mit Kommazahlen problemlos umgehen.

### Lokale Variablen

Variablen, die innerhalb einer Funktion entstehen, gibt es nur während des Funktionsaufrufs. Sie heissen **lokale Variablen**.

```python
def flaeche_rechteck(breite, hoehe):
    ergebnis = breite * hoehe
    return ergebnis


flaeche_rechteck(4, 5)
print(ergebnis)    # Fehler: ergebnis ist hier nicht bekannt
```

Damit das Hauptprogramm das Ergebnis kennt, muss es den Rückgabewert speichern:

```python
ergebnis = flaeche_rechteck(4, 5)
print(ergebnis)    # 20
```

---

## 6. Übungen: Funktionen mit Rückgabewert

### Aufgabe 1: Rückgabewerte vorhersagen

```python
def dreifach(x):
    return 3 * x


a = dreifach(4)
b = dreifach(a)
print(a, b)
```

a) Welchen Wert erhält `a`?  
b) Welchen Wert erhält `b`?  
c) Was gibt das Programm aus?

### Aufgabe 2: Eine Funktion ergänzen

Die folgende Funktion soll den Umfang eines Rechtecks berechnen:

```python
def umfang_rechteck(breite, hoehe):
    ergebnis = 2 * breite + 2 * hoehe
```

a) Teste die Funktion mit `print(umfang_rechteck(3, 5))`. Was wird ausgegeben?  
b) Welche Anweisung fehlt?  
c) Ergänze die Funktion und teste sie erneut.

### Aufgabe 3: print oder return?

```python
def quadratzahl_a(n):
    print(n * n)


def quadratzahl_b(n):
    return n * n
```

a) Was geschieht bei `quadratzahl_a(5)` und bei `quadratzahl_b(5)`, wenn die Aufrufe allein auf einer Zeile stehen?  
b) Welche der beiden Funktionen kann man in `summe = quadratzahl_?(3) + quadratzahl_?(4)` verwenden? Begründe.  
c) Erkläre den Unterschied zwischen `print()` und `return` in eigenen Worten.

### Aufgabe 4: Eigene Rechenfunktionen

Definiere die folgenden Funktionen und teste jede mit mindestens zwei Aufrufen:

a) `mittelwert(a, b)` gibt den Durchschnitt von zwei Zahlen zurück.  
b) `celsius_zu_fahrenheit(c)` rechnet eine Temperatur um. Formel: `f = c * 1.8 + 32`  
c) `sekunden(stunden, minuten)` gibt zurück, wie viele Sekunden die angegebene Zeit dauert.

### Aufgabe 5: Programmablauf nachvollziehen

```python
def plus_eins(x):
    return x + 1


def mal_zwei(x):
    return 2 * x


print(mal_zwei(plus_eins(3)))
print(plus_eins(mal_zwei(3)))
```

a) Notiere für beide Zeilen, in welcher Reihenfolge die Funktionen ausgeführt werden.  
b) Was wird ausgegeben?  
c) Weshalb unterscheiden sich die beiden Ergebnisse?

### Aufgabe 6: Bausteine kombinieren

Ein Zimmer ist 5 m lang, 4 m breit und 2.5 m hoch.

a) Definiere eine Funktion `flaeche_rechteck(breite, hoehe)`.  
b) Definiere eine Funktion `wandflaeche(laenge, breite, hoehe)`, welche die Fläche aller vier Wände zurückgibt. Verwende dazu `flaeche_rechteck()`.  
c) Ein Liter Farbe reicht für 8 m². Definiere eine Funktion `farbmenge(flaeche)`, die zurückgibt, wie viele Liter Farbe benötigt werden.  
d) Berechne mit deinen Funktionen, wie viele Liter Farbe für die Wände des Zimmers nötig sind.

### Aufgabe 7: Rechnen und zeichnen

a) Definiere eine Funktion `drehwinkel(ecken)`, die den Drehwinkel für ein regelmässiges Vieleck zurückgibt.  
b) Definiere eine Funktion `seitenlaenge(umfang, ecken)`, die zurückgibt, wie lang eine Seite sein muss, damit das Vieleck den gewünschten Umfang hat.  
c) Definiere eine Funktion `vieleck(ecken, umfang)`, die beide Funktionen verwendet und das Vieleck zeichnet.  
d) Zeichne mit einer Schleife ein Dreieck, ein Viereck, ein Fünfeck usw. bis zum Zehneck, alle mit dem Umfang 300. Was fällt dir auf?

!!! question "Denkfrage"
    Weshalb ist es sinnvoll, `drehwinkel()` und `seitenlaenge()` als eigene Funktionen mit Rückgabewert zu schreiben, statt alles direkt in `vieleck()` zu berechnen?

### Aufgabe 8: Fehlersuche

Das folgende Programm soll den Durchschnitt von drei Noten berechnen und um 0.5 erhöht ausgeben. Es enthält mehrere Fehler.

```python
def summe(a, b, c)
    ergebnis = a + b + c


def durchschnitt(a, b, c):
    print(summe(a, b, c) / 3)


schnitt = durchschnitt(4.5, 5, 5.5)
print(schnitt + 0.5)
```

a) Finde alle Fehler und beschreibe sie.  
b) Korrigiere das Programm so, dass `5.5` ausgegeben wird.

### Aufgabe 9: Summen mit einer Schleife

Eine Funktion mit Rückgabewert kann im Funktionskörper auch eine Schleife enthalten:

```python
def summe_bis(n):
    summe = 0
    for i in range(1, n + 1):
        summe = summe + i
    return summe
```

a) Gehe die Funktion für `summe_bis(4)` Schritt für Schritt durch. Notiere nach jedem Durchlauf den Wert von `summe`.  
b) Weshalb steht `return` nicht in der Schleife, sondern danach? Was würde passieren, wenn `return summe` eingerückt in der Schleife stünde?  
c) Der junge Carl Friedrich Gauss soll gezeigt haben, dass die Summe der Zahlen von 1 bis `n` gleich `n * (n + 1) / 2` ist. Definiere eine Funktion `gauss(n)` mit dieser Formel und vergleiche die Ergebnisse beider Funktionen für `n = 10`, `100` und `1000`.  
d) Definiere eine Funktion `summe_quadratzahlen(n)`, die `1*1 + 2*2 + ... + n*n` zurückgibt.

### Aufgabe 10: Zinseszins

Ein Kapital wird jedes Jahr um einen bestimmten Prozentsatz verzinst. Die Zinsen werden jeweils zum Kapital dazugezählt.

a) Definiere eine Funktion `nach_einem_jahr(kapital, zins)`, die das Kapital nach einem Jahr zurückgibt. Beispiel: `nach_einem_jahr(1000, 2)` ergibt `1020.0`.  
b) Definiere eine Funktion `nach_jahren(kapital, zins, jahre)`, die mit einer Schleife und `nach_einem_jahr()` das Kapital nach mehreren Jahren berechnet.  
c) Wie viel Geld hat man nach 10, 20 und 50 Jahren, wenn man 1000 Franken zu 3 % anlegt? Runde mit `round(wert, 2)` auf Rappen.  
d) Weshalb ist es hier wichtig, dass `nach_einem_jahr()` einen Rückgabewert hat und nicht nur `print()` verwendet?

### Aufgabe 11: Die Fläche eines Quartiers

Im Kapitel „Funktionen ohne Rückgabewert“ hast du ein Quartier aus Häusern gezeichnet. Nun berechnest du, wie viel Fläche die Häuser von vorne gesehen bedecken. Ein Haus besteht aus einem Quadrat und einem gleichseitigen Dreieck mit derselben Seitenlänge.

```text
flaeche_quartier(strassen, haeuser, seite)
└── flaeche_strasse(haeuser, seite)
    └── flaeche_haus(seite)
        ├── flaeche_quadrat(seite)
        └── flaeche_dreieck(seite)
```

a) Definiere `flaeche_quadrat(seite)`.  
b) Definiere `flaeche_dreieck(seite)`. Die Fläche eines gleichseitigen Dreiecks ist `seite * seite * 3 ** 0.5 / 4`.  
c) Definiere die übrigen Funktionen gemäss Bausteinplan. Jede Funktion soll nur den Baustein direkt darunter verwenden.  
d) Berechne die Fläche des Quartiers mit 4 Strassen, 5 Häusern pro Strasse und Seitenlänge 50.  
e) Vergleiche den Bausteinplan mit dem Bausteinplan des gezeichneten Quartiers. Was ist gleich, was ist anders?

!!! question "Denkfrage"
    Beim gezeichneten Quartier rufen die Funktionen ihre Bausteine nur auf. Beim berechneten Quartier müssen sie zusätzlich etwas mit den Rückgabewerten machen. Was genau?

---

## Typische Fehler

### Fehler 1: return vergessen

```python
def verdoppeln(zahl):
    ergebnis = 2 * zahl


print(verdoppeln(5))    # None
```

Die Funktion berechnet das Ergebnis, gibt es aber nicht zurück. Korrekt:

```python
def verdoppeln(zahl):
    ergebnis = 2 * zahl
    return ergebnis
```

### Fehler 2: print statt return

```python
def verdoppeln(zahl):
    print(2 * zahl)


x = verdoppeln(5) + 1    # Fehler
```

Die Funktion zeigt das Ergebnis nur an. Damit weitergerechnet werden kann, braucht es `return`.

### Fehler 3: Rückgabewert nicht verwendet

```python
verdoppeln(5)
```

Die Funktion gibt `10` zurück, aber das Programm macht nichts damit. Der Wert geht verloren. Korrekt:

```python
x = verdoppeln(5)
print(x)
```

### Fehler 4: Anweisungen nach return

```python
def flaeche_quadrat(seite):
    return seite * seite
    print("Fläche berechnet")
```

Nach `return` wird die Funktion verlassen. Die Ausgabe erscheint nie.

### Fehler 5: Lokale Variable ausserhalb verwenden

```python
def flaeche_quadrat(seite):
    ergebnis = seite * seite
    return ergebnis


flaeche_quadrat(4)
print(ergebnis)    # Fehler
```

Die Variable `ergebnis` gibt es nur innerhalb der Funktion. Der Rückgabewert muss im Hauptprogramm gespeichert werden: `ergebnis = flaeche_quadrat(4)`.

---

## Zusammenfassung

!!! summary "Das Wichtigste in Kürze"
    - Eine Funktion mit Rückgabewert **berechnet ein Ergebnis** und gibt es mit `return` zurück.
    - Der Funktionsaufruf wird durch den **Rückgabewert** ersetzt.
    - Den Rückgabewert kann man speichern, in Berechnungen verwenden oder an andere Funktionen übergeben.
    - `return` beendet die Funktion sofort.
    - `print()` zeigt einen Wert an, `return` gibt einen Wert an das Programm zurück.
    - Ohne `return` gibt eine Funktion automatisch `None` zurück.
    - Variablen innerhalb einer Funktion sind **lokal** und ausserhalb nicht bekannt.
    - Funktionen mit Rückgabewert lassen sich wie andere Funktionen zu grösseren Bausteinen zusammensetzen.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| Rückgabewert | Ergebnis, das eine Funktion an die aufrufende Stelle zurückgibt |
| `return` | Anweisung, die einen Wert zurückgibt und die Funktion beendet |
| `None` | Spezieller Wert, den eine Funktion ohne `return` zurückgibt |
| Lokale Variable | Variable, die nur innerhalb einer Funktion existiert |
| Verschachtelter Aufruf | Funktionsaufruf, dessen Rückgabewert direkt als Argument verwendet wird |
