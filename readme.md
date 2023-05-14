### Cos'è un file bundler e come farlo funzionare con un progetto HTML

Parcel è un bundler di applicazioni web che offre funzionalità di hot module replacement (HMR) out of the box. Di seguito sono riportati i passaggi per configurare Parcel con il tuo progetto.

**1. Installazione di Node.js e npm**

Prima di tutto, avrai bisogno di Node.js e npm (Node Package Manager) installati sul tuo computer. Puoi scaricarli da [qui](https://nodejs.org/).

**2. Installazione di Parcel**

Apri il terminale e naviga fino alla tua cartella di progetto, poi esegui il seguente comando per installare Parcel:

```bash
npm install -D parcel-bundler
```

**3. Configurazione di Parcel**

Non c'è bisogno di una configurazione complessa con Parcel! Devi solo modificare il tuo file HTML per assicurarti che punti al tuo file di ingresso JavaScript. Ad esempio:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tua Pagina</title>
</head>
<body>
    <!-- Il tuo contenuto HTML qui -->

    <!-- Includi il tuo JavaScript qui -->
    <script src="src/tuo-file.js"></script>
</body>
</html>
```

**4. Esecuzione di Parcel**

Dopo aver configurato il tuo file HTML, puoi eseguire Parcel sulla tua pagina HTML principale dal terminale:

```bash
npx parcel index.html
```

Parcel avvierà un server di sviluppo locale e si occuperà di ricaricare la pagina ogni volta che salvi un file.

**5. Aggiornamento dei file**

Ora, ogni volta che modifichi un file nel tuo progetto e lo salvi, Parcel ricaricherà automaticamente la pagina nel tuo browser.

Ricorda: Parcel si occupa anche di risolvere le dipendenze per te. Quindi, se il tuo file JavaScript importa altri file o moduli, Parcel li includerà automaticamente nel bundle.