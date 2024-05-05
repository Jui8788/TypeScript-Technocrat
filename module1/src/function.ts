{
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 5);

  const addTwo = (num1: number, num2: number): number => num1 + num2;
  addTwo(3, 7);

  // object -> function -> method
  const poorUser = {
    name: "Jui",
    balance: 0,
    addBalance(balance: number): number {
      return this.balance + balance;
    },

    addNewBalance(balance: number): string {
      return `My new balance: ${this.balance + balance}`;
    },
  };

  // Array map
  const arr: number[] = [1, 2, 3, 4];

  const newArr: number[] = arr.map((elem: number): number => elem * elem);
}
