let hello: string = "hello world";
document.querySelectorAll(".app")[0].innerHTML = hello;
const ArrayList: HTMLElement[] = Array.from(document.querySelectorAll("*"));
console.log(ArrayList);
type count = {
  a?: 2;
};
const count: count = {};
for (let index = 0; index < ArrayList.length; index++) {
  const element: string = ArrayList[index].tagName;

  count[element] = (count[element] || 0) + 1;
}
console.log(count);
const list = Object.entries(count)
  .sort((a: [string, number], b: [string, number]) => b[1] - a[1])
  .slice(0, 3)
  .map((item) => {
    return item[0];
  });

console.log(list);
