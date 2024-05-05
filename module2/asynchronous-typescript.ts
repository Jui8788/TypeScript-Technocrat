{
  type Something = { something: string };
  // promise
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "Shabbir" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
    // console.log(data);
  };

  showData();

  type User = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<User> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
    // console.log(data);
  };

  getToDo();
}
