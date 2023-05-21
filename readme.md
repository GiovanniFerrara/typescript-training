# Gestione degli errori in TypeScript

La gestione degli errori è un aspetto fondamentale di qualsiasi applicazione di qualità. TypeScript, essendo un sovrainsieme di JavaScript, eredita diversi metodi di gestione degli errori da JavaScript e ne introduce anche di nuovi.

## Try/Catch

Try/Catch è un metodo standard per gestire gli errori in JavaScript e TypeScript. Qualsiasi errore che si verifica all'interno del blocco `try` viene catturato e può essere gestito nel blocco `catch`.

```typescript
try {
  // Codice che potrebbe generare un errore
} catch (error) {
  // Gestione dell'errore
}
```

## Classi di errori personalizzate

In TypeScript, puoi creare le tue classi di errori personalizzate per gestire specifici tipi di errori. Questo ti permette di creare errori più descrittivi e di gestire specifici tipi di errori in modo più efficace.

```typescript
class MyError extends Error {
  constructor(message?: string) {
    super(message); // (1)
    this.name = "MyError"; // (2)
  }
}
```

## Promise.catch

Quando si lavora con operazioni asincrone che restituiscono una Promise, gli errori possono essere catturati utilizzando il metodo `catch` della Promise.

```typescript
doSomethingAsync()
  .then(result => {
    // Gestisci il risultato
  })
  .catch(error => {
    // Gestisci l'errore
  });
```

## Async/Await con Try/Catch

Se stai utilizzando `async` e `await` per gestire le operazioni asincrone, puoi utilizzare `try`/`catch` per gestire gli errori asincroni.

```typescript
async function doSomethingAsync() {
  try {
    const result = await doAnotherAsyncThing();
    // Gestisci il risultato
  } catch (error) {
    // Gestisci l'errore
  }
}
```

## Operatore di Coalescenza Nullish (`??`)

Questo operatore può essere utilizzato per gestire valori nulli o non definiti, fornendo un valore predefinito. Se l'espressione a sinistra è `null` o `undefined`, l'operatore restituirà l'espressione a destra, altrimenti restituirà l'espressione a sinistra.

```typescript
const value = possiblyNullValue ?? defaultValue;
```

## Operatore Optional Chaining (`?.`)

Questo operatore consente di accedere in sicurezza alle proprietà annidate di un oggetto, restituendo `undefined` se qualsiasi proprietà intermedia è `null` o `undefined`.

```typescript
const value = obj?.prop?.subProp;
```
