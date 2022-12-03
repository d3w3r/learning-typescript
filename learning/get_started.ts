// Typescript for JS Programmers

let helloWorld = "Hello World";

const user = {
  name: "Hayes",
  id: 0
};

interface User {
  name: string
  id: number
}

// const userB: User = {
//   userName: "Hayes", // The interface doesn't have the property userName
//   id: 0
// };

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userC: User = new UserAccount("Hayes", 1);

console.log(userC.name);
console.log(userC.id);

function getAdminUser(): User {
  return { name: "root", id: 1 };
}

function deleteUser(user: User): boolean {
  console.log(`The user ${user.name} with id ${user.id} has been deleted from the system`);
  return true;
}

// I am creating a specific type that can take one some kind of values 
type myBoolean = true | false;
type windowStates = "open" | "closed" | "minimized";
type lockStates = "locked" | "unlocked";
type positiveOddNumbersUnderTen = 3 | 5 | 7 | 9;


function getLengthA(obj: string | string[]) {
  return obj.length;
}

function getLengthB(obj: string | Array<string>) {
  return obj.length;
}

function wrapInArrayA(obj: string | string[]) {
  if (typeof obj === "string") return [obj];
  else return obj;
}

function wrapInArrayB(obj: string | string[]) {
  if (Array.isArray(obj)) return obj;
  if (typeof obj === "string") return [obj];
}

function wrapInArrayC(obj: string | string[]) {
  if (Array.isArray(obj)) return obj;
  else return [obj];
}

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

declare const backpack: Backpack<string>;

// backpack.add(23); // this kind of value is not supported since the bind declaration of type string
backpack.add("New");
backpack.get();

interface Point {
  x: number
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point1 = { x: 12, y: 26 };
logPoint(point1);

const point2 = { x: 12, y: 26, z:20 };
logPoint(point2);

const point3 = { x: 12, y: 26, height: 80, width: 30 };
logPoint(point3);

const point4 = { hex: "#qwasd112" };
// logPoint(point4); // The argument's function has not the same shape of a Point

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new VirtualPoint(10, 20);
logPoint(newPoint);


// FIVE MINUTES TOOLING

function greeter(person) {
  return "Hello, " + person;
}

let user5 = "Jane User";

document.body.textContent = greeter(user5);

function greeterB(person: string) {
  return "Hello, " + person;
}

let user6 = "Jane User";
document.body.textContent = greeterB(user6);

let userBad = [0, 1, 2];
// document.body.textContent = greeterB(userBad); // The argument's data types are not allowed

interface Person {
  firstName: string;
  lastName: string;
}

function greeterC(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let userK = { firstName: "James", lastName: "Rodriguez" };
document.body.textContent = greeter(userK);

// The public reserved keyword allows to assign variables to a class with, it is a shortcut

class Student {
  fullName: string;
  
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface PersonV {
  firstName: string;
  lastName: string;
}

function greeterX(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let userX = new Student("Jane", "M.", "User");

document.body.textContent = greeterX(userX);