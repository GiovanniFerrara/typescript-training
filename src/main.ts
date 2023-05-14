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

// Function overloading - Sovraccarico di funzioni
function calculateArea(
  shape: "square" | "rectangle",
  ...measurements: number[]
): number {
  if (shape === "square") {
    const side = measurements[0];
    return side * side;
  } else if (shape === "rectangle") {
    // Destructuring array, equivalente a: const base = measurements[0]; const height = measurements[1];
    const [base, height] = measurements;
    return base * height;
  } else {
    throw new Error("Unsupported geometric shape.");
  }
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
<p>calculateArea("square", 10): ${calculateArea("square", 10)}</p>
<p>calculateArea("rectangle", 10, 20): ${calculateArea("rectangle", 10, 20)}</p>
`;
// <p>calculateArea("circle", 10): ${calculateArea("circle", 10)}</p>
