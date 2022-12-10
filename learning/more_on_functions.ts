// This type definition in front the argument fn: is called is a "function type expresion"
function greeterA(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeterA(printToConsole);

type GreetFunction = (a: string) => void;

function greeterB(fn: GreetFunction) {}

// This is another way of function definition with type declarations
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

type SomeObject = {};

// This is the definition of the constructor function
type SomeConstructor = {
  new (s: string): SomeObject;
};

function fnA(ctor: SomeConstructor) {
  return new ctor("hello");
}

// This is a function that is a constructor an at the same time a normal function
type CallOrConstruct = {
  new (name: string): SomeObject;
  (): string;
};

function fnMe(fn: CallOrConstruct) {
  new fn("FirstFunction");
  fn();
}

function firstElementA(arr: any[]) {
  return arr[0];
}

// This is a type parameter <Type>
function firstElementB<Type>(arr: Type[]): Type {
  return arr[0];
}

// The type inferred is string
const s = firstElementB(["a", "b", "c"]);
// The type inferred is number
const n = firstElementB([1, 2, 3, 4, 5]);
// The type inferred is undefined
const u = firstElementB([]);

// We dont have to specify the return type of each constant the type was inferred

function map<Input, Output>(arr: Input[], fn: (a: Input) => Output): Output[] {
  return arr.map(fn);
}

const parsed = map([1, 2, 3, 4, 5], (value) => String(value));
// Note that TypeScript can infer both the type of the input and output with the
// values specified as arguments

function longest<Type extends { length: number }>(a: Type, b: Type): Type {
  if (a.length > b.length)
    return a;
  else
    return b;
}

const a = longest([1, 2, 3], [1]);
const b = longest("one", "three");
// const c = longest("one", [1, 2, 4, 5]);

// function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): { length: number } {
function minimumLength<Type extends { length: number }>(obj: Type, minimum: number): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return obj;
    // return { length: minimum }; // This looks a valid object because has the allowed structure
    // but this code is not valid, because typescript and generic functions doesn't allow this kind
    // of sintax, as the guide says:
    // The problem is that the function promises to return the same kind of object as was passed in,
    // not just some object matching the constraint.
  }
}

// If the code was used in the wrong way the code will crash here becuase the returned type in this
// case is { length: 6 } but the expected output is an array so when we access the method .slice the
// code will crash.
const arrA = minimumLength([1, 2, 3], 6);
console.log(arrA.slice(0));
// If the code was used in the wrong way the code will crash here becuase the returned type in this
// case is { length: 6 } but the expected output is an array so when we access the method .slice the
// code will crash.

// This kind of generic function can conbine array of the same type and return an array of the same type also.
function combineA<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const arrB = combineA([1, 2, 3], ["Hello"]); // This is invalid because the arrays have different types

// With this we can specify the types that will be send into the function
const arrC = combineA<number | string>([1, 2, 3], ["hello"]);


// GUIDELINES FOR WRITING GOOD GENERIC FUNCTIONS
function firstElementC<Type>(arr: Type[]) {
  return arr[0];
}

function firstElementD<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const aa = firstElementC([1, 2, 3]);
// b: any (bad)
const bb = firstElementD([1, 2, 3]); 

// (good)
function filterA<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

// (bad), because it has to generic arguments that are not related one with each other
// the correct is that the function if it operates with the same type that function doesn't
// must be a generic declaration, insted it must be a function argument to relate with the
// other function arguments
function filterB<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// (Bad) the generic definition is not needed
function greetC<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

// (Good)
function greetD(s: string) {
  console.log("Hello, " + s);
}

function fA(n: number) {
  console.log(n.toFixed());  // arguments 0
  console.log(n.toFixed(3)); // arguments 1
}

function fB(x?: number) {}

fB();   // OK
fB(10); // OK

function fC(x = 10) {}

declare function fD(x?: number): void;
fD();
fD(10);
fD(undefined); // Same as the first one

function myForEachA(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i); // This implementation always uses the two arguments 
  }
}

// This is expected to work in this implementation
myForEachA([1, 2, 3], (a) => console.log(a)); // But this definition doesn't uses the second argument
myForEachA([1, 2, 3], (a, i) => console.log(a, i));
// This is expected to work in this implementation

function myForEachB(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]); // This definition always uses only one argument
  }
}

// This value b is possibly undefined
myForEachB([1, 2, 3], (a, b) => {
  // console.log(b.toFixed());
});

// Two overloads, these two signatures are called the overload signatures
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// Two overloads, these two signatures are called the overload signatures
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345123);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); // this is not defined in the overload signatures for this function

// Overload Signatures and the implementation Signature
// (Good) function signatures
// function fn(x: string): void;
// (Bad) Implementation signature
// function fn() { // This is a bad implementation signature
//   // ...
// }

// (Good) function signatures
// function fn(): void;
// function fn(x: string): void;
// (Good) Implementation signature
// function fn(x?: string) {}

// fn(); // this one function is not defined in the overload signatures for this function

// (Good) function signature 
// function fn(x: boolean): void;
// function fn(x: string): void; // This will throw one error becuase the implementation signature doesn't match
// (Bad) implementation signature
// function fn(x: boolean) {}

// (Good) function signature 
// function fn(x: boolean): void;
// function fn(x: string): void; // This will throw one error becuase the implementation signature doesn't match
// (Good) implementation signature
// function fn(x: boolean | string) {}

// (Good) function signature 
// function fn(x: string): string;
// function fn(x: number): boolean; // This return in the function signature is not guaranteed
// (Bad) implementation signature
// function fn(x: string | number) {
//   return "Ops"; // This is only one return
// }

// (Good) function signature 
// function fn(x: string): string;
// function fn(x: number): boolean;
// (Good) implementation signature
// function fn(x: string | number): string | boolean {
//   if (typeof x === "string") {
//     return "Helllo"
//   } 
//   if (typeof x === "number") {
//     return true;
//   }
//   return "";
// }

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length();
}

len("");
len([0]);
// len(Math.random() > 0.5 ? "hello" : [0]); // this values are taken literally not by its types
// also this is because both have the same count and the same type of return value
// we can instead write a non-overloaded version of the function

function leng(s: string | any[]): number {
  return s.length;
}

interface User {
  id: number;
  admin: boolean;
  becomeAdmin: object;
}

const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
}

function getDB() { return {} as DB; }

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();

db.filterUsers(function (this: User) {
  return this.admin;
});