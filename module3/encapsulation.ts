{
  // Encapsulation
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }

    private getBalance() {
      return this._balance;
    }

    public getHiddenMethod() {
      return this.getBalance();
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getHiddenMethod();
  console.log(myBalance);
}
