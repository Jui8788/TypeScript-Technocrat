{
  // access modifiers

  //   special cases
  //   Private: When a class member is marked as private, it means it can only be accessed within the same class. This member is inaccessible from outside the class, including subclasses.
  //   Protected: When a class member is marked as protected, it means it can be accessed within the same class and by its subclasses. However, it's still inaccessible from outside the class hierarchy.

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

    public getBalance() {
      return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
  goribManusherAccount.addDeposit(20);
  const myBalance = goribManusherAccount.getBalance();
  console.log(myBalance);
}
