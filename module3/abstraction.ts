{
  // Abstraction: interface,, abstract class

  //   interface Vehicle1 {
  //     name: string;
  //     model: number;
  //   }

  //   const vehicle: Vehicle1 = {
  //     name: "Toyota",
  //     model: 2000,
  //   };

  //   Using interface creating abstraction
  //   idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  //real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car enginer`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am testing the car`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //   Using abstract class creating abstraction

  //   idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am testing the car`);
    }
  }

  //   implementation
  class HondaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car enginer`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
  }

  const hondaCar = new HondaCar();
  hondaCar.startEngine();
}
