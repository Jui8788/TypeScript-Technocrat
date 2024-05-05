{
  // generic type
  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [1, 2, 3, 4, 5];
  //   const rollNumbers: Array<number> = [1, 2, 3, 4, 5];
  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

  //   const mentors: string[] = ["Mr.X", "Mr.Y", "Mr.Z"];
  //   const mentors: Array<string> = ["Mr.X", "Mr.Y", "Mr.Z"];
  const mentors: GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Shabbir",
      age: 100,
    },

    {
      name: "Jui",
      age: 100,
    },
  ];

  //   type User11 = {
  //     name: string;
  //     age: number;
  //   };

  interface User11 {
    name: string;
    age: number;
  }

  const user1: GenericArray<User11> = [
    {
      name: "Shabbir",
      age: 100,
    },

    {
      name: "Jui",
      age: 100,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];
  const userWithId: GenericTuple<
    number,
    { name: string; age: number; email: string }
  > = [
    1234,
    { name: "Shabbir", age: 40, email: "hasanalshabbir257@gmail.com" },
  ];
}
