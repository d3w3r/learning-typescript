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
