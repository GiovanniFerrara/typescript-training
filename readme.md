# Built-In TypeScript Types: Partial, Pick, Omit, Promise

## Partial

Il tipo `Partial` in TypeScript rende tutte le proprietà di un tipo come opzionali. Ad esempio:

```typescript
interface Employee {
  name: string;
  age: number;
  department: string;
}

let employee1: Partial<Employee> = {
  name: "John",
};
```

In questo esempio, stiamo creando una variabile `employee1` di tipo `Partial<Employee>`. Questo significa che `employee1` può avere qualsiasi combinazione delle proprietà dell'interfaccia `Employee`, ma nessuna di esse è obbligatoria.

## Pick

Il tipo `Pick` in TypeScript ci permette di scegliere specifiche proprietà da un tipo. Ad esempio:

```typescript
type EmployeeNameAndAge = Pick<Employee, "name" | "age">;

let employee2: EmployeeNameAndAge = {
  name: "John",
  age: 30,
};
```

In questo esempio, stiamo creando un nuovo tipo `EmployeeNameAndAge` che ha solo le proprietà `name` e `age` dell'interfaccia `Employee`.

## Omit

Il tipo `Omit` in TypeScript ci permette di rimuovere specifiche proprietà da un tipo. Ad esempio:

```typescript
type EmployeeWithoutAge = Omit<Employee, "age">;

let employee3: EmployeeWithoutAge = {
  name: "John",
  department: "IT",
};
```

In questo esempio, stiamo creando un nuovo tipo `EmployeeWithoutAge` che ha tutte le proprietà dell'interfaccia `Employee` tranne `age`.

## Promise

Il tipo `Promise` in TypeScript rappresenta un valore che potrebbe non essere ancora disponibile. Ad esempio:

```typescript
function getEmployee(id: string): Promise<Employee> {
  return new Promise((resolve, reject) => {
    // Simulare un'operazione asincrona come il recupero di dati da un'API
    setTimeout(() => {
      resolve({
        name: "John",
        age: 30,
        department: "IT",
      });
    }, 2000);
  });
}

getEmployee("1").then((employee) => console.log(employee));
```

In questo esempio, stiamo creando una funzione `getEmployee` che restituisce una `Promise<Employee>`. Questo significa che la funzione restituirà eventualmente un `Employee`, ma non immediatamente. Utilizziamo quindi la funzione `.then()` per gestire il valore quando è disponibile.