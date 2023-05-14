# TypeScript - Interfacce, Tipi personalizzati e Classi

## Definizione di una interfaccia

In TypeScript, una interfaccia è un modo per definire un contratto su una struttura di oggetti. Gli oggetti che implementano un'interfaccia devono aderire alla struttura definita dall'interfaccia. 

```tsx
interface User {
  name: string;
  age: number;
}
```

In questo esempio, `User` è un'interfaccia che richiede due proprietà: `name` e `age`, entrambe di tipo stringa e numero rispettivamente.

## Implementazione di una interfaccia

Una classe può implementare un'interfaccia per garantire che aderisca a una specifica struttura. Se la classe non implementa tutte le proprietà dell'interfaccia, TypeScript segnalerà un errore.

```tsx
class Employee implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

In questo esempio, la classe `Employee` implementa l'interfaccia `User`. Di conseguenza, la classe deve avere le proprietà `name` e `age`.

## Interfacce con proprietà opzionali e di sola lettura

In TypeScript, è possibile definire proprietà opzionali nelle interfacce, utilizzando il simbolo `?`. Le proprietà di sola lettura, invece, possono essere definite utilizzando la parola chiave `readonly`.

```tsx
interface Product {
  id: number;
  name: string;
  description?: string;
  readonly internalId?: string;
}
```

## Proprietà private nelle classi

Le proprietà private in una classe non possono essere accedute o modificate al di fuori della classe stessa. Possono essere utilizzate per incapsulare la logica specifica della classe.

```tsx
private secretIdGenerator(): number {
    return Math.floor(Math.random() * 100);
}
```

## Estensione di interfacce

Un'interfaccia può estendere un'altra interfaccia, ereditandone tutte le proprietà.

```tsx
interface Dog extends Animal {
  breed: string;
}
```

## Introduzione ai Tipi personalizzati

I tipi personalizzati sono un modo per definire tipi di dati specifici che possono essere utilizzati nel codice.

```tsx
type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
```

## Creazione e utilizzo dei Tipi personalizzati

Una volta definito un tipo personalizzato, può essere utilizzato come qualsiasi altro tipo.

```tsx
type EmployeeRecord = {
  id: string;
  name: string;
  department: string;
  daysOff: Day[];
};
```

## Differenze e casi d'uso di Interfacce vs Tipi personalizzati

Le interfacce sono generalmente preferite per rappresentare la forma di un oggetto (come classi, tipi di funzioni e dizionari/oggetti), mentre i Tipi personalizzati sono un po' più flessibili e possono essere utilizzati per una varietà di altre cose, come i tipi di unione, i tipi di intersezione.
Inoltre le interfacce possono essere estese, mentre i tipi personalizzati no.