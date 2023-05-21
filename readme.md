##Esercizio 1: Tipizzazione di una funzione

Considera la seguente funzione JavaScript:

```javascript
function saluta(nome) {
  return "Ciao, " + nome;
}
```

Converti questa funzione in TypeScript aggiungendo tipi appropriati.

##Esercizio 2: Funzione con oggetto come parametro

Considera la seguente funzione JavaScript:

```javascript
function dettagliLibro(libro) {
  return libro.titolo + " scritto da " + libro.autore;
}
```

Converti questa funzione in TypeScript aggiungendo tipi appropriati. Definisci un'interfaccia per l'oggetto `libro`.

## Esercizio 3: Funzione di fetch con tipi

Per questo esercizio, il tuo obiettivo è creare una funzione TypeScript che fa una richiesta GET all'endpoint dei post su JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts`) e restituisce i dati.

Inizia definendo un'interfaccia per un post. Un post dovrebbe avere le seguenti proprietà:
```
- userId: number
- id: number
- title: string
- body: string
```
Poi, utilizza `fetch` per ottenere i dati dal server. Ricordati di tipizzare correttamente la risposta.

## Esercizio 4: Funzione di fetch per un singolo post

Ora, crea una funzione TypeScript che prende un ID di post come parametro e fa una richiesta GET all'endpoint di un singolo post su JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts/{id}`). La funzione dovrebbe restituire i dati del post.

## Esercizio 5: Funzione di fetch per i commenti di un post

Il tuo obiettivo per questo esercizio è creare una funzione TypeScript che prende un ID di post come parametro e fa una richiesta GET all'endpoint dei commenti di un post su JSONPlaceholder (`https://jsonplaceholder.typicode.com/posts/{id}/comments`). La funzione dovrebbe restituire i dati dei commenti.

Prima di iniziare, definisci un'interfaccia per un commento. Un commento dovrebbe avere le seguenti proprietà:
```
- postId: number
- id: number
- name: string
- email: string
- body: string
```
## Esercizio 6: Mappare i commenti ai post di appartenenza

Per questo esercizio, il tuo obiettivo è creare una funzione TypeScript che, dato un array di post e un array di commenti, restituisce un nuovo array di post dove ogni post include i suoi commenti correlati.

Inizia definendo le interfacce per un post e un commento, se non lo hai già fatto nei precedenti esercizi. Un post dovrebbe avere le seguenti proprietà:
```
- userId: number
- id: number
- title: string
- body: string
```
Un commento dovrebbe avere le seguenti proprietà:
```
- postId: number
- id: number
- name: string
- email: string
- body: string
```
La funzione dovrebbe prendere due parametri: un array di post e un array di commenti. Dovrebbe restituire un array di post, dove ogni post è un oggetto che include una nuova proprietà comments contenente un array con i commenti correlati.

