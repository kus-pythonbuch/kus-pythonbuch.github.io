# Python-Cheatsheet

Die wichtigsten Befehle aus allen Kapiteln auf einen Blick.

## Turtle

```python
import turtle
t = turtle.Turtle()
```

| Befehl | Wirkung | Befehl | Wirkung |
|:---|:---|:---|:---|
| `t.forward(50)` | 50 vorwärts | `t.penup()` | Stift heben |
| `t.backward(50)` | 50 rückwärts | `t.pendown()` | Stift senken |
| `t.left(90)` | 90° nach links | `t.pencolor("red")` | Stiftfarbe |
| `t.right(90)` | 90° nach rechts | `t.width(3)` | Stiftdicke |
| `t.goto(x, y)` | zum Punkt (x, y) | `t.fillcolor("blue")` | Füllfarbe |
| `t.home()` | zurück zu (0, 0) | `t.begin_fill()` | Füllen beginnen |
| `t.setheading(90)` | Richtung: 0 → rechts, 90 → oben | `t.end_fill()` | Füllen beenden |
| `t.speed(0)` | maximal schnell | `t.circle(40)` | Kreis, Radius 40 |
| `t.hideturtle()` | Turtle ausblenden | `t.circle(40, 180)` | Halbkreis |

## Variablen, Ein- und Ausgabe

```python
name = input("Wie heisst du? ")           # Text (str)
alter = int(input("Wie alt bist du? "))   # ganze Zahl (int)
note = float(input("Note: "))             # Kommazahl (float)
print("Hallo", name, "du bist", alter)
```

| Operator | Bedeutung | Operator | Bedeutung |
|:---|:---|:---|:---|
| `+` `-` `*` `/` | Grundrechenarten | `7 % 2` → `1` | Rest der Division |
| `7 // 2` → `3` | ganzzahlige Division | `2 ** 3` → `8` | Potenz |

## Bedingungen und Verzweigungen

| Operator | Bedeutung | Operator | Bedeutung |
|:---|:---|:---|:---|
| `==` | gleich | `and` | beide wahr |
| `!=` | ungleich | `or` | mindestens eine wahr |
| `<` `>` | kleiner, grösser | `not` | kehrt um |
| `<=` `>=` | kleiner/grösser gleich | `x in liste` | kommt `x` vor? |

```python
if note >= 5.5:
    print("Ausgezeichnet")
elif note >= 4:
    print("Genügend")
else:
    print("Ungenügend")
```

Nur der **erste** passende Fall wird ausgeführt.

## Schleifen

```python
for i in range(4):          # Anzahl bekannt: i = 0, 1, 2, 3
    t.forward(50)
    t.left(90)

zahl = 1                    # 1. Startwert
while zahl <= 100:          # 2. Bedingung: wiederholen, solange sie gilt
    print(zahl)
    zahl = zahl * 2         # 3. Veränderung, sonst Endlosschleife
```

| `range(5)` | `range(2, 6)` | `range(0, 10, 3)` | `range(5, 0, -1)` |
|:---|:---|:---|:---|
| 0, 1, 2, 3, 4 | 2, 3, 4, 5 | 0, 3, 6, 9 | 5, 4, 3, 2, 1 |

## Funktionen

```python
def quadrat(seite):             # Definition mit Parameter
    for i in range(4):
        t.forward(seite)
        t.left(90)

def flaeche(breite, hoehe):     # Funktion mit Rückgabewert
    return breite * hoehe

quadrat(50)                     # Aufruf mit Argument 50
a = flaeche(4, 5)               # a erhält den Rückgabewert 20
```

- **Parameter**: Platzhalter in der Definition. **Argument**: Wert beim Aufruf. Die Reihenfolge zählt.
- `return` gibt einen Wert an das Programm zurück und beendet die Funktion. `print()` zeigt ihn nur an.
- Eine Funktion muss **vor** ihrem ersten Aufruf definiert sein.

## Listen

```python
noten = [4.5, 5, 3.5]       # Index: 0, 1, 2
summe = 0                   # Startwert vor der Schleife
for note in noten:          # alle Elemente durchlaufen
    if note >= 4:
        summe = summe + note
```

| Befehl | Wirkung | Befehl | Wirkung |
|:---|:---|:---|:---|
| `noten[0]` | erstes Element | `noten.append(6)` | am Ende anhängen |
| `noten[-1]` | letztes Element | `noten.remove(5)` | Wert entfernen |
| `noten[1] = 4` | Element ersetzen | `noten.pop()` | letztes entfernen |
| `len(noten)` | Anzahl Elemente | `5 in noten` | kommt 5 vor? |

## Dictionaries

```python
preise = {"Brot": 3.20, "Milch": 1.80}     # Schlüssel: Wert
for produkt, preis in preise.items():      # alle Paare durchlaufen
    print(produkt, preis)

zaehler = {}                               # Zählen mit einem Dictionary
for wort in ["Pizza", "Pasta", "Pizza"]:
    if wort in zaehler:
        zaehler[wort] = zaehler[wort] + 1
    else:
        zaehler[wort] = 1                  # {'Pizza': 2, 'Pasta': 1}
```

| Befehl | Wirkung | Befehl | Wirkung |
|:---|:---|:---|:---|
| `preise["Brot"]` | nachschlagen | `"Brot" in preise` | Schlüssel vorhanden? |
| `preise["Tee"] = 4` | ändern oder hinzufügen | `len(preise)` | Anzahl Einträge |
| `del preise["Tee"]` | Eintrag entfernen | `preise.items()` | alle Paare |

## Häufige Fehlermeldungen

| Fehler | Typische Ursache |
|:---|:---|
| `SyntaxError` | Doppelpunkt, Klammer oder `"` fehlt |
| `IndentationError` | Einrückung fehlt oder ist falsch |
| `NameError` | Name falsch geschrieben oder nicht definiert |
| `TypeError` | falscher Datentyp, z. B. `"5" + 3` |
| `IndexError` | diesen Index gibt es in der Liste nicht |
| `KeyError` | diesen Schlüssel gibt es im Dictionary nicht |
