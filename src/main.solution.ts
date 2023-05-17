interface IUser {
  id: number;
  username: string;
  email: string;
}

class User implements IUser {
  id: number;
  username: string;
  email: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
  }
}

// ---------------------------------------------- 2 ----------------------------------------------

class User1 implements IUser {
  id: number;
  username: string;
  email: string;
  private password: string;  // Aggiunta della proprietà privata

  constructor(user: IUser, password: string) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = this.encryptPassword(password);  // Criptazione della password
  }

  // Metodi privati
  private encryptPassword(password: string): string {
    return password + 'encrypted';  // Simulazione di criptazione
  }
}

class User2 implements IUser {
  id: number;
  username: string;
  email: string;
  private password: string;
  readonly registrationDate: Date;  // Aggiunta della proprietà readonly

  constructor(user: IUser, password: string) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = this.encryptPassword(password);
    this.registrationDate = new Date();  // Impostazione della data di registrazione al momento della creazione
  }

  private encryptPassword(password: string): string {
    return password + 'encrypted';
  }
}

