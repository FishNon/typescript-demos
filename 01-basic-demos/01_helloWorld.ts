function sayHelloWorld(person: string) {
  return person + ': Hello World';
}

let user = 'Indinity';
console.log(sayHelloWorld(user));

// 执行命令：tsc 01_helloWorld.ts 后可以生成01_helloWorld.js文件