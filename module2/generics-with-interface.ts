{
  // generic interface
  interface Developer123<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type HuaweiWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer123<HuaweiWatch> = {
    name: "Shabbir",
    computer: {
      brand: "Smasung",
      model: "corei-3",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Huawei",
      model: "ks-60",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    sleepTrack: boolean;
    heartTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer123<AppleWatch, YamahaBike> = {
    name: "Jui",
    computer: {
      brand: "Mac",
      model: "xen-5",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "kn-90",
      sleepTrack: true,
      heartTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
}
