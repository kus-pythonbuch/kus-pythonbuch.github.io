---
title: "Dictionaries"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

# Dictionaries

Manchmal möchten wir Informationen nicht über ihre Position, sondern über einen passenden Schlüssel finden. Du lernst Dictionaries kennen und verwendest Schlüssel-Wert-Paare, um Daten übersichtlich zu speichern und abzurufen.

## Worum geht es?

Mit zwei Listen können wir Produkte und ihre Preise speichern:

```python
produkte = ["Brot", "Milch", "Äpfel"]
preise = [3.20, 1.80, 4.50]
```

Um den Preis der Milch zu finden, müssen wir zuerst ihre Position in der ersten Liste suchen und dann in der zweiten Liste nachschauen. Das ist umständlich und fehleranfällig.

Ein **Dictionary** (Wörterbuch) ordnet jedem **Schlüssel** direkt einen **Wert** zu:

```python
preise = {"Brot": 3.20, "Milch": 1.80, "Äpfel": 4.50}

print(preise["Milch"])    # 1.8
```

Wie in einem Wörterbuch schlagen wir unter einem Begriff nach und erhalten die zugehörige Information.

## Lernziele

Nach diesem Kapitel kannst du …

- erklären, was ein **Schlüssel-Wert-Paar** ist,
- Dictionaries erstellen, Werte nachschlagen, ändern, hinzufügen und entfernen,
- mit `in` prüfen, ob ein Schlüssel vorhanden ist,
- Dictionaries mit einer `for`-Schleife durchlaufen,
- mit Dictionaries zählen und auswerten,
- entscheiden, ob eine Liste oder ein Dictionary besser passt.

---

## 1. Dictionaries erstellen

Ein Dictionary steht in geschweiften Klammern. Jeder Eintrag besteht aus **Schlüssel**, Doppelpunkt und **Wert**:

```python
telefon = {"Mia": "079 123 45 67", "Luca": "078 987 65 43"}
einwohner = {"Zürich": 443000, "Bern": 146000, "Luzern": 83000}
leer = {}
```

| Schlüssel | Wert |
|---|---:|
| `"Zürich"` | `443000` |
| `"Bern"` | `146000` |
| `"Luzern"` | `83000` |

!!! note "Merke"
    - **Schlüssel** sind meist Texte oder Zahlen. Jeder Schlüssel kommt **höchstens einmal** vor.
    - **Werte** können beliebig sein und dürfen sich wiederholen.

## 2. Werte nachschlagen

Ein Wert wird über seinen Schlüssel abgerufen, nicht über einen Index:

```python
einwohner = {"Zürich": 443000, "Bern": 146000, "Luzern": 83000}

print(einwohner["Bern"])    # 146000
```

Gibt es den Schlüssel nicht, entsteht ein Fehler:

```python
print(einwohner["Basel"])    # KeyError: 'Basel'
```

Deshalb prüft man mit `in` und einer Verzweigung zuerst, ob der Schlüssel vorhanden ist:

```python
stadt = input("Welche Stadt? ")

if stadt in einwohner:
    print(stadt, "hat", einwohner[stadt], "Einwohnerinnen und Einwohner.")
else:
    print("Zu", stadt, "gibt es keine Angaben.")
```

!!! warning "Achtung"
    `in` prüft bei einem Dictionary nur die **Schlüssel**, nicht die Werte. `"Bern" in einwohner` ist `True`, `146000 in einwohner` ist `False`.

## 3. Dictionaries verändern

### Werte ändern und Einträge hinzufügen

Beides geschieht mit derselben Schreibweise:

```python
preise = {"Brot": 3.20, "Milch": 1.80}

preise["Milch"] = 1.95     # Schlüssel existiert: Wert wird geändert
preise["Käse"] = 6.40      # Schlüssel ist neu: Eintrag wird hinzugefügt

print(preise)    # {'Brot': 3.2, 'Milch': 1.95, 'Käse': 6.4}
```

### Einträge entfernen

```python
del preise["Brot"]
print(preise)          # {'Milch': 1.95, 'Käse': 6.4}
print(len(preise))     # 2
```

### Mit einem Wert rechnen

Ein Wert im Dictionary kann wie eine Variable verändert werden:

```python
lager = {"Äpfel": 40, "Birnen": 25}

lager["Äpfel"] = lager["Äpfel"] - 12    # 12 Äpfel verkauft
print(lager["Äpfel"])                   # 28
```

