// Utilizzo della struttura try-catch per gestire errori sincroni
function exampleTryCatch() {
  try {
    // Blocco di codice potenzialmente pericoloso
    let value = riskyOperation();
  } catch (error) {
    // Gestione dell'errore
    console.error(error);
  }
}

// Creazione di classi di errori personalizzate
class CustomError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try{
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    // Gestione dell'errore
    console.error(error);
  }
}

// Gestione di errori asincroni con Promise
function examplePromiseError() {
  doAsyncOperation()
    .then((result) => {
      // Fai qualcosa con il risultato
    })
    .catch((error) => {
      // Gestione dell'errore
      console.error(error);
    });
}

// Gestione di errori asincroni con async / await
async function exampleAsyncAwaitError() {
  try {
    let result = await doAsyncOperation();
    // Fai qualcosa con il risultato
  } catch (error) {
    // Gestione dell'errore
    console.error(error);
  }
}

// Controllo degli errori con l'operatore "nullish coalescing"
function exampleNullishCoalescing() {
  let riskyResult = riskyOperation();
  let safeResult = riskyResult ?? "Default Value";
}

// Controllo degli errori con l'operatore "optional chaining"
function exampleOptionalChaining() {
  let riskyObject = getRiskyObject();
  let safeValue = riskyObject?.property?.value;
}