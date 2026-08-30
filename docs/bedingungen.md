# Bedingungen

Programme müssen häufig überprüfen, ob eine bestimmte Aussage zutrifft oder nicht. Solche Aussagen nennt man **Bedingungen**.

Eine Bedingung kann immer genau einen von zwei Wahrheitswerten haben:

- `True` – die Bedingung ist wahr
- `False` – die Bedingung ist falsch

## 1. Bedingungen mit Vergleichsoperatoren

Bedingungen entstehen häufig, indem zwei Werte miteinander verglichen werden. Damit wir diese formal aufschreiben können, benötigen wir Operatoren, die sogenannten Vergleichsoperatoren:

| Operator | Bedeutung | Beispiel |
|---|---|---|
| `==` | gleich | `x == 5` |
| `!=` | ungleich | `x != 5` |
| `<` | kleiner als | `x < 5` |
| `>` | grösser als | `x > 5` |
| `<=` | kleiner oder gleich | `x <= 5` |
| `>=` | grösser oder gleich | `x >= 5` |

Gilt für die Variable x beispielsweise `x = 7`, dann gilt:

```python
x > 5       # True
x == 7      # True
x < 3       # False
x != 7      # False
```

!!! note "Merke"
    `=` und `==` haben unterschiedliche Bedeutungen. Mit `=` wird einer Variablen ein Wert zugewiesen, mit `==` werden zwei Werte miteinander verglichen.

## 2. Logische Operatoren

Manchmal reicht eine einzelne Bedingung nicht aus. Angenommen wir wollen überprüfen, ob der Wert einer Variablen `x` zwischen 10 und 20 liegt. Dann müssen gleichzeitig zwei Bedingungen erfüllt sein:

```python
x >= 10 and x <= 20
```

### `and`

Bei `and` müssen **beide Bedingungen** wahr sein.

### `or`

Bei `or` muss **mindestens eine** der Bedingungen wahr sein.

```python
x < 0 or x > 100
```

### `not`
Der dritte logische Operator ist `not`. Er kehrt den Wahrheitswert einer Bedingung um. Die **Negation** einer Bedingung beschreibt genau die Fälle, in denen die ursprüngliche Bedingung falsch ist.

Die Negation von `x > 10` ist `x <= 10`. Nicht korrekt wäre `x < 10`, denn dann würde der Fall `x = 10` fehlen.



## 3. Wahrheitstabellen

Mit einer **Wahrheitstabelle** kann man übersichtlich darstellen, welchen Wahrheitswert eine verknüpfte Bedingung für alle möglichen Kombinationen ihrer Teilbedingungen annimmt. Für zwei Bedingungen **A** und **B** gibt es genau vier mögliche Kombinationen. Die Wahrheitstabelle für `and` und `or` sieht wie folgt aus:

| A | B | A `and` B | A `or` B |
|---|---|---|---|
| wahr | wahr | wahr | wahr |
| wahr | falsch | falsch | wahr |
| falsch | wahr | falsch | wahr |
| falsch | falsch | falsch | falsch |

- `A and B` ist nur wahr, wenn **beide** Bedingungen wahr sind.
- `A or B` ist wahr, wenn **mindestens eine** der Bedingungen wahr ist.

Die Wahrheitstabellen für `not` sieht wie folgt aus:

| A | `not A` |
|---|---|
| wahr | falsch |
| falsch | wahr |

Beispielsweise sind `not x > 10` und `x <= 10` gleichbedeutend. Ebenso beschreiben `not x == 5` und `x != 5` dieselbe Bedingung.
Weitere Beispiele:

| Bedingung | Negation |
|---|---|
| `x > a` | `x <= a` |
| `x < a` | `x >= a` |
| `x >= a` | `x < a` |
| `x <= a` | `x > a` |
| `x == a` | `x != a` |
| `x != a` | `x == a` |


!!! note "Logische Operatoren"
    - `and` – beide Bedingungen müssen wahr sein
    - `or` – mindestens eine Bedingung muss wahr sein
    - `not` – kehrt den Wahrheitswert einer Bedingung um

# Aufgaben

Die folgenden Aufgaben werden **ohne Computer auf Papier** gelöst.

## Aufgabe 1 – Wahr oder falsch?

Gegeben ist `x = 8`. Bestimme den Wahrheitswert von: 
a) `x > 5`
b) `x == 8`
c) `x != 8`
d) `x <= 10`
e) `x < 8`

## Aufgabe 2 – Bedingungen formulieren

Schreibe jeweils eine passende Python-Bedingung:

a) `x` ist nicht grösser als 20. 
b) `x` ist mindestens 20.  
c) `x` liegt zwischen 10 und 20, inklusive Grenzen.  
d) `alter` ist kleiner als 12 oder grösser als 65.  
e) `farbe` ist `"red"` oder `"green"`.

## Aufgabe 3 – Welche Werte erfüllen die Bedingung?

Bestimme jeweils alle **ganzen Zahlen `x`**:

a) `x > 3 and x < 8`  
b) `x >= -2 and x <= 3`  
c) `x == 2 or x == 5`  
d) `x <= 2 or x >= 7`

## Aufgabe 4 – Negationen

Formuliere die Negation ohne `not`:

a) `x >= 3`  
b) `zahl < 0`  
c) `a > b`  
d) `farbe == "red"`  
e) `alter <= 18`

## Aufgabe 5 – Bedingungen vergleichen

Entscheide, ob die Bedingungen jeweils für **alle Werte von `x`** denselben Wahrheitswert haben. Begründe.

a) `x <= 10` und `not x > 10`  
b) `x != 5` und `not x == 5`  
c) `x > 3 and x < 10` und `x >= 3 and x <= 10`

## Aufgabe 6 – Tabelle

Gegeben sind `A: x > 3` und `B: x < 8`. Untersuche für die ganzen Zahlen von `x = 1` bis `x = 10`, wann `A and B`, `A or B` und `not A` wahr sind. Erstelle dazu eine Tabelle und beschreibe anschliessend in eigenen Worten, was die drei Ausdrücke jeweils über `x` aussagen.
