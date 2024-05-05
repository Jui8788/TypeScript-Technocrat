{
  //   class Counter {
  //     count: number = 0;
  //     increment() {
  //       return (this.count += 1);
  //     }
  //     decrement() {
  //       return (this.count -= 1);
  //     }
  //   }

  //   const instance1 = new Counter(); //--->different memory
  //   console.log(instance1.increment());

  //   const instance2 = new Counter(); //--->different memory
  //   console.log(instance2.decrement());

  // static
  //   class Counter {
  //     static count: number = 0;
  //     increment() {
  //       return (Counter.count += 1);
  //     }
  //     decrement() {
  //       return (Counter.count -= 1);
  //     }
  //   }

  //   const instance1 = new Counter(); //--->same memory
  //   console.log(instance1.increment());

  //   const instance2 = new Counter(); //--->same memory
  //   console.log(instance2.decrement());

  //Without instance
  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }
  }

  console.log(Counter.increment());

  console.log(Counter.decrement());
}
