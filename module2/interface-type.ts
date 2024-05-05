{
  // interface

  //   type alias
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "Shabbir",
    age: 100,
    role: "manager",
  };

  //   interface
  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole2 = {
    name: "Jui",
    age: 100,
    role: "manager",
  };

  type rollNumber = number;

  //   js: object, array->object, function->object

  //   using type alias
  type Roll1 = number[];
  const rollNumber1: Roll1 = [1, 2, 3];

  //   using interface
  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber2: Roll2 = [86, 87, 88];

  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;
}
