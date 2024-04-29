//!---------------
let str = "nurio34";
str = str.toUpperCase();
str = true;

//!---------------
let nick: "nuri" | "salih" | "ersoy" = "nuri";
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

let arr1: { title?: string; cost: number }[] = [pen, phone, book];

let arr_readOnly: { readonly title?: string; cost: number }[] = [
    pen,
    phone,
    book,
];
arr_readOnly[0].title = "pencil";

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

type DiscountedBook = Book & { discount: number; printDiscount(): string };

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

console.log(Earth.printDiscount());
