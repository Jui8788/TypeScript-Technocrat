{
    // Type Alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student= {
        name: "Mezba",
        age: 50,
        gender: "Male",
        contactNo: "0170000000",
        address: "Uganda",
    }

    const student2: Student= {
        name: "Mezba",
        age: 50,,
        gender: "Male",
        address: "Uganda",
    }


    // string
    type UserName = string;
    type IsAdmin = boolean;

    const userName : UserName = "Kabul";
    const isAdmin : IsAdmin = true;

    // function
    type Add = (num1: number, num2: number) => number;

    const add : Add = (num1, num2) => num1 + num2;
}
