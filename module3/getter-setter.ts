{
  // Getter & Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // public addDeposit(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    // setter
    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }

    // public getBalance() {
    //   return this._balance;
    // }

    // getter
    get balance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);

  //   goribManusherAccount.addDeposit(20);
  goribManusherAccount.deposit = 50;
  //   const myBalance = goribManusherAccount.getBalance();
  const myBalance = goribManusherAccount.balance;
  console.log(myBalance);
}
