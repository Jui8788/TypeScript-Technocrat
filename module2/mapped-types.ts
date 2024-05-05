{
  // mapped types
  const arrOfNums: number[] = [1, 2, 3, 4];

  //   const arrOfStrs: string[] = ["1", "2", "3", "4"];
  const arrOfString: string[] = arrOfNums.map((number) => number.toString());
  console.log(arrOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //lookup type

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //   type AreaString = {
  //     // [key in "height" | "width"]: string;
  //     [key in keyof AreaNumber]: string;
  //   };

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}
