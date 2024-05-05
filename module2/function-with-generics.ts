{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bangladesh");
  const res2 = createArrayWithGeneric<boolean>(true);

  type User = { id: number; name: string };

  const res4 = createArrayWithGeneric<User>({
    id: 8788,
    name: "SuJu",
  });

  const createArrayWithGenericTuple = <T, X>(param1: T, param2: X): [T, X] => {
    return [param1, param2];
  };

  const res10 = createArrayWithGenericTuple<string, number>("Bangladesh", 1971);

  const res11 = createArrayWithGenericTuple<string, { name: string }>(
    "Bangladesh",
    { name: "Mujib" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "shabbir",
    email: "x@gmail.com",
    devType: "fullstack",
  });

  const student2 = addCourseToStudent({
    name: "Jui",
    email: "y@gmail.com",
    devType: "fullstack",
  });
}
