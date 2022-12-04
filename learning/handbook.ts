// Accessing the property 'toLowerCase'
// on 'message' and then calling it
// message.toLowerCase();

// Calling 'message'
// message();

const message = "Hello World!";

message.toLowerCase();
// message(); // This variable is not callable

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

// None of the following lines of code will throw compiler errors
// Any disables any further type checking, and it is assumed
// you know the environment better that Typescript
let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

let myNameA: string = "Ronald";

// No type annotations needed -- 'myName' inferred as type 'string'
let myNameB = "Ronald";

function greetC(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// greetC(12); // This data types is not supported by definition

function getFavoriteNumber(): number {
  return 26;
}

// No type annotations here, but Typescript can spot the bug
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s: string): void {
  console.log(s.toUpperCase());
});

function printCoordA(pt: { x: number, y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoordA({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  if (obj.last !== undefined)
    console.log("Hello " + obj.first + " " + obj.last);
  else
    console.log("Hello " + obj.first);
}

printName({ first: "Bob" });
printName({ first: "Bob", last: "Alisson" });

function printNameB(obj: { first: string, last?: string }) {
  // console.log(obj.last.toUpperCase()); // This will thrown an error becuase it can be a undefined value

  if (obj.last !== undefined)
    console.log(obj.last.toUpperCase());

  // A safe alternative using modern Javascript syntax
  console.log(obj.last?.toUpperCase());
}

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(20);
printId("20A");
// printId({ myID: 1231 }); // this kind of type is not allowed only number and string

function printIdB(id: number | string) {
  // console.log(id.toUpperCase()); // This will thrown an error because the method must be shared for both data types
}

function printIdC(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

type PointA = {
  x: number;
  y: number;
}

function printCoordB(pt: PointA) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordB({ x: 100, y: 100 });

type ID = number | string;

function sanitize(str: string): string {
  return str;
}
function getInput(): string {
  return "Random String!!";
}

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

let userInput = sanitizeInput(getInput());
userInput = "new input";

interface PointB {
  x: number;
  y: number;
}

function printCoordC(pt: PointB) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordC({ x: 100, y: 200 });


// EXTENDING TYPES AND INTERFACES
// EXTENDING INTERFACES

function getBear (): Bear {
  return { name: "Yoggi", honey: true };
}

interface AnimalA {
  name: string;
}

interface BearA extends AnimalA {
  honey: boolean;
}

const bearA = getBear();
bearA.name;
bearA.honey;

// EXTENDING TYPES VIA INTERSECTIONS
type AnimalB = {
  name: string;
}

type BearB = {
  honey: boolean;
} & AnimalB;

const bearB = getBear();
bearB.name;
bearB.honey;

// ADDING NEW FIELDS TO AN EXISTING INTERFACE

type TypeScriptAPI = {
  transpileModule: (src: string, config: object ) => void;
}

interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// A TYPE CANNOT BE CHANGED AFTER BEING CREATED

type WindowB = {
  title: string;
}

// type WindowB = { // this second definition will thrown an error 
//   ts: TypeScriptAPI;
// }