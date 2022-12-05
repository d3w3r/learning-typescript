<https://www.typescriptlang.org/docs/handbook/2/functions.html#declaring-this-in-a-function>

- In typescript i have a special syntax for removing or validate that a value is not a null or undefined this
  syntax is the next: `myname!.toUpperCase()` is the `!` exclamation mark before the property or method.
- Types and interfaces are almost the same the key difference is that a type cannot be re-opened to add new
  properties vs an interface which is always extendable
- Javascrips has native data type called _bigint_ a bigint value can be created with the next ways.

  ```javascript
  const bigIntA = 1234325123423n;
  const bigIntB = BigInt("1234323412342134");
  const bigIntC = BigInt(123435234123423341);
  ```

- Typescript has its own native datatypes that in time of compilation are replaced by native javascript
  datatypes, some of this types are `any`, `unknown`, `never`, `void`.
- In javascript there is a builtin method to check if a values is an array this is done with `Array.isArray()`.
- An array without generics can contain whatever kind of datatypes, but with generics we can describe the types.
