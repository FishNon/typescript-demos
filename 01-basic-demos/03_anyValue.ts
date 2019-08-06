// 普通类型的变量
let numTest: number = 7;
// numTest = 'test'; // 报错，error TS2322: Type 'number' is not assignable to type 'string'.

// any 类型，可以被赋值为任何数据类型;
let anyValue: any = 7;
anyValue = 'test';

// 在任意值上可以访问任何属性，也可以调用任何方法
let anything: any = 'hello';
console.log(anything.myName);
console.log(anything.myName.firstName);
anything.setName('Indinity');
anything.setName('Indinity').sayHello();
anything.myName.alterName();

// 对于未声明数据类型的变量，会被识别为任意值类型