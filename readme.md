# Parametri Opzionali, Parametri di Default, Parametri Rest e Sovraccarico di Funzioni in TypeScript

Questo documento fornisce un'analisi del codice TypeScript, concentrandosi su come gestire parametri opzionali, parametri di default, parametri rest e sovraccarico di funzioni.

## Parametri Opzionali

In TypeScript, i parametri opzionali di una funzione possono essere definiti utilizzando il simbolo "?". Se un parametro opzionale non viene fornito quando la funzione viene chiamata, il suo valore sarà `undefined`.

### Funzione Greet

La funzione `greet` ha un parametro opzionale `name`. Se `name` viene fornito, restituisce un saluto personalizzato. Se `name` non viene fornito, restituisce un saluto generico.

```tsx
function greet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello!";
  }
}
```

## Parametri di Default

I parametri di default permettono di specificare un valore predefinito per un parametro che sarà utilizzato se il parametro non viene fornito quando la funzione viene chiamata.

### Funzione GreetWithOptionalArgument

La funzione `greetWithOptionalArgument` ha un parametro di default `name` che predefinisce il valore "World" se non viene fornito un argomento.

```tsx
function greetWithOptionalArgument(name: string = "World") {
  return `Hello, ${name}!`;
}
```

## Parametri Rest

I parametri rest permettono di passare un numero qualsiasi di argomenti a una funzione. Nel nostro esempio, la funzione `sum` utilizza un parametro rest per sommare un numero arbitrario di numeri.

```tsx
function sum(...numbers: number[]): number {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}
```

## Sovraccarico di Funzioni

Il sovraccarico di funzioni in TypeScript permette di specificare più firme per una funzione e di fornire un'implementazione che può gestire diversi tipi di argomenti.

### Funzione CalculateArea

La funzione `calculateArea` accetta una stringa che indica la forma geometrica e un array di numeri che rappresentano le misure. A seconda del valore del primo argomento, la funzione calcola l'area di un quadrato o di un rettangolo.

```tsx
function calculateArea(
  shape: "square" | "rectangle",
  ...measurements: number[]
): number {
  if (shape === "square") {
    const side = measurements[0];
    return side * side;
  } else if (shape === "rectangle") {
    const [base, height] = measurements;
    return base * height;
  } else {
    throw new Error("Unsupported geometric shape.");
  }
}
```
## Risultati della Funzione

Infine, il codice chiama tutte le funzioni definite e mostra i risultati nel elemento HTML root. Di seguito, vediamo come vengono chiamate le funzioni e quali risultati producono.

### Funzioni con parametri opzionali

```tsx
<h3>Funzioni con parametri opzionali</h3>
<p>Greet(): ${greet()}</p>
<p>Greet("John"): ${greet("John")}</p>
```

Quando la funzione `greet` viene chiamata senza argomenti, restituisce "Hello!". Quando viene chiamata con un argomento, usa quell'argomento nel saluto.

### Funzioni con parametri di default

```tsx
<h3>Funzioni con parametri di default</h3>
<p>GreetWithOptionalArgument(): ${greetWithOptionalArgument()}</p>
```

Quando la funzione `greetWithOptionalArgument` viene chiamata senza argomenti, usa "World" come valore predefinito per `name`.

### Parametri rest in TypeScript

```tsx
<h3>Parametri rest in TypeScript</h3>
<p>sum(1, 2, 3, 4, 5): ${sum(1, 2, 3, 4, 5)}</p>
<p>sum(10, 20, 30): ${sum(10, 20, 30)}</p>
<p>sum(2): ${sum(2)}</p>
```

La funzione `sum` può essere chiamata con qualsiasi numero di argomenti numerici. Somma tutti i numeri forniti e restituisce il risultato.

### Function overloading - Sovraccarico di funzioni

```tsx
<h3>Function overloading - Sovraccarico di funzioni</h3>
<p>calculateArea("square", 10): ${calculateArea("square", 10)}</p>
<p>calculateArea("rectangle", 10, 20): ${calculateArea("rectangle", 10, 20)}</p>
```

La funzione `calculateArea` può calcolare l'area di un quadrato o di un rettangolo, a seconda del valore del primo argomento. Se viene fornito "square", usa il primo numero nell'array `measurements` per calcolare l'area del quadrato. Se viene fornito "rectangle", usa i primi due numeri nell'array `measurements` per calcolare l'area del rettangolo. Se viene fornita una forma non supportata, la funzione lancia un errore.
