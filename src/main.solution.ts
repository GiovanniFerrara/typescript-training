interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchData(url: string): Promise<Post> {
  // Simula un ritardo di rete casuale tra 1 e 3 secondi
  await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Post = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
}

// Utilizzo della funzione
fetchData('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error('An error occurred: ', error));


// ---------------------------------------------------------------------------------------------


interface IBankAccount {
  accountNumber: string;
  accountHolder: string;
  accountOpenedDate: Date;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

class BankAccount implements IBankAccount {
  accountNumber: string;
  accountHolder: string;
  private balance: number;
  readonly accountOpenedDate: Date;

  constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = initialBalance;
    this.accountOpenedDate = new Date();
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient balance!');
    }
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Utilizzo della classe
const myAccount = new BankAccount('123456', 'John Doe', 500);
myAccount.deposit(200);
myAccount.withdraw(100);
console.log(myAccount.getBalance()); // Stampa: 600
