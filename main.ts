console.log('Hello World!');
console.log('🚀 This is my first Node Project!');

let myVar: number = 3;
myVar += 10; // 13

console.log('myVar = ', myVar);

interface MyInterface {
  myNumber: number;
  myString: string;
}

let myNewVariable: MyInterface = {
  myNumber: 10,
  myString: 'ciao',
};

// ciao
console.log('myNewVariable = ', myNewVariable);
