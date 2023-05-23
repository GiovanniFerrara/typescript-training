# Esercizio TypeScript: Generics e Array.reduce

## Esercizio: Implementa la funzione `sort`

**Obiettivo:** Crea una funzione `sort` ordina un array di oggetti in base a una chiave specificata.
La funzione accettera come parametri un array di oggetti e una funzione 

**Esempio di utilizzo:**

```typescript
interface Driver {
  id: string;
  firstName: string;
  lastName: string;
  team: string;
}

const drivers: Driver[] = [
  { id: '1', firstName: 'Lewis', lastName: 'Hamilton', team: 'Mercedes' },
  { id: '2', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing' },
  // ...
];

// Ordina i piloti per nome
const sortedDrivers = sort(drivers, (driver) => driver.lastName);
```

**Suggerimenti:**

- Usa il metodo `Array.sort` per ordinare l'array

## Esercizio: Implementa la funzione mapAndFilter usando Array.reduce

**Obiettivo:** Crea una funzione `mapAndFilter` che accetta un array di oggetti e una funzione di mapping e una funzione di filtro.
La funzione dovrebbe ritornare i valori l'oggetto driver modificato in modo tale da ritornare fullName anzichè firstName e lastName.
E in più dovrebbe escludere i piloti che non hanno un firstName definito.

**Esempio di utilizzo:**

```typescript
interface Driver {
  id: string;
  firstName?: string;
  lastName: string;
  team: string;
}

const drivers: Driver[] = [
  { id: '1', firstName: 'Lewis', lastName: 'Hamilton', team: 'Mercedes' },
  { id: '2', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing' },
  {id: '3', lastName: 'Vettel', team: 'Aston Martin'},
];

// Filtra i piloti per nome e cognome
const filteredDrivers = mapAndFilter(drivers); // [{ id: '1', fullName: 'Lewis Hamilton', team: 'Mercedes' }, { id: '2', fullName: 'Max Verstappen', team: 'Red Bull Racing' }]
```

**Suggerimenti:**

- Non avrai bisogno di usare generics in questo esercizio


