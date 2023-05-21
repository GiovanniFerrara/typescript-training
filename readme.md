# Progetto finale TypeScript: Previsioni meteo CLI

In questo progetto finale, creerai un'applicazione da linea di comando (CLI) che richiede dati meteo da una API e li stampa nel terminale. Utilizzerai TypeScript insieme a due librerie esterne, `axios` per le richieste HTTP e `yargs` per l'elaborazione degli argomenti da linea di comando.

## Configurazione del progetto

Per iniziare, dovrai configurare un nuovo progetto TypeScript. Installa Node.js e npm se non lo hai già fatto, poi crea una nuova cartella per il tuo progetto. Inizializza npm con `npm init -y` e installa TypeScript con `npm install --save-dev typescript`. Crea un file `tsconfig.json` con `npx tsc --init`.

Successivamente, installa le librerie necessarie per il progetto. Useremo `axios` per effettuare richieste HTTP e `yargs` per gestire gli argomenti della CLI.

## Creazione del modulo API

Il tuo primo compito sarà creare un modulo per gestire la comunicazione con l'API OpenWeatherMap. Questo modulo dovrebbe esportare una funzione che accetta un nome di città come argomento e restituisce i dati meteo per quella città. 

Ricorda di gestire correttamente gli errori in questa funzione - se la richiesta HTTP fallisce, la tua funzione dovrebbe catturare l'errore e non lasciare che si propaghi all'utente.

## Creazione del modulo CLI

Dopo aver creato il modulo API, il tuo prossimo compito sarà creare un modulo per la CLI. Questo modulo dovrebbe utilizzare `yargs` per analizzare gli argomenti da linea di comando e chiamare la funzione del tuo modulo API in base a questi argomenti. 

La tua CLI dovrebbe supportare un argomento `--city`, che specifica la città per cui l'utente desidera ottenere le previsioni meteo. Dovrebbe stampare le previsioni meteo per quella città nel terminale.

## Compilazione e test

Dopo aver completato il tuo codice TypeScript, dovrai compilare il tuo progetto per trasformare il tuo codice TypeScript in JavaScript. Aggiungi uno script `build` al tuo file `package.json` per farlo.

Infine, testa il tuo progetto per assicurarti che funzioni correttamente. Dovresti essere in grado di eseguire il tuo script compilato con `node`, passare l'argomento `--city` e vedere le previsioni meteo per la città specificata stampate nel terminale.

Buon coding! Ricorda, l'obiettivo di questo progetto è mettere in pratica le tue abilità TypeScript e familiarizzare con l'interazione con le API e l'elaborazione degli argomenti da linea di comando. Non preoccuparti se incontri ostacoli lungo la strada - l'importante è imparare e migliorare.