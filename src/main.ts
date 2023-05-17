const rootElement: HTMLElement | null = document.getElementById("root");

if (!rootElement) {
  throw new Error("root element not found.");
}

// Funzioni con parametri opzionali
function greet(name?: string) {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello!";
  }
}

// Funzioni con parametri di default
function greetWithOptionalArgument(name: string = "World") {
  return `Hello, ${name}!`;
}

// Parametri rest in TypeScript
function sum(...numbers: number[]): number {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }

  return result;
}

type Square = {
  name: "square";
  size: number;
};

type Rectangle = {
  name: "rectangle";
  width: number;
  height: number;
};

type Shape = Square | Rectangle;
// Function overloading - Sovraccarico di funzioni
function calculateArea(shape: Shape) {
  if (shape.name === "square") {
    return shape.size * shape.size;
  } else if (shape.name === "rectangle") {
    return shape.width * shape.height;
  }

  throw new Error("Invalid shape");
}

rootElement.innerHTML = `
<h3>Funzioni con parametri opzionali</h3>
<p>Greet(): ${greet()}</p>
<p>Greet("John"): ${greet("John")}</p>

<h3>Funzioni con parametri di default</h3>
<p>GreetWithOptionalArgument(): ${greetWithOptionalArgument()}</p>

<h3>Parametri rest in TypeScript</h3>
<p>sum(1, 2, 3, 4, 5): ${sum(1, 2, 3, 4, 5)}</p>
<p>sum(10, 20, 30): ${sum(10, 20, 30)}</p>
<p>sum(2): ${sum(2)}</p>

<h3>Function overloading - Sovraccarico di funzioni</h3>
<p>calculateArea("square", 10): ${calculateArea({
  name: "square",
  size: 10,
})}</p>
<p>calculateArea("rectangle", 10, 20): ${calculateArea({
  name: "rectangle",
  width: 10,
  height: 20,
})}</p>
`;
// <p>calculateArea("circle", 10): ${calculateArea("circle", 10)}</p>
