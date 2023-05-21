// esempio di namespace
// i namespace sono un modo per organizzare il codice in modo che sia più facile da gestire in casi come questo
// posso essere utili in caso di applicazioni sviluppate con vanilla TypeScript
// i namespace sono un modo per evitare conflitti di nomi

namespace MyMath {
  export function sum(x: number, y: number): number {
      return x + y;
  }

  export function subtract(x: number, y: number): number {
      return x - y;
  }
}

window.MyMath = MyMath;