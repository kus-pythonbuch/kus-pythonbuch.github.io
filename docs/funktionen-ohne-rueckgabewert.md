---
title: "Funktionen ohne Rückgabewert"
subtitle: "Programmieren mit Python"
author: "Theresa Luternauer & Julia Imhof"
date: "HS 2026/27"
---

# Funktionen ohne Rückgabewert

Grössere Programme werden verständlicher, wenn wir sie in kleine Bausteine aufteilen. Du lernst, eigene Funktionen zu definieren und aufzurufen, Parameter einzusetzen und damit beispielsweise Turtle-Zeichnungen einfacher zu strukturieren.

## Worum geht es?

In diesem Kapitel lernst du, längere Programme in kleine, übersichtliche Bausteine zu zerlegen. In Python nennen wir solche Bausteine **Funktionen**.

Du lernst,

- warum Programme in Funktionen unterteilt werden,
- eigene Funktionen zu definieren und aufzurufen,
- Funktionen ohne Parameter zu schreiben,
- Funktionen mit Parametern zu schreiben,
- Turtle-Zeichnungen mithilfe von Funktionen übersichtlich aufzubauen.

## Lernziele

Nach diesem Kapitel kannst du …

- erklären, was **modularer Programmentwurf** bedeutet,
- die Vorteile von Funktionen nennen,
- zwischen **Funktionsdefinition** und **Funktionsaufruf** unterscheiden,
- Funktionen ohne Parameter definieren und aufrufen,
- Funktionen mit einem oder mehreren Parametern definieren und aufrufen,
- grössere Turtle-Zeichnungen aus kleineren Funktionen zusammensetzen,
- typische Fehler bei Funktionen erkennen und korrigieren.

---

## 1. Vom Befehl zur Funktion

Bisher haben wir Programme aus Befehlen aufgebaut, die Python oder die Turtle-Bibliothek bereits zur Verfügung stellen. Zum Beispiel bewegt

```python
t.forward(50)
```

die Turtle um 50 Schritte vorwärts.

Pythonkorrekt ist `forward()` eine **Funktion**. Da sie zu unserer Turtle `t` gehört, wird sie genauer als **Methode** bezeichnet. In diesem Kapitel genügt uns zunächst der allgemeinere Begriff **Funktion**.

Wir können auch eigene Funktionen programmieren. Dazu fassen wir mehrere Anweisungen zusammen und geben diesem Programmteil einen passenden Namen.

```python
def quadrat():
    for i in range(4):
        t.forward(50)
        t.left(90)
```

Damit haben wir die neue Funktion `quadrat()` definiert. Sie zeichnet ein Quadrat mit der Seitenlänge 50.

!!! note "Vom bisherigen Begriff zum Fachbegriff"
    Bisher haben wir häufig von **Befehlen** gesprochen. Ab jetzt verwenden wir den Pythonbegriff **Funktion**. Eine Funktion fasst Anweisungen unter einem Namen zusammen und kann später aufgerufen werden.

## 2. Modularer Programmentwurf

Ein Programm muss manchmal eine schwierige Aufgabe lösen. Statt sofort das ganze Programm zu schreiben, zerlegen wir die Aufgabe in kleinere Teilaufgaben.

Für jede Teilaufgabe schreiben wir eine eigene Funktion. Diese Funktionen sind die **Bausteine** oder **Module** unseres Programms. Anschliessend setzen wir die Bausteine zu einem grösseren Programm zusammen.

Diese Vorgehensweise heisst **modularer Programmentwurf**.

### Beispiel: ein Haus aus Bausteinen

Eine Turtle soll ein Haus zeichnen. Das Haus besteht aus einem Quadrat und einem Dach. Wir können deshalb zuerst zwei kleinere Funktionen schreiben:

```python
def quadrat():
    for i in range(4):
        t.forward(80)
        t.left(90)


def dach():
    for i in range(3):
        t.forward(80)
        t.left(120)
```

Danach können wir beide Funktionen in einer weiteren Funktion zusammensetzen:

```python
def haus():
    quadrat()
    dach()
```

Die Funktion `haus()` verwendet die beiden kleineren Bausteine `quadrat()` und `dach()`.

### Vorteile von Funktionen

Funktionen machen Programme …

- **übersichtlicher**, weil eine grosse Aufgabe in kleinere Teile zerlegt wird,
- **verständlicher**, weil Namen wie `quadrat()` oder `dach()` die Aufgabe beschreiben,
- **kürzer**, weil derselbe Programmcode mehrfach verwendet werden kann,
- **leichter veränderbar**, weil ein Baustein nur an einer Stelle angepasst werden muss,
- **weniger fehleranfällig**, weil wiederverwendeter Code nicht immer neu geschrieben wird.

!!! tip "Merke"
    Eine Funktion sollte eine klar abgegrenzte Aufgabe erfüllen und einen passenden Namen besitzen.

---

## 3. Funktionen ohne Parameter

### Eine Funktion definieren

Eine einfache Funktion wird mit dem Schlüsselwort `def` definiert:

```python
def funktionsname():
    anweisung_1
    anweisung_2
```

Eine Funktionsdefinition besteht aus:

1. dem Schlüsselwort `def`,
2. einem selbst gewählten Funktionsnamen,
3. runden Klammern `()`,
4. einem Doppelpunkt `:`,
5. einem eingerückten Funktionskörper.

Der **Funktionskörper** enthält die Anweisungen, die beim Aufruf ausgeführt werden.

