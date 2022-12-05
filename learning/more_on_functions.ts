function greeterA(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeterA(printToConsole);

type GreetFunction = (a: string) => void;
function greeterB(fn: GreetFunction) {
  // ...
}

// This is a fuction that also has a property, this is way to declare it

type DescribableFunction = {
  description: string;
  (someArg: number): boolean; // this a function declaration
}

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

type SomeObject = {};

type SomeConstructor = {
  new (s: string): SomeObject;
};
function fn (ctor: SomeConstructor) {
  return new ctor("Hello");
}

interface CallOrConstructor {
  new (s: string): Date;
  (n?: number): number;
}

function firstElementA(arr: any[]) {
  return arr[0];
}

function firstElementB<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

const s = firstElementB(["a", "b", "c"]);
const n = firstElementB([1, 2, 3]);
const u = firstElementB([]);

// The generics are aliases not only the value Type is allowed as i can see below
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));


// CONSTRAINTS TO GENERICS

function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
// const notOK = longest(10, 100); // This will thrown an error because the constraint says that every value
// must have a property .length of type number but the numbers types doesn't have that property

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    // return { length: minimum };
    obj.length = minimum;
    return obj;
  }
}

const arr = minimumLength([1, 2, 3], 6);
console.log(arr.slice(0));

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// Normally it would be an error to call this function with mismatched arrays
// const arr = combine([1, 2, 3], ["hello"]);

// If you intended to do this, however, you could manually specify Type
const arrB = combine<string | number>([1, 2, 3], ["hello"]);


// GUIDE LINES FOR WRITING GOOD GENERIC FUNCTIONS
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);

// Good
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

// Bad
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}

// Bad
function greetA<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greetA("world");

// Good
function greetBJ(s: string) {
  console.log("Hello, " + s);
}

function fA(n: number) {
  console.log(n.toFixed());
  console.log(n.toFixed(3));
}

function fB(n?: number) {}

fB();
fB(3);

declare function fC(x?: number): void;

fC();
fC(10);
fC(undefined);

function myForEachA(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEachA([1, 2, 3], (a) => console.log(a));
myForEachA([1, 2, 3], (a, i) => console.log(a, i));

function myForEachB(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myForEachB([1, 2, 3], (a, i) => {
  // console.log(i.toFixed); // The value i is posibly undefined
});

// This are called overload signatures
function makeDate(timeStamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
};
const d1 = makeDate(1245124);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

function fnA(x: string): void;
function fnA() {
  // ...
}
// fnA();

function fnB(x: boolean): void;
// function fnB(x: string): boolean; // this is an error that i still doesn't understand
function fnB(x: boolean) {}

function fnC(x: string): string;
// function fnC(x: number): boolean; // this is an error that i still doesn't understand
function fnC(x: string | number) {
  return "oops";
}

function len(s: string): number;
function len(arr: any[]): number
function len(x: any) {
  return x.length;
}

len("");
len([0]);
// len(Math.random() > 0.5 ? "hello" : [0]);

function lenk(x: any[] | string) {
  return x.length;
}

const user = {
  id: 123,
  admin: false,
  becomeAdmin: function () {
    this.admin = true
  },
};

type User = { admin: boolean };
declare function getDB(): DB;

interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});