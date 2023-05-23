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

// implementare la funzione sort

// Uso:
const sortedDrivers = sort(drivers, (driver) => driver.lastName);



// esercizio 2
interface Driver2 {
  id: string;
  firstName?: string;
  lastName: string;
  team: string;
}

const drivers2: Driver2[] = [
  { id: '1', firstName: 'Lewis', lastName: 'Hamilton', team: 'Mercedes' },
  { id: '2', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing' },
  {id: '3', lastName: 'Vettel', team: 'Aston Martin'},
];

interface DriverWithFullName {
  id: string;
  fullName: string;
  team: string;
}

// implementare mapAndFilter

// Uso:
const filteredDrivers = mapAndFilter(drivers);
