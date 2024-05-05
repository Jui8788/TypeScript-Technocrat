{
  // Destructuring

  //   Object Destructuring
  const user = {
    id: 345,
    name: {
      firstName: "Mezbaul",
      middleName: "Abedin",
      lastName: "Persian",
    },
    contactNo: "0170000000",
    address: "Uganda",
  };

  const {
    contactNo,
    name: { middleName },
  } = user;

  //   Array Destructuring
  const myFriends = ["Chandler", "Joyi", "Ross", "Rachel", "Monica"];

  const [, , bestFriend, ...rest] = myFriends;
}
