// Partial
interface Name {
  firstName: string;
  lastName: string;
}
interface Employee {
  name: Name["firstName"]
  age: number;
  department: string;
}


// Pick

type EmployeeNameAndAge = Pick<Employee, "name" | "age">;

let employee2: EmployeeNameAndAge = {
  age: 30,
  name: 'john'
};

// Omit

type EmployeeWithoutAge = Omit<Employee, "age">;

let employee3: EmployeeWithoutAge = {
  name: "John",
  department: "IT",
};

// Promise

function getEmployee(id: string): Promise<Employee> {
  return new Promise((resolve, reject) => {
  // Simulare un'operazione asincrona come il recupero di dati da un'API
    setTimeout(() => {
      resolve({
        name: "John",
        age: 30,
        department: "IT",
      });
    }, 2000);
  });
}

getEmployee("1").then((employee) => console.log(employee));

interface User {
  id: string;
  name: string;
  surname: string;
}

// interface UserToUpdate{
//   name?: string;
//   surname?: string;
// }

type UserToUpdate = Partial<User>;

type UserToUpdateWithoutId = Omit<User, 'id'>

function updateUser(id: string, user: UserToUpdateWithoutId) {
  user
}