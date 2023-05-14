# Funzioni e Tipi di Funzioni in TypeScript

Questo documento fornisce un'analisi del codice TypeScript, concentrandosi sulle funzioni e sui tipi di funzioni.

## Funzioni

In TypeScript, le funzioni possono essere definite nello stesso modo di JavaScript, ma TypeScript fornisce funzionalità aggiuntive relative agli argomenti della funzione e ai tipi di ritorno.

### Funzione Add

La funzione `add` è un esempio di funzione che restituisce un valore senza specificare il tipo di ritorno. TypeScript è in grado di dedurre il tipo di ritorno in base al contenuto della funzione.

```tsx
function add(number1: number, number2: number ){
  return number1 + number2; // TypeScript infers the return type as number
}
```

### Funzione Subtract

La funzione `subtract` è un esempio di dichiarazione esplicita del tipo di ritorno di una funzione. In questo caso, la funzione restituisce un numero.

```tsx
function subtract(number1: number, number2: number): number {
  return number1 - number2;
}
```

### Funzione AddMixedTypes

La funzione `addMixedTypes` prende un numero e una stringa come parametri, ma restituisce una stringa.

```tsx
function addMixedTypes(number1: number, number2: string): string {
  return `${number1}${number2}`; // returns a string
}
```

## Tipi di Funzione

Il tipo di una funzione è definito dai tipi dei parametri e dal tipo di ritorno.

### Funzione Multiply

Nell'esempio `multiply`, il tipo di funzione è definito come una funzione che prende due numeri come parametri e restituisce un numero.

```tsx
let multiply: (x: number, y: number) => number;
```

La funzione `multiply` viene poi definita in modo che corrisponda al tipo di funzione.

```tsx
multiply = function(x: number, y: number): number {
  return x * y;
}
```

## ReturnType

Il tipo di utilità `ReturnType` può essere utilizzato per ottenere il tipo di ritorno di una funzione. Nel nostro codice, definiamo quattro tipi utilizzando `ReturnType`.

```tsx
type returnedTypeAdd = ReturnType<typeof add> // number
type returnedTypeSubtract = ReturnType<typeof subtract> // number
type returnedTypeAddMixedTypes = ReturnType<typeof addMixedTypes> // string
type returnedTypeMultiply = ReturnType<typeof multiply> // number
```

Questi tipi corrispondono rispettivamente ai tipi di ritorno delle funzioni `add`, `subtract`, `addMixedTypes` e `multiply`.
