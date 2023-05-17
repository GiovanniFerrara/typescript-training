**Compito per Casa 1: Funzioni Avanzate e Data Fetching**

Crea una funzione `fetchData` che prende un URL come parametro. Questa funzione dovrebbe essere in grado di fare una richiesta GET a quell'URL e restituire i dati. La funzione dovrebbe gestire anche eventuali errori di rete o di risposta non valida.


Inoltre, definisci un tipo o un'interfaccia per i dati che ti aspetti di ricevere dal tuo endpoint. Per esempio, se stai facendo una richiesta all'endpoint di un post su JSONPlaceholder, dovresti creare un tipo o un'interfaccia `Post`.

Puoi usare: 'https://jsonplaceholder.typicode.com/posts/1' come URL per testare la tua funzione.
Per rendere l'esercizio più interessante, implementeremo una funzione di fetch con ritardi casuali per simulare le variazioni nelle risposte di rete.

**Compito per Casa 2: Interfacce, Classi, Private, Readonly**

Crea una classe `BankAccount` che rappresenta un conto bancario. Questa classe dovrebbe avere le seguenti proprietà:

- `accountNumber`: un numero di conto unico (stringa).
- `accountHolder`: il nome del titolare del conto (stringa).
- `balance`: il saldo attuale del conto (numero). Questa proprietà dovrebbe essere privata.
- `accountOpenedDate`: la data in cui il conto è stato aperto (oggetto Date). Questa proprietà dovrebbe essere readonly e impostata al momento della creazione dell'oggetto.

La classe dovrebbe avere i seguenti metodi:

- `deposit(amount: number)`: deposita un importo nel conto (aggiunge l'importo al saldo).
- `withdraw(amount: number)`: preleva un importo dal conto (sottrae l'importo dal saldo). Questo metodo dovrebbe restituire un errore se l'importo è superiore al saldo attuale.
- `getBalance()`: restituisce il saldo attuale del conto. Questo è l'unico modo per accedere al saldo, dato che la proprietà `balance` è privata.

Ricorda di utilizzare le keyword `private` e `readonly` dove necessario per soddisfare i requisiti. Sei anche incoraggiato a creare un'interfaccia `IBankAccount` che la classe `BankAccount` implementerà.