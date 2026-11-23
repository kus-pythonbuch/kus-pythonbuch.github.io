---
title: "while-Schleife"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

# while-Schleife

Nicht jede Wiederholung hat eine vorher bekannte Anzahl Durchläufe. Mit der `while`-Schleife führst du Anweisungen aus, solange eine Bedingung erfüllt ist. Du lernst, solche Schleifen zu planen und Endlosschleifen zu vermeiden.

## Worum geht es?

Mit der `for`-Schleife wiederholen wir Anweisungen eine **feste Anzahl** Male:

```python
for i in range(4):
    t.forward(50)
    t.left(90)
```

Manchmal wissen wir aber nicht im Voraus, wie oft etwas wiederholt werden muss:

- Ein Spiel läuft, **bis** die gesuchte Zahl erraten ist.
- Eine Eingabe wird wiederholt, **solange** sie ungültig ist.
- Ein Sparkonto wächst, **bis** ein Sparziel erreicht ist.

Für solche Fälle gibt es die `while`-Schleife. Sie verbindet zwei Dinge, die du bereits kennst: **Wiederholung** und **Bedingungen**.

## Lernziele

Nach diesem Kapitel kannst du …

- erklären, wann eine `while`-Schleife sinnvoller ist als eine `for`-Schleife,
- `while`-Schleifen lesen, mit einer Tabelle nachvollziehen und selbst programmieren,
- die drei Bausteine einer Schleife benennen: **Startwert**, **Bedingung** und **Veränderung**,
- Endlosschleifen erkennen und vermeiden,
- `while`-Schleifen mit Verzweigungen und Funktionen kombinieren.

---

## 1. Wiederholen, solange eine Bedingung gilt

Ein Sparschwein enthält 20 Franken. Jede Woche kommen 15 Franken dazu. Nach wie vielen Wochen sind mindestens 100 Franken darin?

```python
betrag = 20
wochen = 0

while betrag < 100:
    betrag = betrag + 15
    wochen = wochen + 1

print("Nach", wochen, "Wochen sind", betrag, "Franken im Sparschwein.")
```

Ausgabe:

```text
Nach 6 Wochen sind 110 Franken im Sparschwein.
```

Allgemein sieht eine `while`-Schleife so aus:

```python
while bedingung:
    anweisung(en)
```

Python geht dabei so vor:

1. Die Bedingung wird überprüft.
2. Ist sie `True`, werden die eingerückten Anweisungen ausgeführt. Danach geht es zurück zu Schritt 1.
3. Ist sie `False`, wird die Schleife beendet. Das Programm läuft unterhalb der Schleife weiter.

!!! note "Merke"
    Die Bedingung wird **vor jedem Durchlauf** überprüft. Ist sie schon zu Beginn `False`, wird der Schleifenkörper kein einziges Mal ausgeführt.

### Eine Schleife mit einer Tabelle nachvollziehen

Um zu verstehen, was eine Schleife macht, notieren wir die Werte der Variablen in einer Tabelle:

| Durchlauf | `betrag < 100`? | `betrag` danach | `wochen` danach |
|---:|---|---:|---:|
| – | – | 20 | 0 |
| 1 | `True` | 35 | 1 |
| 2 | `True` | 50 | 2 |
| 3 | `True` | 65 | 3 |
| 4 | `True` | 80 | 4 |
| 5 | `True` | 95 | 5 |
| 6 | `True` | 110 | 6 |
| – | `False` → Ende | | |

Eine solche Tabelle heisst **Ablauftabelle** (oder Trace-Tabelle).

## 2. Die drei Bausteine einer Schleife

Fast jede `while`-Schleife besteht aus drei Teilen:

```python
zahl = 1              # 1. Startwert

while zahl <= 5:      # 2. Bedingung
    print(zahl)
    zahl = zahl + 1   # 3. Veränderung
```

| Baustein | Aufgabe |
|---|---|
| **Startwert** | Die Variable der Bedingung erhält vor der Schleife einen Wert. |
| **Bedingung** | Sie entscheidet, ob ein weiterer Durchlauf stattfindet. |
| **Veränderung** | Im Schleifenkörper wird die Variable so verändert, dass die Bedingung irgendwann `False` wird. |

### for oder while?

Die `for`-Schleife

```python
for i in range(1, 6):
    print(i)
```

