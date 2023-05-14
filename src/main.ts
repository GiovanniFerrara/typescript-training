// Tipi di dati primitivi in TypeScript

// Boolean
// Number
// String
// Null
// Undefined

// Tutto il resto è un oggetto (typeof dato restituisce "object")

// Boolean
const isCompleted: boolean = true;
const isLoggedIn: boolean = false;

// Number
const count: number = 10;
const pi: number = 3.14;

// String
const message: string = "Ciao mondo!";
const personName = "Mario";

// Array
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: Array<string> = ["mela", "banana", "arancia"];

// Tuple
const person: [string, number, boolean] = ["Mario", 25, true];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
const favoriteColor: Color = Color.Blue;

// Unknown
const value: unknown = 10;
if (typeof value === "number") {
  const result: number = value + 5;
}

// Any
let dynamicValue: any = "Hello";
dynamicValue = 10;
dynamicValue = true;

// Void
function sayHello(): void {
  console.log("Ciao!");
}

// Null e Undefined
const nullValue: null = null;
const undefinedValue: undefined = undefined;

// Never
function throwError(message: string): never {
  throw new Error(message);
}

// Object
const personObject: object = {
  name: "Mario",
  age: 25,
};

// Annotatazioni di tipo e quado usarle
let age: number = 25;
let firstName: string = "Mario";
let isStudent: boolean = true;

function greet(name: string): void {
  console.log("Hello, " + name);
}

function add(x: number, y: number): number {
  return x + y;
}