!!! tip "Merke"
    | Anweisung | Wirkung |
    |---|---|
    | `d[schluessel]` | Wert nachschlagen |
    | `d[schluessel] = wert` | Wert ändern oder neuen Eintrag hinzufügen |
    | `del d[schluessel]` | Eintrag entfernen |
    | `schluessel in d` | prüfen, ob der Schlüssel vorhanden ist |
    | `len(d)` | Anzahl Einträge |

## 4. Dictionaries durchlaufen

### Über die Schlüssel

Eine `for`-Schleife über ein Dictionary liefert nacheinander alle **Schlüssel**:

```python
einwohner = {"Zürich": 443000, "Bern": 146000, "Luzern": 83000}

for stadt in einwohner:
    print(stadt, einwohner[stadt])
```

### Über Schlüssel und Werte

Mit `items()` erhält man Schlüssel und Wert gleichzeitig:

```python
for stadt, anzahl in einwohner.items():
    print(stadt, "hat", anzahl, "Einwohnerinnen und Einwohner.")
```

### Verzweigungen in der Schleife

```python
for stadt, anzahl in einwohner.items():
    if anzahl >= 100000:
        print(stadt, "ist eine Grossstadt.")
    else:
        print(stadt, "ist keine Grossstadt.")
```

## 5. Zählen mit einem Dictionary

Eine der wichtigsten Anwendungen: Wie oft kommt etwas vor?

```python
stimmen = ["Pizza", "Pasta", "Pizza", "Salat", "Pizza", "Pasta"]
ergebnis = {}

for essen in stimmen:
    if essen in ergebnis:
        ergebnis[essen] = ergebnis[essen] + 1
    else:
        ergebnis[essen] = 1

print(ergebnis)    # {'Pizza': 3, 'Pasta': 2, 'Salat': 1}
```

- Kommt ein Essen zum ersten Mal vor, wird es mit dem Wert 1 eingetragen.
- Kommt es erneut vor, wird sein Zähler um 1 erhöht.

### Den Gewinner bestimmen

Wie beim Maximum einer Liste merken wir uns den bisher besten Eintrag:

```python
gewinner = ""
meiste = 0

for essen, anzahl in ergebnis.items():
    if anzahl > meiste:
        meiste = anzahl
        gewinner = essen

print("Gewonnen hat", gewinner, "mit", meiste, "Stimmen.")
```

## 6. Dictionaries und Funktionen

Ein Dictionary kann als Nachschlagetabelle an eine Funktion übergeben werden:

```python
preisliste = {"Brot": 3.20, "Milch": 1.80, "Äpfel": 4.50, "Käse": 6.40}


def gesamtpreis(einkauf, preise):
    summe = 0
    for produkt in einkauf:
        if produkt in preise:
            summe = summe + preise[produkt]
        else:
            print("Kein Preis für", produkt)
    return summe


korb = ["Brot", "Käse", "Milch", "Schokolade"]
print("Total:", round(gesamtpreis(korb, preisliste), 2), "Franken")
```

Ausgabe:

```text
Kein Preis für Schokolade
Total: 11.4 Franken
```

!!! info "Genauer betrachtet"
    Ohne `round()` würde Python `11.400000000000002` ausgeben. Kommazahlen werden im Computer nicht immer exakt gespeichert. Mit `round(wert, 2)` runden wir auf zwei Nachkommastellen.

## 7. Listen als Werte

Die Werte eines Dictionarys können auch Listen sein. So lassen sich zum Beispiel Noten nach Fach ordnen:

```python
noten = {
    "Mathematik": [4.5, 5, 5.5],
    "Deutsch": [5, 4],
    "Französisch": [3.5, 4, 4.5, 3]
}

for fach, liste in noten.items():
    summe = 0
    for note in liste:
        summe = summe + note
    schnitt = summe / len(liste)

    if schnitt < 4:
        print(fach, schnitt, "ungenügend")
    else:
        print(fach, schnitt)
```

Ausgabe:

```text
Mathematik 5.0
Deutsch 4.5
Französisch 3.75 ungenügend
```

Eine neue Note wird mit `append()` zur passenden Liste hinzugefügt:

```python
noten["Deutsch"].append(5.5)
```

## 8. Dictionaries und Turtle

