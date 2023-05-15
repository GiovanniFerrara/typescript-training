// Record
// L'utilità Record ci permette di creare un tipo di oggetto dove le chiavi delle proprietà sono stringhe specificate e i valori sono di un certo tipo.

type AnimalAges = Record<'cat' | 'dog', number>;
let ages: AnimalAges = { cat: 2, dog: 3 };

// Required
// L'utilità Required rende tutte le proprietà di un tipo obbligatorie.

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

// Readonly
// L'utilità Readonly rende tutte le proprietà di un tipo di sola lettura.

type ReadonlyEmployee = Readonly<Employee>;
let employee2: ReadonlyEmployee = {
  name: "John",
  age: 30,
  department: "IT"
};
// dipendente2.eta = 31; // Questa riga produrrebbe un errore TypeScript.

// Exclude
// L'utilità Exclude esclude certi tipi da un altro tipo.

type Animal = 'cat' | 'dog' | 'horse';
type DomesticAnimal = Exclude<Animal, 'horse'>; // 'cat' | 'dog'

// Extract
// L'utilità Extract estrae certi tipi da un altro tipo.

type AnimalAgain = 'cat' | 'dog' | 'horse';
type DomesticAnimalAgain = Extract<Animal, 'cat' | 'dog'>; // 'cat' | 'dog'

// NonNullable
// L'utilità NonNullable esclude null e undefined da un tipo.

type NullableString = string | null | undefined;
type StringNonNullable = NonNullable<NullableString>; // string
