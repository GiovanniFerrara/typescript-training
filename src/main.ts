import { logger } from "./logger";

const rootElement: HTMLElement | null = document.getElementById("root");

if(!rootElement) {
  throw new Error("root element not found.");
}

// Esempio di una funzione che restituisce un valore senza specificare il tipo di ritorno
function add(number1: number, number2: number ){
  return number1 + number2; // TypeScript deduce il tipo di ritorno come number
}

// Esempio di una funzione che restituisce un valore specificando il tipo di ritorno
function subtract(number1: number, number2: number): number {
  return number1 - number2;
}

function addMixedTypes(number1: number, number2: string): string {
  return `${number1}${number2}`; // restituisce una stringa
}

// Esempio di una funzione definita come variabile
let multiply: (x: number, y: number) => number;

// Funzione compatibile con il tipo definito dalla variabile multiply
multiply = function(x: number, y: number): number {
  return x * y;
}

type returnedTypeAdd = ReturnType<typeof add> // number
type returnedTypeSubtract = ReturnType<typeof subtract> // number
type returnedTypeAddMixedTypes = ReturnType<typeof addMixedTypes> // string
type returnedTypeMultiply = ReturnType<typeof multiply> // number

rootElement.innerHTML = `<p>Add: ${add(2, 3)}</p>
                         <p>Subtract: ${subtract(5, 2)}</p>
                         <p>Add Mixed Types: ${addMixedTypes(2, '3')}</p>
                         <p>Multiply: ${multiply(2, 3)}</p>`;
