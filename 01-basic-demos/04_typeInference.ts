let typeValue; // 被推测为 any 类型
typeValue = 7;
typeValue = 'type';

let typeString = 'type'; // 被推测为 string 类型
// typeString = 1; // 报错，error TS2322: Type 'number' is not assignable to type 'string'.