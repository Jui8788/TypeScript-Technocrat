{
  // union types
  //   type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  //   type FullstackDeveloper = "fakibazDeveloper" | "expertDeveloper";

  //   type Developer = FrontendDeveloper | FullstackDeveloper;

  //   const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "Male" | "Female";
  //     bloodGroup: "O+" | "A+" | "AB+" | "B+";
  //   };

  //   const user1: User = {
  //     name: "Jui",
  //     gender: "Female",
  //     bloodGroup: "B+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
