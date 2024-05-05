{
  // utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick
  type NameAge = Pick<Person, "name" | "age">;

  //   Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required
  type PersonRequired = Required<Person>;

  //   Partial
  type PersonPartial = Partial<Person>;

  //   Readonly
  type PersonReadonly = Readonly<Person>;

  const person: PersonReadonly = {
    name: "SuJu",
    age: 24,
    contactNo: "018",
  };

  //   Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj = Record<string, string>;

  const EmptyObject: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
