Installazione di TypeScript:
Per installare TypeScript, è necessario avere Node.js installato nel proprio sistema. Seguire i passaggi seguenti:

1. Aprire il terminale o la finestra della riga di comando. Digitare il seguente comando per inizializzare un progetto npm:
    ```
    npm init
    ```
2. Eseguire il seguente comando per installare TypeScript globalmente tramite npm (Node Package Manager):

   ```
   npm install -D typescript
   ```

Una volta completata l'installazione, TypeScript è pronto per essere utilizzato.

Scrittura di un semplice programma TypeScript:
Creiamo un semplice programma TypeScript che stampi "Hello, TypeScript!" sulla console:

1. Creare un nuovo file con estensione ".ts" (ad esempio, "hello.ts") utilizzando un editor di testo o un ambiente di sviluppo integrato (IDE).
2. All'interno del file, digitare il seguente codice TypeScript:

   ```typescript
   const message: string = "Hello, TypeScript!";
   console.log(message);
   ```

3. Eseguire il seguente comando per compilare il file TypeScript:

   ```
   npx tsc nomefile.ts
   ```

   Ad esempio, se il nome del file è "hello.ts", il comando sarà:

   ```
   tsc hello.ts
   ```
4. Dopo l'esecuzione del comando, verrà generato un file JavaScript con lo stesso nome del file TypeScript (ad esempio, "hello.js").

Ora puoi eseguire il file JavaScript generato utilizzando Node.js o includendolo in un file HTML per l'esecuzione nel browser. Ad esempio, nel caso di Node.js, puoi eseguire il comando:
```
   node hello.js
```
E vedrai l'output "Hello, TypeScript!" sulla console.
