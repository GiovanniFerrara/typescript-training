/**
 * Funzione Generica
 * Una funzione generica è una funzione che può lavorare con qualsiasi tipo di dati.
 * In questo caso, il tipo T rappresenta qualsiasi tipo di dato.
 */
function genericResult<T>(arg: T): T {
  // Questa funzione restituisce semplicemente l'argomento che riceve
  return arg;
}


// prima cosa deduce il tipo di dato passato alla funzione come primo argomento
// const genericResult = logger(3443);

// function logger(arg: number): number {
//   return arg;
// }

/**
* Array Generico
* I tipi generici possono essere utilizzati anche per definire il tipo di elementi in un array.
* Questa funzione restituisce il primo elemento di un array, indipendentemente dal tipo di elementi dell'array.
*/
function getFirstElement<T>(array: T[]): T {
  return array[0];
}

/**
* Classe Generica
* Possiamo usare i Generics per creare classi che possono lavorare con diversi tipi di dati.
* Questa classe "GenericClass" accetta un tipo T e lo utilizza per il suo metodo "getValue".
* @param user - Un oggetto che rappresenta un utente
* @example
* const user = new GenericUser({
*   name: 'Mario',
*   age: 42
* });
*/

class GenericUser<UserType> {
  private user: UserType

  constructor(user: UserType) {
    this.user = user;
  }

  getUser(): UserType {
      return this.user;
  }
}

interface IUser {
  name: string;
  age: number;
}

const user = new GenericUser({
  name: 'Mario',
  age: 42
});

user.getUser().name // OK

/**
* Interfaccia Generica
* Anche le interfacce possono essere generiche, accettando tipi dinamici.
* L'interfaccia "Calulator" accetta un tipo T e definisce una funzione che restituisce un valore di quel tipo.
*/
interface Calulator<T> {
  getResult: () => T;
}

const calulator: Calulator<number> = {
  getResult: () => 42
};

calulator.getResult().toFixed(2) // OK

/**
* Vincoli sui Generics
* Possiamo mettere dei vincoli sui generics per limitare i tipi di dati che possono essere usati.
* In questo caso, il tipo T deve estendere "Lengthwise", che ha una proprietà "length". Così, siamo sicuri che ogni T avrà una proprietà "length".
*/
interface TypeWithLength {
  length: number;
}

function loggingIdentity<T extends TypeWithLength>(arg: T): T {
  console.log(arg.length);  // ora possiamo accedere alla proprietà length di arg
  return arg;
}

loggingIdentity([1, 2, 3])


/**
 * Esempio 6: Generics con più tipi
 * Possiamo utilizzare più tipi generici nello stesso blocco di codice.
 * Questa funzione riceve due parametri, uno di tipo T e uno di tipo U, e restituisce una tupla.
 */
function pair<T, U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}

/**
* Esempio 7: Classi con metodi generici
* Possiamo creare classi con metodi generici.
* Questa classe "Calculator" ha un metodo "calculate" che può accettare numeri o stringhe.
*/
class Calculator<T extends number | string> {
  calculate(arg1: T, arg2: T): T {
      if (typeof arg1 === 'string' && typeof arg2 === 'string') {
          // se entrambi gli argomenti sono stringhe, li concatena
          return (arg1 + arg2) as T;
      } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
          // se entrambi gli argomenti sono numeri, ritorna la somma
          return (arg1 + arg2) as T;
      }
      throw new Error('Arguments must be both strings or both numbers');
  }
}

/**
* Esempio 8: Generics in combinazione con l'interfaccia "Record"
* L'interfaccia "Record" in TypeScript permette di creare un tipo che rappresenta un oggetto con specifiche proprietà.
* In questo esempio, il tipo "Student" è un oggetto con proprietà che sono nomi di corsi e valori che sono i voti degli studenti.
*/
type Course = 'Math' | 'History' | 'Physics';
type Student<T extends Course> = Record<T, number>;

/**
* Esempio 9: Uso di "Partial" e "Readonly"
* "Partial" e "Readonly" sono tipi generici utili in TypeScript.
* "Partial" rende tutte le proprietà di un tipo opzionali.
* "Readonly" rende tutte le proprietà di un tipo di sola lettura.
*/

interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;

/**
* Esempio 10: Uso di "Pick"
* "Pick" è un altro tipo generico utile, che permette di selezionare alcune proprietà di un tipo.
* In questo esempio, "UserWithOnlyName" ha solo la proprietà "name" del tipo "User".
*/
type UserWithOnlyName = Pick<User, 'name'>;
