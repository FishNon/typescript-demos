let arr0: number[] = [1, 2, 3, 4, 5];
// arr0.push('6'); // Argument of type '"6"' is not assignable to parameter of type 'number'.

// 数组泛型
let arr1: Array<number> = [1, 2, 3, 4, 5];

// 用接口表示数组
interface ArrayType {
  [index: number]: number;
}
let arr2: ArrayType = [1, 2, 3, 4];

// any 在数组中的应用
let arr3: any[] = [1, 3, 4, '4', false, [2, 4], { name: 'indinity' }];

// 类数组
function sum() {
  // let args: number[] = arguments;
  // 'args' is declared but its value is never read
  // Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
}
function sum2() {
  let args: IArguments = arguments;
}