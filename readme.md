## Configurazione del file tsconfig.json
Il file tsconfig.json è utilizzato per configurare le opzioni del compilatore TypeScript.
Per creare il file tsconfig.json, eseguire il comando seguente:
```
tsc --init
```
Il file tsconfig.json contiene le seguenti opzioni:
- **target**: specifica la versione di ECMAScript che il compilatore TypeScript deve utilizzare per generare il codice JavaScript. Il valore di default è ES3.
- **module**: specifica il sistema di moduli che il compilatore TypeScript deve utilizzare per generare il codice JavaScript. Il valore di default è CommonJS.
- **outDir**: specifica la directory in cui il compilatore TypeScript deve posizionare i file JavaScript generati. Il valore di default è ./dist.
- **rootDir**: specifica la directory radice in cui il compilatore TypeScript deve ricercare i file di origine. Il valore di default è ./src.
- **strict**: abilita tutte le opzioni di controllo di tipo. Il valore di default è false.
- **noImplicitAny**: non consente l'uso di any come tipo per le variabili e i membri delle classi. Il valore di default è false.
- **strictNullChecks**: non consente l'assegnazione di null e undefined a un tipo non esplicitamente dichiarato. Il valore di default è false.
- **noUnusedLocals**: segnala un errore se una variabile locale non viene utilizzata. Il valore di default è false.
- **noUnusedParameters**: segnala un errore se un parametro non viene utilizzato. Il valore di default è false.
- **noImplicitReturns**: segnala un errore se una funzione non restituisce un valore. Il valore di default è false.
- **esModuleInterop**: consente l'importazione di moduli CommonJS in modo che possano essere utilizzati in un contesto ES2015. Il valore di default è false.
- **sourceMap**: genera i file di mappatura sorgente. Il valore di default è false.
- **experimentalDecorators**: abilita le decorazioni per le classi e i membri delle classi. Il valore di default è false.
- **emitDecoratorMetadata**: abilita la generazione di metadati per le decorazioni. Il valore di default è false.
- **baseUrl**: specifica la directory di base per risolvere i moduli. Il valore di default è ./src.
- **paths**: specifica i percorsi dei moduli da risolvere. Il valore di default è {}.
- **include**: specifica un elenco di modelli di file che il compilatore TypeScript deve includere. Il valore di default è ["src/**/*"].
- **exclude**: specifica un elenco di modelli di file che il compilatore TypeScript deve escludere. Il valore di default è ["node_modules", "dist"].

### Esempio di compilazione di semplice progretto TypeScript

Per compilare un semplice progetto TypeScript, modificare il file tsconfig.json

```
   outDir: "./build",
```

e poi eseguire il comando seguente:

```
tsc --watch
```

##

