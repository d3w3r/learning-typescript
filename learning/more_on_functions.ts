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