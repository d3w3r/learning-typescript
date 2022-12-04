function padLeftA(padding: number | string, input: string): string {
  throw new Error("Not implemented yet!");
}

function padLeftB(padding: number | string, input: string): string {
  // return " ".repeat(padding) + input; // there is a validation
  throw new Error("Not implemented yet!");
}

function padLeftC(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

function printAllA(strs: string | string[] | null) {
  if (typeof strs === "object") {
    // The type null with the operator typeof is an object
    // for (const s of strs) {
    //   console.log(s);
    // }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}

function getUserOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

// both of these result in 'true'
Boolean("hello");
!!"hello"

function printAllB(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

function printAllC(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
    if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

function multiplyAll(
  values: number [] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

function example(x: string | number, y: string | boolean) {
  // Both types must be of type string so we can access the method toUpperCase
  if (x === y) {
    console.log(x.toUpperCase());
    console.log(y.toLowerCase());
  } else {
    console.log(x);
    console.log(y);
  }
}

// example("HoLa", "ByE");
// example("HoLa", "HoLa");
// example(3, "ByE");
// example(3, true);
// example("ByE", true);

function printAllD(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

interface Container {
  value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
  // Remove both 'null' and 'undefined' from the type
  if (container.value != null) { // if i use === it will only match of null
    console.log(container.value);
    // Now we can safely multiply 'container.value'
    container.value *= factor;
  }
}

type FishA = { swim: () => void };
type BirdA = { fly: () => void };

function moveA(animal: FishA | BirdA) {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

type FishB = { swim: () => void };
type BirdB = { fly: () => void };
type HumanA = { swim?: () => void; fly?: () => void };

function moveB(animal: FishB | BirdB | HumanA) {
  if ("swim" in animal) {
    animal; // Fish or Human
  } else {
    animal; // Bird or Human
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

let x = Math.random() < 0.5 ? 10 : "hello world!"; // Types number or string
x = 1;
console.log(x); // Type number
x = "goodbye";
console.log(x); // Type string
// x = true; // This is not type between number and string
// console.log(x);

function exampleB() {
  let x: string | number | boolean;

  x = Math.random() < 0.5;

  console.log(x);

  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
  } else {
    x = 100;
    console.log(x);
  }

  return x;
}

// Type predicate that helps to narrow the type to know if the pet is a type Fish
function isFish(pet: FishB | BirdB): pet is FishB {
  return (pet as FishB).swim !== undefined;
}

function getSmallPet(): FishB | BirdB {
  if (Math.random() < 0.5) {
    return { swim: () => console.log() };
  } else {
    return { fly: () => console.log() }
  }
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

const zoo: (FishB | BirdB)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: FishB[] = zoo.filter(isFish)
// or, equivalently
const underWater2: FishB[] = zoo.filter(isFish) as FishB[];

// The predicate may need repeating for more complex examples
const underWater3: FishB[] = zoo.filter((pet): pet is FishB => {
  return isFish(pet);
});

interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  // oops!
  // if (shape.kind === "rect") { // This value is not supported by the kind variable
  //   // ...
  // }
}

function getAreaA(shape: Shape) {
  // return Math.PI * shape.radius ** 2; // radius can take an undefined value
}

function getAreaB(shape: Shape) {
  if (shape.kind === "circle") {
    // return Math.PI * shape.radius ** 2; // radius can take an undefined value
  }
}

// We could try to use a non-null assertion (a ! after shape.radius) to say that radius
// is definitely present
function getAreaC(shape: Shape) {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type ShapeB = Circle | Square;

function getAreaD(shape: Shape) {
  // return Math.PI * shape.radius ** 2; // I have to narrow the data type
}

function getAreaE(shape: ShapeB) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

function getAreaF(shape: ShapeB) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

function getAreaG(shape: ShapeB) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type ShapeC = Circle | Square | Triangle;

function getAreaH(shape: ShapeC) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default: 
      // const _exhaustiveCheck: never = shape; // Never is not assignable to Triangle it must be validated with a case
      // return _exhaustiveCheck;
  }
}