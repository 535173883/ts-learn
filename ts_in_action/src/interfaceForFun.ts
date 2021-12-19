let add1: (x: number, y: number) => number;

interface Add {
  (x: number, y: number): number;
}

type ADD = (x: number, y: number) => number;

let add2: ADD = (a, b) => a + b;

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomething = () => {
    console.log("doSomething");
    return 1;
  };
  return lib;
}

let lib1 = getLib();
lib1.doSomething();
let lib2 = getLib();
