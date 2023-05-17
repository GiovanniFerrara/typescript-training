##Interfacce, Classi, Private e Readonly in TypeScript**

###Esercizio 1: Interfacce e Classi**

In questo esercizio, il tuo obiettivo è creare un'interfaccia e una classe in TypeScript che rappresentano un "Utente".

1. Inizia definendo un'interfaccia `IUser` con le seguenti proprietà:
    - id: number
    - username: string
    - email: string

2. Poi, crea una classe `User` che implementa l'interfaccia `IUser`. La classe dovrebbe avere un costruttore che accetta un oggetto con le proprietà `id`, `username`, e `email`.

**Esercizio 2: Metodi Privati e Proprietà Readonly**

Ora, estenderemo la classe `User` dall'esercizio precedente.

1. Aggiungi una nuova proprietà `password` alla classe `User`. Questa proprietà dovrebbe essere privata, il che significa che non può essere accessibile o modificabile al di fuori della classe.

2. Aggiungi un metodo privato `encryptPassword` che prende una password come stringa e restituisce una versione "criptata" della password (per questo esercizio, puoi semplicemente restituire la stringa originale seguita da "encrypted").

3. Modifica il costruttore della classe `User` per accettare anche una password. Il costruttore dovrebbe chiamare il metodo `encryptPassword` per criptare la password prima di assegnarla alla proprietà `password`.

4. Infine, aggiungi una proprietà `readonly` alla classe `User` chiamata `registrationDate`. Questa proprietà dovrebbe essere impostata al momento della creazione dell'oggetto `User` e non dovrebbe mai cambiare dopo. La proprietà `readonly` dovrebbe essere un oggetto `Date` che rappresenta il momento in cui l'utente è stato creato.

**Ricorda:**

- Un metodo o una proprietà privata in una classe TypeScript può essere preceduta dalla keyword `private`. Questo rende il metodo o la proprietà inaccessibile al di fuori della classe.
- Una proprietà `readonly` in una classe TypeScript può essere preceduta dalla keyword `readonly`. Questo impedisce che la proprietà venga modificata dopo la creazione dell'oggetto.
