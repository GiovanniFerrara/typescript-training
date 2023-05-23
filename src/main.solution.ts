// interface Driver {
//   id: string;
//   firstName: string;
//   lastName: string;
//   team: string;
// }

// const drivers: Driver[] = [
//   { id: '1', firstName: 'Lewis', lastName: 'Hamilton', team: 'Mercedes' },
//   { id: '2', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing' },
//   // ...
// ];

// type KeySelector<T> = (arg: T) => string | number;

// function sort<T>(array: T[], keySelector: KeySelector<T>): T[] {
//   return array.sort((a, b) => {
//     const keyA = keySelector(a);
//     const keyB = keySelector(b);
//     if (keyA < keyB) {
//       return -1;
//     }
//     if (keyA > keyB) {
//       return 1;
//     }
//     return 0;
//   });
// }

// // Uso:
// const sortedDrivers = sort(drivers, (driver) => driver.lastName);



// // esercizio 2
// interface Driver2 {
//   id: string;
//   firstName?: string;
//   lastName: string;
//   team: string;
// }

// const drivers2: Driver2[] = [
//   { id: '1', firstName: 'Lewis', lastName: 'Hamilton', team: 'Mercedes' },
//   { id: '2', firstName: 'Max', lastName: 'Verstappen', team: 'Red Bull Racing' },
//   {id: '3', lastName: 'Vettel', team: 'Aston Martin'},
// ];

// interface DriverWithFullName {
//   id: string;
//   fullName: string;
//   team: string;
// }

// function mapAndFilter(drivers: Driver2[]): DriverWithFullName[] {
//   return drivers.reduce((acc: DriverWithFullName[], driver) => {
//     if (driver.firstName) {
//       acc.push({
//         id: driver.id,
//         fullName: `${driver.firstName} ${driver.lastName}`,
//         team: driver.team,
//       });
//     }
//     return acc;
//   }, []);
// }

// // Uso:
// const filteredDrivers = mapAndFilter(drivers);