Ein Dictionary kann Wörter in Zeichenanweisungen übersetzen:

```python
import turtle

t = turtle.Turtle()

richtungen = {"rechts": 0, "oben": 90, "links": 180, "unten": 270}

befehl = input("Richtung (leer = Ende): ")

while befehl != "":
    if befehl in richtungen:
        t.setheading(richtungen[befehl])
        t.forward(50)
    else:
        print("Unbekannte Richtung:", befehl)
    befehl = input("Richtung (leer = Ende): ")
```

`t.setheading(winkel)` dreht die Turtle in eine feste Richtung: 0 bedeutet rechts, 90 oben usw.

## 9. Liste oder Dictionary?

| | Liste | Dictionary |
|---|---|---|
| Klammern | `[ ]` | `{ }` |
| Zugriff über | Index (0, 1, 2, …) | Schlüssel (z. B. `"Bern"`) |
| Reihenfolge ist wichtig | ja | eher nein |
| Typische Verwendung | gleichartige Werte der Reihe nach: Noten, Messwerte | Zuordnungen: Name → Telefonnummer, Produkt → Preis |

!!! tip "Faustregel"
    Fragst du „Welches ist das **dritte** Element?“, passt eine Liste. Fragst du „Was gehört zu **Bern**?“, passt ein Dictionary.

---

## 10. Übungen: Dictionaries

### Aufgabe 1: Lesen und verändern

```python
hauptstaedte = {"Schweiz": "Bern", "Frankreich": "Paris", "Italien": "Rom"}
```

a) Was ergibt `hauptstaedte["Italien"]`?  
b) Was ergibt `"Paris" in hauptstaedte`? Begründe.  
c) Füge Deutschland mit der Hauptstadt Berlin hinzu.  
d) Gib alle Einträge in der Form `Die Hauptstadt von Schweiz ist Bern.` aus.

### Aufgabe 2: Programmablauf nachvollziehen

```python
punkte = {"Ana": 12, "Ben": 7, "Cleo": 15}

punkte["Ben"] = punkte["Ben"] + 5
punkte["Dario"] = 9

for name, p in punkte.items():
    if p >= 12:
        print(name, "Gold")
    elif p >= 9:
        print(name, "Silber")
    else:
        print(name, "Bronze")
```

a) Wie sieht das Dictionary vor der Schleife aus?  
b) Was wird ausgegeben?

### Aufgabe 3: Vokabeltrainer

```python
vokabeln = {"Hund": "dog", "Katze": "cat", "Haus": "house", "Baum": "tree"}
```

a) Frage jede Vokabel mit einer `for`-Schleife ab und gib `"Richtig"` oder die korrekte Lösung aus.  
b) Zähle die richtigen Antworten und gib am Ende das Ergebnis aus, z. B. `3 von 4 richtig`.  
c) Gib je nach Ergebnis eine Rückmeldung: alle richtig `"Perfekt!"`, mindestens die Hälfte `"Gut gemacht"`, sonst `"Nochmals üben"`.  
d) Erweiterung: Falsch beantwortete Wörter werden in einer Liste gesammelt und am Ende mit einer `while`-Schleife so lange wiederholt, bis alle richtig sind.

### Aufgabe 4: Buchstaben zählen

Mit `for zeichen in text:` durchläuft man alle Zeichen eines Textes.

a) Schreibe eine Funktion `buchstaben_zaehlen(text)`, die ein Dictionary zurückgibt. Es soll enthalten, wie oft jedes Zeichen vorkommt.  
b) Leerzeichen sollen nicht gezählt werden.  
c) Finde den häufigsten Buchstaben in einem Satz deiner Wahl.  
d) Tipp: `text.lower()` wandelt alle Buchstaben in Kleinbuchstaben um. Weshalb ist das hier sinnvoll?

### Aufgabe 5: Lagerverwaltung

```python
lager = {"Hefte": 120, "Stifte": 300, "Lineale": 15, "Radiergummis": 8}
```

a) Schreibe eine Funktion `verkaufen(lager, artikel, anzahl)`. Sie soll den Bestand verringern, aber nur, wenn genügend vorhanden ist. Sonst erscheint eine Meldung.  
b) Unbekannte Artikel sollen eine eigene Meldung erhalten.  
c) Schreibe eine Funktion `nachbestellen(lager, minimum)`, die eine **Liste** aller Artikel zurückgibt, deren Bestand unter `minimum` liegt.  
d) Schreibe ein Hauptprogramm mit `while`-Schleife: Artikel und Anzahl werden so lange eingelesen, bis der Artikel `"ende"` lautet. Danach wird die Nachbestellliste für `minimum = 20` ausgegeben.

