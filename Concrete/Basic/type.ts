/*
Type Aliases
    + Create new name for a type
    + Sometimes be similar to interfaces, but can name primitives, union, tuples and any other types

    Note:
    + Aliasing doesn’t actually create a new type - it creates a new name to refer to that type
*/

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}


// Type as generic
type Container<T> = { value: T };


// Refer itself
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
};

// Intersection types
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

var people: LinkedList<Person>;
var s1 = people.name;
var s2 = people.next.name;
var s3 = people.next.next.name;
var s4 = people.next.next.next.name;

// String literal types
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here. It didn't declare before


// Discriminated Unions
interface Square {
    kind: "square";
    size: number;
}
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
  interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
    switch (s.kind) {
      case "square":
        return s.size * s.size;
      case "rectangle":
        return s.height * s.width;
      case "circle":
        return Math.PI * s.radius ** 2;
    }
}


// Polymorphic this types
class BasicCalculator {
    public constructor(protected value: number = 0) {}
    public currentValue(): number {
      return this.value;
    }
    public add(operand: number): this {
      this.value += operand;
      return this;
    }
    public multiply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ... other operations go here ...
}

class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
      super(value);
    }
    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }
    // ... other operations go here ...
  }
  
let v = new ScientificCalculator(2)
            .multiply(5)
            .add(1)
            .sin()
            .currentValue()
            .toString();


// Conditial types: T extends U ? X : Y
interface Ghe {
    propA: boolean;
    propB: boolean;
  }
  
declare function f<T>(x: T): T extends Ghe ? string : number;
  
function foo<U>(x: U) {
    // Has type 'U extends Foo ? string : number'
    let a = f(x);
  
    // This assignment is allowed though!
    let b: string | number = a;
  }

let a:Ghe = {"propA": true, "propB": false};

//---
type TypeName<T> = T extends string
                        ? "string"
                        : T extends number
                        ? "number"
                        : T extends boolean
                        ? "boolean"
                        : T extends undefined
                        ? "undefined"
                        : T extends Function
                        ? "function"
                        : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"