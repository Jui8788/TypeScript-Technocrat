{
  // constraint with key of operator
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; //manually
  const person1: Owner = "car";

  type Owner1 = keyof Vehicle;
  const person2: Owner1 = "ship";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Shabbir",
    age: 23,
  };

  const car = {
    brand: "Toyota",
    model: "x-corolla",
  };

  const result1 = getPropertyValue(user, "name");
  const result22 = getPropertyValue(car, "model");
}
