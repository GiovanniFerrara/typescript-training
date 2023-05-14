# Tipi di Dati in TypeScript

Questo documento fornisce un'analisi del codice TypeScript, concentrandosi sui diversi tipi di dati che TypeScript supporta.

## Tipi di dati primitivi

In TypeScript, i tipi di dati primitivi includono `boolean`, `number`, `string`, `null` e `undefined`. Tutto il resto è un oggetto.

### Boolean

Il tipo `boolean` rappresenta un valore booleano, che può essere `true` o `false`.

```tsx
const isCompleted: boolean = true;
const isLoggedIn: boolean = false;
```

### Number

Il tipo `number` rappresenta un valore numerico.

```tsx
const count: number = 10;
const pi: number = 3.14;
```

### String

Il tipo `string` rappresenta una sequenza di caratteri.

```tsx
const message: string = "Ciao mondo!";
const personName = "Mario";
```

## Array

In TypeScript, gli array sono oggetti che possono contenere più valori di un determinato tipo. Gli array vengono definiti utilizzando la sintassi `tipo[]` o `Array<tipo>`.

```tsx
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: Array<string> = ["mela", "banana", "arancia"];
```

## Tuple

Le tuple sono come gli array, ma possono contenere elementi di tipi diversi.

```tsx
const person: [string, number, boolean] = ["Mario", 25, true];
```

## Enum

`Enum` è un tipo speciale che permette di definire un insieme di costanti nominali.

```tsx
enum Color {
  Red,
  Green,
  Blue
}
const favoriteColor: Color = Color.Blue;
```

## Unknown

Il tipo `unknown` rappresenta un valore di un tipo sconosciuto.
Va utilizzato con cautela, poiché può essere assegnato a qualsiasi tipo di valore.
È necessario controllare il tipo di un valore unknown prima di utilizzarlo.

```tsx
const value: unknown = 10;
if (typeof value === "number") {
  const result: number = value + 5;
}
```

## Any

Il tipo `any` permette di assegnare qualsiasi tipo di valore a una variabile.
Va evitato quanto più possibile. 
Può essere utile quando si lavora con codice legacy o quando una libreria di terze parti non può essere tipizzata in altro modo.

La differenza con `unknown` è che `any` non richiede un controllo di tipo.

```tsx
let dynamicValue: any = "Hello";
dynamicValue = 10;
dynamicValue = true;
```

## Void

Il tipo `void` è generalmente utilizzato per funzioni che non restituiscono un valore.

```tsx
function sayHello(): void {
  console.log("Ciao!");
}
```

## Null e Undefined

`Null` e `undefined` sono tipi speciali che hanno un solo valore possibile.

```tsx
const nullValue: null = null;
const undefinedValue: undefined = undefined;
```

## Never

Il tipo `never` rappresenta il tipo di valori che non si verificano mai.

```tsx
function throwError(message: string): never {
  throw new Error(message);
}
```

## Object

Il tipo `object` rappresenta un tipo non primitivo.

```tsx
const personObject: object = {
  name: "Mario",
  age: 25,
};
```

## Annotazioni di tipo e quando usarle

In TypeScript, si può utilizzare l'annotazione di tipo per specificare il tipo di una variabile, di un parametro di funzione o del valore restituito da una funzione.


```tsx
let age: number = 25;
let firstName: string = "Mario";
let isStudent: boolean = true;

function greet(name: string): void {
  console.log(`Ciao ${name}!`);
}

function add(a: number, b: number): number {
  return a + b;
}
```