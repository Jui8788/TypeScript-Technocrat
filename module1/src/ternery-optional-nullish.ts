{
  // ternary || optional || nullish coalescing operator
  const age: number = 18;

  //   if (age >= 18) {
  //     console.log("adult");
  //   } else {
  //     console.log("Not adult");
  //   }
  const isAdult = age >= 18 ? "adult" : "not adult";
  //   console.log({ isAdult });

  //   nullish coalescing: null/undefined ----> decision making
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  //   console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Shabbir",
    address: {
      city: "Sylhet",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address found";

  console.log({ permanentAddress });
}
