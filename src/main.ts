const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element not found.");
}

// Intersection types
type Employee = {
  company: string;
};

type Person = {
  id: string;
  name: string;
};

type PersonEmployed = Employee & Person;

let personEmployed: PersonEmployed = {
  id: "1",
  name: "John",
  company: "ACME Corp"
};

// Union types
type StringOrNumber = string | number;

let a: StringOrNumber = "hello"; // ok
let b: StringOrNumber = 10; // ok

// Discriminated Unions
enum ShapeKind {
  Circle,
  Square
}
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case ShapeKind.Circle:
      return Math.PI * shape.radius ** 2;
    case ShapeKind.Square:
      return shape.sideLength ** 2;
  }
}

const circle: Circle = { kind: ShapeKind.Circle, radius: 10 };
const square: Square = { kind: ShapeKind.Square, sideLength: 5 };

rootElement.innerHTML = `
  <div>
    <h1>Typescript Playground</h1>
    <p> personEmployed:  ${JSON.stringify(personEmployed)} </p>
    <p> getArea(circle):  ${getArea(circle)} </p>
    <p> getArea(square):  ${getArea(square)} </p>
  </div>
`;
