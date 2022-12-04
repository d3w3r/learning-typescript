
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

function getBear (): BearA {
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