### Aufgabe 6: Notenbuch

Verwende das Dictionary `noten` aus Abschnitt 7.

a) Schreibe eine Funktion `durchschnitt(liste)`.  
b) Schreibe eine Funktion `zeugnis(noten)`, die ein **neues Dictionary** Fach → Durchschnitt zurückgibt.  
c) Bestimme das Fach mit dem besten Durchschnitt.  
d) Ein Fach ist ungenügend, wenn der Durchschnitt unter 4 liegt. Wie viele Fächer sind ungenügend? Gib eine Warnung aus, wenn es mehr als eines sind.

### Aufgabe 7: Turtle-Zeichenbefehle

Erweitere das Programm aus Abschnitt 8:

a) Füge ein zweites Dictionary `farben = {"r": "red", "g": "green", "b": "blue"}` hinzu. Gibt man `r`, `g` oder `b` ein, wechselt die Stiftfarbe.  
b) Zähle mit einem Dictionary, wie oft jede Richtung verwendet wurde, und gib die Statistik am Ende aus.  
c) Speichere alle gültigen Befehle in einer Liste. Am Ende soll die Turtle an den Start zurückkehren (`t.home()`) und die ganze Zeichnung in einer anderen Farbe noch einmal zeichnen.

---

## Typische Fehler

### Fehler 1: Schlüssel nicht vorhanden

```python
preise = {"Brot": 3.20}
print(preise["Milch"])    # KeyError
```

Prüfe vorher mit `if "Milch" in preise:`.

### Fehler 2: Zugriff über einen Index

```python
preise = {"Brot": 3.20, "Milch": 1.80}
print(preise[0])    # KeyError: 0
```

Ein Dictionary hat keine Positionen. Der Zugriff erfolgt immer über den Schlüssel.

### Fehler 3: Zähler ohne Startwert erhöhen

```python
zaehler = {}
zaehler["a"] = zaehler["a"] + 1    # KeyError
```

Beim ersten Vorkommen muss der Eintrag zuerst mit 1 angelegt werden (siehe Abschnitt 5).

### Fehler 4: Schlüssel und Wert verwechselt

```python
einwohner = {"Zürich": 443000}

if 443000 in einwohner:    # False
    print("gefunden")
```

`in` prüft nur die Schlüssel.

### Fehler 5: Doppelte Schlüssel

```python
noten = {"Mathe": 5, "Mathe": 4}
print(noten)    # {'Mathe': 4}
```

Jeder Schlüssel existiert nur einmal. Der zweite Wert überschreibt den ersten. Für mehrere Werte pro Schlüssel verwendet man eine Liste als Wert.

---

## Zusammenfassung

!!! summary "Das Wichtigste in Kürze"
    - Ein **Dictionary** speichert **Schlüssel-Wert-Paare**: `{"Bern": 146000}`.
    - Werte werden über den **Schlüssel** abgerufen: `d["Bern"]`.
    - `d[schluessel] = wert` ändert einen Wert oder fügt einen neuen Eintrag hinzu.
    - `del d[schluessel]` entfernt einen Eintrag.
    - `schluessel in d` prüft, ob ein Schlüssel vorhanden ist. Das verhindert einen `KeyError`.
    - `for k in d:` durchläuft die Schlüssel, `for k, w in d.items():` Schlüssel und Werte.
    - Dictionaries eignen sich besonders zum **Zählen** und für **Zuordnungen**.
    - Werte können auch Listen sein.

## Begriffe

| Begriff | Bedeutung |
|---|---|
| Dictionary | Sammlung von Schlüssel-Wert-Paaren |
| Schlüssel | Eindeutiger Begriff, unter dem ein Wert gespeichert ist |
| Wert | Information, die zu einem Schlüssel gehört |
| Schlüssel-Wert-Paar | Ein Eintrag im Dictionary, z. B. `"Bern": 146000` |
| `items()` | Liefert alle Schlüssel-Wert-Paare zum Durchlaufen |
| `KeyError` | Fehler beim Zugriff auf einen Schlüssel, den es nicht gibt |
