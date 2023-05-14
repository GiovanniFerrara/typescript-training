const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element not found.");
}

// Definizione di una interfaccia
interface User {
  name: string;
  age: number;
}

// Implementazione di una interfaccia
class Employee implements User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const employee = new Employee("John", 30);

employee.name = "John Doe";

// Interfacce con parametri opzionali
interface Product {
  id: number;
  name: string;
  description?: string;
  readonly internalId?: string;
}

// readonly e private
class HairDrier implements Product {
  id: number;
  name: string;
  description?: string;
  readonly internalId?: string;

  constructor(id: number, name: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.internalId = '123';
  }

  generateId(): HairDrier {
    this.id = this.secretIdGenerator();
    return this
  }


  getId(): number {
    return this.id;
  }

  private secretIdGenerator(): number {
    return Math.floor(Math.random() * 100);
  }
}

const hairDrier = new HairDrier(
  1,
  "Hair Drier",
  "A hair drier is a device that blows hot or ambient air over damp hair to speed the evaporation of water to dry the hair."
);

console.log(hairDrier);


// proprietà Readonly
interface Point {
  readonly x: number;
  readonly y: number;
}

// Estensione interfaccia
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Fido",
  breed: "Labrador",
}

// Introduzione ai tipi custom
type Day =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

// Crezione e uso di un tipo custom
type EmployeeRecord = {
  id: string;
  name: string;
  department: string;
  daysOff: Day[];
};

function printEmployeeRecord(emp: EmployeeRecord) {
  console.log(
    `ID: ${emp.id}, Name: ${emp.name}, Department: ${emp.department}`
  );
}

rootElement.innerHTML = `
  <div>
    <p>Employee: ${employee.name}</p>
    <p>Hair Drier: ${hairDrier.name}</p>
    <p>Dog: ${dog.name}</p>
    <p>Employee Record: ${printEmployeeRecord({
      id: "1",
      name: "John",
      department: "IT",
      daysOff: ["Monday", "Tuesday"], 
    })}</p>
  </div>
`;
