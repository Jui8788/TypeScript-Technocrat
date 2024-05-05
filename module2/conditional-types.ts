{
  // conditional types
  type a1 = null;
  type a2 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;
  type y = a2 extends null ? true : false;

  type z = a2 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  //   type CheckedValue<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckedValue<T> = T extends keyof Sheikh ? true : false;
  type HasShip = CheckedValue<"ship">;
  type HasPlane = CheckedValue<"plane">;
  type HasTractor = CheckedValue<"tractor">;
}
