// Primitives

let myBoolean: boolean = true;

let myNumber: number = 42;

let myString: string = "Test";
let myString2: string = "Test";
let myString3: string = `Test`;

let myNull: null = null;

let myUndefined: undefined = undefined;

let myBigint: bigint = BigInt(42);
let mySymbol: symbol = Symbol("Hello");

// man kann einen Status einfach als enums definieren und übergeben
type Status = "loading" | "idle" | "error";
let state: Status = "loading";

//Definition von Typen Objekt

const array: (number | string)[] = [1, 2, 3, "Test"];
const array2: Array<number | string> = [1, 2, 3, "Test"];

// Tupel für spezifiziertes Array
const array3: [number, string] = [1, "Test"];

// Funktionen
function add(a: number, b: number): number {
  return a + b;
}

const add2 = (a: number, b: number): number => {
  return a + b;
};

// Klassenobjekte

const date: Date = new Date();

// Datenobjekte

const person: { name: string; age: number } = { name: "Lucas", age: 28 };

type Person = {
  name: string;
  age: number;
};

type PersonWithAdress = Person & {
  adress: string[];
};

const person2: Person = { name: "Lucas", age: 28 };

interface Person2 {
  name: string;
  age?: number;
}

interface Person3 extends Person2 {
  adress: string[];
}

const person3: Person2 = { name: "Lucas" };

export {};
