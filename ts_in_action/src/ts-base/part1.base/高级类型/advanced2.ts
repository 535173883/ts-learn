let obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
console.log(getValues(obj1, ["a", "b"]));
// console.log(getValues(obj1, ["e", "f"]));

//keyof T
interface Obj {
  a: number;
  b: number;
}
let key: keyof Obj;

//T[k]
let value: Obj["a"];

//T extends U
export {};
