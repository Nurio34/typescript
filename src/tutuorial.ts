//!---------------
let str = "nurio34";
str = str.toUpperCase();
str = true;

//!---------------
let nick: "nuri" | "salih" | "ersoy" = "salazar";
nick = "ersoy";
nick = "pirate";

//!-----------------
let numbers: number[] = [1, 2, 3, "string"];

let items: (string | number)[] = ["nuri", 1, true, undefined, "salih", 3];
items.push(nick);
items.push(false);

//!------------------
let obj = {
    name: "salih",
    age: 34,
    married: true,
    hobbies: ["sport", "web dev", "read documentation"],
    wife: "",
};
obj = { name: "salih" };
obj.name = "nuri";
obj.age = "35";
obj.hobbies = { 1: "sport" };
obj.hobbies = ["reding"];
obj.wife = "emine";
obj.pet = "dog";

//!------------------
let obj2: {
    city: string;
    country: string;
    population: number;
    isOk: boolean;
} = {
    city: "istanbul",
    country: "turkey",
    population: 90000000,
    isOk: false,
};

//!-----------------
let pen = { title: "pen", cost: 10 };
let phone = { cost: 2000, brand: "ıphone" };
let book = { title: "pen", cost: 20, name: "Guide of Galaxy Hitchhokers" };

let arr: { title: string; cost: number }[] = [pen, phone, book];

//!-----------------
let pen1 = { title: "pen", cost: 10 };
let phone1 = { cost: 2000, brand: "ıphone" };
let book1 = { title: "pen", cost: 20, name: "Guide of Galaxy Hitchhokers" };

let arr1: { title?: string; cost: number }[] = [pen1, phone1, book1];

let arr_readOnly: { readonly title?: string; cost: number }[] = [
    pen1,
    phone1,
    book1,
];
arr_readOnly[0].title = "pencil";
arr_readOnly[0].cost = 100;

//!---------------------
const calcDiscount = (price: number, hasDiscount: boolean): number | string =>
    hasDiscount ? price * 0.8 : "No discount";

//!--------CHALLANGE--------
const chars: string[] = ["b", "c", "d", "y", "z", "i"];
const isInChars = (char: string): boolean => {
    return chars.includes(char);
};

//!--------------
const calcDisc = (price: number, discount?: number): number => {
    return price - (discount || 0);
};
const calcDisc2 = (price: number, discount: number = 20): number => {
    return price - discount;
};

//!----------
const sum = (message: string, ...list: number[]) => {
    const total = list.reduce((sum, num) => sum + num, 0);

    return `${message}${total}`;
};

//!-----------
const handleInput = (input: string | number): string | number => {
    return typeof input === "string" ? input : input * 7;
};

//!---------
const createEmploye = ({
    id,
}: {
    id: number;
}): { id: number; isActive: boolean } => {
    return { id: id, isActive: id % 2 === 0 };
};

//!-----------
const processData = (
    input: string | number,
    config: { reverse: boolean } = { reverse: false },
) => {
    return typeof input === "number"
        ? input ** 2
        : typeof input === "string" && config.reverse
        ? input.split("").reverse().join("").toUpperCase()
        : input.toUpperCase();
};

//! ----------------- TYPE ALLIAS -----------------------

type StrOrNum = string | number;

let variable: StrOrNum = "nuri";
variable = 32;

//! -----------
type Info = { name: string; age: number; married: boolean };

const Nuri: Info = { name: "nuri", age: 34, married: true };

//! ------------

type Theme = "light" | "dark" | "grayscale";

let theme: Theme = "dark";

const setTheme = (t: Theme): string => {
    return `Theme is changed to ${t}`;
};

//! ---------- CHALLANGE --------

type Employee = { id: number; name: string; department: string };
type Menager = { id: number; name: string; employees: {}[] };
type Staff = Employee | Menager;

const printStaffDetails = (staff: Staff) => {
    return "employees" in staff ? staff.employees : staff.department;
};

const alice: Employee = { id: 1, name: "alice", department: "purchase" };
const bob: Employee = { id: 2, name: "bob", department: "sales" };

const john: Menager = { id: 3, name: "john", employees: [alice, bob] };

//!-----------------

type Message = "bad" | "normal" | "good";

interface Book {
    readonly isbn: number;
    name: string;
    author: string;
    isNew: boolean;
    price: number;
    printAuthor(): string;
    printMsg(msg: Message): string;
}

type DiscountedBook = Book & {
    discount: number;
    printDiscount(): string;
};

const Imposible: Book = {
    isbn: 1,
    name: "imposible",
    author: "adam fewer",
    isNew: false,
    price: 10,
    printAuthor() {
        return `Author is ${this.author}`;
    },
    printMsg(msg) {
        return `The book of "${this.name.toLocaleUpperCase()}" is ${msg}`;
    },
};

const Earth: DiscountedBook = {
    isbn: 2,
    name: "Earth",
    author: "melisa kengo",
    isNew: true,
    price: 20,
    printAuthor() {
        return `Author is ${this.author}`;
    },
    printMsg(msg) {
        return `The book of "${this.name.toLocaleUpperCase()}" is ${msg}`;
    },
    discount: 0.33,
    printDiscount() {
        return `Discount rate in ${this.name} is %${this.discount
            .toString()
            .slice(2)}`;
    },
};

//! --------- CHALLANGE ----------

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: number;
    uprageRam(): number;
}

const Mac24Pro: Computer = {
    id: 1,
    brand: "Apple",
    ram: 8,
    uprageRam: function name() {
        return this.ram * 2;
    },
};

//! ----------

interface Person {
    name: string;
    age: number;
    getDetails(): string;
}
interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

const Nuri1: Person = {
    name: "Nuri",
    age: 31,
    getDetails() {
        return `The name is ${this.name} and age is ${this.age}`;
    },
};

interface Employee1 extends Person {
    workID: number;
    department: string;
    getWorkDetail(): string;
}

const Emine1: Employee1 = {
    name: "Emine",
    age: 31,
    workID: 1,
    department: "sales",
    getDetails() {
        return `The name is ${this.name} and age is ${this.age}`;
    },
    getWorkDetail() {
        return `${this.name}'s work id is ${this.workID}`;
    },
};

interface Menager1 extends Employee1 {
    menage(): void;
}

const Ahmet1: Menager1 = {
    name: "Ahmet",
    age: 31,
    workID: 1,
    department: "boss",
    getDetails() {
        return `The name is ${this.name} and age is ${this.age}`;
    },
    getWorkDetail() {
        return `${this.name}'s work id is ${this.workID}`;
    },
    menage() {
        return "Menaging";
    },
};

//! -------------- CHALLANGE -------------

const getEmployee = (): Person1 | DogOwner1 | Menager1 => {
    const random = Math.random();

    return random < 0.33
        ? { name: "nuri" }
        : random < 0.66
        ? { name: "nuri", dogname: "rix" }
        : {
              name: "nuri",
              dogname: "rix",
              menagePeople: () => console.log("Menaging people..."),
              delegateTasks: () => console.log("Delegating tasks..."),
          };
};

interface Person1 {
    name: string;
}

interface DogOwner1 extends Person1 {
    dogname: string;
}

interface Menager1 extends Person1 {
    menagePeople(): void;
    delegateTasks(): void;
}

const employee1 = getEmployee();

const isMenager = (
    employee: Person1 | DogOwner1 | Menager1,
): employee is Menager1 => {
    return "menagePeople" in employee;
};

if (isMenager(employee1)) {
    employee1.delegateTasks();
}

//!---------------
let strLength: number = ("value" as string).length;