und die `while`-Schleife oben geben dasselbe aus. Bei der `for`-Schleife übernimmt Python Startwert, Bedingung und Veränderung selbst.

!!! tip "Faustregel"
    - Ist die **Anzahl Wiederholungen bekannt**, verwende `for`.
    - Hängt das Ende von einer **Bedingung** ab, verwende `while`.

## 3. Endlosschleifen

Fehlt die Veränderung, bleibt die Bedingung immer `True`. Die Schleife hört nie auf:

```python
zahl = 1

while zahl <= 5:
    print(zahl)
    # zahl wird nie grösser!
```

Ein solches Programm nennt man **Endlosschleife**. Es gibt immer wieder `1` aus.

Auch eine falsche Veränderung kann zu einer Endlosschleife führen:

```python
zahl = 1

while zahl <= 5:
    print(zahl)
    zahl = zahl - 1    # zahl wird kleiner statt grösser
```

!!! warning "Endlosschleife abbrechen"
    Ein Programm in einer Endlosschleife kann mit dem Stopp-Knopf der Entwicklungsumgebung oder mit `Ctrl` + `C` abgebrochen werden.

!!! tip "Checkliste gegen Endlosschleifen"
    1. Welche Variable kommt in der Bedingung vor?
    2. Hat sie vor der Schleife einen Startwert?
    3. Wird sie im Schleifenkörper verändert?
    4. Führt diese Veränderung dazu, dass die Bedingung irgendwann `False` wird?

## 4. Eingaben überprüfen

Eine typische Aufgabe für `while`: Eine Eingabe wird so lange wiederholt, bis sie gültig ist.

```python
alter = int(input("Wie alt bist du? "))

while alter < 0 or alter > 120:
    print("Dieses Alter ist nicht möglich.")
    alter = int(input("Wie alt bist du? "))

print("Danke! Du bist", alter, "Jahre alt.")
```

Hier ist die Eingabe selbst die Veränderung: Jede neue Eingabe kann die Bedingung `False` machen.

## 5. while und Verzweigungen kombinieren

Im Schleifenkörper dürfen beliebige Anweisungen stehen, auch Verzweigungen.

### Beispiel: Zahlenraten

Der Computer denkt sich eine Zahl zwischen 1 und 100 aus. Mit `random.randint(1, 100)` wählt Python eine zufällige ganze Zahl in diesem Bereich.

```python
import random

geheimzahl = random.randint(1, 100)
versuche = 0
tipp = 0

while tipp != geheimzahl:
    tipp = int(input("Dein Tipp: "))
    versuche = versuche + 1

    if tipp < geheimzahl:
        print("Zu klein!")
    elif tipp > geheimzahl:
        print("Zu gross!")
    else:
        print("Richtig! Du hast", versuche, "Versuche gebraucht.")
```

- Die `while`-Bedingung entscheidet, **ob** weitergespielt wird.
- Die Verzweigung entscheidet, **welche Rückmeldung** gegeben wird.
- `tipp` startet mit `0`, damit die Bedingung beim ersten Mal sicher `True` ist.

### Beispiel: Zahlen zerlegen

Mit `%` und `//` kann man die Ziffern einer Zahl einzeln bearbeiten:

- `zahl % 10` ergibt die letzte Ziffer: `4725 % 10` ergibt `5`.
- `zahl // 10` entfernt die letzte Ziffer: `4725 // 10` ergibt `472`.

```python
zahl = 4725
quersumme = 0

while zahl > 0:
    ziffer = zahl % 10
    quersumme = quersumme + ziffer
    zahl = zahl // 10

print("Quersumme:", quersumme)
```

| `zahl` | `ziffer` | `quersumme` |
|---:|---:|---:|
| 4725 | 5 | 5 |
| 472 | 2 | 7 |
| 47 | 7 | 14 |
| 4 | 4 | 18 |
| 0 | – | Ende |

## 6. while in Funktionen mit Rückgabewert

Eine `while`-Schleife kann auch in einer Funktion stehen. Die Funktion gibt das Ergebnis nach der Schleife mit `return` zurück:

```python
def jahre_bis_ziel(kapital, zins, ziel):
    jahre = 0
    while kapital < ziel:
        kapital = kapital * (1 + zins / 100)
        jahre = jahre + 1
    return jahre


print(jahre_bis_ziel(1000, 3, 2000))    # 24
```

