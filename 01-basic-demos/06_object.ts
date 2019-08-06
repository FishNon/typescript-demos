interface Person {
  name: string;
  age: number;
}

let indinity: Person = {
  name: 'Indinity',
  age: 18
};

// let lisa: Person = {
//   name: 'Lisa';
//   age: 18;
//   sex: 'girl';
// }; 
// Type '{ name: string; age: number; sex: string; }' is not assignable to type 'Person'.
// Object literal may only specify known properties, and 'sex' does not exist in type 'Person'.

// 可选属性
interface PersonTwo {
  name: string;
  age?: number;
  sex?: string;
}

let tomTwo: PersonTwo = {
  name: 'Tom'
};
let lisaTwo: PersonTwo = {
  name: "Lisa",
  sex: 'girl'
};

// 任意属性，使用[propName:string]定义任意属性取string类型的值
interface PersonThree {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tomThree: PersonThree = {
  name: 'Tom',
  sex: 'boy'
};

// 只读属性
interface PersonFour {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}
let tomeFour: PersonFour = {
  id: 1,
  name: 'Tome'
};
// tomeFour.id = 2; // Cannot assign to 'id' because it is a read-only property.