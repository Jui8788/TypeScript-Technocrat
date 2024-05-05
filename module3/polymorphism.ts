{
  // Polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep() {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  //   getSleepingHours(person1);
  //   getSleepingHours(person2);
  //   getSleepingHours(person3);

  class Area {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Area {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Area {
    height: number;
    width: number;

    constructor(height: number, width: number) {
      super();
      this.height = height;
      this.width = width;
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Area) => {
    console.log(param.getArea());
  };

  const shape1 = new Area();
  const shape2 = new Circle(10);
  const shape3 = new Rectangle(5, 10);

  getShapeArea(shape1);
  getShapeArea(shape2);
  getShapeArea(shape3);
}
