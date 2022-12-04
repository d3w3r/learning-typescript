function fn(x) {
  return x.flip();
}

const user = {
  name: "Daniel",
  age: 26
};

// user.location; // this is a not callable value

const announcement = "Hello World!";

// announcement.toLocaleLowercase(); // I have write a typo
// announcement.toLocalLowerCase(); // I have write a typo
announcement.toLocaleLowerCase();

function flipCoin() {
  // Meant to be Math.random()
  // return Math.random < 0.5; // This will thrown one error
}

const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
//   // ...
// } else if (value === "b") {
//   // Oops, unreachable
// }
// 

console.log("Hello world!");

// This is an industrial-grade general-purpose greeter function

function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}`);
}

// greet("Brendan"); // Some arguments are not provided

function greetA(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greetA("Maddison", Date()); // This is not allowed because a string cannot be assigned to a Date
greetA("Maddison", new Date());

// Sometimes you will have information about the type of a value that Typescript can't
// know about.

// For example, if you're using document.getElementById, Typescript only knows that this
// will return some kind of HTMLElement, but you might know that your page will always
// have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type.

const myCanvasA = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvasB = <HTMLCanvasElement>document.getElementById("main_canvas");

// TypeScript only allows type assertions which convert to a more specific or less 
// specific version of a type. This rule prevents "imposible" coercions like

// const x = "hello" as number; // this conversion is not possible

// if want to do this, first i have to convert to unknown
// const a = (expr as any) as T;

// const x = "hello" as unknown as number;
// const x = "hello" as any as number;

let changingString = "Hello World";
changingString = "Ola Mundo";
changingString; // The kind is string whatever string is valid

const constantString = "Hello World";
constantString; // The kind is "Hello World" and only that type no other because this is a constant

let x: "hello" = "hello";
x = "hello";
// x = "Bye"; // This is not allow becuase the literal type

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

printText("Hello, world", "left");
// printText("G'day, mate", "centre");

function compare(a: string, b: string): 1 | 0 | -1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}

function configure(x: Options | "auto") {}

configure({ width: 100 });
configure("auto");
// configure("automatic");

const someCondition: boolean = Math.trunc(Math.random() * 10) % 2 == 0;
const objB = { counter: 0 };

if (someCondition) {
  objB.counter = 1;
}

const handleRequestA = (url: string, method: "GET" | "POST") => console.log(`${url} ${method}`);

const reqA = { url: "https://example.com", method: "GET" };
// handleRequestA(req.url, req.method); // The obj.method can take a value different of "GET" and "POST"

// CHANGE 1 / FIRST SOLUTION BY ME
type method = "GET" | "POST";

interface requestA {
  url: string;
  method: method;
}

const handleRequestB = (url: string, method: "GET" | "POST") => console.log(`${url} ${method}`);

const reqB: requestA = { url: "https://example.com", method: "GET" };
handleRequestB(reqB.url, reqB.method);

// CHANGE 2 
const reqC = { url: "https://example.com", method: "GET" as "GET" };

// CHANGE 3
handleRequestA(reqC.url, reqC.method as "GET");

// CHANGE 4 I can use "as const" to convert the entire object to be literals
const reqD = { url: "https://example.com", method: "GET" } as const;
handleRequestA(reqD.url, reqD.method);

// The "as const" suffix acts like "const" but for the type system, ensuring that all properties are assigned
// the literal type instead of a more general version like "string" or "number"

// CHANGE 5
const reqE = { url: "https://example.com", method: "GET" as method};

function doSomethingA(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// Typescript syntax for removing null, undefined
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

function doSomethingB(x: string | null) {
  console.log("Hello, " + x!.toUpperCase());
}

const firstName = Symbol("name");
const secondName = Symbol("name");

// if (firstName == secondName) {
//   // Can't ever happen
// }