```python
def linie():
    t.forward(50)
```

!!! warning "Einrückung beachten"
    Alle Anweisungen, die zur Funktion gehören, müssen eingerückt sein. Die Einrückung zeigt Python, wo der Funktionskörper beginnt und endet.

### Eine Funktion aufrufen

Durch die Definition wird die Funktion noch nicht ausgeführt. Sie wird erst ausgeführt, wenn sie aufgerufen wird:

```python
linie()
```

Bei einem Funktionsaufruf wird der Funktionsname zusammen mit den runden Klammern geschrieben.

```python
import turtle

t = turtle.Turtle()


def quadrat():
    for i in range(4):
        t.forward(50)
        t.left(90)


quadrat()
```

Der Interpreter arbeitet dieses Programm in folgender Reihenfolge ab:

1. Die Turtle-Bibliothek wird importiert.
2. Die Turtle `t` wird erstellt.
3. Python liest die Definition von `quadrat()` und merkt sich die Funktion.
4. Beim Aufruf `quadrat()` springt Python in den Funktionskörper.
5. Die eingerückten Anweisungen werden ausgeführt.
6. Danach wird das Programm unterhalb des Funktionsaufrufs fortgesetzt.

!!! note "Reihenfolge im Programm"
    Eine Funktion muss definiert sein, bevor sie ausgeführt werden kann. Deshalb steht die Funktionsdefinition normalerweise oberhalb des ersten Funktionsaufrufs.

### Eine Funktion mehrmals verwenden

Eine Funktion kann beliebig oft aufgerufen werden:

```python
quadrat()
t.forward(100)
quadrat()
```

Der Code zum Zeichnen des Quadrats muss dabei nur einmal programmiert werden.

### Funktionen ohne Rückgabewert

Die Funktionen in diesem Kapitel führen eine Tätigkeit aus: Sie bewegen zum Beispiel die Turtle oder zeichnen eine Figur. Sie berechnen keinen Wert, den wir später weiterverwenden möchten. Deshalb bezeichnen wir sie als **Funktionen ohne Rückgabewert**.

Solche Funktionen enthalten keine `return`-Anweisung mit einem Ergebnis.

!!! info "Genauer betrachtet"
    Python gibt bei einer Funktion ohne ausdrückliches `return` automatisch den speziellen Wert `None` zurück. Für unsere Turtle-Programme ist dieser Wert nicht wichtig. Wir sagen deshalb vereinfachend: Die Funktion hat keinen Rückgabewert.

---

## 4. Übungen: Funktionen ohne Parameter

### Aufgabe 1: Funktionen erkennen

Gegeben ist folgendes Programm:

```python
def linie():
    t.forward(50)


def ecke():
    t.left(90)


linie()
ecke()
linie()
```

a) Welche Funktionen stammen aus der Turtle-Bibliothek?  
b) Welche Funktionen wurden selbst definiert?  
c) Welche Funktionsaufrufe kommen im Hauptprogramm vor?  
d) Beschreibe die Bewegung der Turtle in Worten.

### Aufgabe 2: Funktionsdefinition und Funktionsaufruf

Gegeben ist:

```python
def quadrat():
    for i in range(4):
        t.forward(50)
        t.left(90)


quadrat()
```

a) Markiere die Funktionsdefinition.  
b) Markiere den Funktionsaufruf.  
c) Wie oft wird `t.forward(50)` ausgeführt?  
d) Weshalb wird das Quadrat erst beim letzten Ausdruck gezeichnet?

### Aufgabe 3: Programmablauf nachvollziehen

```python
def schritt():
    t.forward(30)


def ecke():
    t.left(90)


schritt()
ecke()
schritt()
ecke()
```

a) Notiere die Reihenfolge aller ausgeführten Turtle-Funktionen.  
b) Wie oft wird `t.left(90)` ausgeführt?  
c) Skizziere den Weg der Turtle.

### Aufgabe 4: Eine Funktion ergänzen

Die folgende Funktion soll ein Quadrat zeichnen:

```python
def quadrat():
    for i in range(4):
        t.forward(50)
```

a) Welche Anweisung fehlt?  
b) Ergänze die Funktion.  
c) Rufe die korrigierte Funktion zweimal auf.

### Aufgabe 5: Funktionen zusammensetzen

Gegeben sind:

```python
def linie():
    t.forward(50)


def ecke():
    t.left(90)
```

Definiere eine neue Funktion `quadrat()`, die nur `linie()` und `ecke()` verwendet. Rufe danach `quadrat()` auf.

### Aufgabe 6: Eine Treppe modular zeichnen

Ein Treppenschritt besteht aus einer waagrechten und einer senkrechten Linie:

```python
def treppenstufe():
    t.forward(30)
    t.left(90)
    t.forward(30)
    t.right(90)
```

a) Rufe `treppenstufe()` viermal auf.  
b) Vereinfache dein Hauptprogramm mit einer Schleife.  
c) Definiere zusätzlich eine Funktion `treppe()`, welche die ganze Treppe zeichnet.  
d) Erkläre, welche Funktion in diesem Programm als kleinerer Baustein verwendet wird.

### Aufgabe 7: Eigene Turtle-Funktion

Definiere eine Funktion für eine der folgenden Figuren:

- ein gleichseitiges Dreieck,
- einen fünfzackigen Stern,
- ein Kreuz,
- einen Pfeil.

Die Funktion soll keine Parameter besitzen. Gib ihr einen Namen, der ihre Aufgabe verständlich beschreibt.
