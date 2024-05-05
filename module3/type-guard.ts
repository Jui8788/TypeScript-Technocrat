{
  // type guard
  type Alphanumeric = string | number;

  //   typeof guard
  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);

  const result2 = add("2", "3");
  console.log(result2);

  //   in guard --> object
  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} & my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Shabbir",
  };

  const adminUser: AdminUser = {
    name: "Jui",
    role: "admin",
  };

  getUser(normalUser);
  getUser(adminUser);
}