Die Funktion beantwortet die Frage: Wie viele Jahre dauert es, bis sich 1000 Franken bei 3 % Zins verdoppelt haben?

## 7. while und Turtle

Eine Spirale soll so lange wachsen, bis eine Linie länger als 200 ist:

```python
import turtle

t = turtle.Turtle()
t.speed(0)

laenge = 5

while laenge <= 200:
    t.forward(laenge)
    t.left(90)
    laenge = laenge + 5
```

Mit einer Verzweigung im Schleifenkörper ändert sich die Farbe je nach Länge:

```python
laenge = 5

while laenge <= 200:
    if laenge < 70:
        t.pencolor("blue")
    elif laenge < 140:
        t.pencolor("green")
    else:
        t.pencolor("red")

    t.forward(laenge)
    t.left(90)
    laenge = laenge + 5
```

!!! info "Genauer betrachtet"
    Mit der Anweisung `break` kann eine Schleife sofort verlassen werden. In diesem Kurs formulieren wir die Bedingung aber so, dass die Schleife von selbst endet. Das macht Programme leichter nachvollziehbar.

---

## 8. Übungen: while-Schleife

### Aufgabe 1: Ablauftabelle

```python
x = 3
y = 0

while x < 20:
    y = y + 1
    x = x * 2

print(x, y)
```

a) Erstelle eine Ablauftabelle mit den Werten von `x` und `y`.  
b) Wie oft wird der Schleifenkörper ausgeführt?  
c) Was wird ausgegeben?  
d) Was ändert sich, wenn die Bedingung `x <= 24` lautet?

### Aufgabe 2: Countdown

Schreibe ein Programm, das mit einer `while`-Schleife von 10 bis 1 rückwärts zählt und danach `"Start!"` ausgibt.

a) Notiere zuerst Startwert, Bedingung und Veränderung.  
b) Programmiere den Countdown.  
c) Löse die Aufgabe zusätzlich mit einer `for`-Schleife. Welche Lösung findest du passender?

### Aufgabe 3: Endlosschleifen finden

Welche der folgenden Schleifen sind Endlosschleifen? Begründe und korrigiere sie.

```python
# a)
n = 10
while n > 0:
    print(n)
    n = n + 1

# b)
n = 10
while n != 0:
    print(n)
    n = n - 3

# c)
n = 1
while n < 100:
    print(n)
n = n * 2
```

### Aufgabe 4: Gültige Note

Lies eine Note ein. Die Eingabe soll so lange wiederholt werden, bis sie zwischen 1 und 6 liegt. Gib danach je nach Note eine Rückmeldung aus:

- ab 5.5: `"Ausgezeichnet!"`
- ab 4: `"Genügend"`
- sonst: `"Ungenügend"`

Verwende `float(input(...))`, damit auch halbe Noten möglich sind.

### Aufgabe 5: Passwort mit drei Versuchen

Ein Programm fragt nach einem Passwort. Die Benutzerin oder der Benutzer hat höchstens drei Versuche.

a) Formuliere die Bedingung der `while`-Schleife in Worten. Sie hat zwei Teile.  
b) Programmiere die Schleife mit einer Variablen `versuche` und einer Bedingung mit `and`.  
c) Gib nach der Schleife entweder `"Zugang erlaubt"` oder `"Zugang gesperrt"` aus. Welche Bedingung musst du dafür prüfen?

### Aufgabe 6: Zahlenraten erweitern

Erweitere das Zahlenraten-Spiel aus Abschnitt 5:

a) Ungültige Tipps (kleiner als 1 oder grösser als 100) sollen eine eigene Meldung erhalten und nicht als Versuch zählen.  
b) Liegt der Tipp höchstens 5 von der Geheimzahl entfernt, soll zusätzlich `"Sehr nah!"` erscheinen.  
c) Am Ende soll das Programm die Leistung bewerten: höchstens 5 Versuche `"Profi"`, höchstens 8 `"Gut"`, sonst `"Weiter üben"`.

### Aufgabe 7: Die Collatz-Folge

Starte mit einer beliebigen positiven ganzen Zahl `n` und wiederhole:

- Ist `n` gerade, wird `n` halbiert.
- Ist `n` ungerade, wird `n` zu `3 * n + 1`.

Das wird wiederholt, bis `n` gleich 1 ist. Beispiel: 6, 3, 10, 5, 16, 8, 4, 2, 1

