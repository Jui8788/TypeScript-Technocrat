// nullable types
const searchName = (value: string | null) => {
  if (value) {
    console.log("Searching");
  } else {
    console.log("There is nothing to search");
  }
};

// searchName(null);

// unknown types
const getSpeedInMeterPerSec = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = (value * 1000) / 3600;
    console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else if (typeof value === "string") {
    const [result, unit] = value.split(" ");
    const convertedSpeed = (parseFloat(result) * 1000) / 3600;
    console.log(`The speed is ${convertedSpeed} ms^-1`);
  } else {
    console.log("Wrong Input");
  }
};

// getSpeedInMeterPerSec(1000);
// getSpeedInMeterPerSec(`1000 kmh^-1`);
// getSpeedInMeterPerSec(null);

// never types
const throwError = (msg: string): never => {
  throw new Error(msg);
};

throwError("Error:404");
