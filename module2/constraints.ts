{
  // constraints
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 111,
    name: "shabbir",
    email: "x@gmail.com",
    devType: "fullstack",
  });

  const student2 = addCourseToStudent({
    id: 222,
    name: "Jui",
    email: "y@gmail.com",
    devType: "fullstack",
  });
}
