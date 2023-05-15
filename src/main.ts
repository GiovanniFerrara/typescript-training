// Partial

interface Employee {
  name: string;
  age: number;
  department: string;
}

let employee1: Partial<Employee> = {
  name: "John",
};

// Pick

type EmployeeNameAndAge = Pick<Employee, "name" | "age">;

let employee2: EmployeeNameAndAge = {
  name: "John",
  age: 30,
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
