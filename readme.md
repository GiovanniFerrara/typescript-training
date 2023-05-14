# Lezione su Intersezioni, Unioni, Unioni Discriminate in TypeScript

In questa lezione, ci concentreremo sui tipi di intersezione, sui tipi di unione e sulle unioni discriminate in TypeScript.

## Tipi di Intersezione

I tipi di intersezione consentono di combinare più tipi in uno. Ciò consente di aggiungere tipi esistenti per ottenere un singolo tipo che ha tutte le caratteristiche di cui hai bisogno.

```typescript
type Employee = {
  id: string;
  name: string;
};

type Worker = {
  company: string;
};

type EmployeeWorker = Employee & Worker;

let ew: EmployeeWorker = {
  id: "1",
  name: "John",
  company: "ACME Corp"
};
```

In questo esempio, `EmployeeWorker` è un tipo di intersezione che combina le proprietà sia di `Employee` che di `Worker`. Una variabile di questo tipo deve quindi avere tutte le proprietà definite in entrambi i tipi.

## Tipi di Unione

Un tipo di unione è un tipo formato da due o più altri tipi, che rappresenta i valori che possono essere uno qualsiasi di questi tipi.

```typescript
type StringOrNumber = string | number;

let a: StringOrNumber = "hello"; // ok
let b: StringOrNumber = 10; // ok
```

In questo esempio, `StringOrNumber` è un tipo di unione che può essere sia una stringa che un numero.

## Unioni Discriminate

Un modo comune di lavorare con i tipi di unione è avere un singolo campo che utilizza tipi letterali che puoi usare per far sì che TypeScript restringa il tipo esatto del tipo di unione. Questo è chiamato unione discriminata perché TypeScript discrimina tra i tipi usando il campo `kind`.

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

let circle: Circle = { kind: "circle", radius: 10 };
let square: Square = { kind: "square", sideLength: 5 };

console.log(getArea(circle)); // output: 314.1592653589793
console.log(getArea(square)); // output: 25
```

In questo esempio, `Shape` è un tipo di unione che può essere sia un `Circle` che un `Square`. L'unione è discriminata dal campo `kind`, che permette a TypeScript di sapere quale sia il tipo esatto quando è necessario.