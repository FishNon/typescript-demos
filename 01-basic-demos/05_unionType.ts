let myNum: string | number;
myNum = 1;
myNum = 'one';
// myNum = true; // 报错，error TS2322: Type 'boolean' is not assignable to type 'string | number'.

// function getLength(something: string | number): number {
// return something.length; // error TS2339: Property 'length' does not exist on type 'string | number'.
// }

let stringNum: string | number;
stringNum = 'seven'; // 被推断为字符串类型
console.log(stringNum.length);
// stringNum = 7; // 被推断为数值类型
// console.log(stringNum.length); // error TS2339: Property 'length' does not exist on type 'number'.