// esempio di modulo
// i moduli sono file che contengono codice TypeScript e che possono essere importati in altri file
// i moduli sono un modo per organizzare il codice in modo che sia più facile da gestire
// i moduli sono un modo per evitare conflitti di nomi

// export singolo 
export function sum(x: number, y: number): number {
  return x + y;
}

// export singolo
export function subtract(x: number, y: number): number {
  return x - y;
}


const MathModule = {
  sum,
  subtract
};

// export default MathModule;
export default MathModule;