// 联合类型的变量指定为一个更加具体的类型

// TS中，若不确认一个联合类型的变量到底是哪个类型，我们只能访问此联合类型的所有类型的公有属性和方法；
// function getLength(something:string | number):number{
//   return something.length; // Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
// }

// function getLength(something:string | number):number{
//   if(something.length){ // Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
//     return something.length; // Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.
//   }else{
//     return something.toString().length;
//   }
// }

// 将变量断言为string类型
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}
