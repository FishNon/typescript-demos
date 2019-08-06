// 原始数据类型

// 布尔值
let isDone: boolean = true;
// let isDoneObj: boolean = new Boolean(1); // 报错，使用构造函数Boolean创造的是对象不是boolean值
let isDoneObj: Boolean = new Boolean(1);
let isDoneBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6; // 整数
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let notNum: number = NaN;
let infinityNum: number = Infinity;

// 字符串
let myName: string = 'Indinity';
let myAge: number = 18;
let sentence: string = `Hello, ${myName} is ${myAge} years old.`;

// 空值
// 如果声明一个void变量，只能赋值null、undefined
let unusable: void = undefined;
// 设置函数的返回值为void
function alterName(): void {
  alert('My name is Indinity');
}

// Null 和 Undefined
let u: undefined = undefined;
let n: null = null;
let num: number = undefined;
let numNull: number = null;
// undefined、nul是所有类型的子类型，即其他各类型都可以被赋值为undefined、null；
// 而void只能被赋值为undefined、null

