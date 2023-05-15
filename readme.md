# Built-In TypeScript Types: Record, Required, Readonly, Exclude, Extract, NonNullable

## Record

Il tipo di utilità Record in TypeScript ci permette di creare un tipo di oggetto dove le chiavi delle proprietà sono stringhe specificate e i valori sono di un certo tipo. Ad esempio:

```typescript
type AnimalAges = Record<'cat' | 'dog', number>;
let ages: AnimalAges = { cat: 2, dog: 3 };
```

In questo esempio, stiamo dicendo che il tipo `AnimalAges` è un oggetto con le chiavi specificate ('cat' e 'dog') e i valori di tipo `number`.

## Required

L'utilità Required in TypeScript rende tutte le proprietà di un tipo obbligatorie. Ad esempio:

```typescript
interface Employee {
  name: string;
  age?: number;
  department: string;
}

type RequiredEmployee = Required<Employee>;
let employee1: RequiredEmployee = {
  name: "John",
  age: 30, // ora questa proprietà è obbligatoria
  department: "IT"
};
```

In questo esempio, stiamo creando un nuovo tipo `RequiredEmployee` che rende tutte le proprietà dell'interfaccia `Employee` obbligatorie. Quindi, anche se `age` era opzionale in `Employee`, è obbligatoria in `RequiredEmployee`.

## Readonly

L'utilità Readonly in TypeScript rende tutte le proprietà di un tipo di sola lettura. Ad esempio:

```typescript
type ReadonlyEmployee = Readonly<Employee>;
let employee2: ReadonlyEmployee = {
  name: "John",
  age: 30,
  department: "IT"
};
// employee2.age = 31; // Questa riga risulterebbe in un errore TypeScript.
```

In questo esempio, stiamo creando un nuovo tipo `ReadonlyEmployee` che rende tutte le proprietà dell'interfaccia `Employee` di sola lettura. Quindi, non possiamo cambiare il valore di `age` dopo che è stato impostato.

## Exclude

L'utilità Exclude in TypeScript esclude certi tipi da un altro tipo. Ad esempio:

```typescript
type Animal = 'cat' | 'dog' | 'horse';
type DomesticAnimal = Exclude<Animal, 'horse'>; // 'cat' | 'dog'
```

In questo esempio, stiamo creando un nuovo tipo `DomesticAnimal` che include solo i tipi in `Animal` che non sono 'horse'.

## Extract

L'utilità Extract in TypeScript estrae certi tipi da un altro tipo. Ad esempio:

```typescript
type AnimalAgain = 'cat' | 'dog' | 'horse';
type DomesticAnimalAgain = Extract<Animal, 'cat' | 'dog'>; // 'cat' | 'dog'
```

In questo esempio, stiamo creando un nuovo tipo `DomesticAnimalAgain` che include solo i tipi in `Animal` che sono anche 'cat' o 'dog'.

## NonNullable

L'utilità NonNullable in TypeScript esclude `null` e `undefined` da un tipo. Ad esempio:

```typescript
type NullableString = string | null | undefined;
type String = NonNullable<NullableString>; // string
```

In questo esempio, stiamo creando un nuovo tipo `String` che include solo i tipi in `NullableString` che non sono `null` o `undefined`. Quindi, il tipo