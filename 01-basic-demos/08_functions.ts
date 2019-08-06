// 函数声明，输入和输出的约束都需要设置
function sum(x: number, y: number): number {
  return x + y;
}
// sum(1,2,3); // Expected 2 arguments, but got 3.
// sum(1); // Expected 2 arguments, but got 1.

// 函数表达式
// 这种方式只对等号右边进行了类型定义，而等号左边的mySum是通过赋值操作进行类型推论而推断出来的
let mySum = function (x: number, y: number) {
  return x + y;
}
// 对左侧也进行类型定义
let mySum2: (x: number, y: number) => number = function (x: number, y: number) {
  return x + y;
}

// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

// 可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 参数默认值
function buildName2(firstName: string, lastName: string = 'Cat'): string {
  return firstName + ' ' + lastName;
}
let tomcat2 = buildName2('Tom');
let tomcat3 = buildName2('Tom', 'Cat2');
// 因为设置了默认值，所以必需参数可以跟在可选参数后面
function buildName3(firstName: string = "Tom", lastName: string): string {
  return firstName + ' ' + lastName;
}
let tomcat4 = buildName3('Tom', 'Cat');
let cat3 = buildName3(undefined, 'Cat');

// 剩余参数
function pushArr(arr: any[], ...items: any[]) {
  items.forEach(item => {
    arr.push(item);
  });
}
let a = [];
pushArr(a, 1, 2, 3, 4, 5);

// 重载
function reverseArr(x: number): number;
function reverseArr(x: string): string;
function reverseArr(x: string | number): string | number {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join());
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}