a) Programmiere die Folge für eine eingegebene Zahl und gib alle Zahlen aus.  
b) Schreibe eine Funktion `collatz_schritte(n)`, die zurückgibt, wie viele Schritte bis zur 1 nötig sind.  
c) Finde mit einer `for`-Schleife, welche Startzahl zwischen 1 und 100 am meisten Schritte braucht.

!!! info "Wusstest du?"
    Niemand hat bisher bewiesen, dass diese Folge für jede Startzahl bei 1 endet. Es ist eines der bekanntesten ungelösten Probleme der Mathematik.

### Aufgabe 8: Quersumme und Teilbarkeit

a) Schreibe eine Funktion `quersumme(zahl)`, welche die Quersumme einer Zahl zurückgibt.  
b) Eine Zahl ist durch 3 teilbar, wenn ihre Quersumme durch 3 teilbar ist. Lies eine Zahl ein und überprüfe mit deiner Funktion, ob sie durch 3 teilbar ist.  
c) Wende `quersumme()` so lange wiederholt an, bis eine einstellige Zahl übrig bleibt. Beispiel: 4725 → 18 → 9. Schreibe dafür eine Funktion `ziffernwurzel(zahl)`.

### Aufgabe 9: Turtle-Spirale

a) Zeichne eine Spirale, bei der die Linienlänge nach jedem Schritt um 3 wächst und die Turtle sich um 89 Grad dreht. Die Spirale soll enden, sobald eine Linie länger als 250 ist.  
b) Zähle mit einer Variablen, wie viele Linien gezeichnet wurden, und gib die Anzahl am Ende aus.  
c) Die Farbe soll sich bei jeder Linie abwechseln: gerade Nummern blau, ungerade Nummern orange. Verwende dazu `%`.

---

## Typische Fehler

### Fehler 1: Variable nicht verändert

```python
i = 0
while i < 5:
    print(i)
```

`i` bleibt immer `0`. Das Programm läuft endlos. Es fehlt `i = i + 1` im Schleifenkörper.

### Fehler 2: Veränderung nicht eingerückt

```python
i = 0
while i < 5:
    print(i)
i = i + 1
```

`i = i + 1` gehört nicht zur Schleife und wird erst nach der Schleife ausgeführt, also nie.

### Fehler 3: Startwert fehlt

```python
while summe < 100:
    summe = summe + 10
```

Python kennt `summe` beim ersten Überprüfen der Bedingung noch nicht. Es entsteht ein `NameError`. Vor der Schleife braucht es `summe = 0`.

### Fehler 4: Bedingung schon zu Beginn falsch

```python
tipp = 50
geheimzahl = 50
while tipp != geheimzahl:
    tipp = int(input("Tipp: "))
```

Die Bedingung ist schon beim ersten Überprüfen `False`. Die Schleife wird nie ausgeführt.

### Fehler 5: Bedingung wird nie falsch

```python
n = 1
while n != 10:
    n = n + 2
```

`n` nimmt die Werte 1, 3, 5, 7, 9, 11, … an und ist nie genau 10. Sicherer ist hier `while n < 10:`.

---

## Zusammenfassung

!!! summary "Das Wichtigste in Kürze"
    - Die `while`-Schleife wiederholt Anweisungen, **solange** eine Bedingung `True` ist.
    - Die Bedingung wird **vor jedem Durchlauf** überprüft.
    - Eine Schleife braucht **Startwert**, **Bedingung** und **Veränderung**.
    - Fehlt die Veränderung, entsteht eine **Endlosschleife**.
    - `for` eignet sich für eine bekannte Anzahl Wiederholungen, `while` für ein Ende, das von einer Bedingung abhängt.
    - Im Schleifenkörper können Verzweigungen, Berechnungen und Funktionsaufrufe stehen.
    - Mit einer **Ablauftabelle** lässt sich der Ablauf einer Schleife Schritt für Schritt nachvollziehen.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| `while`-Schleife | Wiederholung, die läuft, solange eine Bedingung erfüllt ist |
| Schleifenbedingung | Bedingung, die vor jedem Durchlauf überprüft wird |
| Schleifenkörper | Eingerückte Anweisungen, die wiederholt werden |
| Endlosschleife | Schleife, deren Bedingung nie `False` wird |
| Ablauftabelle | Tabelle mit den Werten der Variablen nach jedem Durchlauf |
| Zähler | Variable, die mitzählt, wie oft etwas geschehen ist |
